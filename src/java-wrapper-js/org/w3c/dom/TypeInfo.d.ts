import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
/**
 * This class just defines types, you should import {@link TypeInfo} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class TypeInfoClass extends JavaClass {
    /**
     * Original type: 'int'
     */
    static readonly DERIVATION_RESTRICTION: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly DERIVATION_EXTENSION: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly DERIVATION_UNION: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly DERIVATION_LIST: java_lang_Integer | number;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTypeName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTypeNameSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTypeNamespace(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTypeNamespaceSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'int'
     * @return original return type: 'boolean'
     */
    isDerivedFrom(var0: string | null, var1: string | null, var2: java_lang_Integer | number): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'int'
     * @return original return type: 'boolean'
     */
    isDerivedFromSync(var0: string | null, var1: string | null, var2: java_lang_Integer | number): boolean;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createTypeInfoProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface TypeInfoInterface {
    /**
     * @return original return type: 'java.lang.String'
     */
    getTypeName(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTypeNamespace(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'int'
     * @return original return type: 'boolean'
     */
    isDerivedFrom(var0: string | null, var1: string | null, var2: java_lang_Integer | number): boolean;
}
/**
 * Create a proxy for the {@link TypeInfo} interface.
 * All required methods in {@link TypeInfoInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createTypeInfoProxy(methods: TypeInfoInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<TypeInfoInterface>;
declare const TypeInfo_base: typeof TypeInfoClass;
/**
 * Class org.w3c.dom.TypeInfo.
 *
 * This actually imports the java class for further use.
 * The class {@link TypeInfoClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class TypeInfo extends TypeInfo_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default TypeInfo;
//# sourceMappingURL=TypeInfo.d.ts.map