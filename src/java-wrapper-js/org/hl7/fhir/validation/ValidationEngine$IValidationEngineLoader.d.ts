import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Content as org_hl7_fhir_validation_Content } from "./Content";
/**
 * This class just defines types, you should import {@link ValidationEngine$IValidationEngineLoader} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ValidationEngine$IValidationEngineLoaderClass extends JavaClass {
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.Content'
     * @return original return type: 'void'
     */
    load(var0: org_hl7_fhir_validation_Content | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.Content'
     * @return original return type: 'void'
     */
    loadSync(var0: org_hl7_fhir_validation_Content | null): void;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createValidationEngine$IValidationEngineLoaderProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface ValidationEngine$IValidationEngineLoaderInterface {
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.Content'
     * @return original return type: 'void'
     */
    load(var0: org_hl7_fhir_validation_Content | null): void;
}
/**
 * Create a proxy for the {@link ValidationEngine$IValidationEngineLoader} interface.
 * All required methods in {@link ValidationEngine$IValidationEngineLoaderInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createValidationEngine$IValidationEngineLoaderProxy(methods: ValidationEngine$IValidationEngineLoaderInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<ValidationEngine$IValidationEngineLoaderInterface>;
declare const ValidationEngine$IValidationEngineLoader_base: typeof ValidationEngine$IValidationEngineLoaderClass;
/**
 * Class org.hl7.fhir.validation.ValidationEngine$IValidationEngineLoader.
 *
 * This actually imports the java class for further use.
 * The class {@link ValidationEngine$IValidationEngineLoaderClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ValidationEngine$IValidationEngineLoader extends ValidationEngine$IValidationEngineLoader_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default ValidationEngine$IValidationEngineLoader;
//# sourceMappingURL=ValidationEngine$IValidationEngineLoader.d.ts.map