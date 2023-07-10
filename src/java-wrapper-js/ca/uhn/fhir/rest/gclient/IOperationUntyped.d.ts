import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { IOperationUntypedWithInput as ca_uhn_fhir_rest_gclient_IOperationUntypedWithInput } from "./IOperationUntypedWithInput";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
import { IOperationUntypedWithInputAndPartialOutput as ca_uhn_fhir_rest_gclient_IOperationUntypedWithInputAndPartialOutput } from "./IOperationUntypedWithInputAndPartialOutput";
import { IBaseParameters as org_hl7_fhir_instance_model_api_IBaseParameters, IBaseParametersInterface as org_hl7_fhir_instance_model_api_IBaseParametersInterface } from "./../../../../../org/hl7/fhir/instance/model/api/IBaseParameters";
import { IBase as org_hl7_fhir_instance_model_api_IBase, IBaseInterface as org_hl7_fhir_instance_model_api_IBaseInterface } from "./../../../../../org/hl7/fhir/instance/model/api/IBase";
import { IQueryParameterType as ca_uhn_fhir_model_api_IQueryParameterType, IQueryParameterTypeInterface as ca_uhn_fhir_model_api_IQueryParameterTypeInterface } from "./../../model/api/IQueryParameterType";
/**
 * This class just defines types, you should import {@link IOperationUntyped} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IOperationUntypedClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IOperationUntypedWithInput'
     */
    withNoParameters(var0: java_lang_Class | null): Promise<ca_uhn_fhir_rest_gclient_IOperationUntypedWithInput | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IOperationUntypedWithInput'
     */
    withNoParametersSync(var0: java_lang_Class | null): ca_uhn_fhir_rest_gclient_IOperationUntypedWithInput | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBaseParameters'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IOperationUntypedWithInputAndPartialOutput'
     */
    withParameters(var0: org_hl7_fhir_instance_model_api_IBaseParameters | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseParametersInterface> | null): Promise<ca_uhn_fhir_rest_gclient_IOperationUntypedWithInputAndPartialOutput | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBaseParameters'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IOperationUntypedWithInputAndPartialOutput'
     */
    withParametersSync(var0: org_hl7_fhir_instance_model_api_IBaseParameters | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseParametersInterface> | null): ca_uhn_fhir_rest_gclient_IOperationUntypedWithInputAndPartialOutput | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.instance.model.api.IBase'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IOperationUntypedWithInputAndPartialOutput'
     */
    withParameter(var0: java_lang_Class | null, var1: string | null, var2: org_hl7_fhir_instance_model_api_IBase | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseInterface> | null): Promise<ca_uhn_fhir_rest_gclient_IOperationUntypedWithInputAndPartialOutput | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.instance.model.api.IBase'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IOperationUntypedWithInputAndPartialOutput'
     */
    withParameterSync(var0: java_lang_Class | null, var1: string | null, var2: org_hl7_fhir_instance_model_api_IBase | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseInterface> | null): ca_uhn_fhir_rest_gclient_IOperationUntypedWithInputAndPartialOutput | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'ca.uhn.fhir.model.api.IQueryParameterType'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IOperationUntypedWithInputAndPartialOutput'
     */
    withSearchParameter(var0: java_lang_Class | null, var1: string | null, var2: ca_uhn_fhir_model_api_IQueryParameterType | JavaInterfaceProxy<ca_uhn_fhir_model_api_IQueryParameterTypeInterface> | null): Promise<ca_uhn_fhir_rest_gclient_IOperationUntypedWithInputAndPartialOutput | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'ca.uhn.fhir.model.api.IQueryParameterType'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IOperationUntypedWithInputAndPartialOutput'
     */
    withSearchParameterSync(var0: java_lang_Class | null, var1: string | null, var2: ca_uhn_fhir_model_api_IQueryParameterType | JavaInterfaceProxy<ca_uhn_fhir_model_api_IQueryParameterTypeInterface> | null): ca_uhn_fhir_rest_gclient_IOperationUntypedWithInputAndPartialOutput | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createIOperationUntypedProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface IOperationUntypedInterface {
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IOperationUntypedWithInput'
     */
    withNoParameters(var0: java_lang_Class | null): ca_uhn_fhir_rest_gclient_IOperationUntypedWithInput | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBaseParameters'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IOperationUntypedWithInputAndPartialOutput'
     */
    withParameters(var0: org_hl7_fhir_instance_model_api_IBaseParameters | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseParametersInterface> | null): ca_uhn_fhir_rest_gclient_IOperationUntypedWithInputAndPartialOutput | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.instance.model.api.IBase'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IOperationUntypedWithInputAndPartialOutput'
     */
    withParameter(var0: java_lang_Class | null, var1: string | null, var2: org_hl7_fhir_instance_model_api_IBase | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseInterface> | null): ca_uhn_fhir_rest_gclient_IOperationUntypedWithInputAndPartialOutput | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'ca.uhn.fhir.model.api.IQueryParameterType'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IOperationUntypedWithInputAndPartialOutput'
     */
    withSearchParameter(var0: java_lang_Class | null, var1: string | null, var2: ca_uhn_fhir_model_api_IQueryParameterType | JavaInterfaceProxy<ca_uhn_fhir_model_api_IQueryParameterTypeInterface> | null): ca_uhn_fhir_rest_gclient_IOperationUntypedWithInputAndPartialOutput | null;
}
/**
 * Create a proxy for the {@link IOperationUntyped} interface.
 * All required methods in {@link IOperationUntypedInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createIOperationUntypedProxy(methods: IOperationUntypedInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<IOperationUntypedInterface>;
declare const IOperationUntyped_base: typeof IOperationUntypedClass;
/**
 * Class ca.uhn.fhir.rest.gclient.IOperationUntyped.
 *
 * This actually imports the java class for further use.
 * The class {@link IOperationUntypedClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IOperationUntyped extends IOperationUntyped_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default IOperationUntyped;
//# sourceMappingURL=IOperationUntyped.d.ts.map