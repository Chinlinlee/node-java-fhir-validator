"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checksum = exports.createChecksumProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link Checksum} interface.
 * All required methods in {@link ChecksumInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createChecksumProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.util.zip.Checksum', methods, opts);
}
exports.createChecksumProxy = createChecksumProxy;
/**
 * Class java.util.zip.Checksum.
 *
 * This actually imports the java class for further use.
 * The class {@link ChecksumClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Checksum extends (0, java_bridge_1.importClass)('java.util.zip.Checksum') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Checksum = Checksum;
exports.default = Checksum;
//# sourceMappingURL=Checksum.js.map