import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { ICriterion as ca_uhn_fhir_rest_gclient_ICriterion, ICriterionInterface as ca_uhn_fhir_rest_gclient_ICriterionInterface } from "./ICriterion";
/**
 * This class just defines types, you should import {@link ICompositeWithLeft} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ICompositeWithLeftClass extends JavaClass {
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.gclient.ICriterion'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.ICriterion'
     */
    withRight(var0: ca_uhn_fhir_rest_gclient_ICriterion | JavaInterfaceProxy<ca_uhn_fhir_rest_gclient_ICriterionInterface> | null): Promise<ca_uhn_fhir_rest_gclient_ICriterion | null>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.gclient.ICriterion'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.ICriterion'
     */
    withRightSync(var0: ca_uhn_fhir_rest_gclient_ICriterion | JavaInterfaceProxy<ca_uhn_fhir_rest_gclient_ICriterionInterface> | null): ca_uhn_fhir_rest_gclient_ICriterion | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createICompositeWithLeftProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface ICompositeWithLeftInterface {
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.gclient.ICriterion'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.ICriterion'
     */
    withRight(var0: ca_uhn_fhir_rest_gclient_ICriterion | JavaInterfaceProxy<ca_uhn_fhir_rest_gclient_ICriterionInterface> | null): ca_uhn_fhir_rest_gclient_ICriterion | null;
}
/**
 * Create a proxy for the {@link ICompositeWithLeft} interface.
 * All required methods in {@link ICompositeWithLeftInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createICompositeWithLeftProxy(methods: ICompositeWithLeftInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<ICompositeWithLeftInterface>;
declare const ICompositeWithLeft_base: typeof ICompositeWithLeftClass;
/**
 * Class ca.uhn.fhir.rest.gclient.ICompositeWithLeft.
 *
 * This actually imports the java class for further use.
 * The class {@link ICompositeWithLeftClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ICompositeWithLeft extends ICompositeWithLeft_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default ICompositeWithLeft;
//# sourceMappingURL=ICompositeWithLeft.d.ts.map