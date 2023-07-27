import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Decimal as org_fhir_ucum_Decimal } from "./Decimal";
import { Set as java_util_Set } from "./../../../java/util/Set";
import { List as java_util_List } from "./../../../java/util/List";
import { ConceptKind as org_fhir_ucum_ConceptKind } from "./ConceptKind";
import { Boolean as java_lang_Boolean } from "./../../../java/lang/Boolean";
import { Pair as org_fhir_ucum_Pair } from "./Pair";
import { UcumModel as org_fhir_ucum_UcumModel } from "./UcumModel";
import { UcumService$UcumVersionDetails as org_fhir_ucum_UcumService$UcumVersionDetails } from "./UcumService$UcumVersionDetails";
/**
 * This class just defines types, you should import {@link UcumService} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class UcumServiceClass extends JavaClass {
    /**
     * @param var0 original type: 'org.fhir.ucum.Decimal'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'org.fhir.ucum.Decimal'
     */
    convert(var0: org_fhir_ucum_Decimal | null, var1: string | null, var2: string | null): Promise<org_fhir_ucum_Decimal | null>;
    /**
     * @param var0 original type: 'org.fhir.ucum.Decimal'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'org.fhir.ucum.Decimal'
     */
    convertSync(var0: org_fhir_ucum_Decimal | null, var1: string | null, var2: string | null): org_fhir_ucum_Decimal | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    validate(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    validateSync(var0: string | null): string | null;
    /**
     * @return original return type: 'java.util.Set'
     */
    getProperties(): Promise<java_util_Set | null>;
    /**
     * @return original return type: 'java.util.Set'
     */
    getPropertiesSync(): java_util_Set | null;
    /**
     * @param var0 original type: 'org.fhir.ucum.ConceptKind'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'boolean'
     * @return original return type: 'java.util.List'
     */
    search(var0: org_fhir_ucum_ConceptKind | null, var1: string | null, var2: java_lang_Boolean | boolean): Promise<java_util_List | null>;
    /**
     * @param var0 original type: 'org.fhir.ucum.ConceptKind'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'boolean'
     * @return original return type: 'java.util.List'
     */
    searchSync(var0: org_fhir_ucum_ConceptKind | null, var1: string | null, var2: java_lang_Boolean | boolean): java_util_List | null;
    /**
     * @param var0 original type: 'org.fhir.ucum.Pair'
     * @param var1 original type: 'org.fhir.ucum.Pair'
     * @return original return type: 'org.fhir.ucum.Pair'
     */
    multiply(var0: org_fhir_ucum_Pair | null, var1: org_fhir_ucum_Pair | null): Promise<org_fhir_ucum_Pair | null>;
    /**
     * @param var0 original type: 'org.fhir.ucum.Pair'
     * @param var1 original type: 'org.fhir.ucum.Pair'
     * @return original return type: 'org.fhir.ucum.Pair'
     */
    multiplySync(var0: org_fhir_ucum_Pair | null, var1: org_fhir_ucum_Pair | null): org_fhir_ucum_Pair | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    analyse(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    analyseSync(var0: string | null): string | null;
    /**
     * @return original return type: 'org.fhir.ucum.UcumModel'
     */
    getModel(): Promise<org_fhir_ucum_UcumModel | null>;
    /**
     * @return original return type: 'org.fhir.ucum.UcumModel'
     */
    getModelSync(): org_fhir_ucum_UcumModel | null;
    /**
     * @return original return type: 'org.fhir.ucum.UcumService$UcumVersionDetails'
     */
    ucumIdentification(): Promise<org_fhir_ucum_UcumService$UcumVersionDetails | null>;
    /**
     * @return original return type: 'org.fhir.ucum.UcumService$UcumVersionDetails'
     */
    ucumIdentificationSync(): org_fhir_ucum_UcumService$UcumVersionDetails | null;
    /**
     * @return original return type: 'java.util.List'
     */
    validateUCUM(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    validateUCUMSync(): java_util_List | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    validateInProperty(var0: string | null, var1: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    validateInPropertySync(var0: string | null, var1: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getCommonDisplay(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getCommonDisplaySync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    isComparable(var0: string | null, var1: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    isComparableSync(var0: string | null, var1: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.List'
     */
    getDefinedForms(var0: string | null): Promise<java_util_List | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.List'
     */
    getDefinedFormsSync(var0: string | null): java_util_List | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getCanonicalUnits(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getCanonicalUnitsSync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'org.fhir.ucum.Pair'
     * @return original return type: 'org.fhir.ucum.Pair'
     */
    getCanonicalForm(var0: org_fhir_ucum_Pair | null): Promise<org_fhir_ucum_Pair | null>;
    /**
     * @param var0 original type: 'org.fhir.ucum.Pair'
     * @return original return type: 'org.fhir.ucum.Pair'
     */
    getCanonicalFormSync(var0: org_fhir_ucum_Pair | null): org_fhir_ucum_Pair | null;
    /**
     * @param var0 original type: 'org.fhir.ucum.Pair'
     * @param var1 original type: 'org.fhir.ucum.Pair'
     * @return original return type: 'org.fhir.ucum.Pair'
     */
    divideBy(var0: org_fhir_ucum_Pair | null, var1: org_fhir_ucum_Pair | null): Promise<org_fhir_ucum_Pair | null>;
    /**
     * @param var0 original type: 'org.fhir.ucum.Pair'
     * @param var1 original type: 'org.fhir.ucum.Pair'
     * @return original return type: 'org.fhir.ucum.Pair'
     */
    divideBySync(var0: org_fhir_ucum_Pair | null, var1: org_fhir_ucum_Pair | null): org_fhir_ucum_Pair | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    validateCanonicalUnits(var0: string | null, var1: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    validateCanonicalUnitsSync(var0: string | null, var1: string | null): string | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createUcumServiceProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface UcumServiceInterface {
    /**
     * @param var0 original type: 'org.fhir.ucum.Decimal'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'org.fhir.ucum.Decimal'
     */
    convert(var0: org_fhir_ucum_Decimal | null, var1: string | null, var2: string | null): org_fhir_ucum_Decimal | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    validate(var0: string | null): string | null;
    /**
     * @return original return type: 'java.util.Set'
     */
    getProperties(): java_util_Set | null;
    /**
     * @param var0 original type: 'org.fhir.ucum.ConceptKind'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'boolean'
     * @return original return type: 'java.util.List'
     */
    search(var0: org_fhir_ucum_ConceptKind | null, var1: string | null, var2: java_lang_Boolean | boolean): java_util_List | null;
    /**
     * @param var0 original type: 'org.fhir.ucum.Pair'
     * @param var1 original type: 'org.fhir.ucum.Pair'
     * @return original return type: 'org.fhir.ucum.Pair'
     */
    multiply(var0: org_fhir_ucum_Pair | null, var1: org_fhir_ucum_Pair | null): org_fhir_ucum_Pair | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    analyse(var0: string | null): string | null;
    /**
     * @return original return type: 'org.fhir.ucum.UcumModel'
     */
    getModel(): org_fhir_ucum_UcumModel | null;
    /**
     * @return original return type: 'org.fhir.ucum.UcumService$UcumVersionDetails'
     */
    ucumIdentification(): org_fhir_ucum_UcumService$UcumVersionDetails | null;
    /**
     * @return original return type: 'java.util.List'
     */
    validateUCUM(): java_util_List | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    validateInProperty(var0: string | null, var1: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getCommonDisplay(var0: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    isComparable(var0: string | null, var1: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.List'
     */
    getDefinedForms(var0: string | null): java_util_List | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getCanonicalUnits(var0: string | null): string | null;
    /**
     * @param var0 original type: 'org.fhir.ucum.Pair'
     * @return original return type: 'org.fhir.ucum.Pair'
     */
    getCanonicalForm(var0: org_fhir_ucum_Pair | null): org_fhir_ucum_Pair | null;
    /**
     * @param var0 original type: 'org.fhir.ucum.Pair'
     * @param var1 original type: 'org.fhir.ucum.Pair'
     * @return original return type: 'org.fhir.ucum.Pair'
     */
    divideBy(var0: org_fhir_ucum_Pair | null, var1: org_fhir_ucum_Pair | null): org_fhir_ucum_Pair | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    validateCanonicalUnits(var0: string | null, var1: string | null): string | null;
}
/**
 * Create a proxy for the {@link UcumService} interface.
 * All required methods in {@link UcumServiceInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createUcumServiceProxy(methods: UcumServiceInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<UcumServiceInterface>;
declare const UcumService_base: typeof UcumServiceClass;
/**
 * Class org.fhir.ucum.UcumService.
 *
 * This actually imports the java class for further use.
 * The class {@link UcumServiceClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class UcumService extends UcumService_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default UcumService;
//# sourceMappingURL=UcumService.d.ts.map