import { JavaClass, BasicOrJavaType } from "java-bridge";
import { DateClientParam$IDateSpecifier as ca_uhn_fhir_rest_gclient_DateClientParam$IDateSpecifier } from "./DateClientParam$IDateSpecifier";
import { ICriterion as ca_uhn_fhir_rest_gclient_ICriterion } from "./ICriterion";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link DateClientParam} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DateClientParamClass extends JavaClass {
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.DateClientParam$IDateSpecifier'
     */
    before(): Promise<ca_uhn_fhir_rest_gclient_DateClientParam$IDateSpecifier | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.DateClientParam$IDateSpecifier'
     */
    beforeSync(): ca_uhn_fhir_rest_gclient_DateClientParam$IDateSpecifier | null;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.DateClientParam$IDateSpecifier'
     */
    after(): Promise<ca_uhn_fhir_rest_gclient_DateClientParam$IDateSpecifier | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.DateClientParam$IDateSpecifier'
     */
    afterSync(): ca_uhn_fhir_rest_gclient_DateClientParam$IDateSpecifier | null;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.DateClientParam$IDateSpecifier'
     */
    exactly(): Promise<ca_uhn_fhir_rest_gclient_DateClientParam$IDateSpecifier | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.DateClientParam$IDateSpecifier'
     */
    exactlySync(): ca_uhn_fhir_rest_gclient_DateClientParam$IDateSpecifier | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getParamName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getParamNameSync(): string | null;
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
     * @return original return type: 'ca.uhn.fhir.rest.gclient.DateClientParam$IDateSpecifier'
     */
    beforeOrEquals(): Promise<ca_uhn_fhir_rest_gclient_DateClientParam$IDateSpecifier | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.DateClientParam$IDateSpecifier'
     */
    beforeOrEqualsSync(): ca_uhn_fhir_rest_gclient_DateClientParam$IDateSpecifier | null;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.DateClientParam$IDateSpecifier'
     */
    afterOrEquals(): Promise<ca_uhn_fhir_rest_gclient_DateClientParam$IDateSpecifier | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.gclient.DateClientParam$IDateSpecifier'
     */
    afterOrEqualsSync(): ca_uhn_fhir_rest_gclient_DateClientParam$IDateSpecifier | null;
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
     * @return original return type: 'ca.uhn.fhir.rest.gclient.DateClientParam'
     */
    static newInstanceAsync(var0: string | null): Promise<DateClientParam>;
    /**
     * @param var0 original type: 'java.lang.String'
     */
    constructor(var0: string | null);
}
declare const DateClientParam_base: typeof DateClientParamClass;
/**
 * Class ca.uhn.fhir.rest.gclient.DateClientParam.
 *
 * This actually imports the java class for further use.
 * The class {@link DateClientParamClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DateClientParam extends DateClientParam_base {
}
export default DateClientParam;
//# sourceMappingURL=DateClientParam.d.ts.map