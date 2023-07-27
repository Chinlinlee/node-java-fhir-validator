import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Enum as java_lang_Enum } from "./../../../../../../java/lang/Enum";
import { Class as java_lang_Class } from "./../../../../../../java/lang/Class";
import { Optional as java_util_Optional } from "./../../../../../../java/util/Optional";
import { Long as java_lang_Long } from "./../../../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../../../java/lang/Integer";
/**
 * This class just defines types, you should import {@link ValidationLevel} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ValidationLevelClass extends JavaClass {
    /**
     * Original type: 'org.hl7.fhir.validation.cli.utils.ValidationLevel'
     */
    static readonly HINTS: ValidationLevelClass | null;
    /**
     * Original type: 'org.hl7.fhir.validation.cli.utils.ValidationLevel'
     */
    static readonly WARNINGS: ValidationLevelClass | null;
    /**
     * Original type: 'org.hl7.fhir.validation.cli.utils.ValidationLevel'
     */
    static readonly ERRORS: ValidationLevelClass | null;
    /**
     * @return original return type: 'org.hl7.fhir.validation.cli.utils.ValidationLevel[]'
     */
    static values(): Promise<(ValidationLevel | null)[] | null>;
    /**
     * @return original return type: 'org.hl7.fhir.validation.cli.utils.ValidationLevel[]'
     */
    static valuesSync(): (ValidationLevel | null)[] | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.validation.cli.utils.ValidationLevel'
     */
    static valueOf(var0: string | null): Promise<ValidationLevel | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.validation.cli.utils.ValidationLevel'
     */
    static valueOfSync(var0: string | null): ValidationLevel | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Enum'
     */
    static valueOf(var0: java_lang_Class | null, var1: string | null): Promise<java_lang_Enum | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Enum'
     */
    static valueOfSync(var0: java_lang_Class | null, var1: string | null): java_lang_Enum | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.validation.cli.utils.ValidationLevel'
     */
    static fromCode(var0: string | null): Promise<ValidationLevel | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.validation.cli.utils.ValidationLevel'
     */
    static fromCodeSync(var0: string | null): ValidationLevel | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    name(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    nameSync(): string | null;
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
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    compareTo(var0: BasicOrJavaType | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    compareToSync(var0: BasicOrJavaType | null): number;
    /**
     * @param var0 original type: 'java.lang.Enum'
     * @return original return type: 'int'
     */
    compareTo(var0: java_lang_Enum | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Enum'
     * @return original return type: 'int'
     */
    compareToSync(var0: java_lang_Enum | null): number;
    /**
     * @return original return type: 'java.util.Optional'
     */
    describeConstable(): Promise<java_util_Optional | null>;
    /**
     * @return original return type: 'java.util.Optional'
     */
    describeConstableSync(): java_util_Optional | null;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getDeclaringClass(): Promise<java_lang_Class | null>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getDeclaringClassSync(): java_lang_Class | null;
    /**
     * @return original return type: 'int'
     */
    ordinal(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    ordinalSync(): number;
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
}
declare const ValidationLevel_base: typeof ValidationLevelClass;
/**
 * Class org.hl7.fhir.validation.cli.utils.ValidationLevel.
 *
 * This actually imports the java class for further use.
 * The class {@link ValidationLevelClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ValidationLevel extends ValidationLevel_base {
}
export default ValidationLevel;
//# sourceMappingURL=ValidationLevel.d.ts.map