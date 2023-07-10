import { JavaClass, BasicOrJavaType } from "java-bridge";
import { CertPath as java_security_cert_CertPath } from "./cert/CertPath";
import { Timestamp as java_security_Timestamp } from "./Timestamp";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { Class as java_lang_Class } from "./../lang/Class";
/**
 * This class just defines types, you should import {@link CodeSigner} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class CodeSignerClass extends JavaClass {
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
     * @return original return type: 'java.security.cert.CertPath'
     */
    getSignerCertPath(): Promise<java_security_cert_CertPath | null>;
    /**
     * @return original return type: 'java.security.cert.CertPath'
     */
    getSignerCertPathSync(): java_security_cert_CertPath | null;
    /**
     * @return original return type: 'java.security.Timestamp'
     */
    getTimestamp(): Promise<java_security_Timestamp | null>;
    /**
     * @return original return type: 'java.security.Timestamp'
     */
    getTimestampSync(): java_security_Timestamp | null;
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
     * @param var0 original type: 'java.security.cert.CertPath'
     * @param var1 original type: 'java.security.Timestamp'
     * @return original return type: 'java.security.CodeSigner'
     */
    static newInstanceAsync(var0: java_security_cert_CertPath | null, var1: java_security_Timestamp | null): Promise<CodeSigner>;
    /**
     * @param var0 original type: 'java.security.cert.CertPath'
     * @param var1 original type: 'java.security.Timestamp'
     */
    constructor(var0: java_security_cert_CertPath | null, var1: java_security_Timestamp | null);
}
declare const CodeSigner_base: typeof CodeSignerClass;
/**
 * Class java.security.CodeSigner.
 *
 * This actually imports the java class for further use.
 * The class {@link CodeSignerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class CodeSigner extends CodeSigner_base {
}
export default CodeSigner;
//# sourceMappingURL=CodeSigner.d.ts.map