"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LongSupplier = exports.createLongSupplierProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link LongSupplier} interface.
 * All required methods in {@link LongSupplierInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createLongSupplierProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.util.function.LongSupplier', methods, opts);
}
exports.createLongSupplierProxy = createLongSupplierProxy;
/**
 * Class java.util.function.LongSupplier.
 *
 * This actually imports the java class for further use.
 * The class {@link LongSupplierClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class LongSupplier extends (0, java_bridge_1.importClass)('java.util.function.LongSupplier') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.LongSupplier = LongSupplier;
exports.default = LongSupplier;
//# sourceMappingURL=LongSupplier.js.map