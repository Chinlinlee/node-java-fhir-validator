import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Subject as javax_security_auth_Subject } from "./../../javax/security/auth/Subject";
/**
 * This class just defines types, you should import {@link Principal} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PrincipalClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.String'
     */
    getName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getNameSync(): string | null;
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
     * @param var0 original type: 'javax.security.auth.Subject'
     * @return original return type: 'boolean'
     */
    implies(var0: javax_security_auth_Subject | null): Promise<boolean>;
    /**
     * @param var0 original type: 'javax.security.auth.Subject'
     * @return original return type: 'boolean'
     */
    impliesSync(var0: javax_security_auth_Subject | null): boolean;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createPrincipalProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface PrincipalInterface {
    /**
     * @return original return type: 'java.lang.String'
     */
    getName(): string | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    equals(var0: BasicOrJavaType | null): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): string;
    /**
     * @return original return type: 'int'
     */
    hashCode(): number;
    /**
     * @param var0 original type: 'javax.security.auth.Subject'
     * @return original return type: 'boolean'
     */
    implies?(var0: javax_security_auth_Subject | null): boolean;
}
/**
 * Create a proxy for the {@link Principal} interface.
 * All required methods in {@link PrincipalInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createPrincipalProxy(methods: PrincipalInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<PrincipalInterface>;
declare const Principal_base: typeof PrincipalClass;
/**
 * Class java.security.Principal.
 *
 * This actually imports the java class for further use.
 * The class {@link PrincipalClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Principal extends Principal_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default Principal;
//# sourceMappingURL=Principal.d.ts.map