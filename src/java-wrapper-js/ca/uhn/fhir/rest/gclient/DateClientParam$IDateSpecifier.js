"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateClientParam$IDateSpecifier = exports.createDateClientParam$IDateSpecifierProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link DateClientParam$IDateSpecifier} interface.
 * All required methods in {@link DateClientParam$IDateSpecifierInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createDateClientParam$IDateSpecifierProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('ca.uhn.fhir.rest.gclient.DateClientParam$IDateSpecifier', methods, opts);
}
exports.createDateClientParam$IDateSpecifierProxy = createDateClientParam$IDateSpecifierProxy;
/**
 * Class ca.uhn.fhir.rest.gclient.DateClientParam$IDateSpecifier.
 *
 * This actually imports the java class for further use.
 * The class {@link DateClientParam$IDateSpecifierClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class DateClientParam$IDateSpecifier extends (0, java_bridge_1.importClass)('ca.uhn.fhir.rest.gclient.DateClientParam$IDateSpecifier') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.DateClientParam$IDateSpecifier = DateClientParam$IDateSpecifier;
exports.default = DateClientParam$IDateSpecifier;
//# sourceMappingURL=DateClientParam$IDateSpecifier.js.map