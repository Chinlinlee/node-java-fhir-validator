"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimitiveIterator$OfLong = exports.createPrimitiveIterator$OfLongProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link PrimitiveIterator$OfLong} interface.
 * All required methods in {@link PrimitiveIterator$OfLongInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createPrimitiveIterator$OfLongProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.util.PrimitiveIterator$OfLong', methods, opts);
}
exports.createPrimitiveIterator$OfLongProxy = createPrimitiveIterator$OfLongProxy;
/**
 * Class java.util.PrimitiveIterator$OfLong.
 *
 * This actually imports the java class for further use.
 * The class {@link PrimitiveIterator$OfLongClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class PrimitiveIterator$OfLong extends (0, java_bridge_1.importClass)('java.util.PrimitiveIterator$OfLong') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.PrimitiveIterator$OfLong = PrimitiveIterator$OfLong;
exports.default = PrimitiveIterator$OfLong;
//# sourceMappingURL=PrimitiveIterator$OfLong.js.map