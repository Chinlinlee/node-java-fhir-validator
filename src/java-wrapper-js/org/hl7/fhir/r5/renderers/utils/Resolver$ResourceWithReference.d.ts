import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { BaseWrappers$ResourceWrapper as org_hl7_fhir_r5_renderers_utils_BaseWrappers$ResourceWrapper, BaseWrappers$ResourceWrapperInterface as org_hl7_fhir_r5_renderers_utils_BaseWrappers$ResourceWrapperInterface } from "./BaseWrappers$ResourceWrapper";
import { Long as java_lang_Long } from "./../../../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../../../java/lang/Integer";
import { Class as java_lang_Class } from "./../../../../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link Resolver$ResourceWithReference} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Resolver$ResourceWithReferenceClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.String'
     */
    getReference(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getReferenceSync(): string | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.renderers.utils.BaseWrappers$ResourceWrapper'
     */
    getResource(): Promise<org_hl7_fhir_r5_renderers_utils_BaseWrappers$ResourceWrapper | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.renderers.utils.BaseWrappers$ResourceWrapper'
     */
    getResourceSync(): org_hl7_fhir_r5_renderers_utils_BaseWrappers$ResourceWrapper | null;
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
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.r5.renderers.utils.BaseWrappers$ResourceWrapper'
     * @return original return type: 'org.hl7.fhir.r5.renderers.utils.Resolver$ResourceWithReference'
     */
    static newInstanceAsync(var0: string | null, var1: org_hl7_fhir_r5_renderers_utils_BaseWrappers$ResourceWrapper | JavaInterfaceProxy<org_hl7_fhir_r5_renderers_utils_BaseWrappers$ResourceWrapperInterface> | null): Promise<Resolver$ResourceWithReference>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.r5.renderers.utils.BaseWrappers$ResourceWrapper'
     */
    constructor(var0: string | null, var1: org_hl7_fhir_r5_renderers_utils_BaseWrappers$ResourceWrapper | JavaInterfaceProxy<org_hl7_fhir_r5_renderers_utils_BaseWrappers$ResourceWrapperInterface> | null);
}
declare const Resolver$ResourceWithReference_base: typeof Resolver$ResourceWithReferenceClass;
/**
 * Class org.hl7.fhir.r5.renderers.utils.Resolver$ResourceWithReference.
 *
 * This actually imports the java class for further use.
 * The class {@link Resolver$ResourceWithReferenceClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Resolver$ResourceWithReference extends Resolver$ResourceWithReference_base {
}
export default Resolver$ResourceWithReference;
//# sourceMappingURL=Resolver$ResourceWithReference.d.ts.map