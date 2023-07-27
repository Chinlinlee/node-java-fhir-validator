import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
import { TerminologyCache as org_hl7_fhir_r5_context_TerminologyCache } from "./TerminologyCache";
/**
 * This class just defines types, you should import {@link TerminologyCache$CacheToken} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class TerminologyCache$CacheTokenClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.String'
     */
    getName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getNameSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setName(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setNameSync(var0: string | null): void;
    /**
     * @return original return type: 'boolean'
     */
    hasVersion(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasVersionSync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    getRequest(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getRequestSync(): string | null;
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
     * @param var0 original type: 'org.hl7.fhir.r5.context.TerminologyCache'
     * @return original return type: 'org.hl7.fhir.r5.context.TerminologyCache$CacheToken'
     */
    static newInstanceAsync(var0: org_hl7_fhir_r5_context_TerminologyCache | null): Promise<TerminologyCache$CacheToken>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.context.TerminologyCache'
     */
    constructor(var0: org_hl7_fhir_r5_context_TerminologyCache | null);
}
declare const TerminologyCache$CacheToken_base: typeof TerminologyCache$CacheTokenClass;
/**
 * Class org.hl7.fhir.r5.context.TerminologyCache$CacheToken.
 *
 * This actually imports the java class for further use.
 * The class {@link TerminologyCache$CacheTokenClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class TerminologyCache$CacheToken extends TerminologyCache$CacheToken_base {
}
export default TerminologyCache$CacheToken;
//# sourceMappingURL=TerminologyCache$CacheToken.d.ts.map