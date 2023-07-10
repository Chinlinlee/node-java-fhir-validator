"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntStream$IntMapMultiConsumer = exports.createIntStream$IntMapMultiConsumerProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link IntStream$IntMapMultiConsumer} interface.
 * All required methods in {@link IntStream$IntMapMultiConsumerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createIntStream$IntMapMultiConsumerProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('java.util.stream.IntStream$IntMapMultiConsumer', methods, opts);
}
exports.createIntStream$IntMapMultiConsumerProxy = createIntStream$IntMapMultiConsumerProxy;
/**
 * Class java.util.stream.IntStream$IntMapMultiConsumer.
 *
 * This actually imports the java class for further use.
 * The class {@link IntStream$IntMapMultiConsumerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class IntStream$IntMapMultiConsumer extends (0, java_bridge_1.importClass)('java.util.stream.IntStream$IntMapMultiConsumer') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.IntStream$IntMapMultiConsumer = IntStream$IntMapMultiConsumer;
exports.default = IntStream$IntMapMultiConsumer;
//# sourceMappingURL=IntStream$IntMapMultiConsumer.js.map