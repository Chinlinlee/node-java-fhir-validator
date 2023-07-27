"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerSocketChannel = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Class java.nio.channels.ServerSocketChannel.
 *
 * This actually imports the java class for further use.
 * The class {@link ServerSocketChannelClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class ServerSocketChannel extends (0, java_bridge_1.importClass)('java.nio.channels.ServerSocketChannel') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.ServerSocketChannel = ServerSocketChannel;
exports.default = ServerSocketChannel;
//# sourceMappingURL=ServerSocketChannel.js.map