"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMetaAddOrDeleteSourced = exports.createIMetaAddOrDeleteSourcedProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link IMetaAddOrDeleteSourced} interface.
 * All required methods in {@link IMetaAddOrDeleteSourcedInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createIMetaAddOrDeleteSourcedProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('ca.uhn.fhir.rest.gclient.IMetaAddOrDeleteSourced', methods, opts);
}
exports.createIMetaAddOrDeleteSourcedProxy = createIMetaAddOrDeleteSourcedProxy;
/**
 * Class ca.uhn.fhir.rest.gclient.IMetaAddOrDeleteSourced.
 *
 * This actually imports the java class for further use.
 * The class {@link IMetaAddOrDeleteSourcedClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class IMetaAddOrDeleteSourced extends (0, java_bridge_1.importClass)('ca.uhn.fhir.rest.gclient.IMetaAddOrDeleteSourced') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.IMetaAddOrDeleteSourced = IMetaAddOrDeleteSourced;
exports.default = IMetaAddOrDeleteSourced;
//# sourceMappingURL=IMetaAddOrDeleteSourced.js.map