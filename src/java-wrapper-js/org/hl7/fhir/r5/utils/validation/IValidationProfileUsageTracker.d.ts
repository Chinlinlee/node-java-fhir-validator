import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { StructureDefinition as org_hl7_fhir_r5_model_StructureDefinition } from "./../../model/StructureDefinition";
import { Element as org_hl7_fhir_r5_elementmodel_Element } from "./../../elementmodel/Element";
/**
 * This class just defines types, you should import {@link IValidationProfileUsageTracker} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IValidationProfileUsageTrackerClass extends JavaClass {
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @return original return type: 'void'
     */
    recordProfileUsage(var0: org_hl7_fhir_r5_model_StructureDefinition | null, var1: BasicOrJavaType | null, var2: org_hl7_fhir_r5_elementmodel_Element | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @return original return type: 'void'
     */
    recordProfileUsageSync(var0: org_hl7_fhir_r5_model_StructureDefinition | null, var1: BasicOrJavaType | null, var2: org_hl7_fhir_r5_elementmodel_Element | null): void;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createIValidationProfileUsageTrackerProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface IValidationProfileUsageTrackerInterface {
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @return original return type: 'void'
     */
    recordProfileUsage(var0: org_hl7_fhir_r5_model_StructureDefinition | null, var1: BasicOrJavaType | null, var2: org_hl7_fhir_r5_elementmodel_Element | null): void;
}
/**
 * Create a proxy for the {@link IValidationProfileUsageTracker} interface.
 * All required methods in {@link IValidationProfileUsageTrackerInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createIValidationProfileUsageTrackerProxy(methods: IValidationProfileUsageTrackerInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<IValidationProfileUsageTrackerInterface>;
declare const IValidationProfileUsageTracker_base: typeof IValidationProfileUsageTrackerClass;
/**
 * Class org.hl7.fhir.r5.utils.validation.IValidationProfileUsageTracker.
 *
 * This actually imports the java class for further use.
 * The class {@link IValidationProfileUsageTrackerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IValidationProfileUsageTracker extends IValidationProfileUsageTracker_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default IValidationProfileUsageTracker;
//# sourceMappingURL=IValidationProfileUsageTracker.d.ts.map