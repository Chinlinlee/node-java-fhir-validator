"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPointcut = exports.createIPointcutProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link IPointcut} interface.
 * All required methods in {@link IPointcutInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createIPointcutProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('ca.uhn.fhir.interceptor.api.IPointcut', methods, opts);
}
exports.createIPointcutProxy = createIPointcutProxy;
/**
 * Class ca.uhn.fhir.interceptor.api.IPointcut.
 *
 * This actually imports the java class for further use.
 * The class {@link IPointcutClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class IPointcut extends (0, java_bridge_1.importClass)('ca.uhn.fhir.interceptor.api.IPointcut') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.IPointcut = IPointcut;
exports.default = IPointcut;
//# sourceMappingURL=IPointcut.js.map