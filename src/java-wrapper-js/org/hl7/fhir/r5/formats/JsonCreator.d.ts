import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { BigDecimal as java_math_BigDecimal } from "./../../../../../java/math/BigDecimal";
/**
 * This class just defines types, you should import {@link JsonCreator} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class JsonCreatorClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    name(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    nameSync(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    value(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    valueSync(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.Boolean'
     * @return original return type: 'void'
     */
    value(var0: java_lang_Boolean | boolean | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Boolean'
     * @return original return type: 'void'
     */
    valueSync(var0: java_lang_Boolean | boolean | null): void;
    /**
     * @param var0 original type: 'java.lang.Integer'
     * @return original return type: 'void'
     */
    value(var0: java_lang_Integer | number | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Integer'
     * @return original return type: 'void'
     */
    valueSync(var0: java_lang_Integer | number | null): void;
    /**
     * @param var0 original type: 'java.math.BigDecimal'
     * @return original return type: 'void'
     */
    value(var0: java_math_BigDecimal | null): Promise<void>;
    /**
     * @param var0 original type: 'java.math.BigDecimal'
     * @return original return type: 'void'
     */
    valueSync(var0: java_math_BigDecimal | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    comment(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    commentSync(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    anchor(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    anchorSync(var0: string | null): void;
    /**
     * @return original return type: 'void'
     */
    finish(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    finishSync(): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    link(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    linkSync(var0: string | null): void;
    /**
     * @return original return type: 'void'
     */
    beginObject(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    beginObjectSync(): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    valueNum(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    valueNumSync(var0: string | null): void;
    /**
     * @return original return type: 'void'
     */
    endObject(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    endObjectSync(): void;
    /**
     * @return original return type: 'void'
     */
    nullValue(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    nullValueSync(): void;
    /**
     * @return original return type: 'void'
     */
    endArray(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    endArraySync(): void;
    /**
     * @return original return type: 'void'
     */
    beginArray(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    beginArraySync(): void;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createJsonCreatorProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface JsonCreatorInterface {
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    name(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    value(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.Boolean'
     * @return original return type: 'void'
     */
    value(var0: java_lang_Boolean | boolean | null): void;
    /**
     * @param var0 original type: 'java.lang.Integer'
     * @return original return type: 'void'
     */
    value(var0: java_lang_Integer | number | null): void;
    /**
     * @param var0 original type: 'java.math.BigDecimal'
     * @return original return type: 'void'
     */
    value(var0: java_math_BigDecimal | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    comment(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    anchor(var0: string | null): void;
    /**
     * @return original return type: 'void'
     */
    finish(): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    link(var0: string | null): void;
    /**
     * @return original return type: 'void'
     */
    beginObject(): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    valueNum(var0: string | null): void;
    /**
     * @return original return type: 'void'
     */
    endObject(): void;
    /**
     * @return original return type: 'void'
     */
    nullValue(): void;
    /**
     * @return original return type: 'void'
     */
    endArray(): void;
    /**
     * @return original return type: 'void'
     */
    beginArray(): void;
}
/**
 * Create a proxy for the {@link JsonCreator} interface.
 * All required methods in {@link JsonCreatorInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createJsonCreatorProxy(methods: JsonCreatorInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<JsonCreatorInterface>;
declare const JsonCreator_base: typeof JsonCreatorClass;
/**
 * Class org.hl7.fhir.r5.formats.JsonCreator.
 *
 * This actually imports the java class for further use.
 * The class {@link JsonCreatorClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class JsonCreator extends JsonCreator_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default JsonCreator;
//# sourceMappingURL=JsonCreator.d.ts.map