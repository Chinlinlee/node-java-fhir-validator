import { JavaClass, BasicOrJavaType } from "java-bridge";
import { ResultSeverityEnum as ca_uhn_fhir_validation_ResultSeverityEnum } from "./ResultSeverityEnum";
import { Integer as java_lang_Integer } from "./../../../../java/lang/Integer";
import { Long as java_lang_Long } from "./../../../../java/lang/Long";
import { Class as java_lang_Class } from "./../../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link SingleValidationMessage} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class SingleValidationMessageClass extends JavaClass {
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
     * @return original return type: 'java.lang.String'
     */
    getMessage(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getMessageSync(): string | null;
    /**
     * @return original return type: 'ca.uhn.fhir.validation.ResultSeverityEnum'
     */
    getSeverity(): Promise<ca_uhn_fhir_validation_ResultSeverityEnum | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.validation.ResultSeverityEnum'
     */
    getSeveritySync(): ca_uhn_fhir_validation_ResultSeverityEnum | null;
    /**
     * @param var0 original type: 'java.lang.Integer'
     * @return original return type: 'void'
     */
    setLocationLine(var0: java_lang_Integer | number | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Integer'
     * @return original return type: 'void'
     */
    setLocationLineSync(var0: java_lang_Integer | number | null): void;
    /**
     * @param var0 original type: 'java.lang.Integer'
     * @return original return type: 'void'
     */
    setLocationCol(var0: java_lang_Integer | number | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Integer'
     * @return original return type: 'void'
     */
    setLocationColSync(var0: java_lang_Integer | number | null): void;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getLocationCol(): Promise<number | null>;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getLocationColSync(): number | null;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getLocationLine(): Promise<number | null>;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getLocationLineSync(): number | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.validation.ResultSeverityEnum'
     * @return original return type: 'void'
     */
    setSeverity(var0: ca_uhn_fhir_validation_ResultSeverityEnum | null): Promise<void>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.validation.ResultSeverityEnum'
     * @return original return type: 'void'
     */
    setSeveritySync(var0: ca_uhn_fhir_validation_ResultSeverityEnum | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setMessage(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setMessageSync(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setMessageId(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setMessageIdSync(var0: string | null): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getMessageId(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getMessageIdSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getLocationString(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getLocationStringSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setLocationString(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setLocationStringSync(var0: string | null): void;
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
     * @return original return type: 'ca.uhn.fhir.validation.SingleValidationMessage'
     */
    static newInstanceAsync(): Promise<SingleValidationMessage>;
    constructor();
}
declare const SingleValidationMessage_base: typeof SingleValidationMessageClass;
/**
 * Class ca.uhn.fhir.validation.SingleValidationMessage.
 *
 * This actually imports the java class for further use.
 * The class {@link SingleValidationMessageClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class SingleValidationMessage extends SingleValidationMessage_base {
}
export default SingleValidationMessage;
//# sourceMappingURL=SingleValidationMessage.d.ts.map