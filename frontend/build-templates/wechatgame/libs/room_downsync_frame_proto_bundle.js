var $protobuf = require('protobuf');


// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

module.exports = $root;

$root.models = (function() {

    /**
     * Namespace models.
     * @exports models
     * @namespace
     */
    var models = {};

    models.Direction = (function() {

        /**
         * Properties of a Direction.
         * @memberof models
         * @interface IDirection
         * @property {number|null} [dx] Direction dx
         * @property {number|null} [dy] Direction dy
         */

        /**
         * Constructs a new Direction.
         * @memberof models
         * @classdesc Represents a Direction.
         * @implements IDirection
         * @constructor
         * @param {models.IDirection=} [properties] Properties to set
         */
        function Direction(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Direction dx.
         * @member {number} dx
         * @memberof models.Direction
         * @instance
         */
        Direction.prototype.dx = 0;

        /**
         * Direction dy.
         * @member {number} dy
         * @memberof models.Direction
         * @instance
         */
        Direction.prototype.dy = 0;

        /**
         * Creates a new Direction instance using the specified properties.
         * @function create
         * @memberof models.Direction
         * @static
         * @param {models.IDirection=} [properties] Properties to set
         * @returns {models.Direction} Direction instance
         */
        Direction.create = function create(properties) {
            return new Direction(properties);
        };

        /**
         * Encodes the specified Direction message. Does not implicitly {@link models.Direction.verify|verify} messages.
         * @function encode
         * @memberof models.Direction
         * @static
         * @param {models.IDirection} message Direction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Direction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dx != null && message.hasOwnProperty("dx"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.dx);
            if (message.dy != null && message.hasOwnProperty("dy"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.dy);
            return writer;
        };

        /**
         * Encodes the specified Direction message, length delimited. Does not implicitly {@link models.Direction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof models.Direction
         * @static
         * @param {models.IDirection} message Direction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Direction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Direction message from the specified reader or buffer.
         * @function decode
         * @memberof models.Direction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {models.Direction} Direction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Direction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.models.Direction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.dx = reader.double();
                    break;
                case 2:
                    message.dy = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Direction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof models.Direction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {models.Direction} Direction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Direction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Direction message.
         * @function verify
         * @memberof models.Direction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Direction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.dx != null && message.hasOwnProperty("dx"))
                if (typeof message.dx !== "number")
                    return "dx: number expected";
            if (message.dy != null && message.hasOwnProperty("dy"))
                if (typeof message.dy !== "number")
                    return "dy: number expected";
            return null;
        };

        /**
         * Creates a Direction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof models.Direction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {models.Direction} Direction
         */
        Direction.fromObject = function fromObject(object) {
            if (object instanceof $root.models.Direction)
                return object;
            var message = new $root.models.Direction();
            if (object.dx != null)
                message.dx = Number(object.dx);
            if (object.dy != null)
                message.dy = Number(object.dy);
            return message;
        };

        /**
         * Creates a plain object from a Direction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof models.Direction
         * @static
         * @param {models.Direction} message Direction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Direction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.dx = 0;
                object.dy = 0;
            }
            if (message.dx != null && message.hasOwnProperty("dx"))
                object.dx = options.json && !isFinite(message.dx) ? String(message.dx) : message.dx;
            if (message.dy != null && message.hasOwnProperty("dy"))
                object.dy = options.json && !isFinite(message.dy) ? String(message.dy) : message.dy;
            return object;
        };

        /**
         * Converts this Direction to JSON.
         * @function toJSON
         * @memberof models.Direction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Direction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Direction;
    })();

    models.Vec2D = (function() {

        /**
         * Properties of a Vec2D.
         * @memberof models
         * @interface IVec2D
         * @property {number|null} [x] Vec2D x
         * @property {number|null} [y] Vec2D y
         */

        /**
         * Constructs a new Vec2D.
         * @memberof models
         * @classdesc Represents a Vec2D.
         * @implements IVec2D
         * @constructor
         * @param {models.IVec2D=} [properties] Properties to set
         */
        function Vec2D(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Vec2D x.
         * @member {number} x
         * @memberof models.Vec2D
         * @instance
         */
        Vec2D.prototype.x = 0;

        /**
         * Vec2D y.
         * @member {number} y
         * @memberof models.Vec2D
         * @instance
         */
        Vec2D.prototype.y = 0;

        /**
         * Creates a new Vec2D instance using the specified properties.
         * @function create
         * @memberof models.Vec2D
         * @static
         * @param {models.IVec2D=} [properties] Properties to set
         * @returns {models.Vec2D} Vec2D instance
         */
        Vec2D.create = function create(properties) {
            return new Vec2D(properties);
        };

        /**
         * Encodes the specified Vec2D message. Does not implicitly {@link models.Vec2D.verify|verify} messages.
         * @function encode
         * @memberof models.Vec2D
         * @static
         * @param {models.IVec2D} message Vec2D message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Vec2D.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && message.hasOwnProperty("x"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.x);
            if (message.y != null && message.hasOwnProperty("y"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.y);
            return writer;
        };

        /**
         * Encodes the specified Vec2D message, length delimited. Does not implicitly {@link models.Vec2D.verify|verify} messages.
         * @function encodeDelimited
         * @memberof models.Vec2D
         * @static
         * @param {models.IVec2D} message Vec2D message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Vec2D.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Vec2D message from the specified reader or buffer.
         * @function decode
         * @memberof models.Vec2D
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {models.Vec2D} Vec2D
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Vec2D.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.models.Vec2D();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.double();
                    break;
                case 2:
                    message.y = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Vec2D message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof models.Vec2D
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {models.Vec2D} Vec2D
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Vec2D.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Vec2D message.
         * @function verify
         * @memberof models.Vec2D
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Vec2D.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            return null;
        };

        /**
         * Creates a Vec2D message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof models.Vec2D
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {models.Vec2D} Vec2D
         */
        Vec2D.fromObject = function fromObject(object) {
            if (object instanceof $root.models.Vec2D)
                return object;
            var message = new $root.models.Vec2D();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            return message;
        };

        /**
         * Creates a plain object from a Vec2D message. Also converts values to other types if specified.
         * @function toObject
         * @memberof models.Vec2D
         * @static
         * @param {models.Vec2D} message Vec2D
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Vec2D.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            return object;
        };

        /**
         * Converts this Vec2D to JSON.
         * @function toJSON
         * @memberof models.Vec2D
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Vec2D.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Vec2D;
    })();

    models.Player = (function() {

        /**
         * Properties of a Player.
         * @memberof models
         * @interface IPlayer
         * @property {number|Long|null} [id] Player id
         * @property {number|null} [x] Player x
         * @property {number|null} [y] Player y
         * @property {models.IDirection|null} [dir] Player dir
         * @property {number|null} [speed] Player speed
         * @property {number|null} [battleState] Player battleState
         * @property {number|null} [lastMoveGmtMillis] Player lastMoveGmtMillis
         * @property {string|null} [name] Player name
         * @property {string|null} [displayName] Player displayName
         * @property {number|null} [score] Player score
         * @property {boolean|null} [removed] Player removed
         * @property {number|null} [joinIndex] Player joinIndex
         * @property {string|null} [avatar] Player avatar
         */

        /**
         * Constructs a new Player.
         * @memberof models
         * @classdesc Represents a Player.
         * @implements IPlayer
         * @constructor
         * @param {models.IPlayer=} [properties] Properties to set
         */
        function Player(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Player id.
         * @member {number|Long} id
         * @memberof models.Player
         * @instance
         */
        Player.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Player x.
         * @member {number} x
         * @memberof models.Player
         * @instance
         */
        Player.prototype.x = 0;

        /**
         * Player y.
         * @member {number} y
         * @memberof models.Player
         * @instance
         */
        Player.prototype.y = 0;

        /**
         * Player dir.
         * @member {models.IDirection|null|undefined} dir
         * @memberof models.Player
         * @instance
         */
        Player.prototype.dir = null;

        /**
         * Player speed.
         * @member {number} speed
         * @memberof models.Player
         * @instance
         */
        Player.prototype.speed = 0;

        /**
         * Player battleState.
         * @member {number} battleState
         * @memberof models.Player
         * @instance
         */
        Player.prototype.battleState = 0;

        /**
         * Player lastMoveGmtMillis.
         * @member {number} lastMoveGmtMillis
         * @memberof models.Player
         * @instance
         */
        Player.prototype.lastMoveGmtMillis = 0;

        /**
         * Player name.
         * @member {string} name
         * @memberof models.Player
         * @instance
         */
        Player.prototype.name = "";

        /**
         * Player displayName.
         * @member {string} displayName
         * @memberof models.Player
         * @instance
         */
        Player.prototype.displayName = "";

        /**
         * Player score.
         * @member {number} score
         * @memberof models.Player
         * @instance
         */
        Player.prototype.score = 0;

        /**
         * Player removed.
         * @member {boolean} removed
         * @memberof models.Player
         * @instance
         */
        Player.prototype.removed = false;

        /**
         * Player joinIndex.
         * @member {number} joinIndex
         * @memberof models.Player
         * @instance
         */
        Player.prototype.joinIndex = 0;

        /**
         * Player avatar.
         * @member {string} avatar
         * @memberof models.Player
         * @instance
         */
        Player.prototype.avatar = "";

        /**
         * Creates a new Player instance using the specified properties.
         * @function create
         * @memberof models.Player
         * @static
         * @param {models.IPlayer=} [properties] Properties to set
         * @returns {models.Player} Player instance
         */
        Player.create = function create(properties) {
            return new Player(properties);
        };

        /**
         * Encodes the specified Player message. Does not implicitly {@link models.Player.verify|verify} messages.
         * @function encode
         * @memberof models.Player
         * @static
         * @param {models.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.x != null && message.hasOwnProperty("x"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.x);
            if (message.y != null && message.hasOwnProperty("y"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.y);
            if (message.dir != null && message.hasOwnProperty("dir"))
                $root.models.Direction.encode(message.dir, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.speed != null && message.hasOwnProperty("speed"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.speed);
            if (message.battleState != null && message.hasOwnProperty("battleState"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.battleState);
            if (message.lastMoveGmtMillis != null && message.hasOwnProperty("lastMoveGmtMillis"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.lastMoveGmtMillis);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.name);
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.displayName);
            if (message.score != null && message.hasOwnProperty("score"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.score);
            if (message.removed != null && message.hasOwnProperty("removed"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.removed);
            if (message.joinIndex != null && message.hasOwnProperty("joinIndex"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.joinIndex);
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.avatar);
            return writer;
        };

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link models.Player.verify|verify} messages.
         * @function encodeDelimited
         * @memberof models.Player
         * @static
         * @param {models.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @function decode
         * @memberof models.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {models.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.models.Player();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                case 2:
                    message.x = reader.double();
                    break;
                case 3:
                    message.y = reader.double();
                    break;
                case 4:
                    message.dir = $root.models.Direction.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.speed = reader.int32();
                    break;
                case 6:
                    message.battleState = reader.int32();
                    break;
                case 7:
                    message.lastMoveGmtMillis = reader.int32();
                    break;
                case 8:
                    message.name = reader.string();
                    break;
                case 9:
                    message.displayName = reader.string();
                    break;
                case 10:
                    message.score = reader.int32();
                    break;
                case 11:
                    message.removed = reader.bool();
                    break;
                case 12:
                    message.joinIndex = reader.int32();
                    break;
                case 13:
                    message.avatar = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof models.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {models.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Player message.
         * @function verify
         * @memberof models.Player
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Player.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.dir != null && message.hasOwnProperty("dir")) {
                var error = $root.models.Direction.verify(message.dir);
                if (error)
                    return "dir." + error;
            }
            if (message.speed != null && message.hasOwnProperty("speed"))
                if (!$util.isInteger(message.speed))
                    return "speed: integer expected";
            if (message.battleState != null && message.hasOwnProperty("battleState"))
                if (!$util.isInteger(message.battleState))
                    return "battleState: integer expected";
            if (message.lastMoveGmtMillis != null && message.hasOwnProperty("lastMoveGmtMillis"))
                if (!$util.isInteger(message.lastMoveGmtMillis))
                    return "lastMoveGmtMillis: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                if (!$util.isString(message.displayName))
                    return "displayName: string expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score))
                    return "score: integer expected";
            if (message.removed != null && message.hasOwnProperty("removed"))
                if (typeof message.removed !== "boolean")
                    return "removed: boolean expected";
            if (message.joinIndex != null && message.hasOwnProperty("joinIndex"))
                if (!$util.isInteger(message.joinIndex))
                    return "joinIndex: integer expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            return null;
        };

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof models.Player
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {models.Player} Player
         */
        Player.fromObject = function fromObject(object) {
            if (object instanceof $root.models.Player)
                return object;
            var message = new $root.models.Player();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.dir != null) {
                if (typeof object.dir !== "object")
                    throw TypeError(".models.Player.dir: object expected");
                message.dir = $root.models.Direction.fromObject(object.dir);
            }
            if (object.speed != null)
                message.speed = object.speed | 0;
            if (object.battleState != null)
                message.battleState = object.battleState | 0;
            if (object.lastMoveGmtMillis != null)
                message.lastMoveGmtMillis = object.lastMoveGmtMillis | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.displayName != null)
                message.displayName = String(object.displayName);
            if (object.score != null)
                message.score = object.score | 0;
            if (object.removed != null)
                message.removed = Boolean(object.removed);
            if (object.joinIndex != null)
                message.joinIndex = object.joinIndex | 0;
            if (object.avatar != null)
                message.avatar = String(object.avatar);
            return message;
        };

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @function toObject
         * @memberof models.Player
         * @static
         * @param {models.Player} message Player
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Player.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.x = 0;
                object.y = 0;
                object.dir = null;
                object.speed = 0;
                object.battleState = 0;
                object.lastMoveGmtMillis = 0;
                object.name = "";
                object.displayName = "";
                object.score = 0;
                object.removed = false;
                object.joinIndex = 0;
                object.avatar = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.dir != null && message.hasOwnProperty("dir"))
                object.dir = $root.models.Direction.toObject(message.dir, options);
            if (message.speed != null && message.hasOwnProperty("speed"))
                object.speed = message.speed;
            if (message.battleState != null && message.hasOwnProperty("battleState"))
                object.battleState = message.battleState;
            if (message.lastMoveGmtMillis != null && message.hasOwnProperty("lastMoveGmtMillis"))
                object.lastMoveGmtMillis = message.lastMoveGmtMillis;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                object.displayName = message.displayName;
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = message.score;
            if (message.removed != null && message.hasOwnProperty("removed"))
                object.removed = message.removed;
            if (message.joinIndex != null && message.hasOwnProperty("joinIndex"))
                object.joinIndex = message.joinIndex;
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                object.avatar = message.avatar;
            return object;
        };

        /**
         * Converts this Player to JSON.
         * @function toJSON
         * @memberof models.Player
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Player.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Player;
    })();

    models.Treasure = (function() {

        /**
         * Properties of a Treasure.
         * @memberof models
         * @interface ITreasure
         * @property {number|null} [id] Treasure id
         * @property {number|null} [localIdInBattle] Treasure localIdInBattle
         * @property {number|null} [score] Treasure score
         * @property {number|null} [x] Treasure x
         * @property {number|null} [y] Treasure y
         * @property {boolean|null} [removed] Treasure removed
         * @property {number|null} [type] Treasure type
         */

        /**
         * Constructs a new Treasure.
         * @memberof models
         * @classdesc Represents a Treasure.
         * @implements ITreasure
         * @constructor
         * @param {models.ITreasure=} [properties] Properties to set
         */
        function Treasure(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Treasure id.
         * @member {number} id
         * @memberof models.Treasure
         * @instance
         */
        Treasure.prototype.id = 0;

        /**
         * Treasure localIdInBattle.
         * @member {number} localIdInBattle
         * @memberof models.Treasure
         * @instance
         */
        Treasure.prototype.localIdInBattle = 0;

        /**
         * Treasure score.
         * @member {number} score
         * @memberof models.Treasure
         * @instance
         */
        Treasure.prototype.score = 0;

        /**
         * Treasure x.
         * @member {number} x
         * @memberof models.Treasure
         * @instance
         */
        Treasure.prototype.x = 0;

        /**
         * Treasure y.
         * @member {number} y
         * @memberof models.Treasure
         * @instance
         */
        Treasure.prototype.y = 0;

        /**
         * Treasure removed.
         * @member {boolean} removed
         * @memberof models.Treasure
         * @instance
         */
        Treasure.prototype.removed = false;

        /**
         * Treasure type.
         * @member {number} type
         * @memberof models.Treasure
         * @instance
         */
        Treasure.prototype.type = 0;

        /**
         * Creates a new Treasure instance using the specified properties.
         * @function create
         * @memberof models.Treasure
         * @static
         * @param {models.ITreasure=} [properties] Properties to set
         * @returns {models.Treasure} Treasure instance
         */
        Treasure.create = function create(properties) {
            return new Treasure(properties);
        };

        /**
         * Encodes the specified Treasure message. Does not implicitly {@link models.Treasure.verify|verify} messages.
         * @function encode
         * @memberof models.Treasure
         * @static
         * @param {models.ITreasure} message Treasure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Treasure.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.localIdInBattle != null && message.hasOwnProperty("localIdInBattle"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.localIdInBattle);
            if (message.score != null && message.hasOwnProperty("score"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.score);
            if (message.x != null && message.hasOwnProperty("x"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.x);
            if (message.y != null && message.hasOwnProperty("y"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.y);
            if (message.removed != null && message.hasOwnProperty("removed"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.removed);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified Treasure message, length delimited. Does not implicitly {@link models.Treasure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof models.Treasure
         * @static
         * @param {models.ITreasure} message Treasure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Treasure.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Treasure message from the specified reader or buffer.
         * @function decode
         * @memberof models.Treasure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {models.Treasure} Treasure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Treasure.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.models.Treasure();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.localIdInBattle = reader.int32();
                    break;
                case 3:
                    message.score = reader.int32();
                    break;
                case 4:
                    message.x = reader.double();
                    break;
                case 5:
                    message.y = reader.double();
                    break;
                case 6:
                    message.removed = reader.bool();
                    break;
                case 7:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Treasure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof models.Treasure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {models.Treasure} Treasure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Treasure.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Treasure message.
         * @function verify
         * @memberof models.Treasure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Treasure.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.localIdInBattle != null && message.hasOwnProperty("localIdInBattle"))
                if (!$util.isInteger(message.localIdInBattle))
                    return "localIdInBattle: integer expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score))
                    return "score: integer expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.removed != null && message.hasOwnProperty("removed"))
                if (typeof message.removed !== "boolean")
                    return "removed: boolean expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            return null;
        };

        /**
         * Creates a Treasure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof models.Treasure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {models.Treasure} Treasure
         */
        Treasure.fromObject = function fromObject(object) {
            if (object instanceof $root.models.Treasure)
                return object;
            var message = new $root.models.Treasure();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.localIdInBattle != null)
                message.localIdInBattle = object.localIdInBattle | 0;
            if (object.score != null)
                message.score = object.score | 0;
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.removed != null)
                message.removed = Boolean(object.removed);
            if (object.type != null)
                message.type = object.type | 0;
            return message;
        };

        /**
         * Creates a plain object from a Treasure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof models.Treasure
         * @static
         * @param {models.Treasure} message Treasure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Treasure.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.localIdInBattle = 0;
                object.score = 0;
                object.x = 0;
                object.y = 0;
                object.removed = false;
                object.type = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.localIdInBattle != null && message.hasOwnProperty("localIdInBattle"))
                object.localIdInBattle = message.localIdInBattle;
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = message.score;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.removed != null && message.hasOwnProperty("removed"))
                object.removed = message.removed;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this Treasure to JSON.
         * @function toJSON
         * @memberof models.Treasure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Treasure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Treasure;
    })();

    models.Bullet = (function() {

        /**
         * Properties of a Bullet.
         * @memberof models
         * @interface IBullet
         * @property {number|null} [localIdInBattle] Bullet localIdInBattle
         * @property {number|null} [linearSpeed] Bullet linearSpeed
         * @property {number|null} [x] Bullet x
         * @property {number|null} [y] Bullet y
         * @property {boolean|null} [removed] Bullet removed
         * @property {models.IVec2D|null} [startAtPoint] Bullet startAtPoint
         * @property {models.IVec2D|null} [endAtPoint] Bullet endAtPoint
         */

        /**
         * Constructs a new Bullet.
         * @memberof models
         * @classdesc Represents a Bullet.
         * @implements IBullet
         * @constructor
         * @param {models.IBullet=} [properties] Properties to set
         */
        function Bullet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Bullet localIdInBattle.
         * @member {number} localIdInBattle
         * @memberof models.Bullet
         * @instance
         */
        Bullet.prototype.localIdInBattle = 0;

        /**
         * Bullet linearSpeed.
         * @member {number} linearSpeed
         * @memberof models.Bullet
         * @instance
         */
        Bullet.prototype.linearSpeed = 0;

        /**
         * Bullet x.
         * @member {number} x
         * @memberof models.Bullet
         * @instance
         */
        Bullet.prototype.x = 0;

        /**
         * Bullet y.
         * @member {number} y
         * @memberof models.Bullet
         * @instance
         */
        Bullet.prototype.y = 0;

        /**
         * Bullet removed.
         * @member {boolean} removed
         * @memberof models.Bullet
         * @instance
         */
        Bullet.prototype.removed = false;

        /**
         * Bullet startAtPoint.
         * @member {models.IVec2D|null|undefined} startAtPoint
         * @memberof models.Bullet
         * @instance
         */
        Bullet.prototype.startAtPoint = null;

        /**
         * Bullet endAtPoint.
         * @member {models.IVec2D|null|undefined} endAtPoint
         * @memberof models.Bullet
         * @instance
         */
        Bullet.prototype.endAtPoint = null;

        /**
         * Creates a new Bullet instance using the specified properties.
         * @function create
         * @memberof models.Bullet
         * @static
         * @param {models.IBullet=} [properties] Properties to set
         * @returns {models.Bullet} Bullet instance
         */
        Bullet.create = function create(properties) {
            return new Bullet(properties);
        };

        /**
         * Encodes the specified Bullet message. Does not implicitly {@link models.Bullet.verify|verify} messages.
         * @function encode
         * @memberof models.Bullet
         * @static
         * @param {models.IBullet} message Bullet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bullet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.localIdInBattle != null && message.hasOwnProperty("localIdInBattle"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.localIdInBattle);
            if (message.linearSpeed != null && message.hasOwnProperty("linearSpeed"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.linearSpeed);
            if (message.x != null && message.hasOwnProperty("x"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.x);
            if (message.y != null && message.hasOwnProperty("y"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.y);
            if (message.removed != null && message.hasOwnProperty("removed"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.removed);
            if (message.startAtPoint != null && message.hasOwnProperty("startAtPoint"))
                $root.models.Vec2D.encode(message.startAtPoint, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.endAtPoint != null && message.hasOwnProperty("endAtPoint"))
                $root.models.Vec2D.encode(message.endAtPoint, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Bullet message, length delimited. Does not implicitly {@link models.Bullet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof models.Bullet
         * @static
         * @param {models.IBullet} message Bullet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bullet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Bullet message from the specified reader or buffer.
         * @function decode
         * @memberof models.Bullet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {models.Bullet} Bullet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bullet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.models.Bullet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.localIdInBattle = reader.int32();
                    break;
                case 2:
                    message.linearSpeed = reader.double();
                    break;
                case 3:
                    message.x = reader.double();
                    break;
                case 4:
                    message.y = reader.double();
                    break;
                case 5:
                    message.removed = reader.bool();
                    break;
                case 6:
                    message.startAtPoint = $root.models.Vec2D.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.endAtPoint = $root.models.Vec2D.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Bullet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof models.Bullet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {models.Bullet} Bullet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bullet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Bullet message.
         * @function verify
         * @memberof models.Bullet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Bullet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.localIdInBattle != null && message.hasOwnProperty("localIdInBattle"))
                if (!$util.isInteger(message.localIdInBattle))
                    return "localIdInBattle: integer expected";
            if (message.linearSpeed != null && message.hasOwnProperty("linearSpeed"))
                if (typeof message.linearSpeed !== "number")
                    return "linearSpeed: number expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.removed != null && message.hasOwnProperty("removed"))
                if (typeof message.removed !== "boolean")
                    return "removed: boolean expected";
            if (message.startAtPoint != null && message.hasOwnProperty("startAtPoint")) {
                var error = $root.models.Vec2D.verify(message.startAtPoint);
                if (error)
                    return "startAtPoint." + error;
            }
            if (message.endAtPoint != null && message.hasOwnProperty("endAtPoint")) {
                var error = $root.models.Vec2D.verify(message.endAtPoint);
                if (error)
                    return "endAtPoint." + error;
            }
            return null;
        };

        /**
         * Creates a Bullet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof models.Bullet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {models.Bullet} Bullet
         */
        Bullet.fromObject = function fromObject(object) {
            if (object instanceof $root.models.Bullet)
                return object;
            var message = new $root.models.Bullet();
            if (object.localIdInBattle != null)
                message.localIdInBattle = object.localIdInBattle | 0;
            if (object.linearSpeed != null)
                message.linearSpeed = Number(object.linearSpeed);
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.removed != null)
                message.removed = Boolean(object.removed);
            if (object.startAtPoint != null) {
                if (typeof object.startAtPoint !== "object")
                    throw TypeError(".models.Bullet.startAtPoint: object expected");
                message.startAtPoint = $root.models.Vec2D.fromObject(object.startAtPoint);
            }
            if (object.endAtPoint != null) {
                if (typeof object.endAtPoint !== "object")
                    throw TypeError(".models.Bullet.endAtPoint: object expected");
                message.endAtPoint = $root.models.Vec2D.fromObject(object.endAtPoint);
            }
            return message;
        };

        /**
         * Creates a plain object from a Bullet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof models.Bullet
         * @static
         * @param {models.Bullet} message Bullet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Bullet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.localIdInBattle = 0;
                object.linearSpeed = 0;
                object.x = 0;
                object.y = 0;
                object.removed = false;
                object.startAtPoint = null;
                object.endAtPoint = null;
            }
            if (message.localIdInBattle != null && message.hasOwnProperty("localIdInBattle"))
                object.localIdInBattle = message.localIdInBattle;
            if (message.linearSpeed != null && message.hasOwnProperty("linearSpeed"))
                object.linearSpeed = options.json && !isFinite(message.linearSpeed) ? String(message.linearSpeed) : message.linearSpeed;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.removed != null && message.hasOwnProperty("removed"))
                object.removed = message.removed;
            if (message.startAtPoint != null && message.hasOwnProperty("startAtPoint"))
                object.startAtPoint = $root.models.Vec2D.toObject(message.startAtPoint, options);
            if (message.endAtPoint != null && message.hasOwnProperty("endAtPoint"))
                object.endAtPoint = $root.models.Vec2D.toObject(message.endAtPoint, options);
            return object;
        };

        /**
         * Converts this Bullet to JSON.
         * @function toJSON
         * @memberof models.Bullet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Bullet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Bullet;
    })();

    models.Trap = (function() {

        /**
         * Properties of a Trap.
         * @memberof models
         * @interface ITrap
         * @property {number|null} [id] Trap id
         * @property {number|null} [localIdInBattle] Trap localIdInBattle
         * @property {number|null} [type] Trap type
         * @property {number|null} [x] Trap x
         * @property {number|null} [y] Trap y
         * @property {boolean|null} [removed] Trap removed
         */

        /**
         * Constructs a new Trap.
         * @memberof models
         * @classdesc Represents a Trap.
         * @implements ITrap
         * @constructor
         * @param {models.ITrap=} [properties] Properties to set
         */
        function Trap(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Trap id.
         * @member {number} id
         * @memberof models.Trap
         * @instance
         */
        Trap.prototype.id = 0;

        /**
         * Trap localIdInBattle.
         * @member {number} localIdInBattle
         * @memberof models.Trap
         * @instance
         */
        Trap.prototype.localIdInBattle = 0;

        /**
         * Trap type.
         * @member {number} type
         * @memberof models.Trap
         * @instance
         */
        Trap.prototype.type = 0;

        /**
         * Trap x.
         * @member {number} x
         * @memberof models.Trap
         * @instance
         */
        Trap.prototype.x = 0;

        /**
         * Trap y.
         * @member {number} y
         * @memberof models.Trap
         * @instance
         */
        Trap.prototype.y = 0;

        /**
         * Trap removed.
         * @member {boolean} removed
         * @memberof models.Trap
         * @instance
         */
        Trap.prototype.removed = false;

        /**
         * Creates a new Trap instance using the specified properties.
         * @function create
         * @memberof models.Trap
         * @static
         * @param {models.ITrap=} [properties] Properties to set
         * @returns {models.Trap} Trap instance
         */
        Trap.create = function create(properties) {
            return new Trap(properties);
        };

        /**
         * Encodes the specified Trap message. Does not implicitly {@link models.Trap.verify|verify} messages.
         * @function encode
         * @memberof models.Trap
         * @static
         * @param {models.ITrap} message Trap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Trap.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.localIdInBattle != null && message.hasOwnProperty("localIdInBattle"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.localIdInBattle);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            if (message.x != null && message.hasOwnProperty("x"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.x);
            if (message.y != null && message.hasOwnProperty("y"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.y);
            if (message.removed != null && message.hasOwnProperty("removed"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.removed);
            return writer;
        };

        /**
         * Encodes the specified Trap message, length delimited. Does not implicitly {@link models.Trap.verify|verify} messages.
         * @function encodeDelimited
         * @memberof models.Trap
         * @static
         * @param {models.ITrap} message Trap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Trap.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Trap message from the specified reader or buffer.
         * @function decode
         * @memberof models.Trap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {models.Trap} Trap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Trap.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.models.Trap();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.localIdInBattle = reader.int32();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.x = reader.double();
                    break;
                case 5:
                    message.y = reader.double();
                    break;
                case 6:
                    message.removed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Trap message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof models.Trap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {models.Trap} Trap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Trap.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Trap message.
         * @function verify
         * @memberof models.Trap
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Trap.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.localIdInBattle != null && message.hasOwnProperty("localIdInBattle"))
                if (!$util.isInteger(message.localIdInBattle))
                    return "localIdInBattle: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.removed != null && message.hasOwnProperty("removed"))
                if (typeof message.removed !== "boolean")
                    return "removed: boolean expected";
            return null;
        };

        /**
         * Creates a Trap message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof models.Trap
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {models.Trap} Trap
         */
        Trap.fromObject = function fromObject(object) {
            if (object instanceof $root.models.Trap)
                return object;
            var message = new $root.models.Trap();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.localIdInBattle != null)
                message.localIdInBattle = object.localIdInBattle | 0;
            if (object.type != null)
                message.type = object.type | 0;
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.removed != null)
                message.removed = Boolean(object.removed);
            return message;
        };

        /**
         * Creates a plain object from a Trap message. Also converts values to other types if specified.
         * @function toObject
         * @memberof models.Trap
         * @static
         * @param {models.Trap} message Trap
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Trap.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.localIdInBattle = 0;
                object.type = 0;
                object.x = 0;
                object.y = 0;
                object.removed = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.localIdInBattle != null && message.hasOwnProperty("localIdInBattle"))
                object.localIdInBattle = message.localIdInBattle;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.removed != null && message.hasOwnProperty("removed"))
                object.removed = message.removed;
            return object;
        };

        /**
         * Converts this Trap to JSON.
         * @function toJSON
         * @memberof models.Trap
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Trap.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Trap;
    })();

    models.SpeedShoes = (function() {

        /**
         * Properties of a SpeedShoes.
         * @memberof models
         * @interface ISpeedShoes
         * @property {number|null} [id] SpeedShoes id
         * @property {number|null} [localIdInBattle] SpeedShoes localIdInBattle
         * @property {number|null} [x] SpeedShoes x
         * @property {number|null} [y] SpeedShoes y
         * @property {boolean|null} [removed] SpeedShoes removed
         * @property {number|null} [type] SpeedShoes type
         */

        /**
         * Constructs a new SpeedShoes.
         * @memberof models
         * @classdesc Represents a SpeedShoes.
         * @implements ISpeedShoes
         * @constructor
         * @param {models.ISpeedShoes=} [properties] Properties to set
         */
        function SpeedShoes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SpeedShoes id.
         * @member {number} id
         * @memberof models.SpeedShoes
         * @instance
         */
        SpeedShoes.prototype.id = 0;

        /**
         * SpeedShoes localIdInBattle.
         * @member {number} localIdInBattle
         * @memberof models.SpeedShoes
         * @instance
         */
        SpeedShoes.prototype.localIdInBattle = 0;

        /**
         * SpeedShoes x.
         * @member {number} x
         * @memberof models.SpeedShoes
         * @instance
         */
        SpeedShoes.prototype.x = 0;

        /**
         * SpeedShoes y.
         * @member {number} y
         * @memberof models.SpeedShoes
         * @instance
         */
        SpeedShoes.prototype.y = 0;

        /**
         * SpeedShoes removed.
         * @member {boolean} removed
         * @memberof models.SpeedShoes
         * @instance
         */
        SpeedShoes.prototype.removed = false;

        /**
         * SpeedShoes type.
         * @member {number} type
         * @memberof models.SpeedShoes
         * @instance
         */
        SpeedShoes.prototype.type = 0;

        /**
         * Creates a new SpeedShoes instance using the specified properties.
         * @function create
         * @memberof models.SpeedShoes
         * @static
         * @param {models.ISpeedShoes=} [properties] Properties to set
         * @returns {models.SpeedShoes} SpeedShoes instance
         */
        SpeedShoes.create = function create(properties) {
            return new SpeedShoes(properties);
        };

        /**
         * Encodes the specified SpeedShoes message. Does not implicitly {@link models.SpeedShoes.verify|verify} messages.
         * @function encode
         * @memberof models.SpeedShoes
         * @static
         * @param {models.ISpeedShoes} message SpeedShoes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpeedShoes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.localIdInBattle != null && message.hasOwnProperty("localIdInBattle"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.localIdInBattle);
            if (message.x != null && message.hasOwnProperty("x"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.x);
            if (message.y != null && message.hasOwnProperty("y"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.y);
            if (message.removed != null && message.hasOwnProperty("removed"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.removed);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified SpeedShoes message, length delimited. Does not implicitly {@link models.SpeedShoes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof models.SpeedShoes
         * @static
         * @param {models.ISpeedShoes} message SpeedShoes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpeedShoes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SpeedShoes message from the specified reader or buffer.
         * @function decode
         * @memberof models.SpeedShoes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {models.SpeedShoes} SpeedShoes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpeedShoes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.models.SpeedShoes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.localIdInBattle = reader.int32();
                    break;
                case 3:
                    message.x = reader.double();
                    break;
                case 4:
                    message.y = reader.double();
                    break;
                case 5:
                    message.removed = reader.bool();
                    break;
                case 6:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SpeedShoes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof models.SpeedShoes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {models.SpeedShoes} SpeedShoes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpeedShoes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SpeedShoes message.
         * @function verify
         * @memberof models.SpeedShoes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SpeedShoes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.localIdInBattle != null && message.hasOwnProperty("localIdInBattle"))
                if (!$util.isInteger(message.localIdInBattle))
                    return "localIdInBattle: integer expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.removed != null && message.hasOwnProperty("removed"))
                if (typeof message.removed !== "boolean")
                    return "removed: boolean expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            return null;
        };

        /**
         * Creates a SpeedShoes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof models.SpeedShoes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {models.SpeedShoes} SpeedShoes
         */
        SpeedShoes.fromObject = function fromObject(object) {
            if (object instanceof $root.models.SpeedShoes)
                return object;
            var message = new $root.models.SpeedShoes();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.localIdInBattle != null)
                message.localIdInBattle = object.localIdInBattle | 0;
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.removed != null)
                message.removed = Boolean(object.removed);
            if (object.type != null)
                message.type = object.type | 0;
            return message;
        };

        /**
         * Creates a plain object from a SpeedShoes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof models.SpeedShoes
         * @static
         * @param {models.SpeedShoes} message SpeedShoes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpeedShoes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.localIdInBattle = 0;
                object.x = 0;
                object.y = 0;
                object.removed = false;
                object.type = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.localIdInBattle != null && message.hasOwnProperty("localIdInBattle"))
                object.localIdInBattle = message.localIdInBattle;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.removed != null && message.hasOwnProperty("removed"))
                object.removed = message.removed;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this SpeedShoes to JSON.
         * @function toJSON
         * @memberof models.SpeedShoes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpeedShoes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SpeedShoes;
    })();

    models.Pumpkin = (function() {

        /**
         * Properties of a Pumpkin.
         * @memberof models
         * @interface IPumpkin
         * @property {number|null} [localIdInBattle] Pumpkin localIdInBattle
         * @property {number|null} [linearSpeed] Pumpkin linearSpeed
         * @property {number|null} [x] Pumpkin x
         * @property {number|null} [y] Pumpkin y
         * @property {boolean|null} [removed] Pumpkin removed
         */

        /**
         * Constructs a new Pumpkin.
         * @memberof models
         * @classdesc Represents a Pumpkin.
         * @implements IPumpkin
         * @constructor
         * @param {models.IPumpkin=} [properties] Properties to set
         */
        function Pumpkin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pumpkin localIdInBattle.
         * @member {number} localIdInBattle
         * @memberof models.Pumpkin
         * @instance
         */
        Pumpkin.prototype.localIdInBattle = 0;

        /**
         * Pumpkin linearSpeed.
         * @member {number} linearSpeed
         * @memberof models.Pumpkin
         * @instance
         */
        Pumpkin.prototype.linearSpeed = 0;

        /**
         * Pumpkin x.
         * @member {number} x
         * @memberof models.Pumpkin
         * @instance
         */
        Pumpkin.prototype.x = 0;

        /**
         * Pumpkin y.
         * @member {number} y
         * @memberof models.Pumpkin
         * @instance
         */
        Pumpkin.prototype.y = 0;

        /**
         * Pumpkin removed.
         * @member {boolean} removed
         * @memberof models.Pumpkin
         * @instance
         */
        Pumpkin.prototype.removed = false;

        /**
         * Creates a new Pumpkin instance using the specified properties.
         * @function create
         * @memberof models.Pumpkin
         * @static
         * @param {models.IPumpkin=} [properties] Properties to set
         * @returns {models.Pumpkin} Pumpkin instance
         */
        Pumpkin.create = function create(properties) {
            return new Pumpkin(properties);
        };

        /**
         * Encodes the specified Pumpkin message. Does not implicitly {@link models.Pumpkin.verify|verify} messages.
         * @function encode
         * @memberof models.Pumpkin
         * @static
         * @param {models.IPumpkin} message Pumpkin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pumpkin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.localIdInBattle != null && message.hasOwnProperty("localIdInBattle"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.localIdInBattle);
            if (message.linearSpeed != null && message.hasOwnProperty("linearSpeed"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.linearSpeed);
            if (message.x != null && message.hasOwnProperty("x"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.x);
            if (message.y != null && message.hasOwnProperty("y"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.y);
            if (message.removed != null && message.hasOwnProperty("removed"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.removed);
            return writer;
        };

        /**
         * Encodes the specified Pumpkin message, length delimited. Does not implicitly {@link models.Pumpkin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof models.Pumpkin
         * @static
         * @param {models.IPumpkin} message Pumpkin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pumpkin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Pumpkin message from the specified reader or buffer.
         * @function decode
         * @memberof models.Pumpkin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {models.Pumpkin} Pumpkin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pumpkin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.models.Pumpkin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.localIdInBattle = reader.int32();
                    break;
                case 2:
                    message.linearSpeed = reader.double();
                    break;
                case 3:
                    message.x = reader.double();
                    break;
                case 4:
                    message.y = reader.double();
                    break;
                case 5:
                    message.removed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Pumpkin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof models.Pumpkin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {models.Pumpkin} Pumpkin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pumpkin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Pumpkin message.
         * @function verify
         * @memberof models.Pumpkin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Pumpkin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.localIdInBattle != null && message.hasOwnProperty("localIdInBattle"))
                if (!$util.isInteger(message.localIdInBattle))
                    return "localIdInBattle: integer expected";
            if (message.linearSpeed != null && message.hasOwnProperty("linearSpeed"))
                if (typeof message.linearSpeed !== "number")
                    return "linearSpeed: number expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.removed != null && message.hasOwnProperty("removed"))
                if (typeof message.removed !== "boolean")
                    return "removed: boolean expected";
            return null;
        };

        /**
         * Creates a Pumpkin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof models.Pumpkin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {models.Pumpkin} Pumpkin
         */
        Pumpkin.fromObject = function fromObject(object) {
            if (object instanceof $root.models.Pumpkin)
                return object;
            var message = new $root.models.Pumpkin();
            if (object.localIdInBattle != null)
                message.localIdInBattle = object.localIdInBattle | 0;
            if (object.linearSpeed != null)
                message.linearSpeed = Number(object.linearSpeed);
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.removed != null)
                message.removed = Boolean(object.removed);
            return message;
        };

        /**
         * Creates a plain object from a Pumpkin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof models.Pumpkin
         * @static
         * @param {models.Pumpkin} message Pumpkin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Pumpkin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.localIdInBattle = 0;
                object.linearSpeed = 0;
                object.x = 0;
                object.y = 0;
                object.removed = false;
            }
            if (message.localIdInBattle != null && message.hasOwnProperty("localIdInBattle"))
                object.localIdInBattle = message.localIdInBattle;
            if (message.linearSpeed != null && message.hasOwnProperty("linearSpeed"))
                object.linearSpeed = options.json && !isFinite(message.linearSpeed) ? String(message.linearSpeed) : message.linearSpeed;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.removed != null && message.hasOwnProperty("removed"))
                object.removed = message.removed;
            return object;
        };

        /**
         * Converts this Pumpkin to JSON.
         * @function toJSON
         * @memberof models.Pumpkin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Pumpkin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Pumpkin;
    })();

    models.GuardTower = (function() {

        /**
         * Properties of a GuardTower.
         * @memberof models
         * @interface IGuardTower
         * @property {number|null} [id] GuardTower id
         * @property {number|null} [localIdInBattle] GuardTower localIdInBattle
         * @property {number|null} [type] GuardTower type
         * @property {number|null} [x] GuardTower x
         * @property {number|null} [y] GuardTower y
         * @property {boolean|null} [removed] GuardTower removed
         */

        /**
         * Constructs a new GuardTower.
         * @memberof models
         * @classdesc Represents a GuardTower.
         * @implements IGuardTower
         * @constructor
         * @param {models.IGuardTower=} [properties] Properties to set
         */
        function GuardTower(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GuardTower id.
         * @member {number} id
         * @memberof models.GuardTower
         * @instance
         */
        GuardTower.prototype.id = 0;

        /**
         * GuardTower localIdInBattle.
         * @member {number} localIdInBattle
         * @memberof models.GuardTower
         * @instance
         */
        GuardTower.prototype.localIdInBattle = 0;

        /**
         * GuardTower type.
         * @member {number} type
         * @memberof models.GuardTower
         * @instance
         */
        GuardTower.prototype.type = 0;

        /**
         * GuardTower x.
         * @member {number} x
         * @memberof models.GuardTower
         * @instance
         */
        GuardTower.prototype.x = 0;

        /**
         * GuardTower y.
         * @member {number} y
         * @memberof models.GuardTower
         * @instance
         */
        GuardTower.prototype.y = 0;

        /**
         * GuardTower removed.
         * @member {boolean} removed
         * @memberof models.GuardTower
         * @instance
         */
        GuardTower.prototype.removed = false;

        /**
         * Creates a new GuardTower instance using the specified properties.
         * @function create
         * @memberof models.GuardTower
         * @static
         * @param {models.IGuardTower=} [properties] Properties to set
         * @returns {models.GuardTower} GuardTower instance
         */
        GuardTower.create = function create(properties) {
            return new GuardTower(properties);
        };

        /**
         * Encodes the specified GuardTower message. Does not implicitly {@link models.GuardTower.verify|verify} messages.
         * @function encode
         * @memberof models.GuardTower
         * @static
         * @param {models.IGuardTower} message GuardTower message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuardTower.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.localIdInBattle != null && message.hasOwnProperty("localIdInBattle"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.localIdInBattle);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            if (message.x != null && message.hasOwnProperty("x"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.x);
            if (message.y != null && message.hasOwnProperty("y"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.y);
            if (message.removed != null && message.hasOwnProperty("removed"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.removed);
            return writer;
        };

        /**
         * Encodes the specified GuardTower message, length delimited. Does not implicitly {@link models.GuardTower.verify|verify} messages.
         * @function encodeDelimited
         * @memberof models.GuardTower
         * @static
         * @param {models.IGuardTower} message GuardTower message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuardTower.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GuardTower message from the specified reader or buffer.
         * @function decode
         * @memberof models.GuardTower
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {models.GuardTower} GuardTower
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuardTower.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.models.GuardTower();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.localIdInBattle = reader.int32();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.x = reader.double();
                    break;
                case 5:
                    message.y = reader.double();
                    break;
                case 6:
                    message.removed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GuardTower message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof models.GuardTower
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {models.GuardTower} GuardTower
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuardTower.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GuardTower message.
         * @function verify
         * @memberof models.GuardTower
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GuardTower.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.localIdInBattle != null && message.hasOwnProperty("localIdInBattle"))
                if (!$util.isInteger(message.localIdInBattle))
                    return "localIdInBattle: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.removed != null && message.hasOwnProperty("removed"))
                if (typeof message.removed !== "boolean")
                    return "removed: boolean expected";
            return null;
        };

        /**
         * Creates a GuardTower message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof models.GuardTower
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {models.GuardTower} GuardTower
         */
        GuardTower.fromObject = function fromObject(object) {
            if (object instanceof $root.models.GuardTower)
                return object;
            var message = new $root.models.GuardTower();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.localIdInBattle != null)
                message.localIdInBattle = object.localIdInBattle | 0;
            if (object.type != null)
                message.type = object.type | 0;
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.removed != null)
                message.removed = Boolean(object.removed);
            return message;
        };

        /**
         * Creates a plain object from a GuardTower message. Also converts values to other types if specified.
         * @function toObject
         * @memberof models.GuardTower
         * @static
         * @param {models.GuardTower} message GuardTower
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GuardTower.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.localIdInBattle = 0;
                object.type = 0;
                object.x = 0;
                object.y = 0;
                object.removed = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.localIdInBattle != null && message.hasOwnProperty("localIdInBattle"))
                object.localIdInBattle = message.localIdInBattle;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.removed != null && message.hasOwnProperty("removed"))
                object.removed = message.removed;
            return object;
        };

        /**
         * Converts this GuardTower to JSON.
         * @function toJSON
         * @memberof models.GuardTower
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GuardTower.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GuardTower;
    })();

    models.RoomDownsyncFrame = (function() {

        /**
         * Properties of a RoomDownsyncFrame.
         * @memberof models
         * @interface IRoomDownsyncFrame
         * @property {number|null} [id] RoomDownsyncFrame id
         * @property {number|null} [refFrameId] RoomDownsyncFrame refFrameId
         * @property {Object.<string,models.IPlayer>|null} [players] RoomDownsyncFrame players
         * @property {number|Long|null} [sentAt] RoomDownsyncFrame sentAt
         * @property {number|Long|null} [countdownNanos] RoomDownsyncFrame countdownNanos
         * @property {Object.<string,models.ITreasure>|null} [treasures] RoomDownsyncFrame treasures
         * @property {Object.<string,models.ITrap>|null} [traps] RoomDownsyncFrame traps
         * @property {Object.<string,models.IBullet>|null} [bullets] RoomDownsyncFrame bullets
         * @property {Object.<string,models.ISpeedShoes>|null} [speedShoes] RoomDownsyncFrame speedShoes
         * @property {Object.<string,models.IPumpkin>|null} [pumpkin] RoomDownsyncFrame pumpkin
         * @property {Object.<string,models.IGuardTower>|null} [guardTowers] RoomDownsyncFrame guardTowers
         */

        /**
         * Constructs a new RoomDownsyncFrame.
         * @memberof models
         * @classdesc Represents a RoomDownsyncFrame.
         * @implements IRoomDownsyncFrame
         * @constructor
         * @param {models.IRoomDownsyncFrame=} [properties] Properties to set
         */
        function RoomDownsyncFrame(properties) {
            this.players = {};
            this.treasures = {};
            this.traps = {};
            this.bullets = {};
            this.speedShoes = {};
            this.pumpkin = {};
            this.guardTowers = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomDownsyncFrame id.
         * @member {number} id
         * @memberof models.RoomDownsyncFrame
         * @instance
         */
        RoomDownsyncFrame.prototype.id = 0;

        /**
         * RoomDownsyncFrame refFrameId.
         * @member {number} refFrameId
         * @memberof models.RoomDownsyncFrame
         * @instance
         */
        RoomDownsyncFrame.prototype.refFrameId = 0;

        /**
         * RoomDownsyncFrame players.
         * @member {Object.<string,models.IPlayer>} players
         * @memberof models.RoomDownsyncFrame
         * @instance
         */
        RoomDownsyncFrame.prototype.players = $util.emptyObject;

        /**
         * RoomDownsyncFrame sentAt.
         * @member {number|Long} sentAt
         * @memberof models.RoomDownsyncFrame
         * @instance
         */
        RoomDownsyncFrame.prototype.sentAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoomDownsyncFrame countdownNanos.
         * @member {number|Long} countdownNanos
         * @memberof models.RoomDownsyncFrame
         * @instance
         */
        RoomDownsyncFrame.prototype.countdownNanos = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoomDownsyncFrame treasures.
         * @member {Object.<string,models.ITreasure>} treasures
         * @memberof models.RoomDownsyncFrame
         * @instance
         */
        RoomDownsyncFrame.prototype.treasures = $util.emptyObject;

        /**
         * RoomDownsyncFrame traps.
         * @member {Object.<string,models.ITrap>} traps
         * @memberof models.RoomDownsyncFrame
         * @instance
         */
        RoomDownsyncFrame.prototype.traps = $util.emptyObject;

        /**
         * RoomDownsyncFrame bullets.
         * @member {Object.<string,models.IBullet>} bullets
         * @memberof models.RoomDownsyncFrame
         * @instance
         */
        RoomDownsyncFrame.prototype.bullets = $util.emptyObject;

        /**
         * RoomDownsyncFrame speedShoes.
         * @member {Object.<string,models.ISpeedShoes>} speedShoes
         * @memberof models.RoomDownsyncFrame
         * @instance
         */
        RoomDownsyncFrame.prototype.speedShoes = $util.emptyObject;

        /**
         * RoomDownsyncFrame pumpkin.
         * @member {Object.<string,models.IPumpkin>} pumpkin
         * @memberof models.RoomDownsyncFrame
         * @instance
         */
        RoomDownsyncFrame.prototype.pumpkin = $util.emptyObject;

        /**
         * RoomDownsyncFrame guardTowers.
         * @member {Object.<string,models.IGuardTower>} guardTowers
         * @memberof models.RoomDownsyncFrame
         * @instance
         */
        RoomDownsyncFrame.prototype.guardTowers = $util.emptyObject;

        /**
         * Creates a new RoomDownsyncFrame instance using the specified properties.
         * @function create
         * @memberof models.RoomDownsyncFrame
         * @static
         * @param {models.IRoomDownsyncFrame=} [properties] Properties to set
         * @returns {models.RoomDownsyncFrame} RoomDownsyncFrame instance
         */
        RoomDownsyncFrame.create = function create(properties) {
            return new RoomDownsyncFrame(properties);
        };

        /**
         * Encodes the specified RoomDownsyncFrame message. Does not implicitly {@link models.RoomDownsyncFrame.verify|verify} messages.
         * @function encode
         * @memberof models.RoomDownsyncFrame
         * @static
         * @param {models.IRoomDownsyncFrame} message RoomDownsyncFrame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomDownsyncFrame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.refFrameId != null && message.hasOwnProperty("refFrameId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.refFrameId);
            if (message.players != null && message.hasOwnProperty("players"))
                for (var keys = Object.keys(message.players), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                    $root.models.Player.encode(message.players[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.sentAt != null && message.hasOwnProperty("sentAt"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.sentAt);
            if (message.countdownNanos != null && message.hasOwnProperty("countdownNanos"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.countdownNanos);
            if (message.treasures != null && message.hasOwnProperty("treasures"))
                for (var keys = Object.keys(message.treasures), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                    $root.models.Treasure.encode(message.treasures[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.traps != null && message.hasOwnProperty("traps"))
                for (var keys = Object.keys(message.traps), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 7, wireType 2 =*/58).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                    $root.models.Trap.encode(message.traps[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.bullets != null && message.hasOwnProperty("bullets"))
                for (var keys = Object.keys(message.bullets), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 8, wireType 2 =*/66).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                    $root.models.Bullet.encode(message.bullets[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.speedShoes != null && message.hasOwnProperty("speedShoes"))
                for (var keys = Object.keys(message.speedShoes), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 9, wireType 2 =*/74).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                    $root.models.SpeedShoes.encode(message.speedShoes[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.pumpkin != null && message.hasOwnProperty("pumpkin"))
                for (var keys = Object.keys(message.pumpkin), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 10, wireType 2 =*/82).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                    $root.models.Pumpkin.encode(message.pumpkin[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.guardTowers != null && message.hasOwnProperty("guardTowers"))
                for (var keys = Object.keys(message.guardTowers), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 11, wireType 2 =*/90).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                    $root.models.GuardTower.encode(message.guardTowers[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified RoomDownsyncFrame message, length delimited. Does not implicitly {@link models.RoomDownsyncFrame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof models.RoomDownsyncFrame
         * @static
         * @param {models.IRoomDownsyncFrame} message RoomDownsyncFrame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomDownsyncFrame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomDownsyncFrame message from the specified reader or buffer.
         * @function decode
         * @memberof models.RoomDownsyncFrame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {models.RoomDownsyncFrame} RoomDownsyncFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomDownsyncFrame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.models.RoomDownsyncFrame(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.refFrameId = reader.int32();
                    break;
                case 3:
                    reader.skip().pos++;
                    if (message.players === $util.emptyObject)
                        message.players = {};
                    key = reader.int32();
                    reader.pos++;
                    message.players[key] = $root.models.Player.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.sentAt = reader.int64();
                    break;
                case 5:
                    message.countdownNanos = reader.int64();
                    break;
                case 6:
                    reader.skip().pos++;
                    if (message.treasures === $util.emptyObject)
                        message.treasures = {};
                    key = reader.int32();
                    reader.pos++;
                    message.treasures[key] = $root.models.Treasure.decode(reader, reader.uint32());
                    break;
                case 7:
                    reader.skip().pos++;
                    if (message.traps === $util.emptyObject)
                        message.traps = {};
                    key = reader.int32();
                    reader.pos++;
                    message.traps[key] = $root.models.Trap.decode(reader, reader.uint32());
                    break;
                case 8:
                    reader.skip().pos++;
                    if (message.bullets === $util.emptyObject)
                        message.bullets = {};
                    key = reader.int32();
                    reader.pos++;
                    message.bullets[key] = $root.models.Bullet.decode(reader, reader.uint32());
                    break;
                case 9:
                    reader.skip().pos++;
                    if (message.speedShoes === $util.emptyObject)
                        message.speedShoes = {};
                    key = reader.int32();
                    reader.pos++;
                    message.speedShoes[key] = $root.models.SpeedShoes.decode(reader, reader.uint32());
                    break;
                case 10:
                    reader.skip().pos++;
                    if (message.pumpkin === $util.emptyObject)
                        message.pumpkin = {};
                    key = reader.int32();
                    reader.pos++;
                    message.pumpkin[key] = $root.models.Pumpkin.decode(reader, reader.uint32());
                    break;
                case 11:
                    reader.skip().pos++;
                    if (message.guardTowers === $util.emptyObject)
                        message.guardTowers = {};
                    key = reader.int32();
                    reader.pos++;
                    message.guardTowers[key] = $root.models.GuardTower.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomDownsyncFrame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof models.RoomDownsyncFrame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {models.RoomDownsyncFrame} RoomDownsyncFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomDownsyncFrame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomDownsyncFrame message.
         * @function verify
         * @memberof models.RoomDownsyncFrame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomDownsyncFrame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.refFrameId != null && message.hasOwnProperty("refFrameId"))
                if (!$util.isInteger(message.refFrameId))
                    return "refFrameId: integer expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!$util.isObject(message.players))
                    return "players: object expected";
                var key = Object.keys(message.players);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "players: integer key{k:int32} expected";
                    {
                        var error = $root.models.Player.verify(message.players[key[i]]);
                        if (error)
                            return "players." + error;
                    }
                }
            }
            if (message.sentAt != null && message.hasOwnProperty("sentAt"))
                if (!$util.isInteger(message.sentAt) && !(message.sentAt && $util.isInteger(message.sentAt.low) && $util.isInteger(message.sentAt.high)))
                    return "sentAt: integer|Long expected";
            if (message.countdownNanos != null && message.hasOwnProperty("countdownNanos"))
                if (!$util.isInteger(message.countdownNanos) && !(message.countdownNanos && $util.isInteger(message.countdownNanos.low) && $util.isInteger(message.countdownNanos.high)))
                    return "countdownNanos: integer|Long expected";
            if (message.treasures != null && message.hasOwnProperty("treasures")) {
                if (!$util.isObject(message.treasures))
                    return "treasures: object expected";
                var key = Object.keys(message.treasures);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "treasures: integer key{k:int32} expected";
                    {
                        var error = $root.models.Treasure.verify(message.treasures[key[i]]);
                        if (error)
                            return "treasures." + error;
                    }
                }
            }
            if (message.traps != null && message.hasOwnProperty("traps")) {
                if (!$util.isObject(message.traps))
                    return "traps: object expected";
                var key = Object.keys(message.traps);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "traps: integer key{k:int32} expected";
                    {
                        var error = $root.models.Trap.verify(message.traps[key[i]]);
                        if (error)
                            return "traps." + error;
                    }
                }
            }
            if (message.bullets != null && message.hasOwnProperty("bullets")) {
                if (!$util.isObject(message.bullets))
                    return "bullets: object expected";
                var key = Object.keys(message.bullets);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "bullets: integer key{k:int32} expected";
                    {
                        var error = $root.models.Bullet.verify(message.bullets[key[i]]);
                        if (error)
                            return "bullets." + error;
                    }
                }
            }
            if (message.speedShoes != null && message.hasOwnProperty("speedShoes")) {
                if (!$util.isObject(message.speedShoes))
                    return "speedShoes: object expected";
                var key = Object.keys(message.speedShoes);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "speedShoes: integer key{k:int32} expected";
                    {
                        var error = $root.models.SpeedShoes.verify(message.speedShoes[key[i]]);
                        if (error)
                            return "speedShoes." + error;
                    }
                }
            }
            if (message.pumpkin != null && message.hasOwnProperty("pumpkin")) {
                if (!$util.isObject(message.pumpkin))
                    return "pumpkin: object expected";
                var key = Object.keys(message.pumpkin);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "pumpkin: integer key{k:int32} expected";
                    {
                        var error = $root.models.Pumpkin.verify(message.pumpkin[key[i]]);
                        if (error)
                            return "pumpkin." + error;
                    }
                }
            }
            if (message.guardTowers != null && message.hasOwnProperty("guardTowers")) {
                if (!$util.isObject(message.guardTowers))
                    return "guardTowers: object expected";
                var key = Object.keys(message.guardTowers);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "guardTowers: integer key{k:int32} expected";
                    {
                        var error = $root.models.GuardTower.verify(message.guardTowers[key[i]]);
                        if (error)
                            return "guardTowers." + error;
                    }
                }
            }
            return null;
        };

        /**
         * Creates a RoomDownsyncFrame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof models.RoomDownsyncFrame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {models.RoomDownsyncFrame} RoomDownsyncFrame
         */
        RoomDownsyncFrame.fromObject = function fromObject(object) {
            if (object instanceof $root.models.RoomDownsyncFrame)
                return object;
            var message = new $root.models.RoomDownsyncFrame();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.refFrameId != null)
                message.refFrameId = object.refFrameId | 0;
            if (object.players) {
                if (typeof object.players !== "object")
                    throw TypeError(".models.RoomDownsyncFrame.players: object expected");
                message.players = {};
                for (var keys = Object.keys(object.players), i = 0; i < keys.length; ++i) {
                    if (typeof object.players[keys[i]] !== "object")
                        throw TypeError(".models.RoomDownsyncFrame.players: object expected");
                    message.players[keys[i]] = $root.models.Player.fromObject(object.players[keys[i]]);
                }
            }
            if (object.sentAt != null)
                if ($util.Long)
                    (message.sentAt = $util.Long.fromValue(object.sentAt)).unsigned = false;
                else if (typeof object.sentAt === "string")
                    message.sentAt = parseInt(object.sentAt, 10);
                else if (typeof object.sentAt === "number")
                    message.sentAt = object.sentAt;
                else if (typeof object.sentAt === "object")
                    message.sentAt = new $util.LongBits(object.sentAt.low >>> 0, object.sentAt.high >>> 0).toNumber();
            if (object.countdownNanos != null)
                if ($util.Long)
                    (message.countdownNanos = $util.Long.fromValue(object.countdownNanos)).unsigned = false;
                else if (typeof object.countdownNanos === "string")
                    message.countdownNanos = parseInt(object.countdownNanos, 10);
                else if (typeof object.countdownNanos === "number")
                    message.countdownNanos = object.countdownNanos;
                else if (typeof object.countdownNanos === "object")
                    message.countdownNanos = new $util.LongBits(object.countdownNanos.low >>> 0, object.countdownNanos.high >>> 0).toNumber();
            if (object.treasures) {
                if (typeof object.treasures !== "object")
                    throw TypeError(".models.RoomDownsyncFrame.treasures: object expected");
                message.treasures = {};
                for (var keys = Object.keys(object.treasures), i = 0; i < keys.length; ++i) {
                    if (typeof object.treasures[keys[i]] !== "object")
                        throw TypeError(".models.RoomDownsyncFrame.treasures: object expected");
                    message.treasures[keys[i]] = $root.models.Treasure.fromObject(object.treasures[keys[i]]);
                }
            }
            if (object.traps) {
                if (typeof object.traps !== "object")
                    throw TypeError(".models.RoomDownsyncFrame.traps: object expected");
                message.traps = {};
                for (var keys = Object.keys(object.traps), i = 0; i < keys.length; ++i) {
                    if (typeof object.traps[keys[i]] !== "object")
                        throw TypeError(".models.RoomDownsyncFrame.traps: object expected");
                    message.traps[keys[i]] = $root.models.Trap.fromObject(object.traps[keys[i]]);
                }
            }
            if (object.bullets) {
                if (typeof object.bullets !== "object")
                    throw TypeError(".models.RoomDownsyncFrame.bullets: object expected");
                message.bullets = {};
                for (var keys = Object.keys(object.bullets), i = 0; i < keys.length; ++i) {
                    if (typeof object.bullets[keys[i]] !== "object")
                        throw TypeError(".models.RoomDownsyncFrame.bullets: object expected");
                    message.bullets[keys[i]] = $root.models.Bullet.fromObject(object.bullets[keys[i]]);
                }
            }
            if (object.speedShoes) {
                if (typeof object.speedShoes !== "object")
                    throw TypeError(".models.RoomDownsyncFrame.speedShoes: object expected");
                message.speedShoes = {};
                for (var keys = Object.keys(object.speedShoes), i = 0; i < keys.length; ++i) {
                    if (typeof object.speedShoes[keys[i]] !== "object")
                        throw TypeError(".models.RoomDownsyncFrame.speedShoes: object expected");
                    message.speedShoes[keys[i]] = $root.models.SpeedShoes.fromObject(object.speedShoes[keys[i]]);
                }
            }
            if (object.pumpkin) {
                if (typeof object.pumpkin !== "object")
                    throw TypeError(".models.RoomDownsyncFrame.pumpkin: object expected");
                message.pumpkin = {};
                for (var keys = Object.keys(object.pumpkin), i = 0; i < keys.length; ++i) {
                    if (typeof object.pumpkin[keys[i]] !== "object")
                        throw TypeError(".models.RoomDownsyncFrame.pumpkin: object expected");
                    message.pumpkin[keys[i]] = $root.models.Pumpkin.fromObject(object.pumpkin[keys[i]]);
                }
            }
            if (object.guardTowers) {
                if (typeof object.guardTowers !== "object")
                    throw TypeError(".models.RoomDownsyncFrame.guardTowers: object expected");
                message.guardTowers = {};
                for (var keys = Object.keys(object.guardTowers), i = 0; i < keys.length; ++i) {
                    if (typeof object.guardTowers[keys[i]] !== "object")
                        throw TypeError(".models.RoomDownsyncFrame.guardTowers: object expected");
                    message.guardTowers[keys[i]] = $root.models.GuardTower.fromObject(object.guardTowers[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RoomDownsyncFrame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof models.RoomDownsyncFrame
         * @static
         * @param {models.RoomDownsyncFrame} message RoomDownsyncFrame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomDownsyncFrame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults) {
                object.players = {};
                object.treasures = {};
                object.traps = {};
                object.bullets = {};
                object.speedShoes = {};
                object.pumpkin = {};
                object.guardTowers = {};
            }
            if (options.defaults) {
                object.id = 0;
                object.refFrameId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sentAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sentAt = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.countdownNanos = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.countdownNanos = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.refFrameId != null && message.hasOwnProperty("refFrameId"))
                object.refFrameId = message.refFrameId;
            var keys2;
            if (message.players && (keys2 = Object.keys(message.players)).length) {
                object.players = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.players[keys2[j]] = $root.models.Player.toObject(message.players[keys2[j]], options);
            }
            if (message.sentAt != null && message.hasOwnProperty("sentAt"))
                if (typeof message.sentAt === "number")
                    object.sentAt = options.longs === String ? String(message.sentAt) : message.sentAt;
                else
                    object.sentAt = options.longs === String ? $util.Long.prototype.toString.call(message.sentAt) : options.longs === Number ? new $util.LongBits(message.sentAt.low >>> 0, message.sentAt.high >>> 0).toNumber() : message.sentAt;
            if (message.countdownNanos != null && message.hasOwnProperty("countdownNanos"))
                if (typeof message.countdownNanos === "number")
                    object.countdownNanos = options.longs === String ? String(message.countdownNanos) : message.countdownNanos;
                else
                    object.countdownNanos = options.longs === String ? $util.Long.prototype.toString.call(message.countdownNanos) : options.longs === Number ? new $util.LongBits(message.countdownNanos.low >>> 0, message.countdownNanos.high >>> 0).toNumber() : message.countdownNanos;
            if (message.treasures && (keys2 = Object.keys(message.treasures)).length) {
                object.treasures = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.treasures[keys2[j]] = $root.models.Treasure.toObject(message.treasures[keys2[j]], options);
            }
            if (message.traps && (keys2 = Object.keys(message.traps)).length) {
                object.traps = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.traps[keys2[j]] = $root.models.Trap.toObject(message.traps[keys2[j]], options);
            }
            if (message.bullets && (keys2 = Object.keys(message.bullets)).length) {
                object.bullets = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.bullets[keys2[j]] = $root.models.Bullet.toObject(message.bullets[keys2[j]], options);
            }
            if (message.speedShoes && (keys2 = Object.keys(message.speedShoes)).length) {
                object.speedShoes = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.speedShoes[keys2[j]] = $root.models.SpeedShoes.toObject(message.speedShoes[keys2[j]], options);
            }
            if (message.pumpkin && (keys2 = Object.keys(message.pumpkin)).length) {
                object.pumpkin = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.pumpkin[keys2[j]] = $root.models.Pumpkin.toObject(message.pumpkin[keys2[j]], options);
            }
            if (message.guardTowers && (keys2 = Object.keys(message.guardTowers)).length) {
                object.guardTowers = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.guardTowers[keys2[j]] = $root.models.GuardTower.toObject(message.guardTowers[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this RoomDownsyncFrame to JSON.
         * @function toJSON
         * @memberof models.RoomDownsyncFrame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomDownsyncFrame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomDownsyncFrame;
    })();

    return models;
})();