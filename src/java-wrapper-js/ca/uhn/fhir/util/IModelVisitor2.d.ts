import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { IBaseExtension as org_hl7_fhir_instance_model_api_IBaseExtension, IBaseExtensionInterface as org_hl7_fhir_instance_model_api_IBaseExtensionInterface } from "./../../../../org/hl7/fhir/instance/model/api/IBaseExtension";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../../java/util/List";
import { IBase as org_hl7_fhir_instance_model_api_IBase, IBaseInterface as org_hl7_fhir_instance_model_api_IBaseInterface } from "./../../../../org/hl7/fhir/instance/model/api/IBase";
/**
 * This class just defines types, you should import {@link IModelVisitor2} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IModelVisitor2Class extends JavaClass {
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBaseExtension'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.util.List'
     * @param var3 original type: 'java.util.List'
     * @return original return type: 'boolean'
     */
    acceptUndeclaredExtension(var0: org_hl7_fhir_instance_model_api_IBaseExtension | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseExtensionInterface> | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var3: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBaseExtension'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.util.List'
     * @param var3 original type: 'java.util.List'
     * @return original return type: 'boolean'
     */
    acceptUndeclaredExtensionSync(var0: org_hl7_fhir_instance_model_api_IBaseExtension | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseExtensionInterface> | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var3: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBase'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.util.List'
     * @param var3 original type: 'java.util.List'
     * @return original return type: 'boolean'
     */
    acceptElement(var0: org_hl7_fhir_instance_model_api_IBase | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseInterface> | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var3: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBase'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.util.List'
     * @param var3 original type: 'java.util.List'
     * @return original return type: 'boolean'
     */
    acceptElementSync(var0: org_hl7_fhir_instance_model_api_IBase | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseInterface> | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var3: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): boolean;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createIModelVisitor2Proxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface IModelVisitor2Interface {
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBaseExtension'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.util.List'
     * @param var3 original type: 'java.util.List'
     * @return original return type: 'boolean'
     */
    acceptUndeclaredExtension?(var0: org_hl7_fhir_instance_model_api_IBaseExtension | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseExtensionInterface> | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var3: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBase'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.util.List'
     * @param var3 original type: 'java.util.List'
     * @return original return type: 'boolean'
     */
    acceptElement(var0: org_hl7_fhir_instance_model_api_IBase | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseInterface> | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var3: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): boolean;
}
/**
 * Create a proxy for the {@link IModelVisitor2} interface.
 * All required methods in {@link IModelVisitor2Interface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createIModelVisitor2Proxy(methods: IModelVisitor2Interface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<IModelVisitor2Interface>;
declare const IModelVisitor2_base: typeof IModelVisitor2Class;
/**
 * Class ca.uhn.fhir.util.IModelVisitor2.
 *
 * This actually imports the java class for further use.
 * The class {@link IModelVisitor2Class} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IModelVisitor2 extends IModelVisitor2_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default IModelVisitor2;
//# sourceMappingURL=IModelVisitor2.d.ts.map