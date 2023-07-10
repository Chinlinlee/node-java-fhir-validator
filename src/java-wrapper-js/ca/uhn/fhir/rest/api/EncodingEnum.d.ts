import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Enum as java_lang_Enum } from "./../../../../../java/lang/Enum";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
import { IParser as ca_uhn_fhir_parser_IParser } from "./../../parser/IParser";
import { FhirContext as ca_uhn_fhir_context_FhirContext } from "./../../context/FhirContext";
import { Optional as java_util_Optional } from "./../../../../../java/util/Optional";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
/**
 * This class just defines types, you should import {@link EncodingEnum} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class EncodingEnumClass extends JavaClass {
    /**
     * Original type: 'ca.uhn.fhir.rest.api.EncodingEnum'
     */
    static readonly JSON: EncodingEnumClass | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.api.EncodingEnum'
     */
    static readonly XML: EncodingEnumClass | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.api.EncodingEnum'
     */
    static readonly RDF: EncodingEnumClass | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.api.EncodingEnum'
     */
    static readonly NDJSON: EncodingEnumClass | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly JSON_PLAIN_STRING: string | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly RDF_PLAIN_STRING: string | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly XML_PLAIN_STRING: string | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly NDJSON_PLAIN_STRING: string | null;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.api.EncodingEnum[]'
     */
    static values(): Promise<(EncodingEnum | null)[] | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.api.EncodingEnum[]'
     */
    static valuesSync(): (EncodingEnum | null)[] | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.api.EncodingEnum'
     */
    static valueOf(var0: string | null): Promise<EncodingEnum | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.api.EncodingEnum'
     */
    static valueOfSync(var0: string | null): EncodingEnum | null;
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
     * @return original return type: 'ca.uhn.fhir.rest.api.EncodingEnum'
     */
    static forContentType(var0: string | null): Promise<EncodingEnum | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.api.EncodingEnum'
     */
    static forContentTypeSync(var0: string | null): EncodingEnum | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static isLegacy(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static isLegacySync(var0: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.api.EncodingEnum'
     */
    static detectEncoding(var0: string | null): Promise<EncodingEnum | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.api.EncodingEnum'
     */
    static detectEncodingSync(var0: string | null): EncodingEnum | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.FhirContext'
     * @return original return type: 'ca.uhn.fhir.parser.IParser'
     */
    newParser(var0: ca_uhn_fhir_context_FhirContext | null): Promise<ca_uhn_fhir_parser_IParser | null>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.context.FhirContext'
     * @return original return type: 'ca.uhn.fhir.parser.IParser'
     */
    newParserSync(var0: ca_uhn_fhir_context_FhirContext | null): ca_uhn_fhir_parser_IParser | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getFormatContentType(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getFormatContentTypeSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getResourceContentType(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getResourceContentTypeSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.api.EncodingEnum'
     */
    static forContentTypeStrict(var0: string | null): Promise<EncodingEnum | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.api.EncodingEnum'
     */
    static forContentTypeStrictSync(var0: string | null): EncodingEnum | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getResourceContentTypeNonLegacy(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getResourceContentTypeNonLegacySync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.api.EncodingEnum'
     */
    static detectEncodingNoDefault(var0: string | null): Promise<EncodingEnum | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'ca.uhn.fhir.rest.api.EncodingEnum'
     */
    static detectEncodingNoDefaultSync(var0: string | null): EncodingEnum | null;
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
declare const EncodingEnum_base: typeof EncodingEnumClass;
/**
 * Class ca.uhn.fhir.rest.api.EncodingEnum.
 *
 * This actually imports the java class for further use.
 * The class {@link EncodingEnumClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class EncodingEnum extends EncodingEnum_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default EncodingEnum;
//# sourceMappingURL=EncodingEnum.d.ts.map