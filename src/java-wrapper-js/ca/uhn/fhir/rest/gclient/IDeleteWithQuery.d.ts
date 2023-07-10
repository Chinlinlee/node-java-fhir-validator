import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { IBaseQuery as ca_uhn_fhir_rest_gclient_IBaseQuery } from "./IBaseQuery";
import { ICriterion as ca_uhn_fhir_rest_gclient_ICriterion, ICriterionInterface as ca_uhn_fhir_rest_gclient_ICriterionInterface } from "./ICriterion";
import { Map as java_util_Map, MapInterface as java_util_MapInterface } from "./../../../../../java/util/Map";
/**
 * This class just defines types, you should import {@link IDeleteWithQuery} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IDeleteWithQueryClass extends JavaClass {
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.gclient.ICriterion'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IBaseQuery'
     */
    and(var0: ca_uhn_fhir_rest_gclient_ICriterion | JavaInterfaceProxy<ca_uhn_fhir_rest_gclient_ICriterionInterface> | null): Promise<ca_uhn_fhir_rest_gclient_IBaseQuery | null>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.gclient.ICriterion'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IBaseQuery'
     */
    andSync(var0: ca_uhn_fhir_rest_gclient_ICriterion | JavaInterfaceProxy<ca_uhn_fhir_rest_gclient_ICriterionInterface> | null): ca_uhn_fhir_rest_gclient_IBaseQuery | null;
    /**
     * @param var0 original type: 'java.util.Map'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IBaseQuery'
     */
    whereMap(var0: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null): Promise<ca_uhn_fhir_rest_gclient_IBaseQuery | null>;
    /**
     * @param var0 original type: 'java.util.Map'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IBaseQuery'
     */
    whereMapSync(var0: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null): ca_uhn_fhir_rest_gclient_IBaseQuery | null;
    /**
     * @param var0 original type: 'java.util.Map'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IBaseQuery'
     */
    where(var0: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null): Promise<ca_uhn_fhir_rest_gclient_IBaseQuery | null>;
    /**
     * @param var0 original type: 'java.util.Map'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IBaseQuery'
     */
    whereSync(var0: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null): ca_uhn_fhir_rest_gclient_IBaseQuery | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.gclient.ICriterion'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IBaseQuery'
     */
    where(var0: ca_uhn_fhir_rest_gclient_ICriterion | JavaInterfaceProxy<ca_uhn_fhir_rest_gclient_ICriterionInterface> | null): Promise<ca_uhn_fhir_rest_gclient_IBaseQuery | null>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.gclient.ICriterion'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IBaseQuery'
     */
    whereSync(var0: ca_uhn_fhir_rest_gclient_ICriterion | JavaInterfaceProxy<ca_uhn_fhir_rest_gclient_ICriterionInterface> | null): ca_uhn_fhir_rest_gclient_IBaseQuery | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createIDeleteWithQueryProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface IDeleteWithQueryInterface {
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.gclient.ICriterion'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IBaseQuery'
     */
    and(var0: ca_uhn_fhir_rest_gclient_ICriterion | JavaInterfaceProxy<ca_uhn_fhir_rest_gclient_ICriterionInterface> | null): ca_uhn_fhir_rest_gclient_IBaseQuery | null;
    /**
     * @param var0 original type: 'java.util.Map'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IBaseQuery'
     */
    whereMap(var0: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null): ca_uhn_fhir_rest_gclient_IBaseQuery | null;
    /**
     * @param var0 original type: 'java.util.Map'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IBaseQuery'
     */
    where(var0: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null): ca_uhn_fhir_rest_gclient_IBaseQuery | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.gclient.ICriterion'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.IBaseQuery'
     */
    where(var0: ca_uhn_fhir_rest_gclient_ICriterion | JavaInterfaceProxy<ca_uhn_fhir_rest_gclient_ICriterionInterface> | null): ca_uhn_fhir_rest_gclient_IBaseQuery | null;
}
/**
 * Create a proxy for the {@link IDeleteWithQuery} interface.
 * All required methods in {@link IDeleteWithQueryInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createIDeleteWithQueryProxy(methods: IDeleteWithQueryInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<IDeleteWithQueryInterface>;
declare const IDeleteWithQuery_base: typeof IDeleteWithQueryClass;
/**
 * Class ca.uhn.fhir.rest.gclient.IDeleteWithQuery.
 *
 * This actually imports the java class for further use.
 * The class {@link IDeleteWithQueryClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IDeleteWithQuery extends IDeleteWithQuery_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default IDeleteWithQuery;
//# sourceMappingURL=IDeleteWithQuery.d.ts.map