import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { TemporalField as java_time_temporal_TemporalField, TemporalFieldInterface as java_time_temporal_TemporalFieldInterface } from "./TemporalField";
import { TemporalQuery as java_time_temporal_TemporalQuery, TemporalQueryInterface as java_time_temporal_TemporalQueryInterface } from "./TemporalQuery";
import { ValueRange as java_time_temporal_ValueRange } from "./ValueRange";
/**
 * This class just defines types, you should import {@link TemporalAccessor} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class TemporalAccessorClass extends JavaClass {
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'int'
     */
    get(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null): Promise<number>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'int'
     */
    getSync(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null): number;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'long'
     */
    getLong(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null): Promise<number>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'long'
     */
    getLongSync(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null): number;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalQuery'
     * @return original return type: 'java.lang.Object'
     */
    query(var0: java_time_temporal_TemporalQuery | JavaInterfaceProxy<java_time_temporal_TemporalQueryInterface> | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalQuery'
     * @return original return type: 'java.lang.Object'
     */
    querySync(var0: java_time_temporal_TemporalQuery | JavaInterfaceProxy<java_time_temporal_TemporalQueryInterface> | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'java.time.temporal.ValueRange'
     */
    range(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null): Promise<java_time_temporal_ValueRange | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'java.time.temporal.ValueRange'
     */
    rangeSync(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null): java_time_temporal_ValueRange | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'boolean'
     */
    isSupported(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'boolean'
     */
    isSupportedSync(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null): boolean;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createTemporalAccessorProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface TemporalAccessorInterface {
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'int'
     */
    get?(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null): number;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'long'
     */
    getLong(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null): number;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalQuery'
     * @return original return type: 'java.lang.Object'
     */
    query?(var0: java_time_temporal_TemporalQuery | JavaInterfaceProxy<java_time_temporal_TemporalQueryInterface> | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'java.time.temporal.ValueRange'
     */
    range?(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null): java_time_temporal_ValueRange | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField'
     * @return original return type: 'boolean'
     */
    isSupported(var0: java_time_temporal_TemporalField | JavaInterfaceProxy<java_time_temporal_TemporalFieldInterface> | null): boolean;
}
/**
 * Create a proxy for the {@link TemporalAccessor} interface.
 * All required methods in {@link TemporalAccessorInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createTemporalAccessorProxy(methods: TemporalAccessorInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<TemporalAccessorInterface>;
declare const TemporalAccessor_base: typeof TemporalAccessorClass;
/**
 * Class java.time.temporal.TemporalAccessor.
 *
 * This actually imports the java class for further use.
 * The class {@link TemporalAccessorClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class TemporalAccessor extends TemporalAccessor_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default TemporalAccessor;
//# sourceMappingURL=TemporalAccessor.d.ts.map