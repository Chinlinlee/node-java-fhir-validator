import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../../../java/util/List";
import { IValidationSupport$IssueSeverity as ca_uhn_fhir_context_support_IValidationSupport$IssueSeverity } from "./IValidationSupport$IssueSeverity";
import { IValidationSupport$LookupCodeResult as ca_uhn_fhir_context_support_IValidationSupport$LookupCodeResult } from "./IValidationSupport$LookupCodeResult";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link IValidationSupport$CodeValidationResult} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IValidationSupport$CodeValidationResultClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.String'
     */
    getMessage(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getMessageSync(): string | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getProperties(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getPropertiesSync(): java_util_List | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'void'
     */
    setProperties(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'void'
     */
    setPropertiesSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): void;
    /**
     * @return original return type: 'ca.uhn.fhir.context.support.IValidationSupport$IssueSeverity'
     */
    getSeverity(): Promise<ca_uhn_fhir_context_support_IValidationSupport$IssueSeverity | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.support.IValidationSupport$IssueSeverity'
     */
    getSeveritySync(): ca_uhn_fhir_context_support_IValidationSupport$IssueSeverity | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.support.IValidationSupport$CodeValidationResult'
     */
    setCodeSystemName(var0: string | null): Promise<IValidationSupport$CodeValidationResult | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.support.IValidationSupport$CodeValidationResult'
     */
    setCodeSystemNameSync(var0: string | null): IValidationSupport$CodeValidationResult | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.support.IValidationSupport$LookupCodeResult'
     */
    asLookupCodeResult(var0: string | null, var1: string | null): Promise<ca_uhn_fhir_context_support_IValidationSupport$LookupCodeResult | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.support.IValidationSupport$LookupCodeResult'
     */
    asLookupCodeResultSync(var0: string | null, var1: string | null): ca_uhn_fhir_context_support_IValidationSupport$LookupCodeResult | null;
    /**
     * @return original return type: 'boolean'
     */
    isOk(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isOkSync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    getSeverityCode(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getSeverityCodeSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.support.IValidationSupport$CodeValidationResult'
     */
    setSeverityCode(var0: string | null): Promise<IValidationSupport$CodeValidationResult | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.support.IValidationSupport$CodeValidationResult'
     */
    setSeverityCodeSync(var0: string | null): IValidationSupport$CodeValidationResult | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.support.IValidationSupport$CodeValidationResult'
     */
    setCodeSystemVersion(var0: string | null): Promise<IValidationSupport$CodeValidationResult | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.support.IValidationSupport$CodeValidationResult'
     */
    setCodeSystemVersionSync(var0: string | null): IValidationSupport$CodeValidationResult | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCodeSystemVersion(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCodeSystemVersionSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCode(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCodeSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getDisplay(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getDisplaySync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.support.IValidationSupport$CodeValidationResult'
     */
    setCode(var0: string | null): Promise<IValidationSupport$CodeValidationResult | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.support.IValidationSupport$CodeValidationResult'
     */
    setCodeSync(var0: string | null): IValidationSupport$CodeValidationResult | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.support.IValidationSupport$CodeValidationResult'
     */
    setDisplay(var0: string | null): Promise<IValidationSupport$CodeValidationResult | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.support.IValidationSupport$CodeValidationResult'
     */
    setDisplaySync(var0: string | null): IValidationSupport$CodeValidationResult | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.support.IValidationSupport$IssueSeverity'
     * @return original return type: 'ca.uhn.fhir.context.support.IValidationSupport$CodeValidationResult'
     */
    setSeverity(var0: ca_uhn_fhir_context_support_IValidationSupport$IssueSeverity | null): Promise<IValidationSupport$CodeValidationResult | null>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.support.IValidationSupport$IssueSeverity'
     * @return original return type: 'ca.uhn.fhir.context.support.IValidationSupport$CodeValidationResult'
     */
    setSeveritySync(var0: ca_uhn_fhir_context_support_IValidationSupport$IssueSeverity | null): IValidationSupport$CodeValidationResult | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.support.IValidationSupport$CodeValidationResult'
     */
    setMessage(var0: string | null): Promise<IValidationSupport$CodeValidationResult | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.support.IValidationSupport$CodeValidationResult'
     */
    setMessageSync(var0: string | null): IValidationSupport$CodeValidationResult | null;
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
     * @return original return type: 'ca.uhn.fhir.context.support.IValidationSupport$CodeValidationResult'
     */
    static newInstanceAsync(): Promise<IValidationSupport$CodeValidationResult>;
    constructor();
}
declare const IValidationSupport$CodeValidationResult_base: typeof IValidationSupport$CodeValidationResultClass;
/**
 * Class ca.uhn.fhir.context.support.IValidationSupport$CodeValidationResult.
 *
 * This actually imports the java class for further use.
 * The class {@link IValidationSupport$CodeValidationResultClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IValidationSupport$CodeValidationResult extends IValidationSupport$CodeValidationResult_base {
}
export default IValidationSupport$CodeValidationResult;
//# sourceMappingURL=IValidationSupport$CodeValidationResult.d.ts.map