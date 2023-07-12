import { JavaClass, BasicOrJavaType } from "java-bridge";
import { BaseRuntimeChildDefinition$IAccessor as ca_uhn_fhir_context_BaseRuntimeChildDefinition$IAccessor } from "./BaseRuntimeChildDefinition$IAccessor";
import { BaseRuntimeElementDefinition as ca_uhn_fhir_context_BaseRuntimeElementDefinition } from "./BaseRuntimeElementDefinition";
import { Class as java_lang_Class } from "./../../../../java/lang/Class";
import { Set as java_util_Set } from "./../../../../java/util/Set";
import { BaseRuntimeChildDefinition$IMutator as ca_uhn_fhir_context_BaseRuntimeChildDefinition$IMutator } from "./BaseRuntimeChildDefinition$IMutator";
import { Long as java_lang_Long } from "./../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../java/lang/Integer";
/**
 * This class just defines types, you should import {@link BaseRuntimeChildDefinition} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class BaseRuntimeChildDefinitionClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): Promise<string>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @return original return type: 'ca.uhn.fhir.context.BaseRuntimeChildDefinition$IAccessor'
     */
    getAccessor(): Promise<ca_uhn_fhir_context_BaseRuntimeChildDefinition$IAccessor | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.BaseRuntimeChildDefinition$IAccessor'
     */
    getAccessorSync(): ca_uhn_fhir_context_BaseRuntimeChildDefinition$IAccessor | null;
    /**
     * @return original return type: 'int'
     */
    getMin(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getMinSync(): number;
    /**
     * @return original return type: 'int'
     */
    getMax(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getMaxSync(): number;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'ca.uhn.fhir.context.BaseRuntimeElementDefinition'
     */
    getChildElementDefinitionByDatatype(var0: java_lang_Class | null): Promise<ca_uhn_fhir_context_BaseRuntimeElementDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'ca.uhn.fhir.context.BaseRuntimeElementDefinition'
     */
    getChildElementDefinitionByDatatypeSync(var0: java_lang_Class | null): ca_uhn_fhir_context_BaseRuntimeElementDefinition | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.BaseRuntimeChildDefinition'
     * @return original return type: 'void'
     */
    setReplacedParentDefinition(var0: BaseRuntimeChildDefinitionClass | null): Promise<void>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.BaseRuntimeChildDefinition'
     * @return original return type: 'void'
     */
    setReplacedParentDefinitionSync(var0: BaseRuntimeChildDefinitionClass | null): void;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.String'
     */
    getChildNameByDatatype(var0: java_lang_Class | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.lang.String'
     */
    getChildNameByDatatypeSync(var0: java_lang_Class | null): string | null;
    /**
     * @return original return type: 'java.lang.Object'
     */
    getInstanceConstructorArguments(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    getInstanceConstructorArgumentsSync(): BasicOrJavaType | null;
    /**
     * @return original return type: 'ca.uhn.fhir.context.BaseRuntimeChildDefinition'
     */
    getReplacedParentDefinition(): Promise<BaseRuntimeChildDefinition | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.BaseRuntimeChildDefinition'
     */
    getReplacedParentDefinitionSync(): BaseRuntimeChildDefinition | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.BaseRuntimeElementDefinition'
     */
    getChildByName(var0: string | null): Promise<ca_uhn_fhir_context_BaseRuntimeElementDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.BaseRuntimeElementDefinition'
     */
    getChildByNameSync(var0: string | null): ca_uhn_fhir_context_BaseRuntimeElementDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    isSummary(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isSummarySync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    getExtensionUrl(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getExtensionUrlSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getElementName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getElementNameSync(): string | null;
    /**
     * @return original return type: 'java.util.Set'
     */
    getValidChildNames(): Promise<java_util_Set | null>;
    /**
     * @return original return type: 'java.util.Set'
     */
    getValidChildNamesSync(): java_util_Set | null;
    /**
     * @return original return type: 'ca.uhn.fhir.context.BaseRuntimeChildDefinition$IMutator'
     */
    getMutator(): Promise<ca_uhn_fhir_context_BaseRuntimeChildDefinition$IMutator | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.BaseRuntimeChildDefinition$IMutator'
     */
    getMutatorSync(): ca_uhn_fhir_context_BaseRuntimeChildDefinition$IMutator | null;
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
}
declare const BaseRuntimeChildDefinition_base: typeof BaseRuntimeChildDefinitionClass;
/**
 * Class ca.uhn.fhir.context.BaseRuntimeChildDefinition.
 *
 * This actually imports the java class for further use.
 * The class {@link BaseRuntimeChildDefinitionClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class BaseRuntimeChildDefinition extends BaseRuntimeChildDefinition_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default BaseRuntimeChildDefinition;
//# sourceMappingURL=BaseRuntimeChildDefinition.d.ts.map