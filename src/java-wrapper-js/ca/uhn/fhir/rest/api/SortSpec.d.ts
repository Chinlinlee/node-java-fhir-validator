import { JavaClass, BasicOrJavaType } from "java-bridge";
import { SortOrderEnum as ca_uhn_fhir_rest_api_SortOrderEnum } from "./SortOrderEnum";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link SortSpec} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class SortSpecClass extends JavaClass {
    /**
     * @return original return type: 'ca.uhn.fhir.rest.api.SortSpec'
     */
    getChain(): Promise<SortSpec | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.api.SortSpec'
     */
    getChainSync(): SortSpec | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.api.SortSpec'
     */
    setParamName(var0: string | null): Promise<SortSpec | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.api.SortSpec'
     */
    setParamNameSync(var0: string | null): SortSpec | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.api.SortOrderEnum'
     * @return original return type: 'ca.uhn.fhir.rest.api.SortSpec'
     */
    setOrder(var0: ca_uhn_fhir_rest_api_SortOrderEnum | null): Promise<SortSpec | null>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.api.SortOrderEnum'
     * @return original return type: 'ca.uhn.fhir.rest.api.SortSpec'
     */
    setOrderSync(var0: ca_uhn_fhir_rest_api_SortOrderEnum | null): SortSpec | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.api.SortSpec'
     * @return original return type: 'ca.uhn.fhir.rest.api.SortSpec'
     */
    setChain(var0: SortSpecClass | null): Promise<SortSpec | null>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.rest.api.SortSpec'
     * @return original return type: 'ca.uhn.fhir.rest.api.SortSpec'
     */
    setChainSync(var0: SortSpecClass | null): SortSpec | null;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.api.SortOrderEnum'
     */
    getOrder(): Promise<ca_uhn_fhir_rest_api_SortOrderEnum | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.api.SortOrderEnum'
     */
    getOrderSync(): ca_uhn_fhir_rest_api_SortOrderEnum | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getParamName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getParamNameSync(): string | null;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    wait(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    waitSync(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): void;
    /**
     * @return original return type: 'void'
     */
    wait(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    waitSync(): void;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    wait(var0: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    waitSync(var0: java_lang_Long | bigint | number): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    equals(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    equalsSync(var0: BasicOrJavaType | null): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): Promise<string>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'ca.uhn.fhir.rest.api.SortOrderEnum'
     * @param var2 original type: 'ca.uhn.fhir.rest.api.SortSpec'
     * @return original return type: 'ca.uhn.fhir.rest.api.SortSpec'
     */
    static newInstanceAsync(var0: string | null, var1: ca_uhn_fhir_rest_api_SortOrderEnum | null, var2: SortSpecClass | null): Promise<SortSpec>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'ca.uhn.fhir.rest.api.SortOrderEnum'
     * @return original return type: 'ca.uhn.fhir.rest.api.SortSpec'
     */
    static newInstanceAsync(var0: string | null, var1: ca_uhn_fhir_rest_api_SortOrderEnum | null): Promise<SortSpec>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.api.SortSpec'
     */
    static newInstanceAsync(var0: string | null): Promise<SortSpec>;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.api.SortSpec'
     */
    static newInstanceAsync(): Promise<SortSpec>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'ca.uhn.fhir.rest.api.SortOrderEnum'
     * @param var2 original type: 'ca.uhn.fhir.rest.api.SortSpec'
     */
    constructor(var0: string | null, var1: ca_uhn_fhir_rest_api_SortOrderEnum | null, var2: SortSpecClass | null);
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'ca.uhn.fhir.rest.api.SortOrderEnum'
     */
    constructor(var0: string | null, var1: ca_uhn_fhir_rest_api_SortOrderEnum | null);
    /**
     * @param var0 original type: 'java.lang.String'
     */
    constructor(var0: string | null);
    constructor();
}
declare const SortSpec_base: typeof SortSpecClass;
/**
 * Class ca.uhn.fhir.rest.api.SortSpec.
 *
 * This actually imports the java class for further use.
 * The class {@link SortSpecClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class SortSpec extends SortSpec_base {
}
export default SortSpec;
//# sourceMappingURL=SortSpec.d.ts.map