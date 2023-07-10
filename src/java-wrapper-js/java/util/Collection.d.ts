import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { IntFunction as java_util_function_IntFunction, IntFunctionInterface as java_util_function_IntFunctionInterface } from "./function/IntFunction";
import { Iterator as java_util_Iterator } from "./Iterator";
import { Stream as java_util_stream_Stream } from "./stream/Stream";
import { Spliterator as java_util_Spliterator } from "./Spliterator";
import { Predicate as java_util_function_Predicate, PredicateInterface as java_util_function_PredicateInterface } from "./function/Predicate";
import { Consumer as java_util_function_Consumer, ConsumerInterface as java_util_function_ConsumerInterface } from "./function/Consumer";
/**
 * This class just defines types, you should import {@link Collection} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class CollectionClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    add(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    addSync(var0: BasicOrJavaType | null): boolean;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    remove(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    removeSync(var0: BasicOrJavaType | null): boolean;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    equals(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    equalsSync(var0: BasicOrJavaType | null): boolean;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @return original return type: 'void'
     */
    clear(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    clearSync(): void;
    /**
     * @return original return type: 'boolean'
     */
    isEmpty(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isEmptySync(): boolean;
    /**
     * @return original return type: 'int'
     */
    size(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    sizeSync(): number;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object[]'
     */
    toArray(var0: (BasicOrJavaType | null)[] | null): Promise<(BasicOrJavaType | null)[] | null>;
    /**
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object[]'
     */
    toArraySync(var0: (BasicOrJavaType | null)[] | null): (BasicOrJavaType | null)[] | null;
    /**
     * @param var0 original type: 'java.util.function.IntFunction'
     * @return original return type: 'java.lang.Object[]'
     */
    toArray(var0: java_util_function_IntFunction | JavaInterfaceProxy<java_util_function_IntFunctionInterface> | null): Promise<(BasicOrJavaType | null)[] | null>;
    /**
     * @param var0 original type: 'java.util.function.IntFunction'
     * @return original return type: 'java.lang.Object[]'
     */
    toArraySync(var0: java_util_function_IntFunction | JavaInterfaceProxy<java_util_function_IntFunctionInterface> | null): (BasicOrJavaType | null)[] | null;
    /**
     * @return original return type: 'java.lang.Object[]'
     */
    toArray(): Promise<(BasicOrJavaType | null)[] | null>;
    /**
     * @return original return type: 'java.lang.Object[]'
     */
    toArraySync(): (BasicOrJavaType | null)[] | null;
    /**
     * @return original return type: 'java.util.Iterator'
     */
    iterator(): Promise<java_util_Iterator | null>;
    /**
     * @return original return type: 'java.util.Iterator'
     */
    iteratorSync(): java_util_Iterator | null;
    /**
     * @return original return type: 'java.util.stream.Stream'
     */
    stream(): Promise<java_util_stream_Stream | null>;
    /**
     * @return original return type: 'java.util.stream.Stream'
     */
    streamSync(): java_util_stream_Stream | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    contains(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    containsSync(var0: BasicOrJavaType | null): boolean;
    /**
     * @return original return type: 'java.util.Spliterator'
     */
    spliterator(): Promise<java_util_Spliterator | null>;
    /**
     * @return original return type: 'java.util.Spliterator'
     */
    spliteratorSync(): java_util_Spliterator | null;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    addAll(var0: CollectionClass | JavaInterfaceProxy<CollectionInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    addAllSync(var0: CollectionClass | JavaInterfaceProxy<CollectionInterface> | null): boolean;
    /**
     * @param var0 original type: 'java.util.function.Predicate'
     * @return original return type: 'boolean'
     */
    removeIf(var0: java_util_function_Predicate | JavaInterfaceProxy<java_util_function_PredicateInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.function.Predicate'
     * @return original return type: 'boolean'
     */
    removeIfSync(var0: java_util_function_Predicate | JavaInterfaceProxy<java_util_function_PredicateInterface> | null): boolean;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    removeAll(var0: CollectionClass | JavaInterfaceProxy<CollectionInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    removeAllSync(var0: CollectionClass | JavaInterfaceProxy<CollectionInterface> | null): boolean;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    retainAll(var0: CollectionClass | JavaInterfaceProxy<CollectionInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    retainAllSync(var0: CollectionClass | JavaInterfaceProxy<CollectionInterface> | null): boolean;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    containsAll(var0: CollectionClass | JavaInterfaceProxy<CollectionInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    containsAllSync(var0: CollectionClass | JavaInterfaceProxy<CollectionInterface> | null): boolean;
    /**
     * @return original return type: 'java.util.stream.Stream'
     */
    parallelStream(): Promise<java_util_stream_Stream | null>;
    /**
     * @return original return type: 'java.util.stream.Stream'
     */
    parallelStreamSync(): java_util_stream_Stream | null;
    /**
     * @param var0 original type: 'java.util.function.Consumer'
     * @return original return type: 'void'
     */
    forEach(var0: java_util_function_Consumer | JavaInterfaceProxy<java_util_function_ConsumerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.function.Consumer'
     * @return original return type: 'void'
     */
    forEachSync(var0: java_util_function_Consumer | JavaInterfaceProxy<java_util_function_ConsumerInterface> | null): void;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createCollectionProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface CollectionInterface {
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    add(var0: BasicOrJavaType | null): boolean;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    remove(var0: BasicOrJavaType | null): boolean;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    equals(var0: BasicOrJavaType | null): boolean;
    /**
     * @return original return type: 'int'
     */
    hashCode(): number;
    /**
     * @return original return type: 'void'
     */
    clear(): void;
    /**
     * @return original return type: 'boolean'
     */
    isEmpty(): boolean;
    /**
     * @return original return type: 'int'
     */
    size(): number;
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @param var0 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.Object[]'
     */
    toArray?(var0: (BasicOrJavaType | null)[] | null): (BasicOrJavaType | null)[] | null;
    /**
     * @param var0 original type: 'java.util.function.IntFunction'
     * @return original return type: 'java.lang.Object[]'
     */
    toArray?(var0: java_util_function_IntFunction | JavaInterfaceProxy<java_util_function_IntFunctionInterface> | null): (BasicOrJavaType | null)[] | null;
    /**
     * **Note: Although this method is marked as optional, it actually must be implemented.**
     *
     * @return original return type: 'java.lang.Object[]'
     */
    toArray?(): (BasicOrJavaType | null)[] | null;
    /**
     * @return original return type: 'java.util.Iterator'
     */
    iterator(): java_util_Iterator | null;
    /**
     * @return original return type: 'java.util.stream.Stream'
     */
    stream?(): java_util_stream_Stream | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    contains(var0: BasicOrJavaType | null): boolean;
    /**
     * @return original return type: 'java.util.Spliterator'
     */
    spliterator?(): java_util_Spliterator | null;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    addAll(var0: CollectionClass | JavaInterfaceProxy<CollectionInterface> | null): boolean;
    /**
     * @param var0 original type: 'java.util.function.Predicate'
     * @return original return type: 'boolean'
     */
    removeIf?(var0: java_util_function_Predicate | JavaInterfaceProxy<java_util_function_PredicateInterface> | null): boolean;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    removeAll(var0: CollectionClass | JavaInterfaceProxy<CollectionInterface> | null): boolean;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    retainAll(var0: CollectionClass | JavaInterfaceProxy<CollectionInterface> | null): boolean;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'boolean'
     */
    containsAll(var0: CollectionClass | JavaInterfaceProxy<CollectionInterface> | null): boolean;
    /**
     * @return original return type: 'java.util.stream.Stream'
     */
    parallelStream?(): java_util_stream_Stream | null;
    /**
     * @param var0 original type: 'java.util.function.Consumer'
     * @return original return type: 'void'
     */
    forEach?(var0: java_util_function_Consumer | JavaInterfaceProxy<java_util_function_ConsumerInterface> | null): void;
}
/**
 * Create a proxy for the {@link Collection} interface.
 * All required methods in {@link CollectionInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createCollectionProxy(methods: CollectionInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<CollectionInterface>;
declare const Collection_base: typeof CollectionClass;
/**
 * Class java.util.Collection.
 *
 * This actually imports the java class for further use.
 * The class {@link CollectionClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Collection extends Collection_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default Collection;
//# sourceMappingURL=Collection.d.ts.map