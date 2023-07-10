"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBaseCoding = exports.createIBaseCodingProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link IBaseCoding} interface.
 * All required methods in {@link IBaseCodingInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createIBaseCodingProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('org.hl7.fhir.instance.model.api.IBaseCoding', methods, opts);
}
exports.createIBaseCodingProxy = createIBaseCodingProxy;
/**
 * Class org.hl7.fhir.instance.model.api.IBaseCoding.
 *
 * This actually imports the java class for further use.
 * The class {@link IBaseCodingClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class IBaseCoding extends (0, java_bridge_1.importClass)('org.hl7.fhir.instance.model.api.IBaseCoding') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.IBaseCoding = IBaseCoding;
exports.default = IBaseCoding;
//# sourceMappingURL=IBaseCoding.js.map