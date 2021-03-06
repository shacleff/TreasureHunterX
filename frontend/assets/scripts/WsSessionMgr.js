window.sendSafely = function(msgStr) {
  /**
  * - "If the data can't be sent (for example, because it needs to be buffered but the buffer is full), the socket is closed automatically."
  *
  * from https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send.
  */
  if (null == window.clientSession || window.clientSession.readyState != WebSocket.OPEN) return false;
  window.clientSession.send(msgStr);
}

window.closeWSConnection = function() {
  if (null == window.clientSession || window.clientSession.readyState != WebSocket.OPEN) return;
  console.log(`Closing "window.clientSession" from the client-side.`);
  window.clientSession.close();
}

window.getBoundRoomIdFromPersistentStorage = function() {
  const boundRoomIdExpiresAt = parseInt(cc.sys.localStorage.getItem("boundRoomIdExpiresAt"));
  if (!boundRoomIdExpiresAt || Date.now() >= boundRoomIdExpiresAt) {
    window.clearBoundRoomIdInBothVolatileAndPersistentStorage();
    return null;
  }
  return cc.sys.localStorage.getItem("boundRoomId");
};

window.clearBoundRoomIdInBothVolatileAndPersistentStorage = function() {
  window.boundRoomId = null;
  cc.sys.localStorage.removeItem("boundRoomId");
  cc.sys.localStorage.removeItem("boundRoomIdExpiresAt");
};

window.clearSelfPlayer = function() {
  cc.sys.localStorage.removeItem("selfPlayer");
};

window.boundRoomId = getBoundRoomIdFromPersistentStorage();
window.handleHbRequirements = function(resp) {
  if (constants.RET_CODE.OK != resp.ret) return;
  if (null == window.boundRoomId) {
    window.boundRoomId = resp.data.boundRoomId;
    cc.sys.localStorage.setItem('boundRoomId', window.boundRoomId);
    cc.sys.localStorage.setItem('boundRoomIdExpiresAt', Date.now() + 10 * 60 * 1000); // Temporarily hardcoded, for `boundRoomId` only.
  }

  if (window.handleBattleColliderInfo) {
    const typedArray = _base64ToUint8Array(resp.data.battleColliderInfo);
    const parsedBattleColliderInfo = (() => {
      return window.BattleColliderInfo.decode(typedArray);
    })();
    window.handleBattleColliderInfo(parsedBattleColliderInfo);
  }

  window.clientSessionPingInterval = setInterval(() => {
    if (clientSession.readyState != WebSocket.OPEN) return;
    const param = {
      msgId: Date.now(),
      act: "HeartbeatPing",
      data: {
        clientTimestamp: Date.now()
      }
    };
    window.sendSafely(JSON.stringify(param));
  }, resp.data.intervalToPing);

};

window.handleHbPong = function(resp) {
  if (constants.RET_CODE.OK != resp.ret) return;
// TBD.
};

function _base64ToUint8Array(base64) {
  var origBytes = null;
  if (null != window.atob) {
    var origBinaryStr = window.atob(base64);
    var origLen = origBinaryStr.length;
    origBytes = new Uint8Array(origLen);
    for (var i = 0; i < origLen; i++) {
      origBytes[i] = origBinaryStr.charCodeAt(i);
    }
    return origBytes;
  } else if (cc.sys.platform == cc.sys.WECHAT_GAME) {
    return Buffer.from(base64, 'base64');
  } else {
    return null;
  }
}

function _base64ToArrayBuffer(base64) {
  return _base64ToUint8Array(base64).buffer;
}

window.getExpectedRoomIdSync = function() {
  if (cc.sys.platform == cc.sys.WECHAT_GAME) {
    return window.expectedRoomId;
  } else {
    const qDict = window.getQueryParamDict();
    if (qDict) {
      return qDict["expectedRoomId"];
    } else {
      if (window.history && window.history.state) {
        return window.history.state.expectedRoomId;
      }
    }
  }

  return null;
};

window.unsetClientSessionCloseOrErrorFlag = function() {
  cc.sys.localStorage.removeItem("ClientSessionCloseOrErrorFlag");
  return;
}

window.setClientSessionCloseOrErrorFlag = function() {
  const oldVal = cc.sys.localStorage.getItem("ClientSessionCloseOrErrorFlag");
  if (true == oldVal) return false;
  cc.sys.localStorage.setItem("ClientSessionCloseOrErrorFlag", true);
  return true;
}

window.initPersistentSessionClient = function(onopenCb, expectedRoomId) {
  if (window.clientSession && window.clientSession.readyState == WebSocket.OPEN) {
    if (null != onopenCb) {
      onopenCb();
    }
    return;
  }

  const intAuthToken = cc.sys.localStorage.getItem("selfPlayer") ? JSON.parse(cc.sys.localStorage.getItem('selfPlayer')).intAuthToken : "";

  let urlToConnect = backendAddress.PROTOCOL.replace('http', 'ws') + '://' + backendAddress.HOST + ":" + backendAddress.PORT + backendAddress.WS_PATH_PREFIX + "?intAuthToken=" + intAuthToken;

  if (null != expectedRoomId) {
    console.log("initPersistentSessionClient with expectedRoomId == " + expectedRoomId);
    urlToConnect = urlToConnect + "&expectedRoomId=" + expectedRoomId;
    if (cc.sys.platform == cc.sys.WECHAT_GAME) {
      // This is a dirty hack. -- YFLu
      window.expectedRoomId = null;
    }
  } else {
    window.boundRoomId = getBoundRoomIdFromPersistentStorage();
    if (null != window.boundRoomId) {
      console.log("initPersistentSessionClient with boundRoomId == " + boundRoomId);
      urlToConnect = urlToConnect + "&boundRoomId=" + window.boundRoomId;
    }
  }

  const currentHistoryState = window.history && window.history.state ? window.history.state : {};

  if (cc.sys.platform != cc.sys.WECHAT_GAME) {
    window.history.replaceState(currentHistoryState, document.title, window.location.pathname);
  }

  const clientSession = new WebSocket(urlToConnect);

  clientSession.onopen = function(event) {
    console.log("The WS clientSession is opened.");
    window.clientSession = clientSession;
    if (null == onopenCb) return;
    onopenCb();
  };

  clientSession.onmessage = function(event) {
    if (null == event || null == event.data) {
      return;
    }
    try {
      const resp = JSON.parse(event.data)
      switch (resp.act) {
        case "HeartbeatRequirements":
          window.handleHbRequirements(resp); //获取boundRoomId并存储到localStorage
          break;
        case "HeartbeatPong":
          window.handleHbPong(resp);
          break;
        case "RoomDownsyncFrame":
          if (window.handleRoomDownsyncFrame) {
            const typedArray = _base64ToUint8Array(resp.data);
            const parsedRoomDownsyncFrame = (() => {
              return window.RoomDownsyncFrame.decode(typedArray);
            })();
            window.handleRoomDownsyncFrame(parsedRoomDownsyncFrame);
          }
          break;
        case "Ready": {
          if (window.handleGameReadyResp) {
            window.handleGameReadyResp(resp);
          }
          break;
        }
        default:
          break;
      }
    } catch (e) {
      console.error("Unexpected error when parsing data of:", event.data, e);
    }
  };

  clientSession.onerror = function(event) {
    if (!window.setClientSessionCloseOrErrorFlag()) {
      return;
    }
    console.error("Error caught on the WS clientSession: ", event);
    if (window.clientSessionPingInterval) {
      clearInterval(window.clientSessionPingInterval);
    }
    if (window.handleClientSessionCloseOrError) {
      window.handleClientSessionCloseOrError();
    }
    window.unsetClientSessionCloseOrErrorFlag();
  };

  clientSession.onclose = function(event) {
    if (!window.setClientSessionCloseOrErrorFlag()) {
      return;
    }
    console.warn("The WS clientSession is closed: ", event);
    if (window.clientSessionPingInterval) {
      clearInterval(window.clientSessionPingInterval);
    }
    if (false == event.wasClean) {
      // Chrome doesn't allow the use of "CustomCloseCode"s (yet) and will callback with a "WebsocketStdCloseCode 1006" and "false == event.wasClean" here. See https://tools.ietf.org/html/rfc6455#section-7.4 for more information.
      if (window.handleClientSessionCloseOrError) {
        window.handleClientSessionCloseOrError();
      }
    } else {
      switch (event.code) {
        case constants.RET_CODE.PLAYER_NOT_FOUND:
        case constants.RET_CODE.PLAYER_CHEATING:
          window.clearBoundRoomIdInBothVolatileAndPersistentStorage();
          break;
        default:
          break;
      }

      if (window.handleClientSessionCloseOrError) {
        window.handleClientSessionCloseOrError();
      }
    }
    window.unsetClientSessionCloseOrErrorFlag();
  };
};

window.clearLocalStorageAndBackToLoginScene = function(shouldRetainBoundRoomIdInBothVolatileAndPersistentStorage) {
  console.warn("+++++++ Calling `clearLocalStorageAndBackToLoginScene`");

  if (window.mapIns && window.mapIns.musicEffectManagerScriptIns) {
    window.mapIns.musicEffectManagerScriptIns.stopAllMusic();
  }
  /**
   * Here I deliberately removed the callback in the "common `handleClientSessionCloseOrError` callback"
   * within which another invocation to `clearLocalStorageAndBackToLoginScene` will be made.
   *
   * It'll be re-assigned to the common one upon reentrance of `Map.onLoad`.
   *
   * -- YFLu 2019-04-06
   */
  window.handleClientSessionCloseOrError = () => {
    console.warn("+++++++ Special handleClientSessionCloseOrError() assigned within `clearLocalStorageAndBackToLoginScene`");
    // TBD.
    window.handleClientSessionCloseOrError = null; // To ensure that it's called at most once. 
  };
  window.closeWSConnection();
  window.clearSelfPlayer();
  if (true != shouldRetainBoundRoomIdInBothVolatileAndPersistentStorage) {
    window.clearBoundRoomIdInBothVolatileAndPersistentStorage();
  }
  if (cc.sys.platform == cc.sys.WECHAT_GAME) {
    cc.director.loadScene('wechatGameLogin');
  } else {
    cc.director.loadScene('login');
  }
};

