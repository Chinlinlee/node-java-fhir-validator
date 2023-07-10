import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link ValueSetExpansionOptions} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ValueSetExpansionOptionsClass extends JavaClass {
    /**
     * @return original return type: 'int'
     */
    getOffset(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getOffsetSync(): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'ca.uhn.fhir.context.support.ValueSetExpansionOptions'
     */
    setOffset(var0: java_lang_Integer | number): Promise<ValueSetExpansionOptions | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'ca.uhn.fhir.context.support.ValueSetExpansionOptions'
     */
    setOffsetSync(var0: java_lang_Integer | number): ValueSetExpansionOptions | null;
    /**
     * @return original return type: 'int'
     */
    getCount(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getCountSync(): number;
    /**
     * @return original return type: 'java.lang.String'
     */
    getFilter(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getFilterSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.support.ValueSetExpansionOptions'
     */
    setFilter(var0: string | null): Promise<ValueSetExpansionOptions | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.support.ValueSetExpansionOptions'
     */
    setFilterSync(var0: string | null): ValueSetExpansionOptions | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'ca.uhn.fhir.context.support.ValueSetExpansionOptions'
     */
    setCount(var0: java_lang_Integer | number): Promise<ValueSetExpansionOptions | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'ca.uhn.fhir.context.support.ValueSetExpansionOptions'
     */
    setCountSync(var0: java_lang_Integer | number): ValueSetExpansionOptions | null;
    /**
     * @return original return type: 'boolean'
     */
    isIncludeHierarchy(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isIncludeHierarchySync(): boolean;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'ca.uhn.fhir.context.support.ValueSetExpansionOptions'
     */
    static forOffsetAndCount(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<ValueSetExpansionOptions | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'ca.uhn.fhir.context.support.ValueSetExpansionOptions'
     */
    static forOffsetAndCountSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): ValueSetExpansionOptions | null;
    /**
     * @return original return type: 'boolean'
     */
    isFailOnMissingCodeSystem(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isFailOnMissingCodeSystemSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'ca.uhn.fhir.context.support.ValueSetExpansionOptions'
     */
    setFailOnMissingCodeSystem(var0: java_lang_Boolean | boolean): Promise<ValueSetExpansionOptions | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'ca.uhn.fhir.context.support.ValueSetExpansionOptions'
     */
    setFailOnMissingCodeSystemSync(var0: java_lang_Boolean | boolean): ValueSetExpansionOptions | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.support.ValueSetExpansionOptions'
     */
    setTheDisplayLanguage(var0: string | null): Promise<ValueSetExpansionOptions | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.context.support.ValueSetExpansionOptions'
     */
    setTheDisplayLanguageSync(var0: string | null): ValueSetExpansionOptions | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTheDisplayLanguage(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTheDisplayLanguageSync(): string | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setIncludeHierarchy(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setIncludeHierarchySync(var0: java_lang_Boolean | boolean): void;
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
     * @return original return type: 'ca.uhn.fhir.context.support.ValueSetExpansionOptions'
     */
    static newInstanceAsync(): Promise<ValueSetExpansionOptions>;
    constructor();
}
declare const ValueSetExpansionOptions_base: typeof ValueSetExpansionOptionsClass;
/**
 * Class ca.uhn.fhir.context.support.ValueSetExpansionOptions.
 *
 * This actually imports the java class for further use.
 * The class {@link ValueSetExpansionOptionsClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ValueSetExpansionOptions extends ValueSetExpansionOptions_base {
}
export default ValueSetExpansionOptions;
//# sourceMappingURL=ValueSetExpansionOptions.d.ts.map