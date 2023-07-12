import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../../../java/util/List";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link CacheControlDirective} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class CacheControlDirectiveClass extends JavaClass {
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'ca.uhn.fhir.rest.api.CacheControlDirective'
     */
    parse(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<CacheControlDirective | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'ca.uhn.fhir.rest.api.CacheControlDirective'
     */
    parseSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): CacheControlDirective | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'ca.uhn.fhir.rest.api.CacheControlDirective'
     */
    setNoCache(var0: java_lang_Boolean | boolean): Promise<CacheControlDirective | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'ca.uhn.fhir.rest.api.CacheControlDirective'
     */
    setNoCacheSync(var0: java_lang_Boolean | boolean): CacheControlDirective | null;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.api.CacheControlDirective'
     */
    static noCache(): Promise<CacheControlDirective | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.api.CacheControlDirective'
     */
    static noCacheSync(): CacheControlDirective | null;
    /**
     * @return original return type: 'boolean'
     */
    isNoStore(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isNoStoreSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.Integer'
     * @return original return type: 'ca.uhn.fhir.rest.api.CacheControlDirective'
     */
    setMaxResults(var0: java_lang_Integer | number | null): Promise<CacheControlDirective | null>;
    /**
     * @param var0 original type: 'java.lang.Integer'
     * @return original return type: 'ca.uhn.fhir.rest.api.CacheControlDirective'
     */
    setMaxResultsSync(var0: java_lang_Integer | number | null): CacheControlDirective | null;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getMaxResults(): Promise<number | null>;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getMaxResultsSync(): number | null;
    /**
     * @return original return type: 'boolean'
     */
    isNoCache(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isNoCacheSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'ca.uhn.fhir.rest.api.CacheControlDirective'
     */
    setNoStore(var0: java_lang_Boolean | boolean): Promise<CacheControlDirective | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'ca.uhn.fhir.rest.api.CacheControlDirective'
     */
    setNoStoreSync(var0: java_lang_Boolean | boolean): CacheControlDirective | null;
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
     * @return original return type: 'ca.uhn.fhir.rest.api.CacheControlDirective'
     */
    static newInstanceAsync(): Promise<CacheControlDirective>;
    constructor();
}
declare const CacheControlDirective_base: typeof CacheControlDirectiveClass;
/**
 * Class ca.uhn.fhir.rest.api.CacheControlDirective.
 *
 * This actually imports the java class for further use.
 * The class {@link CacheControlDirectiveClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class CacheControlDirective extends CacheControlDirective_base {
}
export default CacheControlDirective;
//# sourceMappingURL=CacheControlDirective.d.ts.map