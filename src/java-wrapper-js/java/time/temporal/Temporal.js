"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Temporal = exports.createTemporalProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link Temporal} interface.
 * All required methods in {@link TemporalInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createTemporalProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.time.temporal.Temporal', methods, opts);
}
exports.createTemporalProxy = createTemporalProxy;
/**
 * Class java.time.temporal.Temporal.
 *
 * This actually imports the java class for further use.
 * The class {@link TemporalClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class Temporal extends (0, java_bridge_1.importClass)('java.time.temporal.Temporal') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.Temporal = Temporal;
exports.default = Temporal;
//# sourceMappingURL=Temporal.js.map