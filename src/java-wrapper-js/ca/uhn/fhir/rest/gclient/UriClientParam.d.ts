import { JavaClass, BasicOrJavaType } from "java-bridge";
import { UriClientParam$IUriMatch as ca_uhn_fhir_rest_gclient_UriClientParam$IUriMatch } from "./UriClientParam$IUriMatch";
import { ICriterion as ca_uhn_fhir_rest_gclient_ICriterion } from "./ICriterion";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link UriClientParam} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class UriClientParamClass extends JavaClass {
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.UriClientParam$IUriMatch'
     */
    matches(): Promise<ca_uhn_fhir_rest_gclient_UriClientParam$IUriMatch | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.UriClientParam$IUriMatch'
     */
    matchesSync(): ca_uhn_fhir_rest_gclient_UriClientParam$IUriMatch | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.UriClientParam$IUriMatch'
     */
    matches(var0: string | null): Promise<ca_uhn_fhir_rest_gclient_UriClientParam$IUriMatch | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.UriClientParam$IUriMatch'
     */
    matchesSync(var0: string | null): ca_uhn_fhir_rest_gclient_UriClientParam$IUriMatch | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.ICriterion'
     */
    isMissing(var0: java_lang_Boolean | boolean): Promise<ca_uhn_fhir_rest_gclient_ICriterion | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'ca.uhn.fhir.rest.gclient.ICriterion'
     */
    isMissingSync(var0: java_lang_Boolean | boolean): ca_uhn_fhir_rest_gclient_ICriterion | null;
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
     * @return original return type: 'ca.uhn.fhir.rest.gclient.UriClientParam'
     */
    static newInstanceAsync(var0: string | null): Promise<UriClientParam>;
    /**
     * @param var0 original type: 'java.lang.String'
     */
    constructor(var0: string | null);
}
declare const UriClientParam_base: typeof UriClientParamClass;
/**
 * Class ca.uhn.fhir.rest.gclient.UriClientParam.
 *
 * This actually imports the java class for further use.
 * The class {@link UriClientParamClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class UriClientParam extends UriClientParam_base {
}
export default UriClientParam;
//# sourceMappingURL=UriClientParam.d.ts.map