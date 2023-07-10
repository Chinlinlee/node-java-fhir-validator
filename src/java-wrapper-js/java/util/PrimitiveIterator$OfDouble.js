"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimitiveIterator$OfDouble = exports.createPrimitiveIterator$OfDoubleProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link PrimitiveIterator$OfDouble} interface.
 * All required methods in {@link PrimitiveIterator$OfDoubleInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createPrimitiveIterator$OfDoubleProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.util.PrimitiveIterator$OfDouble', methods, opts);
}
exports.createPrimitiveIterator$OfDoubleProxy = createPrimitiveIterator$OfDoubleProxy;
/**
 * Class java.util.PrimitiveIterator$OfDouble.
 *
 * This actually imports the java class for further use.
 * The class {@link PrimitiveIterator$OfDoubleClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class PrimitiveIterator$OfDouble extends (0, java_bridge_1.importClass)('java.util.PrimitiveIterator$OfDouble') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.PrimitiveIterator$OfDouble = PrimitiveIterator$OfDouble;
exports.default = PrimitiveIterator$OfDouble;
//# sourceMappingURL=PrimitiveIterator$OfDouble.js.map