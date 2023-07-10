import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { FhirContext as ca_uhn_fhir_context_FhirContext } from "./../context/FhirContext";
import { List as java_util_List } from "./../../../../java/util/List";
import { ValidationResult as ca_uhn_fhir_validation_ValidationResult } from "./ValidationResult";
import { SingleValidationMessage as ca_uhn_fhir_validation_SingleValidationMessage } from "./SingleValidationMessage";
import { EncodingEnum as ca_uhn_fhir_rest_api_EncodingEnum } from "./../rest/api/EncodingEnum";
import { ValidationOptions as ca_uhn_fhir_validation_ValidationOptions } from "./ValidationOptions";
/**
 * This class just defines types, you should import {@link IValidationContext} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IValidationContextClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.Object'
     */
    getResource(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    getResourceSync(): BasicOrJavaType | null;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    getFhirContext(): Promise<ca_uhn_fhir_context_FhirContext | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    getFhirContextSync(): ca_uhn_fhir_context_FhirContext | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getMessages(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getMessagesSync(): java_util_List | null;
    /**
     * @return original return type: 'ca.uhn.fhir.validation.ValidationResult'
     */
    toResult(): Promise<ca_uhn_fhir_validation_ValidationResult | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.validation.ValidationResult'
     */
    toResultSync(): ca_uhn_fhir_validation_ValidationResult | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.validation.SingleValidationMessage'
     * @return original return type: 'void'
     */
    addValidationMessage(var0: ca_uhn_fhir_validation_SingleValidationMessage | null): Promise<void>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.validation.SingleValidationMessage'
     * @return original return type: 'void'
     */
    addValidationMessageSync(var0: ca_uhn_fhir_validation_SingleValidationMessage | null): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getResourceAsString(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getResourceAsStringSync(): string | null;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.api.EncodingEnum'
     */
    getResourceAsStringEncoding(): Promise<ca_uhn_fhir_rest_api_EncodingEnum | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.api.EncodingEnum'
     */
    getResourceAsStringEncodingSync(): ca_uhn_fhir_rest_api_EncodingEnum | null;
    /**
     * @return original return type: 'ca.uhn.fhir.validation.ValidationOptions'
     */
    getOptions(): Promise<ca_uhn_fhir_validation_ValidationOptions | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.validation.ValidationOptions'
     */
    getOptionsSync(): ca_uhn_fhir_validation_ValidationOptions | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createIValidationContextProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface IValidationContextInterface {
    /**
     * @return original return type: 'java.lang.Object'
     */
    getResource(): BasicOrJavaType | null;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirContext'
     */
    getFhirContext(): ca_uhn_fhir_context_FhirContext | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getMessages(): java_util_List | null;
    /**
     * @return original return type: 'ca.uhn.fhir.validation.ValidationResult'
     */
    toResult(): ca_uhn_fhir_validation_ValidationResult | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.validation.SingleValidationMessage'
     * @return original return type: 'void'
     */
    addValidationMessage(var0: ca_uhn_fhir_validation_SingleValidationMessage | null): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getResourceAsString(): string | null;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.api.EncodingEnum'
     */
    getResourceAsStringEncoding(): ca_uhn_fhir_rest_api_EncodingEnum | null;
    /**
     * @return original return type: 'ca.uhn.fhir.validation.ValidationOptions'
     */
    getOptions(): ca_uhn_fhir_validation_ValidationOptions | null;
}
/**
 * Create a proxy for the {@link IValidationContext} interface.
 * All required methods in {@link IValidationContextInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createIValidationContextProxy(methods: IValidationContextInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<IValidationContextInterface>;
declare const IValidationContext_base: typeof IValidationContextClass;
/**
 * Class ca.uhn.fhir.validation.IValidationContext.
 *
 * This actually imports the java class for further use.
 * The class {@link IValidationContextClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IValidationContext extends IValidationContext_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default IValidationContext;
//# sourceMappingURL=IValidationContext.d.ts.map