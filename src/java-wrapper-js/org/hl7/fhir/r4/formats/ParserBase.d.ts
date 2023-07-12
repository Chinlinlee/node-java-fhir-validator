/// <reference types="node" />
import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Resource as org_hl7_fhir_r4_model_Resource } from "./../model/Resource";
import { InputStream as java_io_InputStream } from "./../../../../../java/io/InputStream";
import { Type as org_hl7_fhir_r4_model_Type } from "./../model/Type";
import { IParser as org_hl7_fhir_r4_formats_IParser } from "./IParser";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
import { IParser$OutputStyle as org_hl7_fhir_r4_formats_IParser$OutputStyle } from "./IParser$OutputStyle";
import { Manager$FhirFormat as org_hl7_fhir_r4_elementmodel_Manager$FhirFormat } from "./../elementmodel/Manager$FhirFormat";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
import { ParserType as org_hl7_fhir_r4_formats_ParserType } from "./ParserType";
import { OutputStream as java_io_OutputStream } from "./../../../../../java/io/OutputStream";
/**
 * This class just defines types, you should import {@link ParserBase} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ParserBaseClass extends JavaClass {
    /**
     * Original type: 'java.lang.String'
     */
    static readonly ID_REGEX: string | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly FHIR_NS: string | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly XHTML_NS: string | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly NS_XSI: string | null;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    parse(var0: Buffer | null): Promise<org_hl7_fhir_r4_model_Resource | null>;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    parseSync(var0: Buffer | null): org_hl7_fhir_r4_model_Resource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    parse(var0: string | null): Promise<org_hl7_fhir_r4_model_Resource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    parseSync(var0: string | null): org_hl7_fhir_r4_model_Resource | null;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    parse(var0: java_io_InputStream | null): Promise<org_hl7_fhir_r4_model_Resource | null>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    parseSync(var0: java_io_InputStream | null): org_hl7_fhir_r4_model_Resource | null;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    parseType(var0: Buffer | null, var1: string | null): Promise<org_hl7_fhir_r4_model_Type | null>;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    parseTypeSync(var0: Buffer | null, var1: string | null): org_hl7_fhir_r4_model_Type | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    parseType(var0: string | null, var1: string | null): Promise<org_hl7_fhir_r4_model_Type | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    parseTypeSync(var0: string | null, var1: string | null): org_hl7_fhir_r4_model_Type | null;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    parseType(var0: java_io_InputStream | null, var1: string | null): Promise<org_hl7_fhir_r4_model_Type | null>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    parseTypeSync(var0: java_io_InputStream | null, var1: string | null): org_hl7_fhir_r4_model_Type | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.formats.IParser'
     */
    setSuppressXhtml(var0: string | null): Promise<org_hl7_fhir_r4_formats_IParser | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.formats.IParser'
     */
    setSuppressXhtmlSync(var0: string | null): org_hl7_fhir_r4_formats_IParser | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r4.formats.IParser'
     */
    setHandleComments(var0: java_lang_Boolean | boolean): Promise<org_hl7_fhir_r4_formats_IParser | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r4.formats.IParser'
     */
    setHandleCommentsSync(var0: java_lang_Boolean | boolean): org_hl7_fhir_r4_formats_IParser | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Type'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'byte[]'
     */
    composeBytes(var0: org_hl7_fhir_r4_model_Type | null, var1: string | null): Promise<Buffer | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Type'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'byte[]'
     */
    composeBytesSync(var0: org_hl7_fhir_r4_model_Type | null, var1: string | null): Buffer | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Resource'
     * @return original return type: 'byte[]'
     */
    composeBytes(var0: org_hl7_fhir_r4_model_Resource | null): Promise<Buffer | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Resource'
     * @return original return type: 'byte[]'
     */
    composeBytesSync(var0: org_hl7_fhir_r4_model_Resource | null): Buffer | null;
    /**
     * @return original return type: 'boolean'
     */
    isAllowComments(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isAllowCommentsSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.formats.IParser$OutputStyle'
     * @return original return type: 'org.hl7.fhir.r4.formats.IParser'
     */
    setOutputStyle(var0: org_hl7_fhir_r4_formats_IParser$OutputStyle | null): Promise<org_hl7_fhir_r4_formats_IParser | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.formats.IParser$OutputStyle'
     * @return original return type: 'org.hl7.fhir.r4.formats.IParser'
     */
    setOutputStyleSync(var0: org_hl7_fhir_r4_formats_IParser$OutputStyle | null): org_hl7_fhir_r4_formats_IParser | null;
    /**
     * @return original return type: 'boolean'
     */
    getHandleComments(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    getHandleCommentsSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.formats.IParser$OutputStyle'
     */
    getOutputStyle(): Promise<org_hl7_fhir_r4_formats_IParser$OutputStyle | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.formats.IParser$OutputStyle'
     */
    getOutputStyleSync(): org_hl7_fhir_r4_formats_IParser$OutputStyle | null;
    /**
     * @return original return type: 'boolean'
     */
    isAllowUnknownContent(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isAllowUnknownContentSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r4.formats.IParser'
     */
    setAllowUnknownContent(var0: java_lang_Boolean | boolean): Promise<org_hl7_fhir_r4_formats_IParser | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r4.formats.IParser'
     */
    setAllowUnknownContentSync(var0: java_lang_Boolean | boolean): org_hl7_fhir_r4_formats_IParser | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    parseAnyType(var0: string | null, var1: string | null): Promise<org_hl7_fhir_r4_model_Type | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    parseAnyTypeSync(var0: string | null, var1: string | null): org_hl7_fhir_r4_model_Type | null;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    parseAnyType(var0: Buffer | null, var1: string | null): Promise<org_hl7_fhir_r4_model_Type | null>;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    parseAnyTypeSync(var0: Buffer | null, var1: string | null): org_hl7_fhir_r4_model_Type | null;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    parseAnyType(var0: java_io_InputStream | null, var1: string | null): Promise<org_hl7_fhir_r4_model_Type | null>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    parseAnyTypeSync(var0: java_io_InputStream | null, var1: string | null): org_hl7_fhir_r4_model_Type | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setAllowComments(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setAllowCommentsSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Resource'
     * @return original return type: 'java.lang.String'
     */
    composeString(var0: org_hl7_fhir_r4_model_Resource | null): Promise<string | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Resource'
     * @return original return type: 'java.lang.String'
     */
    composeStringSync(var0: org_hl7_fhir_r4_model_Resource | null): string | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Type'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    composeString(var0: org_hl7_fhir_r4_model_Type | null, var1: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Type'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    composeStringSync(var0: org_hl7_fhir_r4_model_Type | null, var1: string | null): string | null;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'java.lang.String'
     */
    static toString(var0: Buffer | null): Promise<string>;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'java.lang.String'
     */
    static toStringSync(var0: Buffer | null): string;
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): Promise<string>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    static loadFileTight(var0: string | null): Promise<org_hl7_fhir_r4_model_Resource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    static loadFileTightSync(var0: string | null): org_hl7_fhir_r4_model_Resource | null;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    static loadFileTight(var0: java_io_InputStream | null): Promise<org_hl7_fhir_r4_model_Resource | null>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    static loadFileTightSync(var0: java_io_InputStream | null): org_hl7_fhir_r4_model_Resource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static makeId(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    static makeIdSync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static isValidId(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static isValidIdSync(var0: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.formats.ParserBase'
     */
    static makeParser(var0: string | null): Promise<ParserBase | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.formats.ParserBase'
     */
    static makeParserSync(var0: string | null): ParserBase | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.elementmodel.Manager$FhirFormat'
     * @return original return type: 'org.hl7.fhir.r4.formats.ParserBase'
     */
    static makeParser(var0: org_hl7_fhir_r4_elementmodel_Manager$FhirFormat | null): Promise<ParserBase | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.elementmodel.Manager$FhirFormat'
     * @return original return type: 'org.hl7.fhir.r4.formats.ParserBase'
     */
    static makeParserSync(var0: org_hl7_fhir_r4_elementmodel_Manager$FhirFormat | null): ParserBase | null;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'org.hl7.fhir.r4.elementmodel.Manager$FhirFormat'
     */
    static determineFormat(var0: Buffer | null): Promise<org_hl7_fhir_r4_elementmodel_Manager$FhirFormat | null>;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'org.hl7.fhir.r4.elementmodel.Manager$FhirFormat'
     */
    static determineFormatSync(var0: Buffer | null): org_hl7_fhir_r4_elementmodel_Manager$FhirFormat | null;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'int'
     * @return original return type: 'org.hl7.fhir.r4.elementmodel.Manager$FhirFormat'
     */
    static determineFormat(var0: Buffer | null, var1: java_lang_Integer | number): Promise<org_hl7_fhir_r4_elementmodel_Manager$FhirFormat | null>;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'int'
     * @return original return type: 'org.hl7.fhir.r4.elementmodel.Manager$FhirFormat'
     */
    static determineFormatSync(var0: Buffer | null, var1: java_lang_Integer | number): org_hl7_fhir_r4_elementmodel_Manager$FhirFormat | null;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    static loadFile(var0: java_io_InputStream | null): Promise<org_hl7_fhir_r4_model_Resource | null>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    static loadFileSync(var0: java_io_InputStream | null): org_hl7_fhir_r4_model_Resource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    static loadFile(var0: string | null): Promise<org_hl7_fhir_r4_model_Resource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    static loadFileSync(var0: string | null): org_hl7_fhir_r4_model_Resource | null;
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
     * @return original return type: 'org.hl7.fhir.r4.formats.ParserType'
     */
    getType(): Promise<org_hl7_fhir_r4_formats_ParserType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.formats.ParserType'
     */
    getTypeSync(): org_hl7_fhir_r4_formats_ParserType | null;
    /**
     * @param var0 original type: 'java.io.OutputStream'
     * @param var1 original type: 'org.hl7.fhir.r4.model.Resource'
     * @return original return type: 'void'
     */
    compose(var0: java_io_OutputStream | null, var1: org_hl7_fhir_r4_model_Resource | null): Promise<void>;
    /**
     * @param var0 original type: 'java.io.OutputStream'
     * @param var1 original type: 'org.hl7.fhir.r4.model.Resource'
     * @return original return type: 'void'
     */
    composeSync(var0: java_io_OutputStream | null, var1: org_hl7_fhir_r4_model_Resource | null): void;
    /**
     * @param var0 original type: 'java.io.OutputStream'
     * @param var1 original type: 'org.hl7.fhir.r4.model.Type'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    compose(var0: java_io_OutputStream | null, var1: org_hl7_fhir_r4_model_Type | null, var2: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.io.OutputStream'
     * @param var1 original type: 'org.hl7.fhir.r4.model.Type'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    composeSync(var0: java_io_OutputStream | null, var1: org_hl7_fhir_r4_model_Type | null, var2: string | null): void;
}
declare const ParserBase_base: typeof ParserBaseClass;
/**
 * Class org.hl7.fhir.r4.formats.ParserBase.
 *
 * This actually imports the java class for further use.
 * The class {@link ParserBaseClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ParserBase extends ParserBase_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default ParserBase;
//# sourceMappingURL=ParserBase.d.ts.map