import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { DoubleStream as java_util_stream_DoubleStream } from "./stream/DoubleStream";
import { Double as java_lang_Double } from "./../lang/Double";
import { Supplier as java_util_function_Supplier, SupplierInterface as java_util_function_SupplierInterface } from "./function/Supplier";
import { DoubleConsumer as java_util_function_DoubleConsumer, DoubleConsumerInterface as java_util_function_DoubleConsumerInterface } from "./function/DoubleConsumer";
import { Runnable as java_lang_Runnable, RunnableInterface as java_lang_RunnableInterface } from "./../lang/Runnable";
import { DoubleSupplier as java_util_function_DoubleSupplier, DoubleSupplierInterface as java_util_function_DoubleSupplierInterface } from "./function/DoubleSupplier";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { Class as java_lang_Class } from "./../lang/Class";
/**
 * This class just defines types, you should import {@link OptionalDouble} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class OptionalDoubleClass extends JavaClass {
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
     * @return original return type: 'java.lang.String'
     */
    toString(): Promise<string>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @return original return type: 'boolean'
     */
    isEmpty(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isEmptySync(): boolean;
    /**
     * @return original return type: 'java.util.stream.DoubleStream'
     */
    stream(): Promise<java_util_stream_DoubleStream | null>;
    /**
     * @return original return type: 'java.util.stream.DoubleStream'
     */
    streamSync(): java_util_stream_DoubleStream | null;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'java.util.OptionalDouble'
     */
    static of(var0: java_lang_Double | number): Promise<OptionalDouble | null>;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'java.util.OptionalDouble'
     */
    static ofSync(var0: java_lang_Double | number): OptionalDouble | null;
    /**
     * @return original return type: 'java.util.OptionalDouble'
     */
    static empty(): Promise<OptionalDouble | null>;
    /**
     * @return original return type: 'java.util.OptionalDouble'
     */
    static emptySync(): OptionalDouble | null;
    /**
     * @return original return type: 'boolean'
     */
    isPresent(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isPresentSync(): boolean;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'double'
     */
    orElse(var0: java_lang_Double | number): Promise<number>;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'double'
     */
    orElseSync(var0: java_lang_Double | number): number;
    /**
     * @param var0 original type: 'java.util.function.Supplier'
     * @return original return type: 'double'
     */
    orElseThrow(var0: java_util_function_Supplier | JavaInterfaceProxy<java_util_function_SupplierInterface> | null): Promise<number>;
    /**
     * @param var0 original type: 'java.util.function.Supplier'
     * @return original return type: 'double'
     */
    orElseThrowSync(var0: java_util_function_Supplier | JavaInterfaceProxy<java_util_function_SupplierInterface> | null): number;
    /**
     * @return original return type: 'double'
     */
    orElseThrow(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    orElseThrowSync(): number;
    /**
     * @param var0 original type: 'java.util.function.DoubleConsumer'
     * @return original return type: 'void'
     */
    ifPresent(var0: java_util_function_DoubleConsumer | JavaInterfaceProxy<java_util_function_DoubleConsumerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.function.DoubleConsumer'
     * @return original return type: 'void'
     */
    ifPresentSync(var0: java_util_function_DoubleConsumer | JavaInterfaceProxy<java_util_function_DoubleConsumerInterface> | null): void;
    /**
     * @param var0 original type: 'java.util.function.DoubleConsumer'
     * @param var1 original type: 'java.lang.Runnable'
     * @return original return type: 'void'
     */
    ifPresentOrElse(var0: java_util_function_DoubleConsumer | JavaInterfaceProxy<java_util_function_DoubleConsumerInterface> | null, var1: java_lang_Runnable | JavaInterfaceProxy<java_lang_RunnableInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.function.DoubleConsumer'
     * @param var1 original type: 'java.lang.Runnable'
     * @return original return type: 'void'
     */
    ifPresentOrElseSync(var0: java_util_function_DoubleConsumer | JavaInterfaceProxy<java_util_function_DoubleConsumerInterface> | null, var1: java_lang_Runnable | JavaInterfaceProxy<java_lang_RunnableInterface> | null): void;
    /**
     * @param var0 original type: 'java.util.function.DoubleSupplier'
     * @return original return type: 'double'
     */
    orElseGet(var0: java_util_function_DoubleSupplier | JavaInterfaceProxy<java_util_function_DoubleSupplierInterface> | null): Promise<number>;
    /**
     * @param var0 original type: 'java.util.function.DoubleSupplier'
     * @return original return type: 'double'
     */
    orElseGetSync(var0: java_util_function_DoubleSupplier | JavaInterfaceProxy<java_util_function_DoubleSupplierInterface> | null): number;
    /**
     * @return original return type: 'double'
     */
    getAsDouble(): Promise<number>;
    /**
     * @return original return type: 'double'
     */
    getAsDoubleSync(): number;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    wait(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    waitSync(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): void;
    /**
     * @return original return type: 'void'
     */
    wait(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    waitSync(): void;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    wait(var0: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    waitSync(var0: java_lang_Long | bigint | number): void;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
}
declare const OptionalDouble_base: typeof OptionalDoubleClass;
/**
 * Class java.util.OptionalDouble.
 *
 * This actually imports the java class for further use.
 * The class {@link OptionalDoubleClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class OptionalDouble extends OptionalDouble_base {
}
export default OptionalDouble;
//# sourceMappingURL=OptionalDouble.d.ts.map