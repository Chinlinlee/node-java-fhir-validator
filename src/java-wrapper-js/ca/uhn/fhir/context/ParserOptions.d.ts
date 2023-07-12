import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Boolean as java_lang_Boolean } from "./../../../../java/lang/Boolean";
import { Set as java_util_Set } from "./../../../../java/util/Set";
import { Collection as java_util_Collection, CollectionInterface as java_util_CollectionInterface } from "./../../../../java/util/Collection";
import { Long as java_lang_Long } from "./../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../java/lang/Integer";
import { Class as java_lang_Class } from "./../../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link ParserOptions} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ParserOptionsClass extends JavaClass {
    /**
     * @return original return type: 'boolean'
     */
    isOverrideResourceIdWithBundleEntryFullUrl(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isOverrideResourceIdWithBundleEntryFullUrlSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isAutoContainReferenceTargetsWithNoId(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isAutoContainReferenceTargetsWithNoIdSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setAutoContainReferenceTargetsWithNoId(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setAutoContainReferenceTargetsWithNoIdSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'ca.uhn.fhir.context.ParserOptions'
     */
    setStripVersionsFromReferences(var0: java_lang_Boolean | boolean): Promise<ParserOptions | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'ca.uhn.fhir.context.ParserOptions'
     */
    setStripVersionsFromReferencesSync(var0: java_lang_Boolean | boolean): ParserOptions | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'ca.uhn.fhir.context.ParserOptions'
     */
    setOverrideResourceIdWithBundleEntryFullUrl(var0: java_lang_Boolean | boolean): Promise<ParserOptions | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'ca.uhn.fhir.context.ParserOptions'
     */
    setOverrideResourceIdWithBundleEntryFullUrlSync(var0: java_lang_Boolean | boolean): ParserOptions | null;
    /**
     * @return original return type: 'java.util.Set'
     */
    getDontStripVersionsFromReferencesAtPaths(): Promise<java_util_Set | null>;
    /**
     * @return original return type: 'java.util.Set'
     */
    getDontStripVersionsFromReferencesAtPathsSync(): java_util_Set | null;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'ca.uhn.fhir.context.ParserOptions'
     */
    setDontStripVersionsFromReferencesAtPaths(var0: (string | null)[] | null): Promise<ParserOptions | null>;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'ca.uhn.fhir.context.ParserOptions'
     */
    setDontStripVersionsFromReferencesAtPathsSync(var0: (string | null)[] | null): ParserOptions | null;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'ca.uhn.fhir.context.ParserOptions'
     */
    setDontStripVersionsFromReferencesAtPaths(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): Promise<ParserOptions | null>;
    /**
     * @param var0 original type: 'java.util.Collection'
     * @return original return type: 'ca.uhn.fhir.context.ParserOptions'
     */
    setDontStripVersionsFromReferencesAtPathsSync(var0: java_util_Collection | JavaInterfaceProxy<java_util_CollectionInterface> | null): ParserOptions | null;
    /**
     * @return original return type: 'boolean'
     */
    isStripVersionsFromReferences(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isStripVersionsFromReferencesSync(): boolean;
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
     * @return original return type: 'ca.uhn.fhir.context.ParserOptions'
     */
    static newInstanceAsync(): Promise<ParserOptions>;
    constructor();
}
declare const ParserOptions_base: typeof ParserOptionsClass;
/**
 * Class ca.uhn.fhir.context.ParserOptions.
 *
 * This actually imports the java class for further use.
 * The class {@link ParserOptionsClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ParserOptions extends ParserOptions_base {
}
export default ParserOptions;
//# sourceMappingURL=ParserOptions.d.ts.map