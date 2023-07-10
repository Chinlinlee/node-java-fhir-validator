"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeVariable = exports.createTypeVariableProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link TypeVariable} interface.
 * All required methods in {@link TypeVariableInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createTypeVariableProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.lang.reflect.TypeVariable', methods, opts);
}
exports.createTypeVariableProxy = createTypeVariableProxy;
/**
 * Class java.lang.reflect.TypeVariable.
 *
 * This actually imports the java class for further use.
 * The class {@link TypeVariableClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class TypeVariable extends (0, java_bridge_1.importClass)('java.lang.reflect.TypeVariable') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.TypeVariable = TypeVariable;
exports.default = TypeVariable;
//# sourceMappingURL=TypeVariable.js.map