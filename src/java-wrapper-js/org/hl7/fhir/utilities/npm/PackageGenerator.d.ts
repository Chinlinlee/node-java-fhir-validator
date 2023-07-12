import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { PackageGenerator$PackageType as org_hl7_fhir_utilities_npm_PackageGenerator$PackageType } from "./PackageGenerator$PackageType";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../../../java/util/List";
import { JsonObject as org_hl7_fhir_utilities_json_model_JsonObject } from "./../json/model/JsonObject";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
import { OutputStream as java_io_OutputStream } from "./../../../../../java/io/OutputStream";
import { InputStream as java_io_InputStream } from "./../../../../../java/io/InputStream";
/**
 * This class just defines types, you should import {@link PackageGenerator} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PackageGeneratorClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    name(var0: string | null): Promise<PackageGenerator | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    nameSync(var0: string | null): PackageGenerator | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    version(var0: string | null): Promise<PackageGenerator | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    versionSync(var0: string | null): PackageGenerator | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    file(var0: string | null): Promise<PackageGenerator | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    fileSync(var0: string | null): PackageGenerator | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.PackageGenerator$PackageType'
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    kind(var0: org_hl7_fhir_utilities_npm_PackageGenerator$PackageType | null): Promise<PackageGenerator | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.PackageGenerator$PackageType'
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    kindSync(var0: org_hl7_fhir_utilities_npm_PackageGenerator$PackageType | null): PackageGenerator | null;
    /**
     * @return original return type: 'void'
     */
    commit(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    commitSync(): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    description(var0: string | null): Promise<PackageGenerator | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    descriptionSync(var0: string | null): PackageGenerator | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    bugs(var0: string | null): Promise<PackageGenerator | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    bugsSync(var0: string | null): PackageGenerator | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    contributor(var0: string | null, var1: string | null, var2: string | null): Promise<PackageGenerator | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    contributorSync(var0: string | null, var1: string | null, var2: string | null): PackageGenerator | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    dependency(var0: string | null, var1: string | null): Promise<PackageGenerator | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    dependencySync(var0: string | null, var1: string | null): PackageGenerator | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    author(var0: string | null, var1: string | null, var2: string | null): Promise<PackageGenerator | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    authorSync(var0: string | null, var1: string | null, var2: string | null): PackageGenerator | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    license(var0: string | null): Promise<PackageGenerator | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    licenseSync(var0: string | null): PackageGenerator | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    homepage(var0: string | null): Promise<PackageGenerator | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    homepageSync(var0: string | null): PackageGenerator | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    toolsVersion(var0: java_lang_Integer | number): Promise<PackageGenerator | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    toolsVersionSync(var0: java_lang_Integer | number): PackageGenerator | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    fhirVersions(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<PackageGenerator | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    fhirVersionsSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): PackageGenerator | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    getRootJsonObject(): Promise<org_hl7_fhir_utilities_json_model_JsonObject | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     */
    getRootJsonObjectSync(): org_hl7_fhir_utilities_json_model_JsonObject | null;
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
     * @param var0 original type: 'java.io.OutputStream'
     * @param var1 original type: 'java.io.InputStream'
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    static newInstanceAsync(var0: java_io_OutputStream | null, var1: java_io_InputStream | null): Promise<PackageGenerator>;
    /**
     * @param var0 original type: 'java.io.OutputStream'
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    static newInstanceAsync(var0: java_io_OutputStream | null): Promise<PackageGenerator>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.npm.PackageGenerator'
     */
    static newInstanceAsync(): Promise<PackageGenerator>;
    /**
     * @param var0 original type: 'java.io.OutputStream'
     * @param var1 original type: 'java.io.InputStream'
     */
    constructor(var0: java_io_OutputStream | null, var1: java_io_InputStream | null);
    /**
     * @param var0 original type: 'java.io.OutputStream'
     */
    constructor(var0: java_io_OutputStream | null);
    constructor();
}
declare const PackageGenerator_base: typeof PackageGeneratorClass;
/**
 * Class org.hl7.fhir.utilities.npm.PackageGenerator.
 *
 * This actually imports the java class for further use.
 * The class {@link PackageGeneratorClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PackageGenerator extends PackageGenerator_base {
}
export default PackageGenerator;
//# sourceMappingURL=PackageGenerator.d.ts.map