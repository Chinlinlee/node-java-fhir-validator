"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IParserErrorHandler$IParseLocation = exports.createIParserErrorHandler$IParseLocationProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link IParserErrorHandler$IParseLocation} interface.
 * All required methods in {@link IParserErrorHandler$IParseLocationInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createIParserErrorHandler$IParseLocationProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('ca.uhn.fhir.parser.IParserErrorHandler$IParseLocation', methods, opts);
}
exports.createIParserErrorHandler$IParseLocationProxy = createIParserErrorHandler$IParseLocationProxy;
/**
 * Class ca.uhn.fhir.parser.IParserErrorHandler$IParseLocation.
 *
 * This actually imports the java class for further use.
 * The class {@link IParserErrorHandler$IParseLocationClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class IParserErrorHandler$IParseLocation extends (0, java_bridge_1.importClass)('ca.uhn.fhir.parser.IParserErrorHandler$IParseLocation') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.IParserErrorHandler$IParseLocation = IParserErrorHandler$IParseLocation;
exports.default = IParserErrorHandler$IParseLocation;
//# sourceMappingURL=IParserErrorHandler$IParseLocation.js.map