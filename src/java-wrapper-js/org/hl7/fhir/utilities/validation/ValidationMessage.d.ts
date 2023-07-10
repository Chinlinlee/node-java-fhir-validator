import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { ValidationMessage$IssueType as org_hl7_fhir_utilities_validation_ValidationMessage$IssueType } from "./ValidationMessage$IssueType";
import { ValidationMessage$Source as org_hl7_fhir_utilities_validation_ValidationMessage$Source } from "./ValidationMessage$Source";
import { ValidationMessage$IssueSeverity as org_hl7_fhir_utilities_validation_ValidationMessage$IssueSeverity } from "./ValidationMessage$IssueSeverity";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { Date as java_util_Date } from "./../../../../../java/util/Date";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
import { Comparator as java_util_Comparator, ComparatorInterface as java_util_ComparatorInterface } from "./../../../../../java/util/Comparator";
import { Function as java_util_function_Function, FunctionInterface as java_util_function_FunctionInterface } from "./../../../../../java/util/function/Function";
import { ToIntFunction as java_util_function_ToIntFunction, ToIntFunctionInterface as java_util_function_ToIntFunctionInterface } from "./../../../../../java/util/function/ToIntFunction";
import { ToLongFunction as java_util_function_ToLongFunction, ToLongFunctionInterface as java_util_function_ToLongFunctionInterface } from "./../../../../../java/util/function/ToLongFunction";
import { ToDoubleFunction as java_util_function_ToDoubleFunction, ToDoubleFunctionInterface as java_util_function_ToDoubleFunctionInterface } from "./../../../../../java/util/function/ToDoubleFunction";
/**
 * This class just defines types, you should import {@link ValidationMessage} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ValidationMessageClass extends JavaClass {
    /**
     * Original type: 'java.lang.String'
     */
    sliceHtml: string | null;
    /**
     * Original type: 'java.lang.String[]'
     */
    sliceText: (string | null)[] | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly NO_RULE_DATE: string | null;
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
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     * @return original return type: 'int'
     */
    compareTo(var0: ValidationMessageClass | null): Promise<number>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     * @return original return type: 'int'
     */
    compareToSync(var0: ValidationMessageClass | null): number;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     * @param var1 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     * @return original return type: 'int'
     */
    compare(var0: ValidationMessageClass | null, var1: ValidationMessageClass | null): Promise<number>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     * @param var1 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     * @return original return type: 'int'
     */
    compareSync(var0: ValidationMessageClass | null, var1: ValidationMessageClass | null): number;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    compare(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    compareSync(var0: BasicOrJavaType | null, var1: BasicOrJavaType | null): number;
    /**
     * @return original return type: 'java.lang.String'
     */
    getLocation(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getLocationSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getMessage(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getMessageSync(): string | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage$IssueType'
     */
    getType(): Promise<org_hl7_fhir_utilities_validation_ValidationMessage$IssueType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage$IssueType'
     */
    getTypeSync(): org_hl7_fhir_utilities_validation_ValidationMessage$IssueType | null;
    /**
     * @return original return type: 'boolean'
     */
    isError(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isErrorSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage$Source'
     */
    getSource(): Promise<org_hl7_fhir_utilities_validation_ValidationMessage$Source | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage$Source'
     */
    getSourceSync(): org_hl7_fhir_utilities_validation_ValidationMessage$Source | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage$IssueSeverity'
     */
    getLevel(): Promise<org_hl7_fhir_utilities_validation_ValidationMessage$IssueSeverity | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage$IssueSeverity'
     */
    getLevelSync(): org_hl7_fhir_utilities_validation_ValidationMessage$IssueSeverity | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$IssueSeverity'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setLevel(var0: org_hl7_fhir_utilities_validation_ValidationMessage$IssueSeverity | null): Promise<ValidationMessage | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$IssueSeverity'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setLevelSync(var0: org_hl7_fhir_utilities_validation_ValidationMessage$IssueSeverity | null): ValidationMessage | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getDisplay(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getDisplaySync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    summary(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    summarySync(): string | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$Source'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setSource(var0: org_hl7_fhir_utilities_validation_ValidationMessage$Source | null): Promise<ValidationMessage | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$Source'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setSourceSync(var0: org_hl7_fhir_utilities_validation_ValidationMessage$Source | null): ValidationMessage | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setCriticalSignpost(var0: java_lang_Boolean | boolean): Promise<ValidationMessage | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setCriticalSignpostSync(var0: java_lang_Boolean | boolean): ValidationMessage | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setLocation(var0: string | null): Promise<ValidationMessage | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setLocationSync(var0: string | null): ValidationMessage | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setMessage(var0: string | null): Promise<ValidationMessage | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setMessageSync(var0: string | null): ValidationMessage | null;
    /**
     * @return original return type: 'int'
     */
    getLine(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getLineSync(): number;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setLine(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setLineSync(var0: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setCol(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setColSync(var0: java_lang_Integer | number): void;
    /**
     * @return original return type: 'int'
     */
    getCol(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getColSync(): number;
    /**
     * @return original return type: 'java.util.Date'
     */
    getRuleDate(): Promise<java_util_Date | null>;
    /**
     * @return original return type: 'java.util.Date'
     */
    getRuleDateSync(): java_util_Date | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setSlicingHint(var0: java_lang_Boolean | boolean): Promise<ValidationMessage | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setSlicingHintSync(var0: java_lang_Boolean | boolean): ValidationMessage | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    toXML(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toXMLSync(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    isSignpost(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isSignpostSync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTxLink(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTxLinkSync(): string | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setIgnorableError(var0: java_lang_Boolean | boolean): Promise<ValidationMessage | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setIgnorableErrorSync(var0: java_lang_Boolean | boolean): ValidationMessage | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getSliceHtml(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getSliceHtmlSync(): string | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$IssueType'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setType(var0: org_hl7_fhir_utilities_validation_ValidationMessage$IssueType | null): Promise<ValidationMessage | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$IssueType'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setTypeSync(var0: org_hl7_fhir_utilities_validation_ValidationMessage$IssueType | null): ValidationMessage | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setMessageId(var0: string | null): Promise<ValidationMessage | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setMessageIdSync(var0: string | null): ValidationMessage | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setTxLink(var0: string | null): Promise<ValidationMessage | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setTxLinkSync(var0: string | null): ValidationMessage | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setRuleDate(var0: string | null): Promise<ValidationMessage | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setRuleDateSync(var0: string | null): ValidationMessage | null;
    /**
     * @param var0 original type: 'java.util.Date'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setRuleDate(var0: java_util_Date | null): Promise<ValidationMessage | null>;
    /**
     * @param var0 original type: 'java.util.Date'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setRuleDateSync(var0: java_util_Date | null): ValidationMessage | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setLocationLink(var0: string | null): Promise<ValidationMessage | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setLocationLinkSync(var0: string | null): ValidationMessage | null;
    /**
     * @return original return type: 'boolean'
     */
    isCriticalSignpost(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isCriticalSignpostSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isIgnorableError(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isIgnorableErrorSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setHtml(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setHtmlSync(var0: string | null): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getHtml(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getHtmlSync(): string | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setMatched(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setMatchedSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'boolean'
     */
    isMatched(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isMatchedSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String[]'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setSliceHtml(var0: string | null, var1: (string | null)[] | null): Promise<ValidationMessage | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String[]'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setSliceHtmlSync(var0: string | null, var1: (string | null)[] | null): ValidationMessage | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setSignpost(var0: java_lang_Boolean | boolean): Promise<ValidationMessage | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    setSignpostSync(var0: java_lang_Boolean | boolean): ValidationMessage | null;
    /**
     * @return original return type: 'boolean'
     */
    isSlicingHint(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isSlicingHintSync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    getLocationLink(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getLocationLinkSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getMessageId(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getMessageIdSync(): string | null;
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
     * @param var0 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparing(var0: java_util_Comparator | JavaInterfaceProxy<java_util_ComparatorInterface> | null): Promise<java_util_Comparator | null>;
    /**
     * @param var0 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparingSync(var0: java_util_Comparator | JavaInterfaceProxy<java_util_ComparatorInterface> | null): java_util_Comparator | null;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @param var1 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparing(var0: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null, var1: java_util_Comparator | JavaInterfaceProxy<java_util_ComparatorInterface> | null): Promise<java_util_Comparator | null>;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @param var1 original type: 'java.util.Comparator'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparingSync(var0: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null, var1: java_util_Comparator | JavaInterfaceProxy<java_util_ComparatorInterface> | null): java_util_Comparator | null;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparing(var0: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null): Promise<java_util_Comparator | null>;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparingSync(var0: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null): java_util_Comparator | null;
    /**
     * @return original return type: 'java.util.Comparator'
     */
    reversed(): Promise<java_util_Comparator | null>;
    /**
     * @return original return type: 'java.util.Comparator'
     */
    reversedSync(): java_util_Comparator | null;
    /**
     * @param var0 original type: 'java.util.function.ToIntFunction'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparingInt(var0: java_util_function_ToIntFunction | JavaInterfaceProxy<java_util_function_ToIntFunctionInterface> | null): Promise<java_util_Comparator | null>;
    /**
     * @param var0 original type: 'java.util.function.ToIntFunction'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparingIntSync(var0: java_util_function_ToIntFunction | JavaInterfaceProxy<java_util_function_ToIntFunctionInterface> | null): java_util_Comparator | null;
    /**
     * @param var0 original type: 'java.util.function.ToLongFunction'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparingLong(var0: java_util_function_ToLongFunction | JavaInterfaceProxy<java_util_function_ToLongFunctionInterface> | null): Promise<java_util_Comparator | null>;
    /**
     * @param var0 original type: 'java.util.function.ToLongFunction'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparingLongSync(var0: java_util_function_ToLongFunction | JavaInterfaceProxy<java_util_function_ToLongFunctionInterface> | null): java_util_Comparator | null;
    /**
     * @param var0 original type: 'java.util.function.ToDoubleFunction'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparingDouble(var0: java_util_function_ToDoubleFunction | JavaInterfaceProxy<java_util_function_ToDoubleFunctionInterface> | null): Promise<java_util_Comparator | null>;
    /**
     * @param var0 original type: 'java.util.function.ToDoubleFunction'
     * @return original return type: 'java.util.Comparator'
     */
    thenComparingDoubleSync(var0: java_util_function_ToDoubleFunction | JavaInterfaceProxy<java_util_function_ToDoubleFunctionInterface> | null): java_util_Comparator | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$Source'
     * @param var1 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$IssueType'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'java.lang.String'
     * @param var5 original type: 'java.lang.String'
     * @param var6 original type: 'java.lang.String'
     * @param var7 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$IssueSeverity'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    static newInstanceAsync(var0: org_hl7_fhir_utilities_validation_ValidationMessage$Source | null, var1: org_hl7_fhir_utilities_validation_ValidationMessage$IssueType | null, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: string | null, var5: string | null, var6: string | null, var7: org_hl7_fhir_utilities_validation_ValidationMessage$IssueSeverity | null): Promise<ValidationMessage>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$Source'
     * @param var1 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$IssueType'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'java.lang.String'
     * @param var5 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$IssueSeverity'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    static newInstanceAsync(var0: org_hl7_fhir_utilities_validation_ValidationMessage$Source | null, var1: org_hl7_fhir_utilities_validation_ValidationMessage$IssueType | null, var2: string | null, var3: string | null, var4: string | null, var5: org_hl7_fhir_utilities_validation_ValidationMessage$IssueSeverity | null): Promise<ValidationMessage>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$Source'
     * @param var1 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$IssueType'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'java.lang.String'
     * @param var5 original type: 'java.lang.String'
     * @param var6 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$IssueSeverity'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    static newInstanceAsync(var0: org_hl7_fhir_utilities_validation_ValidationMessage$Source | null, var1: org_hl7_fhir_utilities_validation_ValidationMessage$IssueType | null, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: string | null, var5: string | null, var6: org_hl7_fhir_utilities_validation_ValidationMessage$IssueSeverity | null): Promise<ValidationMessage>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$Source'
     * @param var1 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$IssueType'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$IssueSeverity'
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    static newInstanceAsync(var0: org_hl7_fhir_utilities_validation_ValidationMessage$Source | null, var1: org_hl7_fhir_utilities_validation_ValidationMessage$IssueType | null, var2: string | null, var3: string | null, var4: org_hl7_fhir_utilities_validation_ValidationMessage$IssueSeverity | null): Promise<ValidationMessage>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     */
    static newInstanceAsync(): Promise<ValidationMessage>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$Source'
     * @param var1 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$IssueType'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'java.lang.String'
     * @param var5 original type: 'java.lang.String'
     * @param var6 original type: 'java.lang.String'
     * @param var7 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$IssueSeverity'
     */
    constructor(var0: org_hl7_fhir_utilities_validation_ValidationMessage$Source | null, var1: org_hl7_fhir_utilities_validation_ValidationMessage$IssueType | null, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: string | null, var5: string | null, var6: string | null, var7: org_hl7_fhir_utilities_validation_ValidationMessage$IssueSeverity | null);
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$Source'
     * @param var1 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$IssueType'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'java.lang.String'
     * @param var5 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$IssueSeverity'
     */
    constructor(var0: org_hl7_fhir_utilities_validation_ValidationMessage$Source | null, var1: org_hl7_fhir_utilities_validation_ValidationMessage$IssueType | null, var2: string | null, var3: string | null, var4: string | null, var5: org_hl7_fhir_utilities_validation_ValidationMessage$IssueSeverity | null);
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$Source'
     * @param var1 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$IssueType'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'java.lang.String'
     * @param var5 original type: 'java.lang.String'
     * @param var6 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$IssueSeverity'
     */
    constructor(var0: org_hl7_fhir_utilities_validation_ValidationMessage$Source | null, var1: org_hl7_fhir_utilities_validation_ValidationMessage$IssueType | null, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: string | null, var5: string | null, var6: org_hl7_fhir_utilities_validation_ValidationMessage$IssueSeverity | null);
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$Source'
     * @param var1 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$IssueType'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$IssueSeverity'
     */
    constructor(var0: org_hl7_fhir_utilities_validation_ValidationMessage$Source | null, var1: org_hl7_fhir_utilities_validation_ValidationMessage$IssueType | null, var2: string | null, var3: string | null, var4: org_hl7_fhir_utilities_validation_ValidationMessage$IssueSeverity | null);
    constructor();
}
declare const ValidationMessage_base: typeof ValidationMessageClass;
/**
 * Class org.hl7.fhir.utilities.validation.ValidationMessage.
 *
 * This actually imports the java class for further use.
 * The class {@link ValidationMessageClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ValidationMessage extends ValidationMessage_base {
}
export default ValidationMessage;
//# sourceMappingURL=ValidationMessage.d.ts.map