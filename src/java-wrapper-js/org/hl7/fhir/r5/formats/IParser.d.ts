/// <reference types="node" />
import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { ParserType as org_hl7_fhir_r5_formats_ParserType } from "./ParserType";
import { Resource as org_hl7_fhir_r5_model_Resource } from "./../model/Resource";
import { InputStream as java_io_InputStream } from "./../../../../../java/io/InputStream";
import { OutputStream as java_io_OutputStream } from "./../../../../../java/io/OutputStream";
import { DataType as org_hl7_fhir_r5_model_DataType } from "./../model/DataType";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
import { IParser$OutputStyle as org_hl7_fhir_r5_formats_IParser$OutputStyle } from "./IParser$OutputStyle";
/**
 * This class just defines types, you should import {@link IParser} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IParserClass extends JavaClass {
    /**
     * @return original return type: 'org.hl7.fhir.r5.formats.ParserType'
     */
    getType(): Promise<org_hl7_fhir_r5_formats_ParserType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.formats.ParserType'
     */
    getTypeSync(): org_hl7_fhir_r5_formats_ParserType | null;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    parse(var0: java_io_InputStream | null): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    parseSync(var0: java_io_InputStream | null): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    parse(var0: string | null): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    parseSync(var0: string | null): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    parse(var0: Buffer | null): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    parseSync(var0: Buffer | null): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @param var0 original type: 'java.io.OutputStream'
     * @param var1 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'void'
     */
    compose(var0: java_io_OutputStream | null, var1: org_hl7_fhir_r5_model_Resource | null): Promise<void>;
    /**
     * @param var0 original type: 'java.io.OutputStream'
     * @param var1 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'void'
     */
    composeSync(var0: java_io_OutputStream | null, var1: org_hl7_fhir_r5_model_Resource | null): void;
    /**
     * @param var0 original type: 'java.io.OutputStream'
     * @param var1 original type: 'org.hl7.fhir.r5.model.DataType'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    compose(var0: java_io_OutputStream | null, var1: org_hl7_fhir_r5_model_DataType | null, var2: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.io.OutputStream'
     * @param var1 original type: 'org.hl7.fhir.r5.model.DataType'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    composeSync(var0: java_io_OutputStream | null, var1: org_hl7_fhir_r5_model_DataType | null, var2: string | null): void;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.DataType'
     */
    parseType(var0: java_io_InputStream | null, var1: string | null): Promise<org_hl7_fhir_r5_model_DataType | null>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.DataType'
     */
    parseTypeSync(var0: java_io_InputStream | null, var1: string | null): org_hl7_fhir_r5_model_DataType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.DataType'
     */
    parseType(var0: string | null, var1: string | null): Promise<org_hl7_fhir_r5_model_DataType | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.DataType'
     */
    parseTypeSync(var0: string | null, var1: string | null): org_hl7_fhir_r5_model_DataType | null;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.DataType'
     */
    parseType(var0: Buffer | null, var1: string | null): Promise<org_hl7_fhir_r5_model_DataType | null>;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.DataType'
     */
    parseTypeSync(var0: Buffer | null, var1: string | null): org_hl7_fhir_r5_model_DataType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.formats.IParser'
     */
    setSuppressXhtml(var0: string | null): Promise<IParser | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.formats.IParser'
     */
    setSuppressXhtmlSync(var0: string | null): IParser | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.formats.IParser'
     */
    setHandleComments(var0: java_lang_Boolean | boolean): Promise<IParser | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.formats.IParser'
     */
    setHandleCommentsSync(var0: java_lang_Boolean | boolean): IParser | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.DataType'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'byte[]'
     */
    composeBytes(var0: org_hl7_fhir_r5_model_DataType | null, var1: string | null): Promise<Buffer | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.DataType'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'byte[]'
     */
    composeBytesSync(var0: org_hl7_fhir_r5_model_DataType | null, var1: string | null): Buffer | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'byte[]'
     */
    composeBytes(var0: org_hl7_fhir_r5_model_Resource | null): Promise<Buffer | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'byte[]'
     */
    composeBytesSync(var0: org_hl7_fhir_r5_model_Resource | null): Buffer | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.formats.IParser$OutputStyle'
     * @return original return type: 'org.hl7.fhir.r5.formats.IParser'
     */
    setOutputStyle(var0: org_hl7_fhir_r5_formats_IParser$OutputStyle | null): Promise<IParser | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.formats.IParser$OutputStyle'
     * @return original return type: 'org.hl7.fhir.r5.formats.IParser'
     */
    setOutputStyleSync(var0: org_hl7_fhir_r5_formats_IParser$OutputStyle | null): IParser | null;
    /**
     * @return original return type: 'boolean'
     */
    getHandleComments(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    getHandleCommentsSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.formats.IParser$OutputStyle'
     */
    getOutputStyle(): Promise<org_hl7_fhir_r5_formats_IParser$OutputStyle | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.formats.IParser$OutputStyle'
     */
    getOutputStyleSync(): org_hl7_fhir_r5_formats_IParser$OutputStyle | null;
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
     * @return original return type: 'org.hl7.fhir.r5.formats.IParser'
     */
    setAllowUnknownContent(var0: java_lang_Boolean | boolean): Promise<IParser | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.formats.IParser'
     */
    setAllowUnknownContentSync(var0: java_lang_Boolean | boolean): IParser | null;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.DataType'
     */
    parseAnyType(var0: java_io_InputStream | null, var1: string | null): Promise<org_hl7_fhir_r5_model_DataType | null>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.DataType'
     */
    parseAnyTypeSync(var0: java_io_InputStream | null, var1: string | null): org_hl7_fhir_r5_model_DataType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.DataType'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    composeString(var0: org_hl7_fhir_r5_model_DataType | null, var1: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.DataType'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    composeStringSync(var0: org_hl7_fhir_r5_model_DataType | null, var1: string | null): string | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'java.lang.String'
     */
    composeString(var0: org_hl7_fhir_r5_model_Resource | null): Promise<string | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'java.lang.String'
     */
    composeStringSync(var0: org_hl7_fhir_r5_model_Resource | null): string | null;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    parseAndClose(var0: java_io_InputStream | null): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    parseAndCloseSync(var0: java_io_InputStream | null): org_hl7_fhir_r5_model_Resource | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createIParserProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface IParserInterface {
    /**
     * @return original return type: 'org.hl7.fhir.r5.formats.ParserType'
     */
    getType(): org_hl7_fhir_r5_formats_ParserType | null;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    parse(var0: java_io_InputStream | null): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    parse(var0: string | null): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @param var0 original type: 'byte[]'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    parse(var0: Buffer | null): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @param var0 original type: 'java.io.OutputStream'
     * @param var1 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'void'
     */
    compose(var0: java_io_OutputStream | null, var1: org_hl7_fhir_r5_model_Resource | null): void;
    /**
     * @param var0 original type: 'java.io.OutputStream'
     * @param var1 original type: 'org.hl7.fhir.r5.model.DataType'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    compose(var0: java_io_OutputStream | null, var1: org_hl7_fhir_r5_model_DataType | null, var2: string | null): void;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.DataType'
     */
    parseType(var0: java_io_InputStream | null, var1: string | null): org_hl7_fhir_r5_model_DataType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.DataType'
     */
    parseType(var0: string | null, var1: string | null): org_hl7_fhir_r5_model_DataType | null;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.DataType'
     */
    parseType(var0: Buffer | null, var1: string | null): org_hl7_fhir_r5_model_DataType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.formats.IParser'
     */
    setSuppressXhtml(var0: string | null): IParser | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.formats.IParser'
     */
    setHandleComments(var0: java_lang_Boolean | boolean): IParser | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.DataType'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'byte[]'
     */
    composeBytes(var0: org_hl7_fhir_r5_model_DataType | null, var1: string | null): Buffer | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'byte[]'
     */
    composeBytes(var0: org_hl7_fhir_r5_model_Resource | null): Buffer | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.formats.IParser$OutputStyle'
     * @return original return type: 'org.hl7.fhir.r5.formats.IParser'
     */
    setOutputStyle(var0: org_hl7_fhir_r5_formats_IParser$OutputStyle | null): IParser | null;
    /**
     * @return original return type: 'boolean'
     */
    getHandleComments(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.formats.IParser$OutputStyle'
     */
    getOutputStyle(): org_hl7_fhir_r5_formats_IParser$OutputStyle | null;
    /**
     * @return original return type: 'boolean'
     */
    isAllowUnknownContent(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.formats.IParser'
     */
    setAllowUnknownContent(var0: java_lang_Boolean | boolean): IParser | null;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.DataType'
     */
    parseAnyType(var0: java_io_InputStream | null, var1: string | null): org_hl7_fhir_r5_model_DataType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.DataType'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    composeString(var0: org_hl7_fhir_r5_model_DataType | null, var1: string | null): string | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'java.lang.String'
     */
    composeString(var0: org_hl7_fhir_r5_model_Resource | null): string | null;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    parseAndClose(var0: java_io_InputStream | null): org_hl7_fhir_r5_model_Resource | null;
}
/**
 * Create a proxy for the {@link IParser} interface.
 * All required methods in {@link IParserInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createIParserProxy(methods: IParserInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<IParserInterface>;
declare const IParser_base: typeof IParserClass;
/**
 * Class org.hl7.fhir.r5.formats.IParser.
 *
 * This actually imports the java class for further use.
 * The class {@link IParserClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IParser extends IParser_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default IParser;
//# sourceMappingURL=IParser.d.ts.map