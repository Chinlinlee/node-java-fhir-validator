/// <reference types="node" />
import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { StructureMap as org_hl7_fhir_r5_model_StructureMap } from "./../r5/model/StructureMap";
import { Element as org_hl7_fhir_r5_elementmodel_Element } from "./../r5/elementmodel/Element";
import { Manager$FhirFormat as org_hl7_fhir_r5_elementmodel_Manager$FhirFormat } from "./../r5/elementmodel/Manager$FhirFormat";
import { OperationOutcome as org_hl7_fhir_r5_model_OperationOutcome } from "./../r5/model/OperationOutcome";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../../java/util/List";
import { ValidationEngine$IValidationEngineLoader as org_hl7_fhir_validation_ValidationEngine$IValidationEngineLoader, ValidationEngine$IValidationEngineLoaderInterface as org_hl7_fhir_validation_ValidationEngine$IValidationEngineLoaderInterface } from "./ValidationEngine$IValidationEngineLoader";
import { Boolean as java_lang_Boolean } from "./../../../../java/lang/Boolean";
import { Resource as org_hl7_fhir_r5_model_Resource } from "./../r5/model/Resource";
import { Integer as java_lang_Integer } from "./../../../../java/lang/Integer";
import { InputStream as java_io_InputStream } from "./../../../../java/io/InputStream";
import { IdStatus as org_hl7_fhir_r5_utils_validation_constants_IdStatus } from "./../r5/utils/validation/constants/IdStatus";
import { BestPracticeWarningLevel as org_hl7_fhir_r5_utils_validation_constants_BestPracticeWarningLevel } from "./../r5/utils/validation/constants/BestPracticeWarningLevel";
import { CheckDisplayOption as org_hl7_fhir_r5_utils_validation_constants_CheckDisplayOption } from "./../r5/utils/validation/constants/CheckDisplayOption";
import { SimpleWorkerContext as org_hl7_fhir_r5_context_SimpleWorkerContext } from "./../r5/context/SimpleWorkerContext";
import { StructureDefinition as org_hl7_fhir_r5_model_StructureDefinition } from "./../r5/model/StructureDefinition";
import { ValidationLevel as org_hl7_fhir_validation_cli_utils_ValidationLevel } from "./cli/utils/ValidationLevel";
import { Locale as java_util_Locale } from "./../../../../java/util/Locale";
import { IValidatorResourceFetcher as org_hl7_fhir_r5_utils_validation_IValidatorResourceFetcher, IValidatorResourceFetcherInterface as org_hl7_fhir_r5_utils_validation_IValidatorResourceFetcherInterface } from "./../r5/utils/validation/IValidatorResourceFetcher";
import { IResourceValidator as org_hl7_fhir_r5_utils_validation_IResourceValidator, IResourceValidatorInterface as org_hl7_fhir_r5_utils_validation_IResourceValidatorInterface } from "./../r5/utils/validation/IResourceValidator";
import { InstanceValidator as org_hl7_fhir_validation_instance_InstanceValidator } from "./instance/InstanceValidator";
import { FhirPublication as org_hl7_fhir_utilities_FhirPublication } from "./../utilities/FhirPublication";
import { IgLoader as org_hl7_fhir_validation_IgLoader } from "./IgLoader";
import { Map as java_util_Map, MapInterface as java_util_MapInterface } from "./../../../../java/util/Map";
import { Coding as org_hl7_fhir_r5_model_Coding } from "./../r5/model/Coding";
import { HtmlInMarkdownCheck as org_hl7_fhir_validation_cli_model_HtmlInMarkdownCheck } from "./cli/model/HtmlInMarkdownCheck";
import { CanonicalResource as org_hl7_fhir_r5_model_CanonicalResource } from "./../r5/model/CanonicalResource";
import { QuestionnaireMode as org_hl7_fhir_validation_cli_utils_QuestionnaireMode } from "./cli/utils/QuestionnaireMode";
import { IValidationPolicyAdvisor as org_hl7_fhir_r5_utils_validation_IValidationPolicyAdvisor, IValidationPolicyAdvisorInterface as org_hl7_fhir_r5_utils_validation_IValidationPolicyAdvisorInterface } from "./../r5/utils/validation/IValidationPolicyAdvisor";
import { CodedContentValidationPolicy as org_hl7_fhir_r5_utils_validation_constants_CodedContentValidationPolicy } from "./../r5/utils/validation/constants/CodedContentValidationPolicy";
import { ElementDefinition as org_hl7_fhir_r5_model_ElementDefinition } from "./../r5/model/ElementDefinition";
import { BindingKind as org_hl7_fhir_r5_utils_validation_constants_BindingKind } from "./../r5/utils/validation/constants/BindingKind";
import { ValueSet as org_hl7_fhir_r5_model_ValueSet } from "./../r5/model/ValueSet";
import { ReferenceValidationPolicy as org_hl7_fhir_r5_utils_validation_constants_ReferenceValidationPolicy } from "./../r5/utils/validation/constants/ReferenceValidationPolicy";
import { ContainedReferenceValidationPolicy as org_hl7_fhir_r5_utils_validation_constants_ContainedReferenceValidationPolicy } from "./../r5/utils/validation/constants/ContainedReferenceValidationPolicy";
import { Element$SpecialElement as org_hl7_fhir_r5_elementmodel_Element$SpecialElement } from "./../r5/elementmodel/Element$SpecialElement";
import { FilesystemPackageCacheManager as org_hl7_fhir_utilities_npm_FilesystemPackageCacheManager } from "./../utilities/npm/FilesystemPackageCacheManager";
import { RenderingContext as org_hl7_fhir_r5_renderers_utils_RenderingContext } from "./../r5/renderers/utils/RenderingContext";
import { IWorkerContextManager$ICanonicalResourceLocator as org_hl7_fhir_r5_context_IWorkerContextManager$ICanonicalResourceLocator, IWorkerContextManager$ICanonicalResourceLocatorInterface as org_hl7_fhir_r5_context_IWorkerContextManager$ICanonicalResourceLocatorInterface } from "./../r5/context/IWorkerContextManager$ICanonicalResourceLocator";
import { PrintWriter as java_io_PrintWriter } from "./../../../../java/io/PrintWriter";
import { FHIRPathEngine as org_hl7_fhir_r5_utils_FHIRPathEngine } from "./../r5/utils/FHIRPathEngine";
import { Long as java_lang_Long } from "./../../../../java/lang/Long";
import { Class as java_lang_Class } from "./../../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link ValidationEngine} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ValidationEngineClass extends JavaClass {
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    convert(var0: string | null, var1: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    convertSync(var0: string | null, var1: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureMap'
     */
    compile(var0: string | null): Promise<org_hl7_fhir_r5_model_StructureMap | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureMap'
     */
    compileSync(var0: string | null): org_hl7_fhir_r5_model_StructureMap | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    transform(var0: string | null, var1: string | null): Promise<org_hl7_fhir_r5_elementmodel_Element | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    transformSync(var0: string | null, var1: string | null): org_hl7_fhir_r5_elementmodel_Element | null;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'org.hl7.fhir.r5.elementmodel.Manager$FhirFormat'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    transform(var0: Buffer | null, var1: org_hl7_fhir_r5_elementmodel_Manager$FhirFormat | null, var2: string | null): Promise<org_hl7_fhir_r5_elementmodel_Element | null>;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'org.hl7.fhir.r5.elementmodel.Manager$FhirFormat'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    transformSync(var0: Buffer | null, var1: org_hl7_fhir_r5_elementmodel_Manager$FhirFormat | null, var2: string | null): org_hl7_fhir_r5_elementmodel_Element | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.hl7.fhir.validation.ValidationEngine$IValidationEngineLoader'
     * @param var3 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.model.OperationOutcome'
     */
    validate(var0: string | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_hl7_fhir_validation_ValidationEngine$IValidationEngineLoader | JavaInterfaceProxy<org_hl7_fhir_validation_ValidationEngine$IValidationEngineLoaderInterface> | null, var3: java_lang_Boolean | boolean): Promise<org_hl7_fhir_r5_model_OperationOutcome | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.hl7.fhir.validation.ValidationEngine$IValidationEngineLoader'
     * @param var3 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.model.OperationOutcome'
     */
    validateSync(var0: string | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_hl7_fhir_validation_ValidationEngine$IValidationEngineLoader | JavaInterfaceProxy<org_hl7_fhir_validation_ValidationEngine$IValidationEngineLoaderInterface> | null, var3: java_lang_Boolean | boolean): org_hl7_fhir_r5_model_OperationOutcome | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.util.List'
     * @param var3 original type: 'java.util.List'
     * @param var4 original type: 'org.hl7.fhir.validation.ValidationEngine$IValidationEngineLoader'
     * @param var5 original type: 'boolean'
     * @param var6 original type: 'int'
     * @param var7 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    validate(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var3: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var4: org_hl7_fhir_validation_ValidationEngine$IValidationEngineLoader | JavaInterfaceProxy<org_hl7_fhir_validation_ValidationEngine$IValidationEngineLoaderInterface> | null, var5: java_lang_Boolean | boolean, var6: java_lang_Integer | number, var7: java_lang_Boolean | boolean): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.util.List'
     * @param var3 original type: 'java.util.List'
     * @param var4 original type: 'org.hl7.fhir.validation.ValidationEngine$IValidationEngineLoader'
     * @param var5 original type: 'boolean'
     * @param var6 original type: 'int'
     * @param var7 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    validateSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var3: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var4: org_hl7_fhir_validation_ValidationEngine$IValidationEngineLoader | JavaInterfaceProxy<org_hl7_fhir_validation_ValidationEngine$IValidationEngineLoaderInterface> | null, var5: java_lang_Boolean | boolean, var6: java_lang_Integer | number, var7: java_lang_Boolean | boolean): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.elementmodel.Manager$FhirFormat'
     * @param var1 original type: 'java.io.InputStream'
     * @param var2 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.OperationOutcome'
     */
    validate(var0: org_hl7_fhir_r5_elementmodel_Manager$FhirFormat | null, var1: java_io_InputStream | null, var2: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<org_hl7_fhir_r5_model_OperationOutcome | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.elementmodel.Manager$FhirFormat'
     * @param var1 original type: 'java.io.InputStream'
     * @param var2 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.OperationOutcome'
     */
    validateSync(var0: org_hl7_fhir_r5_elementmodel_Manager$FhirFormat | null, var1: java_io_InputStream | null, var2: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): org_hl7_fhir_r5_model_OperationOutcome | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'byte[]'
     * @param var2 original type: 'org.hl7.fhir.r5.elementmodel.Manager$FhirFormat'
     * @param var3 original type: 'java.util.List'
     * @param var4 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.OperationOutcome'
     */
    validate(var0: string | null, var1: Buffer | null, var2: org_hl7_fhir_r5_elementmodel_Manager$FhirFormat | null, var3: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var4: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<org_hl7_fhir_r5_model_OperationOutcome | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'byte[]'
     * @param var2 original type: 'org.hl7.fhir.r5.elementmodel.Manager$FhirFormat'
     * @param var3 original type: 'java.util.List'
     * @param var4 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.OperationOutcome'
     */
    validateSync(var0: string | null, var1: Buffer | null, var2: org_hl7_fhir_r5_elementmodel_Manager$FhirFormat | null, var3: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var4: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): org_hl7_fhir_r5_model_OperationOutcome | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'byte[]'
     * @param var2 original type: 'org.hl7.fhir.r5.elementmodel.Manager$FhirFormat'
     * @param var3 original type: 'java.util.List'
     * @param var4 original type: 'org.hl7.fhir.r5.utils.validation.constants.IdStatus'
     * @param var5 original type: 'boolean'
     * @param var6 original type: 'org.hl7.fhir.r5.utils.validation.constants.BestPracticeWarningLevel'
     * @param var7 original type: 'org.hl7.fhir.r5.utils.validation.constants.CheckDisplayOption'
     * @return original return type: 'org.hl7.fhir.r5.model.OperationOutcome'
     */
    validate(var0: string | null, var1: Buffer | null, var2: org_hl7_fhir_r5_elementmodel_Manager$FhirFormat | null, var3: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var4: org_hl7_fhir_r5_utils_validation_constants_IdStatus | null, var5: java_lang_Boolean | boolean, var6: org_hl7_fhir_r5_utils_validation_constants_BestPracticeWarningLevel | null, var7: org_hl7_fhir_r5_utils_validation_constants_CheckDisplayOption | null): Promise<org_hl7_fhir_r5_model_OperationOutcome | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'byte[]'
     * @param var2 original type: 'org.hl7.fhir.r5.elementmodel.Manager$FhirFormat'
     * @param var3 original type: 'java.util.List'
     * @param var4 original type: 'org.hl7.fhir.r5.utils.validation.constants.IdStatus'
     * @param var5 original type: 'boolean'
     * @param var6 original type: 'org.hl7.fhir.r5.utils.validation.constants.BestPracticeWarningLevel'
     * @param var7 original type: 'org.hl7.fhir.r5.utils.validation.constants.CheckDisplayOption'
     * @return original return type: 'org.hl7.fhir.r5.model.OperationOutcome'
     */
    validateSync(var0: string | null, var1: Buffer | null, var2: org_hl7_fhir_r5_elementmodel_Manager$FhirFormat | null, var3: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var4: org_hl7_fhir_r5_utils_validation_constants_IdStatus | null, var5: java_lang_Boolean | boolean, var6: org_hl7_fhir_r5_utils_validation_constants_BestPracticeWarningLevel | null, var7: org_hl7_fhir_r5_utils_validation_constants_CheckDisplayOption | null): org_hl7_fhir_r5_model_OperationOutcome | null;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'org.hl7.fhir.r5.elementmodel.Manager$FhirFormat'
     * @param var2 original type: 'java.util.List'
     * @param var3 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.OperationOutcome'
     */
    validate(var0: Buffer | null, var1: org_hl7_fhir_r5_elementmodel_Manager$FhirFormat | null, var2: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var3: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<org_hl7_fhir_r5_model_OperationOutcome | null>;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'org.hl7.fhir.r5.elementmodel.Manager$FhirFormat'
     * @param var2 original type: 'java.util.List'
     * @param var3 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.OperationOutcome'
     */
    validateSync(var0: Buffer | null, var1: org_hl7_fhir_r5_elementmodel_Manager$FhirFormat | null, var2: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var3: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): org_hl7_fhir_r5_model_OperationOutcome | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.context.SimpleWorkerContext'
     */
    getContext(): Promise<org_hl7_fhir_r5_context_SimpleWorkerContext | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.context.SimpleWorkerContext'
     */
    getContextSync(): org_hl7_fhir_r5_context_SimpleWorkerContext | null;
    /**
     * @return original return type: 'void'
     */
    prepare(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    prepareSync(): void;
    /**
     * @return original return type: 'boolean'
     */
    isDebug(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isDebugSync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    getLanguage(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getLanguageSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    generate(var0: string | null, var1: string | null): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    generateSync(var0: string | null, var1: string | null): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    snapshot(var0: string | null, var1: string | null): Promise<org_hl7_fhir_r5_model_StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    snapshotSync(var0: string | null, var1: string | null): org_hl7_fhir_r5_model_StructureDefinition | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getVersion(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getVersionSync(): string | null;
    /**
     * @return original return type: 'org.hl7.fhir.validation.cli.utils.ValidationLevel'
     */
    getLevel(): Promise<org_hl7_fhir_validation_cli_utils_ValidationLevel | null>;
    /**
     * @return original return type: 'org.hl7.fhir.validation.cli.utils.ValidationLevel'
     */
    getLevelSync(): org_hl7_fhir_validation_cli_utils_ValidationLevel | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.cli.utils.ValidationLevel'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setLevel(var0: org_hl7_fhir_validation_cli_utils_ValidationLevel | null): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.cli.utils.ValidationLevel'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setLevelSync(var0: org_hl7_fhir_validation_cli_utils_ValidationLevel | null): ValidationEngine | null;
    /**
     * @return original return type: 'java.util.Locale'
     */
    getLocale(): Promise<java_util_Locale | null>;
    /**
     * @return original return type: 'java.util.Locale'
     */
    getLocaleSync(): java_util_Locale | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setLanguage(var0: string | null): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setLanguageSync(var0: string | null): ValidationEngine | null;
    /**
     * @param var0 original type: 'java.util.Locale'
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IValidatorResourceFetcher'
     */
    setLocale(var0: java_util_Locale | null): Promise<org_hl7_fhir_r5_utils_validation_IValidatorResourceFetcher | null>;
    /**
     * @param var0 original type: 'java.util.Locale'
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IValidatorResourceFetcher'
     */
    setLocaleSync(var0: java_util_Locale | null): org_hl7_fhir_r5_utils_validation_IValidatorResourceFetcher | null;
    /**
     * @param var0 original type: 'java.util.Locale'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setLocale(var0: java_util_Locale | null): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'java.util.Locale'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setLocaleSync(var0: java_util_Locale | null): ValidationEngine | null;
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
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    fetch(var0: org_hl7_fhir_r5_utils_validation_IResourceValidator | JavaInterfaceProxy<org_hl7_fhir_r5_utils_validation_IResourceValidatorInterface> | null, var1: BasicOrJavaType | null, var2: string | null): Promise<org_hl7_fhir_r5_elementmodel_Element | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    fetchSync(var0: org_hl7_fhir_r5_utils_validation_IResourceValidator | JavaInterfaceProxy<org_hl7_fhir_r5_utils_validation_IResourceValidatorInterface> | null, var1: BasicOrJavaType | null, var2: string | null): org_hl7_fhir_r5_elementmodel_Element | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setForPublication(var0: java_lang_Boolean | boolean): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setForPublicationSync(var0: java_lang_Boolean | boolean): ValidationEngine | null;
    /**
     * @return original return type: 'boolean'
     */
    isForPublication(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isForPublicationSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setDebug(var0: java_lang_Boolean | boolean): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setDebugSync(var0: java_lang_Boolean | boolean): ValidationEngine | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.elementmodel.Manager$FhirFormat'
     * @return original return type: 'org.hl7.fhir.validation.instance.InstanceValidator'
     */
    getValidator(var0: org_hl7_fhir_r5_elementmodel_Manager$FhirFormat | null): Promise<org_hl7_fhir_validation_instance_InstanceValidator | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.elementmodel.Manager$FhirFormat'
     * @return original return type: 'org.hl7.fhir.validation.instance.InstanceValidator'
     */
    getValidatorSync(var0: org_hl7_fhir_r5_elementmodel_Manager$FhirFormat | null): org_hl7_fhir_validation_instance_InstanceValidator | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'org.hl7.fhir.utilities.FhirPublication'
     * @return original return type: 'java.lang.String'
     */
    connectToTSServer(var0: string | null, var1: string | null, var2: string | null, var3: org_hl7_fhir_utilities_FhirPublication | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'org.hl7.fhir.utilities.FhirPublication'
     * @return original return type: 'java.lang.String'
     */
    connectToTSServerSync(var0: string | null, var1: string | null, var2: string | null, var3: org_hl7_fhir_utilities_FhirPublication | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.utilities.FhirPublication'
     * @return original return type: 'java.lang.String'
     */
    connectToTSServer(var0: string | null, var1: string | null, var2: org_hl7_fhir_utilities_FhirPublication | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.utilities.FhirPublication'
     * @return original return type: 'java.lang.String'
     */
    connectToTSServerSync(var0: string | null, var1: string | null, var2: org_hl7_fhir_utilities_FhirPublication | null): string | null;
    /**
     * @return original return type: 'org.hl7.fhir.validation.IgLoader'
     */
    getIgLoader(): Promise<org_hl7_fhir_validation_IgLoader | null>;
    /**
     * @return original return type: 'org.hl7.fhir.validation.IgLoader'
     */
    getIgLoaderSync(): org_hl7_fhir_validation_IgLoader | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setDoNative(var0: java_lang_Boolean | boolean): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setDoNativeSync(var0: java_lang_Boolean | boolean): ValidationEngine | null;
    /**
     * @return original return type: 'java.util.Map'
     */
    getBinaries(): Promise<java_util_Map | null>;
    /**
     * @return original return type: 'java.util.Map'
     */
    getBinariesSync(): java_util_Map | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getIgs(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getIgsSync(): java_util_List | null;
    /**
     * @return original return type: 'java.util.Map'
     */
    getValidationControl(): Promise<java_util_Map | null>;
    /**
     * @return original return type: 'java.util.Map'
     */
    getValidationControlSync(): java_util_Map | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setAnyExtensionsAllowed(var0: java_lang_Boolean | boolean): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setAnyExtensionsAllowedSync(var0: java_lang_Boolean | boolean): ValidationEngine | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    loadPackage(var0: string | null, var1: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    loadPackageSync(var0: string | null, var1: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    loadProfile(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    loadProfileSync(var0: string | null): void;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    loadResource(var0: Buffer | null, var1: string | null): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'byte[]'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    loadResourceSync(var0: Buffer | null, var1: string | null): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setVersion(var0: string | null): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setVersionSync(var0: string | null): ValidationEngine | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Coding'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setJurisdiction(var0: org_hl7_fhir_r5_model_Coding | null): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Coding'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setJurisdictionSync(var0: org_hl7_fhir_r5_model_Coding | null): ValidationEngine | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Coding'
     */
    getJurisdiction(): Promise<org_hl7_fhir_r5_model_Coding | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Coding'
     */
    getJurisdictionSync(): org_hl7_fhir_r5_model_Coding | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.context.SimpleWorkerContext'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setContext(var0: org_hl7_fhir_r5_context_SimpleWorkerContext | null): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.context.SimpleWorkerContext'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setContextSync(var0: org_hl7_fhir_r5_context_SimpleWorkerContext | null): ValidationEngine | null;
    /**
     * @return original return type: 'boolean'
     */
    isHintAboutNonMustSupport(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isHintAboutNonMustSupportSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setNoExtensibleBindingMessages(var0: java_lang_Boolean | boolean): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setNoExtensibleBindingMessagesSync(var0: java_lang_Boolean | boolean): ValidationEngine | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setAllowExampleUrls(var0: java_lang_Boolean | boolean): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setAllowExampleUrlsSync(var0: java_lang_Boolean | boolean): ValidationEngine | null;
    /**
     * @return original return type: 'org.hl7.fhir.validation.cli.model.HtmlInMarkdownCheck'
     */
    getHtmlInMarkdownCheck(): Promise<org_hl7_fhir_validation_cli_model_HtmlInMarkdownCheck | null>;
    /**
     * @return original return type: 'org.hl7.fhir.validation.cli.model.HtmlInMarkdownCheck'
     */
    getHtmlInMarkdownCheckSync(): org_hl7_fhir_validation_cli_model_HtmlInMarkdownCheck | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.cli.model.HtmlInMarkdownCheck'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setHtmlInMarkdownCheck(var0: org_hl7_fhir_validation_cli_model_HtmlInMarkdownCheck | null): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.cli.model.HtmlInMarkdownCheck'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setHtmlInMarkdownCheckSync(var0: org_hl7_fhir_validation_cli_model_HtmlInMarkdownCheck | null): ValidationEngine | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.utilities.FhirPublication'
     * @return original return type: 'java.lang.String'
     */
    setTerminologyServer(var0: string | null, var1: string | null, var2: org_hl7_fhir_utilities_FhirPublication | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.utilities.FhirPublication'
     * @return original return type: 'java.lang.String'
     */
    setTerminologyServerSync(var0: string | null, var1: string | null, var2: org_hl7_fhir_utilities_FhirPublication | null): string | null;
    /**
     * @return original return type: 'boolean'
     */
    isAllowDoubleQuotesInFHIRPath(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isAllowDoubleQuotesInFHIRPathSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setAllowDoubleQuotesInFHIRPath(var0: java_lang_Boolean | boolean): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setAllowDoubleQuotesInFHIRPathSync(var0: java_lang_Boolean | boolean): ValidationEngine | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getExtensionDomains(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getExtensionDomainsSync(): java_util_List | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    loadCanonicalResource(var0: string | null, var1: string | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    loadCanonicalResourceSync(var0: string | null, var1: string | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setHintAboutNonMustSupport(var0: java_lang_Boolean | boolean): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setHintAboutNonMustSupportSync(var0: java_lang_Boolean | boolean): ValidationEngine | null;
    /**
     * @return original return type: 'boolean'
     */
    isNoExtensibleBindingMessages(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isNoExtensibleBindingMessagesSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isAnyExtensionsAllowed(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isAnyExtensionsAllowedSync(): boolean;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setExtensionDomains(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setExtensionDomainsSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): ValidationEngine | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.cli.utils.QuestionnaireMode'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setQuestionnaireMode(var0: org_hl7_fhir_validation_cli_utils_QuestionnaireMode | null): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.cli.utils.QuestionnaireMode'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setQuestionnaireModeSync(var0: org_hl7_fhir_validation_cli_utils_QuestionnaireMode | null): ValidationEngine | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setBundleValidationRules(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setBundleValidationRulesSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): ValidationEngine | null;
    /**
     * @param var0 original type: 'java.util.Map'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setValidationControl(var0: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'java.util.Map'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setValidationControlSync(var0: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null): ValidationEngine | null;
    /**
     * @return original return type: 'org.hl7.fhir.validation.cli.utils.QuestionnaireMode'
     */
    getQuestionnaireMode(): Promise<org_hl7_fhir_validation_cli_utils_QuestionnaireMode | null>;
    /**
     * @return original return type: 'org.hl7.fhir.validation.cli.utils.QuestionnaireMode'
     */
    getQuestionnaireModeSync(): org_hl7_fhir_validation_cli_utils_QuestionnaireMode | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.IValidationPolicyAdvisor'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setPolicyAdvisor(var0: org_hl7_fhir_r5_utils_validation_IValidationPolicyAdvisor | JavaInterfaceProxy<org_hl7_fhir_r5_utils_validation_IValidationPolicyAdvisorInterface> | null): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.IValidationPolicyAdvisor'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setPolicyAdvisorSync(var0: org_hl7_fhir_r5_utils_validation_IValidationPolicyAdvisor | JavaInterfaceProxy<org_hl7_fhir_r5_utils_validation_IValidationPolicyAdvisorInterface> | null): ValidationEngine | null;
    /**
     * @return original return type: 'boolean'
     */
    isCrumbTrails(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isCrumbTrailsSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setCrumbTrails(var0: java_lang_Boolean | boolean): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setCrumbTrailsSync(var0: java_lang_Boolean | boolean): ValidationEngine | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    packageLoaded(var0: string | null, var1: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    packageLoadedSync(var0: string | null, var1: string | null): void;
    /**
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IValidatorResourceFetcher'
     */
    getFetcher(): Promise<org_hl7_fhir_r5_utils_validation_IValidatorResourceFetcher | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IValidatorResourceFetcher'
     */
    getFetcherSync(): org_hl7_fhir_r5_utils_validation_IValidatorResourceFetcher | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.IValidatorResourceFetcher'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setFetcher(var0: org_hl7_fhir_r5_utils_validation_IValidatorResourceFetcher | JavaInterfaceProxy<org_hl7_fhir_r5_utils_validation_IValidatorResourceFetcherInterface> | null): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.IValidatorResourceFetcher'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setFetcherSync(var0: org_hl7_fhir_r5_utils_validation_IValidatorResourceFetcher | JavaInterfaceProxy<org_hl7_fhir_r5_utils_validation_IValidatorResourceFetcherInterface> | null): ValidationEngine | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IValidationPolicyAdvisor'
     */
    getPolicyAdvisor(): Promise<org_hl7_fhir_r5_utils_validation_IValidationPolicyAdvisor | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IValidationPolicyAdvisor'
     */
    getPolicyAdvisorSync(): org_hl7_fhir_r5_utils_validation_IValidationPolicyAdvisor | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @param var4 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var5 original type: 'org.hl7.fhir.r5.utils.validation.constants.BindingKind'
     * @param var6 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @param var7 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.constants.CodedContentValidationPolicy'
     */
    policyForCodedContent(var0: org_hl7_fhir_r5_utils_validation_IResourceValidator | JavaInterfaceProxy<org_hl7_fhir_r5_utils_validation_IResourceValidatorInterface> | null, var1: BasicOrJavaType | null, var2: string | null, var3: org_hl7_fhir_r5_model_ElementDefinition | null, var4: org_hl7_fhir_r5_model_StructureDefinition | null, var5: org_hl7_fhir_r5_utils_validation_constants_BindingKind | null, var6: org_hl7_fhir_r5_model_ValueSet | null, var7: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<org_hl7_fhir_r5_utils_validation_constants_CodedContentValidationPolicy | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @param var4 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var5 original type: 'org.hl7.fhir.r5.utils.validation.constants.BindingKind'
     * @param var6 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @param var7 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.constants.CodedContentValidationPolicy'
     */
    policyForCodedContentSync(var0: org_hl7_fhir_r5_utils_validation_IResourceValidator | JavaInterfaceProxy<org_hl7_fhir_r5_utils_validation_IResourceValidatorInterface> | null, var1: BasicOrJavaType | null, var2: string | null, var3: org_hl7_fhir_r5_model_ElementDefinition | null, var4: org_hl7_fhir_r5_model_StructureDefinition | null, var5: org_hl7_fhir_r5_utils_validation_constants_BindingKind | null, var6: org_hl7_fhir_r5_model_ValueSet | null, var7: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): org_hl7_fhir_r5_utils_validation_constants_CodedContentValidationPolicy | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    fetchCanonicalResource(var0: org_hl7_fhir_r5_utils_validation_IResourceValidator | JavaInterfaceProxy<org_hl7_fhir_r5_utils_validation_IResourceValidatorInterface> | null, var1: string | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    fetchCanonicalResourceSync(var0: org_hl7_fhir_r5_utils_validation_IResourceValidator | JavaInterfaceProxy<org_hl7_fhir_r5_utils_validation_IResourceValidatorInterface> | null, var1: string | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    fetchesCanonicalResource(var0: org_hl7_fhir_r5_utils_validation_IResourceValidator | JavaInterfaceProxy<org_hl7_fhir_r5_utils_validation_IResourceValidatorInterface> | null, var1: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    fetchesCanonicalResourceSync(var0: org_hl7_fhir_r5_utils_validation_IResourceValidator | JavaInterfaceProxy<org_hl7_fhir_r5_utils_validation_IResourceValidatorInterface> | null, var1: string | null): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setDoImplicitFHIRPathStringConversion(var0: java_lang_Boolean | boolean): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setDoImplicitFHIRPathStringConversionSync(var0: java_lang_Boolean | boolean): ValidationEngine | null;
    /**
     * @return original return type: 'boolean'
     */
    isDoImplicitFHIRPathStringConversion(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isDoImplicitFHIRPathStringConversionSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setNoInvariantChecks(var0: java_lang_Boolean | boolean): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setNoInvariantChecksSync(var0: java_lang_Boolean | boolean): ValidationEngine | null;
    /**
     * @return original return type: 'boolean'
     */
    isWantInvariantInMessage(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isWantInvariantInMessageSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setWantInvariantInMessage(var0: java_lang_Boolean | boolean): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setWantInvariantInMessageSync(var0: java_lang_Boolean | boolean): ValidationEngine | null;
    /**
     * @return original return type: 'boolean'
     */
    isNoInvariantChecks(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isNoInvariantChecksSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isNoUnicodeBiDiControlChars(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isNoUnicodeBiDiControlCharsSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isAssumeValidRestReferences(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isAssumeValidRestReferencesSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setNoUnicodeBiDiControlChars(var0: java_lang_Boolean | boolean): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setNoUnicodeBiDiControlCharsSync(var0: java_lang_Boolean | boolean): ValidationEngine | null;
    /**
     * @return original return type: 'boolean'
     */
    isShowMessagesFromReferences(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isShowMessagesFromReferencesSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setShowMessagesFromReferences(var0: java_lang_Boolean | boolean): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setShowMessagesFromReferencesSync(var0: java_lang_Boolean | boolean): ValidationEngine | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setAssumeValidRestReferences(var0: java_lang_Boolean | boolean): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setAssumeValidRestReferencesSync(var0: java_lang_Boolean | boolean): ValidationEngine | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getBundleValidationRules(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getBundleValidationRulesSync(): java_util_List | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    resolveURL(var0: org_hl7_fhir_r5_utils_validation_IResourceValidator | JavaInterfaceProxy<org_hl7_fhir_r5_utils_validation_IResourceValidatorInterface> | null, var1: BasicOrJavaType | null, var2: string | null, var3: string | null, var4: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    resolveURLSync(var0: org_hl7_fhir_r5_utils_validation_IResourceValidator | JavaInterfaceProxy<org_hl7_fhir_r5_utils_validation_IResourceValidatorInterface> | null, var1: BasicOrJavaType | null, var2: string | null, var3: string | null, var4: string | null): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'byte[]'
     */
    fetchRaw(var0: org_hl7_fhir_r5_utils_validation_IResourceValidator | JavaInterfaceProxy<org_hl7_fhir_r5_utils_validation_IResourceValidatorInterface> | null, var1: string | null): Promise<Buffer | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'byte[]'
     */
    fetchRawSync(var0: org_hl7_fhir_r5_utils_validation_IResourceValidator | JavaInterfaceProxy<org_hl7_fhir_r5_utils_validation_IResourceValidatorInterface> | null, var1: string | null): Buffer | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.constants.ReferenceValidationPolicy'
     */
    policyForReference(var0: org_hl7_fhir_r5_utils_validation_IResourceValidator | JavaInterfaceProxy<org_hl7_fhir_r5_utils_validation_IResourceValidatorInterface> | null, var1: BasicOrJavaType | null, var2: string | null, var3: string | null): Promise<org_hl7_fhir_r5_utils_validation_constants_ReferenceValidationPolicy | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.constants.ReferenceValidationPolicy'
     */
    policyForReferenceSync(var0: org_hl7_fhir_r5_utils_validation_IResourceValidator | JavaInterfaceProxy<org_hl7_fhir_r5_utils_validation_IResourceValidatorInterface> | null, var1: BasicOrJavaType | null, var2: string | null, var3: string | null): org_hl7_fhir_r5_utils_validation_constants_ReferenceValidationPolicy | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'org.hl7.fhir.r5.elementmodel.Element$SpecialElement'
     * @param var5 original type: 'java.lang.String'
     * @param var6 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.constants.ContainedReferenceValidationPolicy'
     */
    policyForContained(var0: org_hl7_fhir_r5_utils_validation_IResourceValidator | JavaInterfaceProxy<org_hl7_fhir_r5_utils_validation_IResourceValidatorInterface> | null, var1: BasicOrJavaType | null, var2: string | null, var3: string | null, var4: org_hl7_fhir_r5_elementmodel_Element$SpecialElement | null, var5: string | null, var6: string | null): Promise<org_hl7_fhir_r5_utils_validation_constants_ContainedReferenceValidationPolicy | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     * @param var1 original type: 'java.lang.Object'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'org.hl7.fhir.r5.elementmodel.Element$SpecialElement'
     * @param var5 original type: 'java.lang.String'
     * @param var6 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.constants.ContainedReferenceValidationPolicy'
     */
    policyForContainedSync(var0: org_hl7_fhir_r5_utils_validation_IResourceValidator | JavaInterfaceProxy<org_hl7_fhir_r5_utils_validation_IResourceValidatorInterface> | null, var1: BasicOrJavaType | null, var2: string | null, var3: string | null, var4: org_hl7_fhir_r5_elementmodel_Element$SpecialElement | null, var5: string | null, var6: string | null): org_hl7_fhir_r5_utils_validation_constants_ContainedReferenceValidationPolicy | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'java.util.List'
     */
    asSdList(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<java_util_List | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'java.util.List'
     */
    asSdListSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): java_util_List | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setSnomedExtension(var0: string | null): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setSnomedExtensionSync(var0: string | null): ValidationEngine | null;
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
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setMapLog(var0: string | null): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setMapLogSync(var0: string | null): ValidationEngine | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    evaluateFhirPath(var0: string | null, var1: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    evaluateFhirPathSync(var0: string | null, var1: string | null): string | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.npm.FilesystemPackageCacheManager'
     */
    getPcm(): Promise<org_hl7_fhir_utilities_npm_FilesystemPackageCacheManager | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.npm.FilesystemPackageCacheManager'
     */
    getPcmSync(): org_hl7_fhir_utilities_npm_FilesystemPackageCacheManager | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'void'
     */
    seeResource(var0: org_hl7_fhir_r5_model_Resource | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'void'
     */
    seeResourceSync(var0: org_hl7_fhir_r5_model_Resource | null): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Resource'
     * @param var1 original type: 'org.hl7.fhir.r5.renderers.utils.RenderingContext'
     * @return original return type: 'void'
     */
    genResource(var0: org_hl7_fhir_r5_model_Resource | null, var1: org_hl7_fhir_r5_renderers_utils_RenderingContext | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Resource'
     * @param var1 original type: 'org.hl7.fhir.r5.renderers.utils.RenderingContext'
     * @return original return type: 'void'
     */
    genResourceSync(var0: org_hl7_fhir_r5_model_Resource | null, var1: org_hl7_fhir_r5_renderers_utils_RenderingContext | null): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Resource'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    handleOutput(var0: org_hl7_fhir_r5_model_Resource | null, var1: string | null, var2: string | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Resource'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    handleOutputSync(var0: org_hl7_fhir_r5_model_Resource | null, var1: string | null, var2: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.elementmodel.Manager$FhirFormat'
     * @param var3 original type: 'java.lang.Boolean'
     * @return original return type: 'byte[]'
     */
    transformVersion(var0: string | null, var1: string | null, var2: org_hl7_fhir_r5_elementmodel_Manager$FhirFormat | null, var3: java_lang_Boolean | boolean | null): Promise<Buffer | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.elementmodel.Manager$FhirFormat'
     * @param var3 original type: 'java.lang.Boolean'
     * @return original return type: 'byte[]'
     */
    transformVersionSync(var0: string | null, var1: string | null, var2: org_hl7_fhir_r5_elementmodel_Manager$FhirFormat | null, var3: java_lang_Boolean | boolean | null): Buffer | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.FilesystemPackageCacheManager'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setPcm(var0: org_hl7_fhir_utilities_npm_FilesystemPackageCacheManager | null): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.npm.FilesystemPackageCacheManager'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setPcmSync(var0: org_hl7_fhir_utilities_npm_FilesystemPackageCacheManager | null): ValidationEngine | null;
    /**
     * @return original return type: 'boolean'
     */
    isShowTimes(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isShowTimesSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContextManager$ICanonicalResourceLocator'
     */
    getLocator(): Promise<org_hl7_fhir_r5_context_IWorkerContextManager$ICanonicalResourceLocator | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContextManager$ICanonicalResourceLocator'
     */
    getLocatorSync(): org_hl7_fhir_r5_context_IWorkerContextManager$ICanonicalResourceLocator | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setDisplayWarnings(var0: java_lang_Boolean | boolean): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setDisplayWarningsSync(var0: java_lang_Boolean | boolean): ValidationEngine | null;
    /**
     * @return original return type: 'boolean'
     */
    isDisplayWarnings(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isDisplayWarningsSync(): boolean;
    /**
     * @return original return type: 'java.io.PrintWriter'
     */
    getMapLog(): Promise<java_io_PrintWriter | null>;
    /**
     * @return original return type: 'java.io.PrintWriter'
     */
    getMapLogSync(): java_io_PrintWriter | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setSecurityChecks(var0: java_lang_Boolean | boolean): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setSecurityChecksSync(var0: java_lang_Boolean | boolean): ValidationEngine | null;
    /**
     * @return original return type: 'boolean'
     */
    isDoNative(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isDoNativeSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isAllowExampleUrls(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isAllowExampleUrlsSync(): boolean;
    /**
     * @param var0 original type: 'java.util.Map'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setBinaries(var0: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'java.util.Map'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setBinariesSync(var0: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null): ValidationEngine | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.context.IWorkerContextManager$ICanonicalResourceLocator'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setLocator(var0: org_hl7_fhir_r5_context_IWorkerContextManager$ICanonicalResourceLocator | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContextManager$ICanonicalResourceLocatorInterface> | null): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.context.IWorkerContextManager$ICanonicalResourceLocator'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setLocatorSync(var0: org_hl7_fhir_r5_context_IWorkerContextManager$ICanonicalResourceLocator | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContextManager$ICanonicalResourceLocatorInterface> | null): ValidationEngine | null;
    /**
     * @return original return type: 'boolean'
     */
    isSecurityChecks(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isSecurityChecksSync(): boolean;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setIgs(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setIgsSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): ValidationEngine | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.IgLoader'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setIgLoader(var0: org_hl7_fhir_validation_IgLoader | null): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.IgLoader'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setIgLoaderSync(var0: org_hl7_fhir_validation_IgLoader | null): ValidationEngine | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setShowTimes(var0: java_lang_Boolean | boolean): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setShowTimesSync(var0: java_lang_Boolean | boolean): ValidationEngine | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.FHIRPathEngine'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setFhirPathEngine(var0: org_hl7_fhir_r5_utils_FHIRPathEngine | null): Promise<ValidationEngine | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.FHIRPathEngine'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    setFhirPathEngineSync(var0: org_hl7_fhir_r5_utils_FHIRPathEngine | null): ValidationEngine | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.utils.FHIRPathEngine'
     */
    getFhirPathEngine(): Promise<org_hl7_fhir_r5_utils_FHIRPathEngine | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.utils.FHIRPathEngine'
     */
    getFhirPathEngineSync(): org_hl7_fhir_r5_utils_FHIRPathEngine | null;
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
     * @param var0 original type: 'org.hl7.fhir.validation.ValidationEngine'
     * @return original return type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    static newInstanceAsync(var0: ValidationEngineClass | null): Promise<ValidationEngine>;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.ValidationEngine'
     */
    constructor(var0: ValidationEngineClass | null);
}
declare const ValidationEngine_base: typeof ValidationEngineClass;
/**
 * Class org.hl7.fhir.validation.ValidationEngine.
 *
 * This actually imports the java class for further use.
 * The class {@link ValidationEngineClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ValidationEngine extends ValidationEngine_base {
}
export default ValidationEngine;
//# sourceMappingURL=ValidationEngine.d.ts.map