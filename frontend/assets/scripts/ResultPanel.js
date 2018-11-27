const i18n = require('LanguageData');
i18n.init(window.language); // languageID should be equal to the one we input in New Language ID input field
cc.Class({

  extends: cc.Component,

  properties: {
    onCloseDelegate: {
      type: cc.Object,
      default: null
    },
    winnerPanel: {
      type: cc.Node,
      default: null
    },
    loserPanel: {
      type: cc.Node,
      default: null
    },
    resultCompareNode: {
      type: cc.Node,
      default: null
    }
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    const resultPanelNode = this.node;
    const againButtonNode = resultPanelNode.getChildByName("againBtn");  
    const homeButtonNode = resultPanelNode.getChildByName("homeBtn");  
  },

  againBtnOnClick(evt) {
      window.closeWSConnection();
      window.clearBoundRoomIdInBothVolatileAndPersistentStorage();
      cc.sys.localStorage.removeItem('selfPlayer');
      cc.director.loadScene('login');
  },

  homeBtnOnClick(evt) {
      window.closeWSConnection();
      window.clearBoundRoomIdInBothVolatileAndPersistentStorage();
      cc.sys.localStorage.removeItem('selfPlayer');
      cc.director.loadScene('login');
  },
  showPlayerInfo(players) {
    const resultPanelNode = this.node;
    const winnerNameNode = resultPanelNode.getChildByName("winnerName");
    const loserNameNode = resultPanelNode.getChildByName("loserName");
    const resultCompareNode = this.resultCompareNode;
    const compareProgressNode = resultCompareNode.getChildByName("progressbar");
    let winnerInfo = null;
    let loserInfo = null;
    
    for(let playerId in players) {
      const playerInfo = players[playerId];
      if(!winnerInfo) {
        winnerInfo =  playerInfo; 
        continue;
      }
      if(playerInfo.score >= winnerInfo.score) {
        loserInfo = winnerInfo;
        winnerInfo = playerInfo;
      }else {
        loserInfo = playerInfo;
      }
    }
    winnerNameNode.getComponent(cc.Label).string = winnerInfo.name;
    loserNameNode.getComponent(cc.Label).string = loserInfo.name;
  
    const progressComp = compareProgressNode.getComponent(cc.ProgressBar);
    const winnerScore = parseInt(winnerInfo.score);
    const loserScore = parseInt(loserInfo.score); 
    let ratio = 0.5; 
    if(winnerScore != loserScore){
      ratio = (loserScore * winnerScore <= 0) ? 1 
              : Math.abs(winnerScore) / Math.abs((loserScore + winnerScore));
    }
    progressComp.progress = ratio; 
    
    resultCompareNode.getChildByName("winnerScore").getComponent(cc.Label).string = winnerScore;
    resultCompareNode.getChildByName("loserScore").getComponent(cc.Label).string = loserScore;
    
    this.showRibbon(winnerInfo, resultPanelNode.getChildByName("ribbon"));  
  },
 
  showRibbon(winnerInfo, ribbonNode) {
    const selfPlayerInfo = JSON.parse(cc.sys.localStorage.selfPlayer);
    const texture = (selfPlayerInfo.playerId == winnerInfo.id) ? "textures/resultPanel/WinRibbon" : "textures/resultPanel/loseRibbon";
    cc.loader.loadRes(texture, cc.SpriteFrame, function (err, spriteFrame) {
      if(err) {
        console.log(err);
        return;
      }
      ribbonNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
    });
  },
  
  
  onClose(evt) {
    this.node.active = false;
    if(!this.onCloseDelegate) 
      return;
    this.onCloseDelegate();
  }
});
