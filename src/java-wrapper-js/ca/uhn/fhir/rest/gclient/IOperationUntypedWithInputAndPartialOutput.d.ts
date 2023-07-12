import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { IBase as org_hl7_fhir_instance_model_api_IBase, IBaseInterface as org_hl7_fhir_instance_model_api_IBaseInterface } from "./../../../../../org/hl7/fhir/instance/model/api/IBase";
import { IQueryParameterType as ca_uhn_fhir_model_api_IQueryParameterType, IQueryParameterTypeInterface as ca_uhn_fhir_model_api_IQueryParameterTypeInterface } from "./../../model/api/IQueryParameterType";
import { IOperationUntypedWithInput as ca_uhn_fhir_rest_gclient_IOperationUntypedWithInput } from "./IOperationUntypedWithInput";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
import { IClientExecutable as ca_uhn_fhir_rest_gclient_IClientExecutable } from "./IClientExecutable";
import { EncodingEnum as ca_uhn_fhir_rest_api_EncodingEnum } from "./../api/EncodingEnum";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../../../java/util/List";
import { CacheControlDirective as ca_uhn_fhir_rest_api_CacheControlDirective } from "./../api/CacheControlDirective";
import { SummaryEnum as ca_uhn_fhir_rest_api_SummaryEnum } from "./../api/SummaryEnum";
/**
 * This class just defines types, you should import {@link IOperationUntypedWithInputAndPartialOutput} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IOperationUntypedWithInputAndPartialOutputClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.instance.model.api.IBase'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IOperationUntypedWithInputAndPartialOutput'
     */
    andParameter(var0: string | null, var1: org_hl7_fhir_instance_model_api_IBase | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseInterface> | null): Promise<IOperationUntypedWithInputAndPartialOutput | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.instance.model.api.IBase'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IOperationUntypedWithInputAndPartialOutput'
     */
    andParameterSync(var0: string | null, var1: org_hl7_fhir_instance_model_api_IBase | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseInterface> | null): IOperationUntypedWithInputAndPartialOutput | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'ca.uhn.fhir.model.api.IQueryParameterType'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IOperationUntypedWithInputAndPartialOutput'
     */
    andSearchParameter(var0: string | null, var1: ca_uhn_fhir_model_api_IQueryParameterType | JavaInterfaceProxy<ca_uhn_fhir_model_api_IQueryParameterTypeInterface> | null): Promise<IOperationUntypedWithInputAndPartialOutput | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'ca.uhn.fhir.model.api.IQueryParameterType'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IOperationUntypedWithInputAndPartialOutput'
     */
    andSearchParameterSync(var0: string | null, var1: ca_uhn_fhir_model_api_IQueryParameterType | JavaInterfaceProxy<ca_uhn_fhir_model_api_IQueryParameterTypeInterface> | null): IOperationUntypedWithInputAndPartialOutput | null;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IOperationUntypedWithInput'
     */
    returnMethodOutcome(): Promise<ca_uhn_fhir_rest_gclient_IOperationUntypedWithInput | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IOperationUntypedWithInput'
     */
    returnMethodOutcomeSync(): ca_uhn_fhir_rest_gclient_IOperationUntypedWithInput | null;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IOperationUntypedWithInput'
     */
    useHttpGet(): Promise<ca_uhn_fhir_rest_gclient_IOperationUntypedWithInput | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IOperationUntypedWithInput'
     */
    useHttpGetSync(): ca_uhn_fhir_rest_gclient_IOperationUntypedWithInput | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IOperationUntypedWithInput'
     */
    returnResourceType(var0: java_lang_Class | null): Promise<ca_uhn_fhir_rest_gclient_IOperationUntypedWithInput | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IOperationUntypedWithInput'
     */
    returnResourceTypeSync(var0: java_lang_Class | null): ca_uhn_fhir_rest_gclient_IOperationUntypedWithInput | null;
    /**
     * @return original return type: 'java.lang.Object'
     */
    execute(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    executeSync(): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    accept(var0: string | null): Promise<ca_uhn_fhir_rest_gclient_IClientExecutable | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    acceptSync(var0: string | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.api.EncodingEnum'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    encoded(var0: ca_uhn_fhir_rest_api_EncodingEnum | null): Promise<ca_uhn_fhir_rest_gclient_IClientExecutable | null>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.api.EncodingEnum'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    encodedSync(var0: ca_uhn_fhir_rest_api_EncodingEnum | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    andLogRequestAndResponse(var0: java_lang_Boolean | boolean): Promise<ca_uhn_fhir_rest_gclient_IClientExecutable | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    andLogRequestAndResponseSync(var0: java_lang_Boolean | boolean): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    preferResponseTypes(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<ca_uhn_fhir_rest_gclient_IClientExecutable | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    preferResponseTypesSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    withAdditionalHeader(var0: string | null, var1: string | null): Promise<ca_uhn_fhir_rest_gclient_IClientExecutable | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    withAdditionalHeaderSync(var0: string | null, var1: string | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    encodedJson(): Promise<ca_uhn_fhir_rest_gclient_IClientExecutable | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    encodedJsonSync(): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    elementsSubset(var0: (string | null)[] | null): Promise<ca_uhn_fhir_rest_gclient_IClientExecutable | null>;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    elementsSubsetSync(var0: (string | null)[] | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.api.CacheControlDirective'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    cacheControl(var0: ca_uhn_fhir_rest_api_CacheControlDirective | null): Promise<ca_uhn_fhir_rest_gclient_IClientExecutable | null>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.api.CacheControlDirective'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    cacheControlSync(var0: ca_uhn_fhir_rest_api_CacheControlDirective | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    encodedXml(): Promise<ca_uhn_fhir_rest_gclient_IClientExecutable | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    encodedXmlSync(): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.api.SummaryEnum'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    summaryMode(var0: ca_uhn_fhir_rest_api_SummaryEnum | null): Promise<ca_uhn_fhir_rest_gclient_IClientExecutable | null>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.api.SummaryEnum'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    summaryModeSync(var0: ca_uhn_fhir_rest_api_SummaryEnum | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    preferResponseType(var0: java_lang_Class | null): Promise<ca_uhn_fhir_rest_gclient_IClientExecutable | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    preferResponseTypeSync(var0: java_lang_Class | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    prettyPrint(): Promise<ca_uhn_fhir_rest_gclient_IClientExecutable | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    prettyPrintSync(): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createIOperationUntypedWithInputAndPartialOutputProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface IOperationUntypedWithInputAndPartialOutputInterface {
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.instance.model.api.IBase'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IOperationUntypedWithInputAndPartialOutput'
     */
    andParameter(var0: string | null, var1: org_hl7_fhir_instance_model_api_IBase | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseInterface> | null): IOperationUntypedWithInputAndPartialOutput | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'ca.uhn.fhir.model.api.IQueryParameterType'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IOperationUntypedWithInputAndPartialOutput'
     */
    andSearchParameter(var0: string | null, var1: ca_uhn_fhir_model_api_IQueryParameterType | JavaInterfaceProxy<ca_uhn_fhir_model_api_IQueryParameterTypeInterface> | null): IOperationUntypedWithInputAndPartialOutput | null;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IOperationUntypedWithInput'
     */
    returnMethodOutcome(): ca_uhn_fhir_rest_gclient_IOperationUntypedWithInput | null;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IOperationUntypedWithInput'
     */
    useHttpGet(): ca_uhn_fhir_rest_gclient_IOperationUntypedWithInput | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IOperationUntypedWithInput'
     */
    returnResourceType(var0: java_lang_Class | null): ca_uhn_fhir_rest_gclient_IOperationUntypedWithInput | null;
    /**
     * @return original return type: 'java.lang.Object'
     */
    execute(): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    accept(var0: string | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.api.EncodingEnum'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    encoded(var0: ca_uhn_fhir_rest_api_EncodingEnum | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    andLogRequestAndResponse(var0: java_lang_Boolean | boolean): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    preferResponseTypes(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    withAdditionalHeader(var0: string | null, var1: string | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    encodedJson(): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    elementsSubset(var0: (string | null)[] | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.api.CacheControlDirective'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    cacheControl(var0: ca_uhn_fhir_rest_api_CacheControlDirective | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    encodedXml(): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.api.SummaryEnum'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    summaryMode(var0: ca_uhn_fhir_rest_api_SummaryEnum | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    preferResponseType(var0: java_lang_Class | null): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IClientExecutable'
     */
    prettyPrint(): ca_uhn_fhir_rest_gclient_IClientExecutable | null;
}
/**
 * Create a proxy for the {@link IOperationUntypedWithInputAndPartialOutput} interface.
 * All required methods in {@link IOperationUntypedWithInputAndPartialOutputInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createIOperationUntypedWithInputAndPartialOutputProxy(methods: IOperationUntypedWithInputAndPartialOutputInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<IOperationUntypedWithInputAndPartialOutputInterface>;
declare const IOperationUntypedWithInputAndPartialOutput_base: typeof IOperationUntypedWithInputAndPartialOutputClass;
/**
 * Class ca.uhn.fhir.rest.gclient.IOperationUntypedWithInputAndPartialOutput.
 *
 * This actually imports the java class for further use.
 * The class {@link IOperationUntypedWithInputAndPartialOutputClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IOperationUntypedWithInputAndPartialOutput extends IOperationUntypedWithInputAndPartialOutput_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default IOperationUntypedWithInputAndPartialOutput;
//# sourceMappingURL=IOperationUntypedWithInputAndPartialOutput.d.ts.map