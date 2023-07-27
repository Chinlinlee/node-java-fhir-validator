/// <reference types="node" />
import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { PackageInformation as org_hl7_fhir_r5_model_PackageInformation } from "./../model/PackageInformation";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
import { Questionnaire as org_hl7_fhir_r5_model_Questionnaire } from "./../model/Questionnaire";
import { Resource as org_hl7_fhir_r5_model_Resource } from "./../model/Resource";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
import { NpmPackage as org_hl7_fhir_utilities_npm_NpmPackage } from "./../../utilities/npm/NpmPackage";
import { IWorkerContext$IContextResourceLoader as org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoader, IWorkerContext$IContextResourceLoaderInterface as org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoaderInterface } from "./IWorkerContext$IContextResourceLoader";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../../../java/util/List";
import { ITerminologyClient as org_hl7_fhir_r5_terminologies_client_ITerminologyClient, ITerminologyClientInterface as org_hl7_fhir_r5_terminologies_client_ITerminologyClientInterface } from "./../terminologies/client/ITerminologyClient";
import { IResourceValidator as org_hl7_fhir_r5_utils_validation_IResourceValidator } from "./../utils/validation/IResourceValidator";
import { BasePackageCacheManager as org_hl7_fhir_utilities_npm_BasePackageCacheManager } from "./../../utilities/npm/BasePackageCacheManager";
import { SimpleWorkerContext$IValidatorFactory as org_hl7_fhir_r5_context_SimpleWorkerContext$IValidatorFactory, SimpleWorkerContext$IValidatorFactoryInterface as org_hl7_fhir_r5_context_SimpleWorkerContext$IValidatorFactoryInterface } from "./SimpleWorkerContext$IValidatorFactory";
import { XVerExtensionManager as org_hl7_fhir_r5_utils_XVerExtensionManager } from "./../utils/XVerExtensionManager";
import { InputStream as java_io_InputStream } from "./../../../../../java/io/InputStream";
import { SimpleWorkerContext$ILoadFilter as org_hl7_fhir_r5_context_SimpleWorkerContext$ILoadFilter, SimpleWorkerContext$ILoadFilterInterface as org_hl7_fhir_r5_context_SimpleWorkerContext$ILoadFilterInterface } from "./SimpleWorkerContext$ILoadFilter";
import { TimeTracker as org_hl7_fhir_utilities_TimeTracker } from "./../../utilities/TimeTracker";
import { IWorkerContext$ILoggingService as org_hl7_fhir_r5_context_IWorkerContext$ILoggingService, IWorkerContext$ILoggingServiceInterface as org_hl7_fhir_r5_context_IWorkerContext$ILoggingServiceInterface } from "./IWorkerContext$ILoggingService";
import { ValueSetExpansionOutcome as org_hl7_fhir_r5_terminologies_expansion_ValueSetExpansionOutcome } from "./../terminologies/expansion/ValueSetExpansionOutcome";
import { ValueSet as org_hl7_fhir_r5_model_ValueSet } from "./../model/ValueSet";
import { Parameters as org_hl7_fhir_r5_model_Parameters } from "./../model/Parameters";
import { ValueSet$ConceptSetComponent as org_hl7_fhir_r5_model_ValueSet$ConceptSetComponent } from "./../model/ValueSet$ConceptSetComponent";
import { ElementDefinition$ElementDefinitionBindingComponent as org_hl7_fhir_r5_model_ElementDefinition$ElementDefinitionBindingComponent } from "./../model/ElementDefinition$ElementDefinitionBindingComponent";
import { ValidationOptions as org_hl7_fhir_utilities_validation_ValidationOptions } from "./../../utilities/validation/ValidationOptions";
import { UcumService as org_fhir_ucum_UcumService, UcumServiceInterface as org_fhir_ucum_UcumServiceInterface } from "./../../../../fhir/ucum/UcumService";
import { Map as java_util_Map, MapInterface as java_util_MapInterface } from "./../../../../../java/util/Map";
import { TranslationServices as org_hl7_fhir_utilities_TranslationServices, TranslationServicesInterface as org_hl7_fhir_utilities_TranslationServicesInterface } from "./../../utilities/TranslationServices";
import { Set as java_util_Set } from "./../../../../../java/util/Set";
import { IWorkerContextManager$IPackageLoadingTracker as org_hl7_fhir_r5_context_IWorkerContextManager$IPackageLoadingTracker, IWorkerContextManager$IPackageLoadingTrackerInterface as org_hl7_fhir_r5_context_IWorkerContextManager$IPackageLoadingTrackerInterface } from "./IWorkerContextManager$IPackageLoadingTracker";
import { IWorkerContext as org_hl7_fhir_r5_context_IWorkerContext } from "./IWorkerContext";
import { IWorkerContext$ValidationResult as org_hl7_fhir_r5_context_IWorkerContext$ValidationResult } from "./IWorkerContext$ValidationResult";
import { CodeableConcept as org_hl7_fhir_r5_model_CodeableConcept } from "./../model/CodeableConcept";
import { Coding as org_hl7_fhir_r5_model_Coding } from "./../model/Coding";
import { ValidationContextCarrier as org_hl7_fhir_r5_utils_validation_ValidationContextCarrier } from "./../utils/validation/ValidationContextCarrier";
import { CodeSystem as org_hl7_fhir_r5_model_CodeSystem } from "./../model/CodeSystem";
import { StructureDefinition as org_hl7_fhir_r5_model_StructureDefinition } from "./../model/StructureDefinition";
import { CanonicalResourceManager$CanonicalResourceProxy as org_hl7_fhir_r5_context_CanonicalResourceManager$CanonicalResourceProxy } from "./CanonicalResourceManager$CanonicalResourceProxy";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { CanonicalResource as org_hl7_fhir_r5_model_CanonicalResource } from "./../model/CanonicalResource";
import { PEBuilder as org_hl7_fhir_r5_profilemodel_PEBuilder } from "./../profilemodel/PEBuilder";
import { PEBuilder$PEElementPropertiesPolicy as org_hl7_fhir_r5_profilemodel_PEBuilder$PEElementPropertiesPolicy } from "./../profilemodel/PEBuilder$PEElementPropertiesPolicy";
import { TerminologyCapabilities as org_hl7_fhir_r5_model_TerminologyCapabilities } from "./../model/TerminologyCapabilities";
import { TerminologyCache as org_hl7_fhir_r5_context_TerminologyCache } from "./TerminologyCache";
import { JsonObject as com_google_gson_JsonObject } from "./../../../../../com/google/gson/JsonObject";
import { SearchParameter as org_hl7_fhir_r5_model_SearchParameter } from "./../model/SearchParameter";
import { IWorkerContextManager$ICanonicalResourceLocator as org_hl7_fhir_r5_context_IWorkerContextManager$ICanonicalResourceLocator, IWorkerContextManager$ICanonicalResourceLocatorInterface as org_hl7_fhir_r5_context_IWorkerContextManager$ICanonicalResourceLocatorInterface } from "./IWorkerContextManager$ICanonicalResourceLocator";
import { Locale as java_util_Locale } from "./../../../../../java/util/Locale";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
/**
 * This class just defines types, you should import {@link SimpleWorkerContext} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class SimpleWorkerContextClass extends JavaClass {
    /**
     * Original type: 'java.lang.String'
     */
    static readonly PLURAL_SUFFIX: string | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly KEY_DELIMITER: string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.PackageInformation'
     */
    getPackage(var0: string | null, var1: string | null): Promise<org_hl7_fhir_r5_model_PackageInformation | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.PackageInformation'
     */
    getPackageSync(var0: string | null, var1: string | null): org_hl7_fhir_r5_model_PackageInformation | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getVersion(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getVersionSync(): string | null;
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
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setProgress(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setProgressSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Questionnaire'
     */
    getQuestionnaire(): Promise<org_hl7_fhir_r5_model_Questionnaire | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Questionnaire'
     */
    getQuestionnaireSync(): org_hl7_fhir_r5_model_Questionnaire | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Questionnaire'
     * @return original return type: 'void'
     */
    setQuestionnaire(var0: org_hl7_fhir_r5_model_Questionnaire | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Questionnaire'
     * @return original return type: 'void'
     */
    setQuestionnaireSync(var0: org_hl7_fhir_r5_model_Questionnaire | null): void;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    fetchResourceRaw(var0: java_lang_Class | null, var1: string | null): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    fetchResourceRawSync(var0: java_lang_Class | null, var1: string | null): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.PackageInformation'
     * @return original return type: 'void'
     */
    cachePackage(var0: org_hl7_fhir_r5_model_PackageInformation | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.PackageInformation'
     * @return original return type: 'void'
     */
    cachePackageSync(var0: org_hl7_fhir_r5_model_PackageInformation | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasPackage(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasPackageSync(var0: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasPackage(var0: string | null, var1: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasPackageSync(var0: string | null, var1: string | null): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.PackageInformation'
     * @return original return type: 'boolean'
     */
    hasPackage(var0: org_hl7_fhir_r5_model_PackageInformation | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.PackageInformation'
     * @return original return type: 'boolean'
     */
    hasPackageSync(var0: org_hl7_fhir_r5_model_PackageInformation | null): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     * @param var1 original type: 'org.hl7.fhir.r5.context.IWorkerContext$IContextResourceLoader'
     * @param var2 original type: 'java.util.List'
     * @return original return type: 'int'
     */
    loadFromPackage(var0: org_hl7_fhir_utilities_npm_NpmPackage | null, var1: org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoader | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoaderInterface> | null, var2: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<number>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     * @param var1 original type: 'org.hl7.fhir.r5.context.IWorkerContext$IContextResourceLoader'
     * @param var2 original type: 'java.util.List'
     * @return original return type: 'int'
     */
    loadFromPackageSync(var0: org_hl7_fhir_utilities_npm_NpmPackage | null, var1: org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoader | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoaderInterface> | null, var2: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): number;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     * @param var1 original type: 'org.hl7.fhir.r5.context.IWorkerContext$IContextResourceLoader'
     * @return original return type: 'int'
     */
    loadFromPackage(var0: org_hl7_fhir_utilities_npm_NpmPackage | null, var1: org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoader | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoaderInterface> | null): Promise<number>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     * @param var1 original type: 'org.hl7.fhir.r5.context.IWorkerContext$IContextResourceLoader'
     * @return original return type: 'int'
     */
    loadFromPackageSync(var0: org_hl7_fhir_utilities_npm_NpmPackage | null, var1: org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoader | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoaderInterface> | null): number;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    fetchResource(var0: java_lang_Class | null, var1: string | null): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    fetchResourceSync(var0: java_lang_Class | null, var1: string | null): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    fetchResource(var0: java_lang_Class | null, var1: string | null, var2: org_hl7_fhir_r5_model_Resource | null): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    fetchResourceSync(var0: java_lang_Class | null, var1: string | null, var2: org_hl7_fhir_r5_model_Resource | null): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    fetchResource(var0: java_lang_Class | null, var1: string | null, var2: string | null): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    fetchResourceSync(var0: java_lang_Class | null, var1: string | null, var2: string | null): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.terminologies.client.ITerminologyClient'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    connectToTSServer(var0: org_hl7_fhir_r5_terminologies_client_ITerminologyClient | JavaInterfaceProxy<org_hl7_fhir_r5_terminologies_client_ITerminologyClientInterface> | null, var1: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.terminologies.client.ITerminologyClient'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    connectToTSServerSync(var0: org_hl7_fhir_r5_terminologies_client_ITerminologyClient | JavaInterfaceProxy<org_hl7_fhir_r5_terminologies_client_ITerminologyClientInterface> | null, var1: string | null): string | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getResourceNames(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getResourceNamesSync(): java_util_List | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     */
    newValidator(): Promise<org_hl7_fhir_r5_utils_validation_IResourceValidator | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     */
    newValidatorSync(): org_hl7_fhir_r5_utils_validation_IResourceValidator | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     * @param var1 original type: 'org.hl7.fhir.r5.context.IWorkerContext$IContextResourceLoader'
     * @param var2 original type: 'org.hl7.fhir.utilities.npm.BasePackageCacheManager'
     * @param var3 original type: 'java.lang.String'
     * @return original return type: 'int'
     */
    loadFromPackageAndDependenciesInt(var0: org_hl7_fhir_utilities_npm_NpmPackage | null, var1: org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoader | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoaderInterface> | null, var2: org_hl7_fhir_utilities_npm_BasePackageCacheManager | null, var3: string | null): Promise<number>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     * @param var1 original type: 'org.hl7.fhir.r5.context.IWorkerContext$IContextResourceLoader'
     * @param var2 original type: 'org.hl7.fhir.utilities.npm.BasePackageCacheManager'
     * @param var3 original type: 'java.lang.String'
     * @return original return type: 'int'
     */
    loadFromPackageAndDependenciesIntSync(var0: org_hl7_fhir_utilities_npm_NpmPackage | null, var1: org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoader | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoaderInterface> | null, var2: org_hl7_fhir_utilities_npm_BasePackageCacheManager | null, var3: string | null): number;
    /**
     * @return original return type: 'java.lang.String'
     */
    loadedPackageSummary(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    loadedPackageSummarySync(): string | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.context.SimpleWorkerContext$IValidatorFactory'
     * @return original return type: 'void'
     */
    setValidatorFactory(var0: org_hl7_fhir_r5_context_SimpleWorkerContext$IValidatorFactory | JavaInterfaceProxy<org_hl7_fhir_r5_context_SimpleWorkerContext$IValidatorFactoryInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.context.SimpleWorkerContext$IValidatorFactory'
     * @return original return type: 'void'
     */
    setValidatorFactorySync(var0: org_hl7_fhir_r5_context_SimpleWorkerContext$IValidatorFactory | JavaInterfaceProxy<org_hl7_fhir_r5_context_SimpleWorkerContext$IValidatorFactoryInterface> | null): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     * @return original return type: 'void'
     */
    loadBinariesFromFolder(var0: org_hl7_fhir_utilities_npm_NpmPackage | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     * @return original return type: 'void'
     */
    loadBinariesFromFolderSync(var0: org_hl7_fhir_utilities_npm_NpmPackage | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    loadBinariesFromFolder(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    loadBinariesFromFolderSync(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.List'
     */
    findTransformsforSource(var0: string | null): Promise<java_util_List | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.List'
     */
    findTransformsforSourceSync(var0: string | null): java_util_List | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.context.SimpleWorkerContext$IValidatorFactory'
     */
    getValidatorFactory(): Promise<org_hl7_fhir_r5_context_SimpleWorkerContext$IValidatorFactory | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.context.SimpleWorkerContext$IValidatorFactory'
     */
    getValidatorFactorySync(): org_hl7_fhir_r5_context_SimpleWorkerContext$IValidatorFactory | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setAllowLazyLoading(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setAllowLazyLoadingSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getSpecUrl(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getSpecUrlSync(): string | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     * @param var1 original type: 'org.hl7.fhir.r5.context.IWorkerContext$IContextResourceLoader'
     * @param var2 original type: 'org.hl7.fhir.utilities.npm.BasePackageCacheManager'
     * @return original return type: 'int'
     */
    loadFromPackageAndDependencies(var0: org_hl7_fhir_utilities_npm_NpmPackage | null, var1: org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoader | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoaderInterface> | null, var2: org_hl7_fhir_utilities_npm_BasePackageCacheManager | null): Promise<number>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     * @param var1 original type: 'org.hl7.fhir.r5.context.IWorkerContext$IContextResourceLoader'
     * @param var2 original type: 'org.hl7.fhir.utilities.npm.BasePackageCacheManager'
     * @return original return type: 'int'
     */
    loadFromPackageAndDependenciesSync(var0: org_hl7_fhir_utilities_npm_NpmPackage | null, var1: org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoader | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoaderInterface> | null, var2: org_hl7_fhir_utilities_npm_BasePackageCacheManager | null): number;
    /**
     * @return original return type: 'java.util.List'
     */
    static defaultTypesToLoad(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    static defaultTypesToLoadSync(): java_util_List | null;
    /**
     * @return original return type: 'boolean'
     */
    isProgress(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isProgressSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.utils.XVerExtensionManager'
     */
    getXVer(): Promise<org_hl7_fhir_r5_utils_XVerExtensionManager | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.utils.XVerExtensionManager'
     */
    getXVerSync(): org_hl7_fhir_r5_utils_XVerExtensionManager | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getLoadedPackages(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getLoadedPackagesSync(): java_util_List | null;
    /**
     * @return original return type: 'boolean'
     */
    isAllowLazyLoading(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isAllowLazyLoadingSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.r5.context.IWorkerContext$IContextResourceLoader'
     * @return original return type: 'void'
     */
    loadFromFile(var0: string | null, var1: org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoader | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoaderInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.r5.context.IWorkerContext$IContextResourceLoader'
     * @return original return type: 'void'
     */
    loadFromFileSync(var0: string | null, var1: org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoader | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoaderInterface> | null): void;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.context.IWorkerContext$IContextResourceLoader'
     * @param var3 original type: 'org.hl7.fhir.r5.context.SimpleWorkerContext$ILoadFilter'
     * @return original return type: 'void'
     */
    loadFromFile(var0: java_io_InputStream | null, var1: string | null, var2: org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoader | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoaderInterface> | null, var3: org_hl7_fhir_r5_context_SimpleWorkerContext$ILoadFilter | JavaInterfaceProxy<org_hl7_fhir_r5_context_SimpleWorkerContext$ILoadFilterInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.context.IWorkerContext$IContextResourceLoader'
     * @param var3 original type: 'org.hl7.fhir.r5.context.SimpleWorkerContext$ILoadFilter'
     * @return original return type: 'void'
     */
    loadFromFileSync(var0: java_io_InputStream | null, var1: string | null, var2: org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoader | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoaderInterface> | null, var3: org_hl7_fhir_r5_context_SimpleWorkerContext$ILoadFilter | JavaInterfaceProxy<org_hl7_fhir_r5_context_SimpleWorkerContext$ILoadFilterInterface> | null): void;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.context.IWorkerContext$IContextResourceLoader'
     * @return original return type: 'void'
     */
    loadFromFile(var0: java_io_InputStream | null, var1: string | null, var2: org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoader | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoaderInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.io.InputStream'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.context.IWorkerContext$IContextResourceLoader'
     * @return original return type: 'void'
     */
    loadFromFileSync(var0: java_io_InputStream | null, var1: string | null, var2: org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoader | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoaderInterface> | null): void;
    /**
     * @return original return type: 'boolean'
     */
    isCanNoTS(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isCanNoTSSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     * @param var1 original type: 'org.hl7.fhir.r5.context.IWorkerContext$IContextResourceLoader'
     * @param var2 original type: 'java.util.List'
     * @return original return type: 'int'
     */
    loadFromPackageInt(var0: org_hl7_fhir_utilities_npm_NpmPackage | null, var1: org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoader | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoaderInterface> | null, var2: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<number>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.NpmPackage'
     * @param var1 original type: 'org.hl7.fhir.r5.context.IWorkerContext$IContextResourceLoader'
     * @param var2 original type: 'java.util.List'
     * @return original return type: 'int'
     */
    loadFromPackageIntSync(var0: org_hl7_fhir_utilities_npm_NpmPackage | null, var1: org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoader | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContext$IContextResourceLoaderInterface> | null, var2: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): number;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setCanNoTS(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setCanNoTSSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.TimeTracker'
     * @return original return type: 'void'
     */
    setClock(var0: org_hl7_fhir_utilities_TimeTracker | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.TimeTracker'
     * @return original return type: 'void'
     */
    setClockSync(var0: org_hl7_fhir_utilities_TimeTracker | null): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    listMapUrls(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    listMapUrlsSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getNameSync(): string | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext$ILoggingService'
     */
    getLogger(): Promise<org_hl7_fhir_r5_context_IWorkerContext$ILoggingService | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext$ILoggingService'
     */
    getLoggerSync(): org_hl7_fhir_r5_context_IWorkerContext$ILoggingService | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.TimeTracker'
     */
    clock(): Promise<org_hl7_fhir_utilities_TimeTracker | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.TimeTracker'
     */
    clockSync(): org_hl7_fhir_utilities_TimeTracker | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setName(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setNameSync(var0: string | null): void;
    /**
     * @return original return type: 'int'
     */
    totalCount(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    totalCountSync(): number;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setForPublication(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setForPublicationSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'boolean'
     */
    isForPublication(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isForPublicationSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @param var1 original type: 'boolean'
     * @param var2 original type: 'boolean'
     * @param var3 original type: 'boolean'
     * @param var4 original type: 'org.hl7.fhir.r5.model.Parameters'
     * @return original return type: 'org.hl7.fhir.r5.terminologies.expansion.ValueSetExpansionOutcome'
     */
    expandVS(var0: org_hl7_fhir_r5_model_ValueSet | null, var1: java_lang_Boolean | boolean, var2: java_lang_Boolean | boolean, var3: java_lang_Boolean | boolean, var4: org_hl7_fhir_r5_model_Parameters | null): Promise<org_hl7_fhir_r5_terminologies_expansion_ValueSetExpansionOutcome | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @param var1 original type: 'boolean'
     * @param var2 original type: 'boolean'
     * @param var3 original type: 'boolean'
     * @param var4 original type: 'org.hl7.fhir.r5.model.Parameters'
     * @return original return type: 'org.hl7.fhir.r5.terminologies.expansion.ValueSetExpansionOutcome'
     */
    expandVSSync(var0: org_hl7_fhir_r5_model_ValueSet | null, var1: java_lang_Boolean | boolean, var2: java_lang_Boolean | boolean, var3: java_lang_Boolean | boolean, var4: org_hl7_fhir_r5_model_Parameters | null): org_hl7_fhir_r5_terminologies_expansion_ValueSetExpansionOutcome | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.ValueSet$ConceptSetComponent'
     * @param var1 original type: 'boolean'
     * @param var2 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.terminologies.expansion.ValueSetExpansionOutcome'
     */
    expandVS(var0: org_hl7_fhir_r5_model_ValueSet$ConceptSetComponent | null, var1: java_lang_Boolean | boolean, var2: java_lang_Boolean | boolean): Promise<org_hl7_fhir_r5_terminologies_expansion_ValueSetExpansionOutcome | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.ValueSet$ConceptSetComponent'
     * @param var1 original type: 'boolean'
     * @param var2 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.terminologies.expansion.ValueSetExpansionOutcome'
     */
    expandVSSync(var0: org_hl7_fhir_r5_model_ValueSet$ConceptSetComponent | null, var1: java_lang_Boolean | boolean, var2: java_lang_Boolean | boolean): org_hl7_fhir_r5_terminologies_expansion_ValueSetExpansionOutcome | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Resource'
     * @param var1 original type: 'org.hl7.fhir.r5.model.ElementDefinition$ElementDefinitionBindingComponent'
     * @param var2 original type: 'boolean'
     * @param var3 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.terminologies.expansion.ValueSetExpansionOutcome'
     */
    expandVS(var0: org_hl7_fhir_r5_model_Resource | null, var1: org_hl7_fhir_r5_model_ElementDefinition$ElementDefinitionBindingComponent | null, var2: java_lang_Boolean | boolean, var3: java_lang_Boolean | boolean): Promise<org_hl7_fhir_r5_terminologies_expansion_ValueSetExpansionOutcome | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Resource'
     * @param var1 original type: 'org.hl7.fhir.r5.model.ElementDefinition$ElementDefinitionBindingComponent'
     * @param var2 original type: 'boolean'
     * @param var3 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.terminologies.expansion.ValueSetExpansionOutcome'
     */
    expandVSSync(var0: org_hl7_fhir_r5_model_Resource | null, var1: org_hl7_fhir_r5_model_ElementDefinition$ElementDefinitionBindingComponent | null, var2: java_lang_Boolean | boolean, var3: java_lang_Boolean | boolean): org_hl7_fhir_r5_terminologies_expansion_ValueSetExpansionOutcome | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @param var1 original type: 'boolean'
     * @param var2 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.terminologies.expansion.ValueSetExpansionOutcome'
     */
    expandVS(var0: org_hl7_fhir_r5_model_ValueSet | null, var1: java_lang_Boolean | boolean, var2: java_lang_Boolean | boolean): Promise<org_hl7_fhir_r5_terminologies_expansion_ValueSetExpansionOutcome | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @param var1 original type: 'boolean'
     * @param var2 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.terminologies.expansion.ValueSetExpansionOutcome'
     */
    expandVSSync(var0: org_hl7_fhir_r5_model_ValueSet | null, var1: java_lang_Boolean | boolean, var2: java_lang_Boolean | boolean): org_hl7_fhir_r5_terminologies_expansion_ValueSetExpansionOutcome | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @param var1 original type: 'boolean'
     * @param var2 original type: 'boolean'
     * @param var3 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.terminologies.expansion.ValueSetExpansionOutcome'
     */
    expandVS(var0: org_hl7_fhir_r5_model_ValueSet | null, var1: java_lang_Boolean | boolean, var2: java_lang_Boolean | boolean, var3: java_lang_Boolean | boolean): Promise<org_hl7_fhir_r5_terminologies_expansion_ValueSetExpansionOutcome | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @param var1 original type: 'boolean'
     * @param var2 original type: 'boolean'
     * @param var3 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.terminologies.expansion.ValueSetExpansionOutcome'
     */
    expandVSSync(var0: org_hl7_fhir_r5_model_ValueSet | null, var1: java_lang_Boolean | boolean, var2: java_lang_Boolean | boolean, var3: java_lang_Boolean | boolean): org_hl7_fhir_r5_terminologies_expansion_ValueSetExpansionOutcome | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationOptions'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @return original return type: 'void'
     */
    validateCodeBatch(var0: org_hl7_fhir_utilities_validation_ValidationOptions | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_hl7_fhir_r5_model_ValueSet | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationOptions'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @return original return type: 'void'
     */
    validateCodeBatchSync(var0: org_hl7_fhir_utilities_validation_ValidationOptions | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_hl7_fhir_r5_model_ValueSet | null): void;
    /**
     * @return original return type: 'org.fhir.ucum.UcumService'
     */
    getUcumService(): Promise<org_fhir_ucum_UcumService | null>;
    /**
     * @return original return type: 'org.fhir.ucum.UcumService'
     */
    getUcumServiceSync(): org_fhir_ucum_UcumService | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    fetchResourceById(var0: string | null, var1: string | null): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    fetchResourceByIdSync(var0: string | null, var1: string | null): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @return original return type: 'java.util.Map'
     */
    getNSUrlMap(): Promise<java_util_Map | null>;
    /**
     * @return original return type: 'java.util.Map'
     */
    getNSUrlMapSync(): java_util_Map | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.TranslationServices'
     */
    translator(): Promise<org_hl7_fhir_utilities_TranslationServices | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.TranslationServices'
     */
    translatorSync(): org_hl7_fhir_utilities_TranslationServices | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.context.IWorkerContext$ILoggingService'
     * @return original return type: 'void'
     */
    setLogger(var0: org_hl7_fhir_r5_context_IWorkerContext$ILoggingService | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContext$ILoggingServiceInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.context.IWorkerContext$ILoggingService'
     * @return original return type: 'void'
     */
    setLoggerSync(var0: org_hl7_fhir_r5_context_IWorkerContext$ILoggingService | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContext$ILoggingServiceInterface> | null): void;
    /**
     * @param var0 original type: 'org.fhir.ucum.UcumService'
     * @return original return type: 'void'
     */
    setUcumService(var0: org_fhir_ucum_UcumService | JavaInterfaceProxy<org_fhir_ucum_UcumServiceInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'org.fhir.ucum.UcumService'
     * @return original return type: 'void'
     */
    setUcumServiceSync(var0: org_fhir_ucum_UcumService | JavaInterfaceProxy<org_fhir_ucum_UcumServiceInterface> | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    supportsSystem(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    supportsSystemSync(var0: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasBinaryKey(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasBinaryKeySync(var0: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'byte[]'
     */
    getBinaryForKey(var0: string | null): Promise<Buffer | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'byte[]'
     */
    getBinaryForKeySync(var0: string | null): Buffer | null;
    /**
     * @return original return type: 'java.util.Set'
     */
    getBinaryKeysAsSet(): Promise<java_util_Set | null>;
    /**
     * @return original return type: 'java.util.Set'
     */
    getBinaryKeysAsSetSync(): java_util_Set | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContextManager$IPackageLoadingTracker'
     */
    getPackageTracker(): Promise<org_hl7_fhir_r5_context_IWorkerContextManager$IPackageLoadingTracker | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContextManager$IPackageLoadingTracker'
     */
    getPackageTrackerSync(): org_hl7_fhir_r5_context_IWorkerContextManager$IPackageLoadingTracker | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.context.IWorkerContextManager$IPackageLoadingTracker'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext'
     */
    setPackageTracker(var0: org_hl7_fhir_r5_context_IWorkerContextManager$IPackageLoadingTracker | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContextManager$IPackageLoadingTrackerInterface> | null): Promise<org_hl7_fhir_r5_context_IWorkerContext | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.context.IWorkerContextManager$IPackageLoadingTracker'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext'
     */
    setPackageTrackerSync(var0: org_hl7_fhir_r5_context_IWorkerContextManager$IPackageLoadingTracker | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContextManager$IPackageLoadingTrackerInterface> | null): org_hl7_fhir_r5_context_IWorkerContext | null;
    /**
     * @return original return type: 'java.util.Set'
     */
    getCodeSystemsUsed(): Promise<java_util_Set | null>;
    /**
     * @return original return type: 'java.util.Set'
     */
    getCodeSystemsUsedSync(): java_util_Set | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.PackageInformation'
     */
    getPackageForUrl(var0: string | null): Promise<org_hl7_fhir_r5_model_PackageInformation | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.PackageInformation'
     */
    getPackageForUrlSync(var0: string | null): org_hl7_fhir_r5_model_PackageInformation | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationOptions'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext$ValidationResult'
     */
    validateCode(var0: org_hl7_fhir_utilities_validation_ValidationOptions | null, var1: string | null, var2: org_hl7_fhir_r5_model_ValueSet | null): Promise<org_hl7_fhir_r5_context_IWorkerContext$ValidationResult | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationOptions'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext$ValidationResult'
     */
    validateCodeSync(var0: org_hl7_fhir_utilities_validation_ValidationOptions | null, var1: string | null, var2: org_hl7_fhir_r5_model_ValueSet | null): org_hl7_fhir_r5_context_IWorkerContext$ValidationResult | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationOptions'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'java.lang.String'
     * @param var5 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext$ValidationResult'
     */
    validateCode(var0: org_hl7_fhir_utilities_validation_ValidationOptions | null, var1: string | null, var2: string | null, var3: string | null, var4: string | null, var5: org_hl7_fhir_r5_model_ValueSet | null): Promise<org_hl7_fhir_r5_context_IWorkerContext$ValidationResult | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationOptions'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'java.lang.String'
     * @param var5 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext$ValidationResult'
     */
    validateCodeSync(var0: org_hl7_fhir_utilities_validation_ValidationOptions | null, var1: string | null, var2: string | null, var3: string | null, var4: string | null, var5: org_hl7_fhir_r5_model_ValueSet | null): org_hl7_fhir_r5_context_IWorkerContext$ValidationResult | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationOptions'
     * @param var1 original type: 'org.hl7.fhir.r5.model.CodeableConcept'
     * @param var2 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext$ValidationResult'
     */
    validateCode(var0: org_hl7_fhir_utilities_validation_ValidationOptions | null, var1: org_hl7_fhir_r5_model_CodeableConcept | null, var2: org_hl7_fhir_r5_model_ValueSet | null): Promise<org_hl7_fhir_r5_context_IWorkerContext$ValidationResult | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationOptions'
     * @param var1 original type: 'org.hl7.fhir.r5.model.CodeableConcept'
     * @param var2 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext$ValidationResult'
     */
    validateCodeSync(var0: org_hl7_fhir_utilities_validation_ValidationOptions | null, var1: org_hl7_fhir_r5_model_CodeableConcept | null, var2: org_hl7_fhir_r5_model_ValueSet | null): org_hl7_fhir_r5_context_IWorkerContext$ValidationResult | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationOptions'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.model.Coding'
     * @param var3 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @param var4 original type: 'org.hl7.fhir.r5.utils.validation.ValidationContextCarrier'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext$ValidationResult'
     */
    validateCode(var0: org_hl7_fhir_utilities_validation_ValidationOptions | null, var1: string | null, var2: org_hl7_fhir_r5_model_Coding | null, var3: org_hl7_fhir_r5_model_ValueSet | null, var4: org_hl7_fhir_r5_utils_validation_ValidationContextCarrier | null): Promise<org_hl7_fhir_r5_context_IWorkerContext$ValidationResult | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationOptions'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.model.Coding'
     * @param var3 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @param var4 original type: 'org.hl7.fhir.r5.utils.validation.ValidationContextCarrier'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext$ValidationResult'
     */
    validateCodeSync(var0: org_hl7_fhir_utilities_validation_ValidationOptions | null, var1: string | null, var2: org_hl7_fhir_r5_model_Coding | null, var3: org_hl7_fhir_r5_model_ValueSet | null, var4: org_hl7_fhir_r5_utils_validation_ValidationContextCarrier | null): org_hl7_fhir_r5_context_IWorkerContext$ValidationResult | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationOptions'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext$ValidationResult'
     */
    validateCode(var0: org_hl7_fhir_utilities_validation_ValidationOptions | null, var1: string | null, var2: string | null, var3: string | null, var4: string | null): Promise<org_hl7_fhir_r5_context_IWorkerContext$ValidationResult | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationOptions'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext$ValidationResult'
     */
    validateCodeSync(var0: org_hl7_fhir_utilities_validation_ValidationOptions | null, var1: string | null, var2: string | null, var3: string | null, var4: string | null): org_hl7_fhir_r5_context_IWorkerContext$ValidationResult | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationOptions'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.model.Coding'
     * @param var3 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext$ValidationResult'
     */
    validateCode(var0: org_hl7_fhir_utilities_validation_ValidationOptions | null, var1: string | null, var2: org_hl7_fhir_r5_model_Coding | null, var3: org_hl7_fhir_r5_model_ValueSet | null): Promise<org_hl7_fhir_r5_context_IWorkerContext$ValidationResult | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationOptions'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.model.Coding'
     * @param var3 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext$ValidationResult'
     */
    validateCodeSync(var0: org_hl7_fhir_utilities_validation_ValidationOptions | null, var1: string | null, var2: org_hl7_fhir_r5_model_Coding | null, var3: org_hl7_fhir_r5_model_ValueSet | null): org_hl7_fhir_r5_context_IWorkerContext$ValidationResult | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationOptions'
     * @param var1 original type: 'org.hl7.fhir.r5.model.Coding'
     * @param var2 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext$ValidationResult'
     */
    validateCode(var0: org_hl7_fhir_utilities_validation_ValidationOptions | null, var1: org_hl7_fhir_r5_model_Coding | null, var2: org_hl7_fhir_r5_model_ValueSet | null): Promise<org_hl7_fhir_r5_context_IWorkerContext$ValidationResult | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationOptions'
     * @param var1 original type: 'org.hl7.fhir.r5.model.Coding'
     * @param var2 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext$ValidationResult'
     */
    validateCodeSync(var0: org_hl7_fhir_utilities_validation_ValidationOptions | null, var1: org_hl7_fhir_r5_model_Coding | null, var2: org_hl7_fhir_r5_model_ValueSet | null): org_hl7_fhir_r5_context_IWorkerContext$ValidationResult | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationOptions'
     * @param var1 original type: 'org.hl7.fhir.r5.model.Coding'
     * @param var2 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @param var3 original type: 'org.hl7.fhir.r5.utils.validation.ValidationContextCarrier'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext$ValidationResult'
     */
    validateCode(var0: org_hl7_fhir_utilities_validation_ValidationOptions | null, var1: org_hl7_fhir_r5_model_Coding | null, var2: org_hl7_fhir_r5_model_ValueSet | null, var3: org_hl7_fhir_r5_utils_validation_ValidationContextCarrier | null): Promise<org_hl7_fhir_r5_context_IWorkerContext$ValidationResult | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationOptions'
     * @param var1 original type: 'org.hl7.fhir.r5.model.Coding'
     * @param var2 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @param var3 original type: 'org.hl7.fhir.r5.utils.validation.ValidationContextCarrier'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext$ValidationResult'
     */
    validateCodeSync(var0: org_hl7_fhir_utilities_validation_ValidationOptions | null, var1: org_hl7_fhir_r5_model_Coding | null, var2: org_hl7_fhir_r5_model_ValueSet | null, var3: org_hl7_fhir_r5_utils_validation_ValidationContextCarrier | null): org_hl7_fhir_r5_context_IWorkerContext$ValidationResult | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CodeSystem'
     */
    fetchCodeSystem(var0: string | null): Promise<org_hl7_fhir_r5_model_CodeSystem | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CodeSystem'
     */
    fetchCodeSystemSync(var0: string | null): org_hl7_fhir_r5_model_CodeSystem | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CodeSystem'
     */
    fetchCodeSystem(var0: string | null, var1: string | null): Promise<org_hl7_fhir_r5_model_CodeSystem | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CodeSystem'
     */
    fetchCodeSystemSync(var0: string | null, var1: string | null): org_hl7_fhir_r5_model_CodeSystem | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'void'
     */
    cacheResource(var0: org_hl7_fhir_r5_model_Resource | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'void'
     */
    cacheResourceSync(var0: org_hl7_fhir_r5_model_Resource | null): void;
    /**
     * @return original return type: 'java.util.List'
     */
    allImplementationGuides(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    allImplementationGuidesSync(): java_util_List | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.util.List'
     */
    fetchResourcesByType(var0: java_lang_Class | null): Promise<java_util_List | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @return original return type: 'java.util.List'
     */
    fetchResourcesByTypeSync(var0: java_lang_Class | null): java_util_List | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    getStructure(var0: string | null): Promise<org_hl7_fhir_r5_model_StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    getStructureSync(var0: string | null): org_hl7_fhir_r5_model_StructureDefinition | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasResource(var0: string | null, var1: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasResourceSync(var0: string | null, var1: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasResource(var0: java_lang_Class | null, var1: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasResourceSync(var0: java_lang_Class | null, var1: string | null): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.context.CanonicalResourceManager$CanonicalResourceProxy'
     * @param var1 original type: 'org.hl7.fhir.r5.model.PackageInformation'
     * @return original return type: 'void'
     */
    registerResourceFromPackage(var0: org_hl7_fhir_r5_context_CanonicalResourceManager$CanonicalResourceProxy | null, var1: org_hl7_fhir_r5_model_PackageInformation | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.context.CanonicalResourceManager$CanonicalResourceProxy'
     * @param var1 original type: 'org.hl7.fhir.r5.model.PackageInformation'
     * @return original return type: 'void'
     */
    registerResourceFromPackageSync(var0: org_hl7_fhir_r5_context_CanonicalResourceManager$CanonicalResourceProxy | null, var1: org_hl7_fhir_r5_model_PackageInformation | null): void;
    /**
     * @return original return type: 'int'
     */
    getExpandCodesLimit(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getExpandCodesLimitSync(): number;
    /**
     * @return original return type: 'boolean'
     */
    isAllowLoadingDuplicates(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isAllowLoadingDuplicatesSync(): boolean;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setExpandCodesLimit(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setExpandCodesLimitSync(var0: java_lang_Integer | number): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    listSupportedSystems(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    listSupportedSystemsSync(): string | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Parameters'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext$ValidationResult'
     */
    processValidationResult(var0: org_hl7_fhir_r5_model_Parameters | null): Promise<org_hl7_fhir_r5_context_IWorkerContext$ValidationResult | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Parameters'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext$ValidationResult'
     */
    processValidationResultSync(var0: org_hl7_fhir_r5_model_Parameters | null): org_hl7_fhir_r5_context_IWorkerContext$ValidationResult | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setAllowLoadingDuplicates(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setAllowLoadingDuplicatesSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setNoTerminologyServer(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setNoTerminologyServerSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'boolean'
     */
    isCanRunWithoutTerminology(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isCanRunWithoutTerminologySync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setCanRunWithoutTerminology(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setCanRunWithoutTerminologySync(var0: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getLinkForUrl(var0: string | null, var1: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getLinkForUrlSync(var0: string | null, var1: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    fetchResourceWithExceptionByVersion(var0: java_lang_Class | null, var1: string | null, var2: string | null, var3: org_hl7_fhir_r5_model_Resource | null): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    fetchResourceWithExceptionByVersionSync(var0: java_lang_Class | null, var1: string | null, var2: string | null, var3: org_hl7_fhir_r5_model_Resource | null): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'org.hl7.fhir.r5.model.CanonicalResource'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    fetchResourceWithExceptionByVersion(var0: string | null, var1: string | null, var2: string | null, var3: org_hl7_fhir_r5_model_CanonicalResource | null): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'org.hl7.fhir.r5.model.CanonicalResource'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    fetchResourceWithExceptionByVersionSync(var0: string | null, var1: string | null, var2: string | null, var3: org_hl7_fhir_r5_model_CanonicalResource | null): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @return original return type: 'java.util.Set'
     */
    getResourceNamesAsSet(): Promise<java_util_Set | null>;
    /**
     * @return original return type: 'java.util.Set'
     */
    getResourceNamesAsSetSync(): java_util_Set | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Resource'
     * @param var1 original type: 'org.hl7.fhir.r5.model.PackageInformation'
     * @return original return type: 'void'
     */
    cacheResourceFromPackage(var0: org_hl7_fhir_r5_model_Resource | null, var1: org_hl7_fhir_r5_model_PackageInformation | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Resource'
     * @param var1 original type: 'org.hl7.fhir.r5.model.PackageInformation'
     * @return original return type: 'void'
     */
    cacheResourceFromPackageSync(var0: org_hl7_fhir_r5_model_Resource | null, var1: org_hl7_fhir_r5_model_PackageInformation | null): void;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Parameters'
     */
    getExpansionParameters(): Promise<org_hl7_fhir_r5_model_Parameters | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Parameters'
     */
    getExpansionParametersSync(): org_hl7_fhir_r5_model_Parameters | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    fetchResourceWithException(var0: java_lang_Class | null, var1: string | null, var2: org_hl7_fhir_r5_model_Resource | null): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    fetchResourceWithExceptionSync(var0: java_lang_Class | null, var1: string | null, var2: org_hl7_fhir_r5_model_Resource | null): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    fetchResourceWithException(var0: java_lang_Class | null, var1: string | null): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    fetchResourceWithExceptionSync(var0: java_lang_Class | null, var1: string | null): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    fetchResourceWithException(var0: string | null, var1: string | null): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    fetchResourceWithExceptionSync(var0: string | null, var1: string | null): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Parameters'
     * @return original return type: 'void'
     */
    setExpansionProfile(var0: org_hl7_fhir_r5_model_Parameters | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Parameters'
     * @return original return type: 'void'
     */
    setExpansionProfileSync(var0: org_hl7_fhir_r5_model_Parameters | null): void;
    /**
     * @return original return type: 'int'
     */
    getClientRetryCount(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getClientRetryCountSync(): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    fetchTypeDefinition(var0: string | null): Promise<org_hl7_fhir_r5_model_StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    fetchTypeDefinitionSync(var0: string | null): org_hl7_fhir_r5_model_StructureDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    isNoTerminologyServer(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isNoTerminologyServerSync(): boolean;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext'
     */
    setClientRetryCount(var0: java_lang_Integer | number): Promise<org_hl7_fhir_r5_context_IWorkerContext | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext'
     */
    setClientRetryCountSync(var0: java_lang_Integer | number): org_hl7_fhir_r5_context_IWorkerContext | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.List'
     */
    fetchTypeDefinitions(var0: string | null): Promise<java_util_List | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.List'
     */
    fetchTypeDefinitionsSync(var0: string | null): java_util_List | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.profilemodel.PEBuilder$PEElementPropertiesPolicy'
     * @param var1 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.profilemodel.PEBuilder'
     */
    getProfiledElementBuilder(var0: org_hl7_fhir_r5_profilemodel_PEBuilder$PEElementPropertiesPolicy | null, var1: java_lang_Boolean | boolean): Promise<org_hl7_fhir_r5_profilemodel_PEBuilder | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.profilemodel.PEBuilder$PEElementPropertiesPolicy'
     * @param var1 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.profilemodel.PEBuilder'
     */
    getProfiledElementBuilderSync(var0: org_hl7_fhir_r5_profilemodel_PEBuilder$PEElementPropertiesPolicy | null, var1: java_lang_Boolean | boolean): org_hl7_fhir_r5_profilemodel_PEBuilder | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CodeSystem'
     */
    fetchSupplementedCodeSystem(var0: string | null, var1: string | null): Promise<org_hl7_fhir_r5_model_CodeSystem | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CodeSystem'
     */
    fetchSupplementedCodeSystemSync(var0: string | null, var1: string | null): org_hl7_fhir_r5_model_CodeSystem | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CodeSystem'
     */
    fetchSupplementedCodeSystem(var0: string | null): Promise<org_hl7_fhir_r5_model_CodeSystem | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CodeSystem'
     */
    fetchSupplementedCodeSystemSync(var0: string | null): org_hl7_fhir_r5_model_CodeSystem | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.TranslationServices'
     * @return original return type: 'void'
     */
    setTranslator(var0: org_hl7_fhir_utilities_TranslationServices | JavaInterfaceProxy<org_hl7_fhir_utilities_TranslationServicesInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.TranslationServices'
     * @return original return type: 'void'
     */
    setTranslatorSync(var0: org_hl7_fhir_utilities_TranslationServices | JavaInterfaceProxy<org_hl7_fhir_utilities_TranslationServicesInterface> | null): void;
    /**
     * @return original return type: 'java.util.List'
     */
    listMaps(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    listMapsSync(): java_util_List | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.TerminologyCapabilities'
     * @return original return type: 'void'
     */
    setTxCaps(var0: org_hl7_fhir_r5_model_TerminologyCapabilities | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.TerminologyCapabilities'
     * @return original return type: 'void'
     */
    setTxCapsSync(var0: org_hl7_fhir_r5_model_TerminologyCapabilities | null): void;
    /**
     * @return original return type: 'java.util.List'
     */
    listStructures(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    listStructuresSync(): java_util_List | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @return original return type: 'void'
     */
    fixOldSD(var0: org_hl7_fhir_r5_model_StructureDefinition | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @return original return type: 'void'
     */
    fixOldSDSync(var0: org_hl7_fhir_r5_model_StructureDefinition | null): void;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasResourceVersion(var0: java_lang_Class | null, var1: string | null, var2: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Class'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasResourceVersionSync(var0: java_lang_Class | null, var1: string | null, var2: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasResourceVersion(var0: string | null, var1: string | null, var2: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasResourceVersionSync(var0: string | null, var1: string | null, var2: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    clearTSCache(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    clearTSCacheSync(var0: string | null): void;
    /**
     * @return original return type: 'void'
     */
    clearTS(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    clearTSSync(): void;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setCachingAllowed(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setCachingAllowedSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'boolean'
     */
    isTlogging(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isTloggingSync(): boolean;
    /**
     * @return original return type: 'int'
     */
    countAllCaches(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    countAllCachesSync(): number;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    finishLoading(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    finishLoadingSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'org.hl7.fhir.r5.context.TerminologyCache'
     */
    getTxCache(): Promise<org_hl7_fhir_r5_context_TerminologyCache | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.context.TerminologyCache'
     */
    getTxCacheSync(): org_hl7_fhir_r5_context_TerminologyCache | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.terminologies.client.ITerminologyClient'
     */
    getTxClient(): Promise<org_hl7_fhir_r5_terminologies_client_ITerminologyClient | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.terminologies.client.ITerminologyClient'
     */
    getTxClientSync(): org_hl7_fhir_r5_terminologies_client_ITerminologyClient | null;
    /**
     * @param var0 original type: 'com.google.gson.JsonObject'
     * @param var1 original type: 'java.util.Map'
     * @return original return type: 'void'
     */
    cacheVS(var0: com_google_gson_JsonObject | null, var1: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'com.google.gson.JsonObject'
     * @param var1 original type: 'java.util.Map'
     * @return original return type: 'void'
     */
    cacheVSSync(var0: com_google_gson_JsonObject | null, var1: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null): void;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.TerminologyCapabilities'
     */
    getTxCaps(): Promise<org_hl7_fhir_r5_model_TerminologyCapabilities | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.TerminologyCapabilities'
     */
    getTxCapsSync(): org_hl7_fhir_r5_model_TerminologyCapabilities | null;
    /**
     * @param var0 original type: 'com.google.gson.JsonObject'
     * @return original return type: 'void'
     */
    reportStatus(var0: com_google_gson_JsonObject | null): Promise<void>;
    /**
     * @param var0 original type: 'com.google.gson.JsonObject'
     * @return original return type: 'void'
     */
    reportStatusSync(var0: com_google_gson_JsonObject | null): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCacheId(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCacheIdSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.SearchParameter'
     */
    getSearchParameter(var0: string | null): Promise<org_hl7_fhir_r5_model_SearchParameter | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.SearchParameter'
     */
    getSearchParameterSync(var0: string | null): org_hl7_fhir_r5_model_SearchParameter | null;
    /**
     * @return original return type: 'boolean'
     */
    isCachingAllowed(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isCachingAllowedSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    dropResource(var0: string | null, var1: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    dropResourceSync(var0: string | null, var1: string | null): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'void'
     */
    dropResource(var0: org_hl7_fhir_r5_model_Resource | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'void'
     */
    dropResourceSync(var0: org_hl7_fhir_r5_model_Resource | null): void;
    /**
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContextManager$ICanonicalResourceLocator'
     */
    getLocator(): Promise<org_hl7_fhir_r5_context_IWorkerContextManager$ICanonicalResourceLocator | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContextManager$ICanonicalResourceLocator'
     */
    getLocatorSync(): org_hl7_fhir_r5_context_IWorkerContextManager$ICanonicalResourceLocator | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.context.IWorkerContextManager$ICanonicalResourceLocator'
     * @return original return type: 'void'
     */
    setLocator(var0: org_hl7_fhir_r5_context_IWorkerContextManager$ICanonicalResourceLocator | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContextManager$ICanonicalResourceLocatorInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.context.IWorkerContextManager$ICanonicalResourceLocator'
     * @return original return type: 'void'
     */
    setLocatorSync(var0: org_hl7_fhir_r5_context_IWorkerContextManager$ICanonicalResourceLocator | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContextManager$ICanonicalResourceLocatorInterface> | null): void;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setTlogging(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setTloggingSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setCacheId(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setCacheIdSync(var0: string | null): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    getUserAgent(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getUserAgentSync(): string | null;
    /**
     * @return original return type: 'java.util.Locale'
     */
    getLocale(): Promise<java_util_Locale | null>;
    /**
     * @return original return type: 'java.util.Locale'
     */
    getLocaleSync(): java_util_Locale | null;
    /**
     * @param var0 original type: 'java.util.Locale'
     * @return original return type: 'void'
     */
    setLocale(var0: java_util_Locale | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.Locale'
     * @return original return type: 'void'
     */
    setLocaleSync(var0: java_util_Locale | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.String'
     */
    formatMessage(var0: string | null, var1: (BasicOrJavaType | null)[] | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.String'
     */
    formatMessageSync(var0: string | null, var1: (BasicOrJavaType | null)[] | null): string | null;
    /**
     * @return original return type: 'boolean'
     */
    isWarnAboutMissingMessages(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isWarnAboutMissingMessagesSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setWarnAboutMissingMessages(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setWarnAboutMissingMessagesSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'java.lang.Integer'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.String'
     */
    formatMessagePlural(var0: java_lang_Integer | number | null, var1: string | null, var2: (BasicOrJavaType | null)[] | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.Integer'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.Object[]'
     * @return original return type: 'java.lang.String'
     */
    formatMessagePluralSync(var0: java_lang_Integer | number | null, var1: string | null, var2: (BasicOrJavaType | null)[] | null): string | null;
    /**
     * @param var0 original type: 'java.util.Locale'
     * @return original return type: 'void'
     */
    setValidationMessageLanguage(var0: java_util_Locale | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.Locale'
     * @return original return type: 'void'
     */
    setValidationMessageLanguageSync(var0: java_util_Locale | null): void;
    /**
     * @param var0 original type: 'java.util.Locale'
     * @return original return type: 'void'
     */
    setPluralRules(var0: java_util_Locale | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.Locale'
     * @return original return type: 'void'
     */
    setPluralRulesSync(var0: java_util_Locale | null): void;
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
     * @param var0 original type: 'org.hl7.fhir.r5.context.SimpleWorkerContext'
     * @return original return type: 'org.hl7.fhir.r5.context.SimpleWorkerContext'
     */
    static newInstanceAsync(var0: SimpleWorkerContextClass | null): Promise<SimpleWorkerContext>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.context.SimpleWorkerContext'
     */
    constructor(var0: SimpleWorkerContextClass | null);
}
declare const SimpleWorkerContext_base: typeof SimpleWorkerContextClass;
/**
 * Class org.hl7.fhir.r5.context.SimpleWorkerContext.
 *
 * This actually imports the java class for further use.
 * The class {@link SimpleWorkerContextClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class SimpleWorkerContext extends SimpleWorkerContext_base {
}
export default SimpleWorkerContext;
//# sourceMappingURL=SimpleWorkerContext.d.ts.map