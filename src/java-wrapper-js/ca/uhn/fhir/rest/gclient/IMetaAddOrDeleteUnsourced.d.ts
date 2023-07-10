import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { IMetaAddOrDeleteSourced as ca_uhn_fhir_rest_gclient_IMetaAddOrDeleteSourced } from "./IMetaAddOrDeleteSourced";
import { IIdType as org_hl7_fhir_instance_model_api_IIdType, IIdTypeInterface as org_hl7_fhir_instance_model_api_IIdTypeInterface } from "./../../../../../org/hl7/fhir/instance/model/api/IIdType";
/**
 * This class just defines types, you should import {@link IMetaAddOrDeleteUnsourced} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IMetaAddOrDeleteUnsourcedClass extends JavaClass {
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IIdType'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IMetaAddOrDeleteSourced'
     */
    onResource(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null): Promise<ca_uhn_fhir_rest_gclient_IMetaAddOrDeleteSourced | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IIdType'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IMetaAddOrDeleteSourced'
     */
    onResourceSync(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null): ca_uhn_fhir_rest_gclient_IMetaAddOrDeleteSourced | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createIMetaAddOrDeleteUnsourcedProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface IMetaAddOrDeleteUnsourcedInterface {
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IIdType'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IMetaAddOrDeleteSourced'
     */
    onResource(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null): ca_uhn_fhir_rest_gclient_IMetaAddOrDeleteSourced | null;
}
/**
 * Create a proxy for the {@link IMetaAddOrDeleteUnsourced} interface.
 * All required methods in {@link IMetaAddOrDeleteUnsourcedInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createIMetaAddOrDeleteUnsourcedProxy(methods: IMetaAddOrDeleteUnsourcedInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<IMetaAddOrDeleteUnsourcedInterface>;
declare const IMetaAddOrDeleteUnsourced_base: typeof IMetaAddOrDeleteUnsourcedClass;
/**
 * Class ca.uhn.fhir.rest.gclient.IMetaAddOrDeleteUnsourced.
 *
 * This actually imports the java class for further use.
 * The class {@link IMetaAddOrDeleteUnsourcedClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IMetaAddOrDeleteUnsourced extends IMetaAddOrDeleteUnsourced_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default IMetaAddOrDeleteUnsourced;
//# sourceMappingURL=IMetaAddOrDeleteUnsourced.d.ts.map