import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Enum as java_lang_Enum } from "./../../../../../java/lang/Enum";
/**
 * This class just defines types, you should import {@link IValueSetEnumBinder} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IValueSetEnumBinderClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.Enum'
     * @return original return type: 'java.lang.String'
     */
    toSystemString(var0: java_lang_Enum | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.Enum'
     * @return original return type: 'java.lang.String'
     */
    toSystemStringSync(var0: java_lang_Enum | null): string | null;
    /**
     * @param var0 original type: 'java.lang.Enum'
     * @return original return type: 'java.lang.String'
     */
    toCodeString(var0: java_lang_Enum | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.Enum'
     * @return original return type: 'java.lang.String'
     */
    toCodeStringSync(var0: java_lang_Enum | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Enum'
     */
    fromCodeString(var0: string | null, var1: string | null): Promise<java_lang_Enum | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Enum'
     */
    fromCodeStringSync(var0: string | null, var1: string | null): java_lang_Enum | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Enum'
     */
    fromCodeString(var0: string | null): Promise<java_lang_Enum | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Enum'
     */
    fromCodeStringSync(var0: string | null): java_lang_Enum | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createIValueSetEnumBinderProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface IValueSetEnumBinderInterface {
    /**
     * @param var0 original type: 'java.lang.Enum'
     * @return original return type: 'java.lang.String'
     */
    toSystemString(var0: java_lang_Enum | null): string | null;
    /**
     * @param var0 original type: 'java.lang.Enum'
     * @return original return type: 'java.lang.String'
     */
    toCodeString(var0: java_lang_Enum | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Enum'
     */
    fromCodeString(var0: string | null, var1: string | null): java_lang_Enum | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Enum'
     */
    fromCodeString(var0: string | null): java_lang_Enum | null;
}
/**
 * Create a proxy for the {@link IValueSetEnumBinder} interface.
 * All required methods in {@link IValueSetEnumBinderInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createIValueSetEnumBinderProxy(methods: IValueSetEnumBinderInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<IValueSetEnumBinderInterface>;
declare const IValueSetEnumBinder_base: typeof IValueSetEnumBinderClass;
/**
 * Class ca.uhn.fhir.model.api.IValueSetEnumBinder.
 *
 * This actually imports the java class for further use.
 * The class {@link IValueSetEnumBinderClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IValueSetEnumBinder extends IValueSetEnumBinder_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default IValueSetEnumBinder;
//# sourceMappingURL=IValueSetEnumBinder.d.ts.map