import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { FilesystemPackageCacheManager$FilesystemPackageCacheMode as org_hl7_fhir_utilities_npm_FilesystemPackageCacheManager$FilesystemPackageCacheMode } from "./FilesystemPackageCacheManager$FilesystemPackageCacheMode";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
import { NpmPackage as org_hl7_fhir_utilities_npm_NpmPackage } from "./NpmPackage";
import { InputStream as java_io_InputStream } from "./../../../../../java/io/InputStream";
import { FilesystemPackageCacheManager$IPackageProvider as org_hl7_fhir_utilities_npm_FilesystemPackageCacheManager$IPackageProvider, FilesystemPackageCacheManager$IPackageProviderInterface as org_hl7_fhir_utilities_npm_FilesystemPackageCacheManager$IPackageProviderInterface } from "./FilesystemPackageCacheManager$IPackageProvider";
import { List as java_util_List } from "./../../../../../java/util/List";
import { Map as java_util_Map, MapInterface as java_util_MapInterface } from "./../../../../../java/util/Map";
import { Function as java_util_function_Function, FunctionInterface as java_util_function_FunctionInterface } from "./../../../../../java/util/function/Function";
import { PackageServer as org_hl7_fhir_utilities_npm_PackageServer } from "./PackageServer";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link FilesystemPackageCacheManager} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FilesystemPackageCacheManagerClass extends JavaClass {
    /**
     * Original type: 'java.lang.String'
     */
    static readonly PACKAGE_REGEX: string | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly PACKAGE_VERSION_REGEX: string | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly PACKAGE_VERSION_REGEX_OPT: string | null;
    /**
     * @return original return type: 'void'
     */
    clear(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    clearSync(): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.FilesystemPackageCacheManager$FilesystemPackageCacheMode'
     * @return original return type: 'void'
     */
    init(var0: org_hl7_fhir_utilities_npm_FilesystemPackageCacheManager$FilesystemPackageCacheMode | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.FilesystemPackageCacheManager$FilesystemPackageCacheMode'
     * @return original return type: 'void'
     */
    initSync(var0: org_hl7_fhir_utilities_npm_FilesystemPackageCacheManager$FilesystemPackageCacheMode | null): void;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setMinimalMemory(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setMinimalMemorySync(var0: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    loadFromFolder(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    loadFromFolderSync(var0: string | null): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getFolder(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getFolderSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.io.InputStream'
     * @param var3 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    addPackageToCache(var0: string | null, var1: string | null, var2: java_io_InputStream | null, var3: string | null): Promise<org_hl7_fhir_utilities_npm_NpmPackage | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.io.InputStream'
     * @param var3 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    addPackageToCacheSync(var0: string | null, var1: string | null, var2: java_io_InputStream | null, var3: string | null): org_hl7_fhir_utilities_npm_NpmPackage | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getLatestVersion(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getLatestVersionSync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    removePackage(var0: string | null, var1: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    removePackageSync(var0: string | null, var1: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getPackageUrl(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getPackageUrlSync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.FilesystemPackageCacheManager$IPackageProvider'
     * @return original return type: 'void'
     */
    static setPackageProvider(var0: org_hl7_fhir_utilities_npm_FilesystemPackageCacheManager$IPackageProvider | JavaInterfaceProxy<org_hl7_fhir_utilities_npm_FilesystemPackageCacheManager$IPackageProviderInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.FilesystemPackageCacheManager$IPackageProvider'
     * @return original return type: 'void'
     */
    static setPackageProviderSync(var0: org_hl7_fhir_utilities_npm_FilesystemPackageCacheManager$IPackageProvider | JavaInterfaceProxy<org_hl7_fhir_utilities_npm_FilesystemPackageCacheManager$IPackageProviderInterface> | null): void;
    /**
     * @return original return type: 'boolean'
     */
    isSuppressErrors(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isSuppressErrorsSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setSuppressErrors(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setSuppressErrorsSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    packageInstalled(var0: string | null, var1: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    packageInstalledSync(var0: string | null, var1: string | null): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.npm.FilesystemPackageCacheManager$IPackageProvider'
     */
    static getPackageProvider(): Promise<org_hl7_fhir_utilities_npm_FilesystemPackageCacheManager$IPackageProvider | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.npm.FilesystemPackageCacheManager$IPackageProvider'
     */
    static getPackageProviderSync(): org_hl7_fhir_utilities_npm_FilesystemPackageCacheManager$IPackageProvider | null;
    /**
     * @return original return type: 'java.util.List'
     */
    listPackages(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    listPackagesSync(): java_util_List | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    packageExists(var0: string | null, var1: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    packageExistsSync(var0: string | null, var1: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    loadPackage(var0: string | null, var1: string | null): Promise<org_hl7_fhir_utilities_npm_NpmPackage | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    loadPackageSync(var0: string | null, var1: string | null): org_hl7_fhir_utilities_npm_NpmPackage | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    loadPackage(var0: string | null): Promise<org_hl7_fhir_utilities_npm_NpmPackage | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    loadPackageSync(var0: string | null): org_hl7_fhir_utilities_npm_NpmPackage | null;
    /**
     * @param var0 original type: 'java.util.Map'
     * @return original return type: 'void'
     */
    listAllIds(var0: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.Map'
     * @return original return type: 'void'
     */
    listAllIdsSync(var0: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getPackageId(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getPackageIdSync(var0: string | null): string | null;
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
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    loadPackageFromCacheOnly(var0: string | null, var1: string | null): Promise<org_hl7_fhir_utilities_npm_NpmPackage | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    loadPackageFromCacheOnlySync(var0: string | null, var1: string | null): org_hl7_fhir_utilities_npm_NpmPackage | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    loadPackageFromCacheOnly(var0: string | null): Promise<org_hl7_fhir_utilities_npm_NpmPackage | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     */
    loadPackageFromCacheOnlySync(var0: string | null): org_hl7_fhir_utilities_npm_NpmPackage | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    findCanonicalInLocalCache(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    findCanonicalInLocalCacheSync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getLatestVersionFromCache(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getLatestVersionFromCacheSync(var0: string | null): string | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getPackageServers(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getPackageServersSync(): java_util_List | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setSilent(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setSilentSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'void'
     */
    setClientFactory(var0: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.function.Function'
     * @return original return type: 'void'
     */
    setClientFactorySync(var0: java_util_function_Function | JavaInterfaceProxy<java_util_function_FunctionInterface> | null): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.PackageServer'
     * @return original return type: 'void'
     */
    addPackageServer(var0: org_hl7_fhir_utilities_npm_PackageServer | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.PackageServer'
     * @return original return type: 'void'
     */
    addPackageServerSync(var0: org_hl7_fhir_utilities_npm_PackageServer | null): void;
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
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.utilities.npm.FilesystemPackageCacheManager'
     */
    static newInstanceAsync(var0: string | null): Promise<FilesystemPackageCacheManager>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.FilesystemPackageCacheManager$FilesystemPackageCacheMode'
     * @return original return type: 'org.hl7.fhir.utilities.npm.FilesystemPackageCacheManager'
     */
    static newInstanceAsync(var0: org_hl7_fhir_utilities_npm_FilesystemPackageCacheManager$FilesystemPackageCacheMode | null): Promise<FilesystemPackageCacheManager>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.utilities.npm.FilesystemPackageCacheManager'
     */
    static newInstanceAsync(var0: java_lang_Boolean | boolean): Promise<FilesystemPackageCacheManager>;
    /**
     * @param var0 original type: 'java.lang.String'
     */
    constructor(var0: string | null);
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.FilesystemPackageCacheManager$FilesystemPackageCacheMode'
     */
    constructor(var0: org_hl7_fhir_utilities_npm_FilesystemPackageCacheManager$FilesystemPackageCacheMode | null);
    /**
     * @param var0 original type: 'boolean'
     */
    constructor(var0: java_lang_Boolean | boolean);
}
declare const FilesystemPackageCacheManager_base: typeof FilesystemPackageCacheManagerClass;
/**
 * Class org.hl7.fhir.utilities.npm.FilesystemPackageCacheManager.
 *
 * This actually imports the java class for further use.
 * The class {@link FilesystemPackageCacheManagerClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FilesystemPackageCacheManager extends FilesystemPackageCacheManager_base {
}
export default FilesystemPackageCacheManager;
//# sourceMappingURL=FilesystemPackageCacheManager.d.ts.map