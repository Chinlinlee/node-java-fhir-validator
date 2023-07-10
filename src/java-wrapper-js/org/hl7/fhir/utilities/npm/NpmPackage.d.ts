/// <reference types="node" />
import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { InputStream as java_io_InputStream } from "./../../../../../java/io/InputStream";
import { NpmPackage$PackageResourceInformation as org_hl7_fhir_utilities_npm_NpmPackage$PackageResourceInformation } from "./NpmPackage$PackageResourceInformation";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../../../java/util/List";
import { PackageGenerator as org_hl7_fhir_utilities_npm_PackageGenerator } from "./PackageGenerator";
import { File as java_io_File } from "./../../../../../java/io/File";
import { OutputStream as java_io_OutputStream } from "./../../../../../java/io/OutputStream";
import { PackageGenerator$PackageType as org_hl7_fhir_utilities_npm_PackageGenerator$PackageType } from "./PackageGenerator$PackageType";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { Map as java_util_Map } from "./../../../../../java/util/Map";
import { Date as java_util_Date } from "./../../../../../java/util/Date";
import { NpmPackage$NpmPackageFolder as org_hl7_fhir_utilities_npm_NpmPackage$NpmPackageFolder } from "./NpmPackage$NpmPackageFolder";
import { JsonObject as org_hl7_fhir_utilities_json_model_JsonObject } from "./../json/model/JsonObject";
import { NpmPackage$ITransformingLoader as org_hl7_fhir_utilities_npm_NpmPackage$ITransformingLoader, NpmPackage$ITransformingLoaderInterface as org_hl7_fhir_utilities_npm_NpmPackage$ITransformingLoaderInterface } from "./NpmPackage$ITransformingLoader";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link NpmPackage} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class NpmPackageClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.String'
     */
    name(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    nameSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    type(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    typeSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): Promise<string>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @return original return type: 'java.lang.String'
     */
    version(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    versionSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.io.InputStream'
     */
    load(var0: string | null): Promise<java_io_InputStream | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.io.InputStream'
     */
    loadSync(var0: string | null): java_io_InputStream | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.NpmPackage$PackageResourceInformation'
     * @return original return type: 'java.io.InputStream'
     */
    load(var0: org_hl7_fhir_utilities_npm_NpmPackage$PackageResourceInformation | null): Promise<java_io_InputStream | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.NpmPackage$PackageResourceInformation'
     * @return original return type: 'java.io.InputStream'
     */
    loadSync(var0: org_hl7_fhir_utilities_npm_NpmPackage$PackageResourceInformation | null): java_io_InputStream | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.io.InputStream'
     */
    load(var0: string | null, var1: string | null): Promise<java_io_InputStream | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.io.InputStream'
     */
    loadSync(var0: string | null, var1: string | null): java_io_InputStream | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.List'
     */
    list(var0: string | null): Promise<java_util_List | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.List'
     */
    listSync(var0: string | null): java_util_List | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    static empty(): Promise<NpmPackage | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    static emptySync(): NpmPackage | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    static empty(var0: org_hl7_fhir_utilities_npm_PackageGenerator | null): Promise<NpmPackage | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    static emptySync(var0: org_hl7_fhir_utilities_npm_PackageGenerator | null): NpmPackage | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    url(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    urlSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    id(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    idSync(): string | null;
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'void'
     */
    save(var0: java_io_File | null): Promise<void>;
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'void'
     */
    saveSync(var0: java_io_File | null): void;
    /**
     * @param var0 original type: 'java.io.OutputStream'
     * @return original return type: 'void'
     */
    save(var0: java_io_OutputStream | null): Promise<void>;
    /**
     * @param var0 original type: 'java.io.OutputStream'
     * @return original return type: 'void'
     */
    saveSync(var0: java_io_OutputStream | null): void;
    /**
     * @return original return type: 'int'
     */
    getSize(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getSizeSync(): number;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.PackageGenerator$PackageType'
     * @return original return type: 'boolean'
     */
    isType(var0: org_hl7_fhir_utilities_npm_PackageGenerator$PackageType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.PackageGenerator$PackageType'
     * @return original return type: 'boolean'
     */
    isTypeSync(var0: org_hl7_fhir_utilities_npm_PackageGenerator$PackageType | null): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPath(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPathSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'byte[]'
     * @param var3 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    addFile(var0: string | null, var1: string | null, var2: Buffer | null, var3: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'byte[]'
     * @param var3 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    addFileSync(var0: string | null, var1: string | null, var2: Buffer | null, var3: string | null): void;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'boolean'
     * @return original return type: 'void'
     */
    readStream(var0: java_io_InputStream | null, var1: string | null, var2: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'boolean'
     * @return original return type: 'void'
     */
    readStreamSync(var0: java_io_InputStream | null, var1: string | null, var2: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setSize(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setSizeSync(var0: java_lang_Integer | number): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    date(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    dateSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    description(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    descriptionSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    fhirVersion(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    fhirVersionSync(): string | null;
    /**
     * @return original return type: 'java.util.Map'
     */
    getUserData(): Promise<java_util_Map | null>;
    /**
     * @return original return type: 'java.util.Map'
     */
    getUserDataSync(): java_util_Map | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    summary(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    summarySync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    canonical(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    canonicalSync(): string | null;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    static fromPackage(var0: java_io_InputStream | null, var1: string | null): Promise<NpmPackage | null>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    static fromPackageSync(var0: java_io_InputStream | null, var1: string | null): NpmPackage | null;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    static fromPackage(var0: java_io_InputStream | null): Promise<NpmPackage | null>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    static fromPackageSync(var0: java_io_InputStream | null): NpmPackage | null;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    static fromPackage(var0: java_io_InputStream | null, var1: string | null, var2: java_lang_Boolean | boolean): Promise<NpmPackage | null>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    static fromPackageSync(var0: java_io_InputStream | null, var1: string | null, var2: java_lang_Boolean | boolean): NpmPackage | null;
    /**
     * @return original return type: 'java.util.List'
     */
    dependencies(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    dependenciesSync(): java_util_List | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getWebLocation(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getWebLocationSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    title(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    titleSync(): string | null;
    /**
     * @return original return type: 'java.util.Date'
     */
    dateAsDate(): Promise<java_util_Date | null>;
    /**
     * @return original return type: 'java.util.Date'
     */
    dateAsDateSync(): java_util_Date | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'java.io.InputStream'
     */
    loadByCanonicalVersion(var0: string | null, var1: string | null, var2: string | null): Promise<java_io_InputStream | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'java.io.InputStream'
     */
    loadByCanonicalVersionSync(var0: string | null, var1: string | null, var2: string | null): java_io_InputStream | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.io.InputStream'
     */
    loadByCanonicalVersion(var0: string | null, var1: string | null): Promise<java_io_InputStream | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.io.InputStream'
     */
    loadByCanonicalVersionSync(var0: string | null, var1: string | null): java_io_InputStream | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.io.InputStream'
     */
    loadExampleResource(var0: string | null, var1: string | null): Promise<java_io_InputStream | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.io.InputStream'
     */
    loadExampleResourceSync(var0: string | null, var1: string | null): java_io_InputStream | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'java.util.List'
     */
    listIndexedResources(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<java_util_List | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'java.util.List'
     */
    listIndexedResourcesSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): java_util_List | null;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'java.util.List'
     */
    listIndexedResources(var0: (string | null)[] | null): Promise<java_util_List | null>;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'java.util.List'
     */
    listIndexedResourcesSync(var0: (string | null)[] | null): java_util_List | null;
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'boolean'
     */
    static isInternalExemptFile(var0: java_io_File | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.io.File'
     * @return original return type: 'boolean'
     */
    static isInternalExemptFileSync(var0: java_io_File | null): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isNotForPublication(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isNotForPublicationSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.io.File'
     * @param var2 original type: 'java.lang.String[]'
     * @return original return type: 'void'
     */
    loadFiles(var0: string | null, var1: java_io_File | null, var2: (string | null)[] | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.io.File'
     * @param var2 original type: 'java.lang.String[]'
     * @return original return type: 'void'
     */
    loadFilesSync(var0: string | null, var1: java_io_File | null, var2: (string | null)[] | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    static fromFolder(var0: string | null): Promise<NpmPackage | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    static fromFolderSync(var0: string | null): NpmPackage | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.utilities.npm.PackageGenerator$PackageType'
     * @param var2 original type: 'java.lang.String[]'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    static fromFolder(var0: string | null, var1: org_hl7_fhir_utilities_npm_PackageGenerator$PackageType | null, var2: (string | null)[] | null): Promise<NpmPackage | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.utilities.npm.PackageGenerator$PackageType'
     * @param var2 original type: 'java.lang.String[]'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    static fromFolderSync(var0: string | null, var1: org_hl7_fhir_utilities_npm_PackageGenerator$PackageType | null, var2: (string | null)[] | null): NpmPackage | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    static fromFolderMinimal(var0: string | null): Promise<NpmPackage | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    static fromFolderMinimalSync(var0: string | null): NpmPackage | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static isValidVersion(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static isValidVersionSync(var0: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static isValidName(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static isValidNameSync(var0: string | null): boolean;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    static extractFromTgz(var0: java_io_InputStream | null, var1: string | null, var2: string | null, var3: java_lang_Boolean | boolean): Promise<NpmPackage | null>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    static extractFromTgzSync(var0: java_io_InputStream | null, var1: string | null, var2: string | null, var3: java_lang_Boolean | boolean): NpmPackage | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.utilities.npm.NpmPackage$NpmPackageFolder'
     * @return original return type: 'void'
     */
    indexFolder(var0: string | null, var1: org_hl7_fhir_utilities_npm_NpmPackage$NpmPackageFolder | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.utilities.npm.NpmPackage$NpmPackageFolder'
     * @return original return type: 'void'
     */
    indexFolderSync(var0: string | null, var1: org_hl7_fhir_utilities_npm_NpmPackage$NpmPackageFolder | null): void;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'boolean'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    static fromZip(var0: java_io_InputStream | null, var1: java_lang_Boolean | boolean, var2: string | null): Promise<NpmPackage | null>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'boolean'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    static fromZipSync(var0: java_io_InputStream | null, var1: java_lang_Boolean | boolean, var2: string | null): NpmPackage | null;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'java.util.List'
     */
    listResources(var0: (string | null)[] | null): Promise<java_util_List | null>;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'java.util.List'
     */
    listResourcesSync(var0: (string | null)[] | null): java_util_List | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'java.util.List'
     */
    listResources(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<java_util_List | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'java.util.List'
     */
    listResourcesSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): java_util_List | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'byte[]'
     * @return original return type: 'void'
     */
    loadFile(var0: string | null, var1: Buffer | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'byte[]'
     * @return original return type: 'void'
     */
    loadFileSync(var0: string | null, var1: Buffer | null): void;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    getNpm(): Promise<org_hl7_fhir_utilities_json_model_JsonObject | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    getNpmSync(): org_hl7_fhir_utilities_json_model_JsonObject | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    unPack(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    unPackSync(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     * @return original return type: 'void'
     */
    unPack(var0: string | null, var1: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     * @return original return type: 'void'
     */
    unPackSync(var0: string | null, var1: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    clearFolder(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    clearFolderSync(var0: string | null): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    homepage(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    homepageSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.io.InputStream'
     */
    loadResource(var0: string | null, var1: string | null): Promise<java_io_InputStream | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.io.InputStream'
     */
    loadResourceSync(var0: string | null, var1: string | null): java_io_InputStream | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.io.InputStream'
     */
    loadResource(var0: string | null): Promise<java_io_InputStream | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.io.InputStream'
     */
    loadResourceSync(var0: string | null): java_io_InputStream | null;
    /**
     * @return original return type: 'java.util.Map'
     */
    getFolders(): Promise<java_util_Map | null>;
    /**
     * @return original return type: 'java.util.Map'
     */
    getFoldersSync(): java_util_Map | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasFile(var0: string | null, var1: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasFileSync(var0: string | null, var1: string | null): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    license(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    licenseSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    fhirVersionList(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    fhirVersionListSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    dependencySummary(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    dependencySummarySync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    toolsVersion(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toolsVersionSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    debugDump(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    debugDumpSync(var0: string | null): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     * @return original return type: 'void'
     */
    setNpm(var0: org_hl7_fhir_utilities_json_model_JsonObject | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     * @return original return type: 'void'
     */
    setNpmSync(var0: org_hl7_fhir_utilities_json_model_JsonObject | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    unPackWithAppend(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    unPackWithAppendSync(var0: string | null): void;
    /**
     * @return original return type: 'java.util.Map'
     */
    getTypes(): Promise<java_util_Map | null>;
    /**
     * @return original return type: 'java.util.Map'
     */
    getTypesSync(): java_util_Map | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.io.InputStream'
     */
    loadByCanonical(var0: string | null): Promise<java_io_InputStream | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.io.InputStream'
     */
    loadByCanonicalSync(var0: string | null): java_io_InputStream | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.io.InputStream'
     */
    loadByCanonical(var0: string | null, var1: string | null): Promise<java_io_InputStream | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.io.InputStream'
     */
    loadByCanonicalSync(var0: string | null, var1: string | null): java_io_InputStream | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.NpmPackage$ITransformingLoader'
     * @return original return type: 'void'
     */
    loadAllFiles(var0: org_hl7_fhir_utilities_npm_NpmPackage$ITransformingLoader | JavaInterfaceProxy<org_hl7_fhir_utilities_npm_NpmPackage$ITransformingLoaderInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.NpmPackage$ITransformingLoader'
     * @return original return type: 'void'
     */
    loadAllFilesSync(var0: org_hl7_fhir_utilities_npm_NpmPackage$ITransformingLoader | JavaInterfaceProxy<org_hl7_fhir_utilities_npm_NpmPackage$ITransformingLoaderInterface> | null): void;
    /**
     * @return original return type: 'void'
     */
    loadAllFiles(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    loadAllFilesSync(): void;
    /**
     * @return original return type: 'boolean'
     */
    isChangedByLoader(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isChangedByLoaderSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasCanonical(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasCanonicalSync(var0: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    static fromUrl(var0: string | null): Promise<NpmPackage | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    static fromUrlSync(var0: string | null): NpmPackage | null;
    /**
     * @return original return type: 'boolean'
     */
    canLazyLoad(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    canLazyLoadSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isCore(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isCoreSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isMinimalMemory(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isMinimalMemorySync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getFilePath(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getFilePathSync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    deleteFolder(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    deleteFolderSync(var0: string | null): void;
    /**
     * @return original return type: 'boolean'
     */
    isTx(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isTxSync(): boolean;
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
}
declare const NpmPackage_base: typeof NpmPackageClass;
/**
 * Class org.hl7.fhir.utilities.npm.NpmPackage.
 *
 * This actually imports the java class for further use.
 * The class {@link NpmPackageClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class NpmPackage extends NpmPackage_base {
}
export default NpmPackage;
//# sourceMappingURL=NpmPackage.d.ts.map