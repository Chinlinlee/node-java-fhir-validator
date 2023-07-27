import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Element as org_hl7_fhir_r5_elementmodel_Element } from "./../../r5/elementmodel/Element";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../../../java/util/List";
import { Resource as org_hl7_fhir_r5_model_Resource } from "./../../r5/model/Resource";
import { Element as org_w3c_dom_Element, ElementInterface as org_w3c_dom_ElementInterface } from "./../../../../w3c/dom/Element";
import { Document as org_w3c_dom_Document, DocumentInterface as org_w3c_dom_DocumentInterface } from "./../../../../w3c/dom/Document";
import { InputStream as java_io_InputStream } from "./../../../../../java/io/InputStream";
import { Manager$FhirFormat as org_hl7_fhir_r5_elementmodel_Manager$FhirFormat } from "./../../r5/elementmodel/Manager$FhirFormat";
import { JsonObject as org_hl7_fhir_utilities_json_model_JsonObject } from "./../../utilities/json/model/JsonObject";
import { IWorkerContext as org_hl7_fhir_r5_context_IWorkerContext, IWorkerContextInterface as org_hl7_fhir_r5_context_IWorkerContextInterface } from "./../../r5/context/IWorkerContext";
import { ValidatorHostContext as org_hl7_fhir_validation_instance_utils_ValidatorHostContext } from "./utils/ValidatorHostContext";
import { StructureDefinition as org_hl7_fhir_r5_model_StructureDefinition } from "./../../r5/model/StructureDefinition";
import { ElementDefinition as org_hl7_fhir_r5_model_ElementDefinition } from "./../../r5/model/ElementDefinition";
import { NodeStack as org_hl7_fhir_validation_instance_utils_NodeStack } from "./utils/NodeStack";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
import { BaseValidator as org_hl7_fhir_validation_BaseValidator } from "./../BaseValidator";
import { IResourceValidator as org_hl7_fhir_r5_utils_validation_IResourceValidator } from "./../../r5/utils/validation/IResourceValidator";
import { Coding as org_hl7_fhir_r5_model_Coding } from "./../../r5/model/Coding";
import { ElementInfo as org_hl7_fhir_validation_instance_utils_ElementInfo } from "./utils/ElementInfo";
import { PercentageTracker as org_hl7_fhir_validation_instance_PercentageTracker } from "./PercentageTracker";
import { Base$ValidationMode as org_hl7_fhir_r5_model_Base$ValidationMode } from "./../../r5/model/Base$ValidationMode";
import { ExpressionNode as org_hl7_fhir_r5_model_ExpressionNode } from "./../../r5/model/ExpressionNode";
import { ProfileUtilities$SourcedChildDefinitions as org_hl7_fhir_r5_conformance_profile_ProfileUtilities$SourcedChildDefinitions } from "./../../r5/conformance/profile/ProfileUtilities$SourcedChildDefinitions";
import { FHIRPathEngine$IEvaluationContext as org_hl7_fhir_r5_utils_FHIRPathEngine$IEvaluationContext, FHIRPathEngine$IEvaluationContextInterface as org_hl7_fhir_r5_utils_FHIRPathEngine$IEvaluationContextInterface } from "./../../r5/utils/FHIRPathEngine$IEvaluationContext";
import { HtmlInMarkdownCheck as org_hl7_fhir_validation_cli_model_HtmlInMarkdownCheck } from "./../cli/model/HtmlInMarkdownCheck";
import { QuestionnaireMode as org_hl7_fhir_validation_cli_utils_QuestionnaireMode } from "./../cli/utils/QuestionnaireMode";
import { IValidationPolicyAdvisor as org_hl7_fhir_r5_utils_validation_IValidationPolicyAdvisor, IValidationPolicyAdvisorInterface as org_hl7_fhir_r5_utils_validation_IValidationPolicyAdvisorInterface } from "./../../r5/utils/validation/IValidationPolicyAdvisor";
import { IValidationProfileUsageTracker as org_hl7_fhir_r5_utils_validation_IValidationProfileUsageTracker, IValidationProfileUsageTrackerInterface as org_hl7_fhir_r5_utils_validation_IValidationProfileUsageTrackerInterface } from "./../../r5/utils/validation/IValidationProfileUsageTracker";
import { IValidatorResourceFetcher as org_hl7_fhir_r5_utils_validation_IValidatorResourceFetcher, IValidatorResourceFetcherInterface as org_hl7_fhir_r5_utils_validation_IValidatorResourceFetcherInterface } from "./../../r5/utils/validation/IValidatorResourceFetcher";
import { IdStatus as org_hl7_fhir_r5_utils_validation_constants_IdStatus } from "./../../r5/utils/validation/constants/IdStatus";
import { CheckDisplayOption as org_hl7_fhir_r5_utils_validation_constants_CheckDisplayOption } from "./../../r5/utils/validation/constants/CheckDisplayOption";
import { BestPracticeWarningLevel as org_hl7_fhir_r5_utils_validation_constants_BestPracticeWarningLevel } from "./../../r5/utils/validation/constants/BestPracticeWarningLevel";
import { ValueSet as org_hl7_fhir_r5_model_ValueSet } from "./../../r5/model/ValueSet";
import { FHIRPathEngine as org_hl7_fhir_r5_utils_FHIRPathEngine } from "./../../r5/utils/FHIRPathEngine";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { ElementDefinition$ElementDefinitionConstraintComponent as org_hl7_fhir_r5_model_ElementDefinition$ElementDefinitionConstraintComponent } from "./../../r5/model/ElementDefinition$ElementDefinitionConstraintComponent";
import { IWorkerContext$ValidationResult as org_hl7_fhir_r5_context_IWorkerContext$ValidationResult } from "./../../r5/context/IWorkerContext$ValidationResult";
import { CodeableConcept as org_hl7_fhir_r5_model_CodeableConcept } from "./../../r5/model/CodeableConcept";
import { ValidationOptions as org_hl7_fhir_utilities_validation_ValidationOptions } from "./../../utilities/validation/ValidationOptions";
import { ValidationLevel as org_hl7_fhir_validation_cli_utils_ValidationLevel } from "./../cli/utils/ValidationLevel";
import { ValidationMessage$Source as org_hl7_fhir_utilities_validation_ValidationMessage$Source } from "./../../utilities/validation/ValidationMessage$Source";
import { ValidationMessage$IssueType as org_hl7_fhir_utilities_validation_ValidationMessage$IssueType } from "./../../utilities/validation/ValidationMessage$IssueType";
import { ValidationMessage as org_hl7_fhir_utilities_validation_ValidationMessage } from "./../../utilities/validation/ValidationMessage";
import { XVerExtensionManager$XVerExtensionStatus as org_hl7_fhir_r5_utils_XVerExtensionManager$XVerExtensionStatus } from "./../../r5/utils/XVerExtensionManager$XVerExtensionStatus";
import { Map as java_util_Map } from "./../../../../../java/util/Map";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { XVerExtensionManager as org_hl7_fhir_r5_utils_XVerExtensionManager } from "./../../r5/utils/XVerExtensionManager";
/**
 * This class just defines types, you should import {@link InstanceValidator} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class InstanceValidatorClass extends JavaClass {
    /**
     * Original type: 'java.lang.String'
     */
    static readonly NO_RULE_DATE: string | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validate(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_hl7_fhir_r5_model_Resource | null): Promise<org_hl7_fhir_r5_elementmodel_Element | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validateSync(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_hl7_fhir_r5_model_Resource | null): org_hl7_fhir_r5_elementmodel_Element | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.hl7.fhir.r5.model.Resource'
     * @param var3 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validate(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_hl7_fhir_r5_model_Resource | null, var3: string | null): Promise<org_hl7_fhir_r5_elementmodel_Element | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.hl7.fhir.r5.model.Resource'
     * @param var3 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validateSync(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_hl7_fhir_r5_model_Resource | null, var3: string | null): org_hl7_fhir_r5_elementmodel_Element | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.hl7.fhir.r5.model.Resource'
     * @param var3 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validate(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_hl7_fhir_r5_model_Resource | null, var3: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<org_hl7_fhir_r5_elementmodel_Element | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.hl7.fhir.r5.model.Resource'
     * @param var3 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validateSync(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_hl7_fhir_r5_model_Resource | null, var3: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): org_hl7_fhir_r5_elementmodel_Element | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.w3c.dom.Element'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validate(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_w3c_dom_Element | JavaInterfaceProxy<org_w3c_dom_ElementInterface> | null): Promise<org_hl7_fhir_r5_elementmodel_Element | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.w3c.dom.Element'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validateSync(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_w3c_dom_Element | JavaInterfaceProxy<org_w3c_dom_ElementInterface> | null): org_hl7_fhir_r5_elementmodel_Element | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.w3c.dom.Element'
     * @param var3 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validate(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_w3c_dom_Element | JavaInterfaceProxy<org_w3c_dom_ElementInterface> | null, var3: string | null): Promise<org_hl7_fhir_r5_elementmodel_Element | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.w3c.dom.Element'
     * @param var3 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validateSync(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_w3c_dom_Element | JavaInterfaceProxy<org_w3c_dom_ElementInterface> | null, var3: string | null): org_hl7_fhir_r5_elementmodel_Element | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.w3c.dom.Document'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validate(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_w3c_dom_Document | JavaInterfaceProxy<org_w3c_dom_DocumentInterface> | null): Promise<org_hl7_fhir_r5_elementmodel_Element | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.w3c.dom.Document'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validateSync(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_w3c_dom_Document | JavaInterfaceProxy<org_w3c_dom_DocumentInterface> | null): org_hl7_fhir_r5_elementmodel_Element | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.io.InputStream'
     * @param var3 original type: 'org.hl7.fhir.r5.elementmodel.Manager$FhirFormat'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validate(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_io_InputStream | null, var3: org_hl7_fhir_r5_elementmodel_Manager$FhirFormat | null): Promise<org_hl7_fhir_r5_elementmodel_Element | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.io.InputStream'
     * @param var3 original type: 'org.hl7.fhir.r5.elementmodel.Manager$FhirFormat'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validateSync(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_io_InputStream | null, var3: org_hl7_fhir_r5_elementmodel_Manager$FhirFormat | null): org_hl7_fhir_r5_elementmodel_Element | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.io.InputStream'
     * @param var3 original type: 'org.hl7.fhir.r5.elementmodel.Manager$FhirFormat'
     * @param var4 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validate(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_io_InputStream | null, var3: org_hl7_fhir_r5_elementmodel_Manager$FhirFormat | null, var4: string | null): Promise<org_hl7_fhir_r5_elementmodel_Element | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.io.InputStream'
     * @param var3 original type: 'org.hl7.fhir.r5.elementmodel.Manager$FhirFormat'
     * @param var4 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validateSync(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_io_InputStream | null, var3: org_hl7_fhir_r5_elementmodel_Manager$FhirFormat | null, var4: string | null): org_hl7_fhir_r5_elementmodel_Element | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.io.InputStream'
     * @param var3 original type: 'org.hl7.fhir.r5.elementmodel.Manager$FhirFormat'
     * @param var4 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validate(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_io_InputStream | null, var3: org_hl7_fhir_r5_elementmodel_Manager$FhirFormat | null, var4: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<org_hl7_fhir_r5_elementmodel_Element | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.io.InputStream'
     * @param var3 original type: 'org.hl7.fhir.r5.elementmodel.Manager$FhirFormat'
     * @param var4 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validateSync(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_io_InputStream | null, var3: org_hl7_fhir_r5_elementmodel_Manager$FhirFormat | null, var4: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): org_hl7_fhir_r5_elementmodel_Element | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validate(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_hl7_fhir_utilities_json_model_JsonObject | null): Promise<org_hl7_fhir_r5_elementmodel_Element | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validateSync(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_hl7_fhir_utilities_json_model_JsonObject | null): org_hl7_fhir_r5_elementmodel_Element | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     * @param var3 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validate(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_hl7_fhir_utilities_json_model_JsonObject | null, var3: string | null): Promise<org_hl7_fhir_r5_elementmodel_Element | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     * @param var3 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validateSync(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_hl7_fhir_utilities_json_model_JsonObject | null, var3: string | null): org_hl7_fhir_r5_elementmodel_Element | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     * @param var3 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validate(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_hl7_fhir_utilities_json_model_JsonObject | null, var3: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<org_hl7_fhir_r5_elementmodel_Element | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.hl7.fhir.utilities.json.model.JsonObject'
     * @param var3 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validateSync(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_hl7_fhir_utilities_json_model_JsonObject | null, var3: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): org_hl7_fhir_r5_elementmodel_Element | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @return original return type: 'void'
     */
    validate(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: string | null, var3: org_hl7_fhir_r5_elementmodel_Element | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @return original return type: 'void'
     */
    validateSync(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: string | null, var3: org_hl7_fhir_r5_elementmodel_Element | null): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var4 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    validate(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: string | null, var3: org_hl7_fhir_r5_elementmodel_Element | null, var4: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var4 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    validateSync(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: string | null, var3: org_hl7_fhir_r5_elementmodel_Element | null, var4: string | null): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.w3c.dom.Element'
     * @param var3 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validate(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_w3c_dom_Element | JavaInterfaceProxy<org_w3c_dom_ElementInterface> | null, var3: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<org_hl7_fhir_r5_elementmodel_Element | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.w3c.dom.Element'
     * @param var3 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validateSync(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_w3c_dom_Element | JavaInterfaceProxy<org_w3c_dom_ElementInterface> | null, var3: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): org_hl7_fhir_r5_elementmodel_Element | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var4 original type: 'java.util.List'
     * @return original return type: 'void'
     */
    validate(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: string | null, var3: org_hl7_fhir_r5_elementmodel_Element | null, var4: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var4 original type: 'java.util.List'
     * @return original return type: 'void'
     */
    validateSync(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: string | null, var3: org_hl7_fhir_r5_elementmodel_Element | null, var4: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.w3c.dom.Document'
     * @param var3 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validate(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_w3c_dom_Document | JavaInterfaceProxy<org_w3c_dom_DocumentInterface> | null, var3: string | null): Promise<org_hl7_fhir_r5_elementmodel_Element | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.w3c.dom.Document'
     * @param var3 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validateSync(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_w3c_dom_Document | JavaInterfaceProxy<org_w3c_dom_DocumentInterface> | null, var3: string | null): org_hl7_fhir_r5_elementmodel_Element | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.w3c.dom.Document'
     * @param var3 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validate(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_w3c_dom_Document | JavaInterfaceProxy<org_w3c_dom_DocumentInterface> | null, var3: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<org_hl7_fhir_r5_elementmodel_Element | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.w3c.dom.Document'
     * @param var3 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.elementmodel.Element'
     */
    validateSync(var0: BasicOrJavaType | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_w3c_dom_Document | JavaInterfaceProxy<org_w3c_dom_DocumentInterface> | null, var3: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): org_hl7_fhir_r5_elementmodel_Element | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext'
     */
    getContext(): Promise<org_hl7_fhir_r5_context_IWorkerContext | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext'
     */
    getContextSync(): org_hl7_fhir_r5_context_IWorkerContext | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.ValidatorHostContext'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var3 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @param var4 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var5 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var6 original type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     * @param var7 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    checkInvariants(var0: org_hl7_fhir_validation_instance_utils_ValidatorHostContext | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_hl7_fhir_r5_model_StructureDefinition | null, var3: org_hl7_fhir_r5_model_ElementDefinition | null, var4: org_hl7_fhir_r5_elementmodel_Element | null, var5: org_hl7_fhir_r5_elementmodel_Element | null, var6: org_hl7_fhir_validation_instance_utils_NodeStack | null, var7: java_lang_Boolean | boolean): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.ValidatorHostContext'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var3 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @param var4 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var5 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var6 original type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     * @param var7 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    checkInvariantsSync(var0: org_hl7_fhir_validation_instance_utils_ValidatorHostContext | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_hl7_fhir_r5_model_StructureDefinition | null, var3: org_hl7_fhir_r5_model_ElementDefinition | null, var4: org_hl7_fhir_r5_elementmodel_Element | null, var5: org_hl7_fhir_r5_elementmodel_Element | null, var6: org_hl7_fhir_validation_instance_utils_NodeStack | null, var7: java_lang_Boolean | boolean): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    isPrimitiveType(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    isPrimitiveTypeSync(var0: string | null): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isAllowComments(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isAllowCommentsSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.BaseValidator'
     */
    setForPublication(var0: java_lang_Boolean | boolean): Promise<org_hl7_fhir_validation_BaseValidator | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.BaseValidator'
     */
    setForPublicationSync(var0: java_lang_Boolean | boolean): org_hl7_fhir_validation_BaseValidator | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     */
    setForPublication(var0: java_lang_Boolean | boolean): Promise<org_hl7_fhir_r5_utils_validation_IResourceValidator | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     */
    setForPublicationSync(var0: java_lang_Boolean | boolean): org_hl7_fhir_r5_utils_validation_IResourceValidator | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.instance.InstanceValidator'
     */
    setForPublication(var0: java_lang_Boolean | boolean): Promise<InstanceValidator | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.validation.instance.InstanceValidator'
     */
    setForPublicationSync(var0: java_lang_Boolean | boolean): InstanceValidator | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setAnyExtensionsAllowed(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setAnyExtensionsAllowedSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var1 original type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     * @return original return type: 'java.util.List'
     */
    listChildren(var0: org_hl7_fhir_r5_elementmodel_Element | null, var1: org_hl7_fhir_validation_instance_utils_NodeStack | null): Promise<java_util_List | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var1 original type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     * @return original return type: 'java.util.List'
     */
    listChildrenSync(var0: org_hl7_fhir_r5_elementmodel_Element | null, var1: org_hl7_fhir_validation_instance_utils_NodeStack | null): java_util_List | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Coding'
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     */
    setJurisdiction(var0: org_hl7_fhir_r5_model_Coding | null): Promise<org_hl7_fhir_r5_utils_validation_IResourceValidator | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Coding'
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     */
    setJurisdictionSync(var0: org_hl7_fhir_r5_model_Coding | null): org_hl7_fhir_r5_utils_validation_IResourceValidator | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Coding'
     */
    getJurisdiction(): Promise<org_hl7_fhir_r5_model_Coding | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Coding'
     */
    getJurisdictionSync(): org_hl7_fhir_r5_model_Coding | null;
    /**
     * @return original return type: 'boolean'
     */
    isSuppressLoincSnomedMessages(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isSuppressLoincSnomedMessagesSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.ValidatorHostContext'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var3 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @param var4 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var5 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var6 original type: 'java.lang.String'
     * @param var7 original type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     * @param var8 original type: 'boolean'
     * @param var9 original type: 'boolean'
     * @param var10 original type: 'org.hl7.fhir.validation.instance.utils.ElementInfo'
     * @param var11 original type: 'java.lang.String'
     * @param var12 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @param var13 original type: 'boolean'
     * @param var14 original type: 'org.hl7.fhir.validation.instance.PercentageTracker'
     * @param var15 original type: 'org.hl7.fhir.r5.model.Base$ValidationMode'
     * @return original return type: 'boolean'
     */
    checkChildByDefinition(var0: org_hl7_fhir_validation_instance_utils_ValidatorHostContext | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_hl7_fhir_r5_model_StructureDefinition | null, var3: org_hl7_fhir_r5_model_ElementDefinition | null, var4: org_hl7_fhir_r5_elementmodel_Element | null, var5: org_hl7_fhir_r5_elementmodel_Element | null, var6: string | null, var7: org_hl7_fhir_validation_instance_utils_NodeStack | null, var8: java_lang_Boolean | boolean, var9: java_lang_Boolean | boolean, var10: org_hl7_fhir_validation_instance_utils_ElementInfo | null, var11: string | null, var12: org_hl7_fhir_r5_model_ElementDefinition | null, var13: java_lang_Boolean | boolean, var14: org_hl7_fhir_validation_instance_PercentageTracker | null, var15: org_hl7_fhir_r5_model_Base$ValidationMode | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.ValidatorHostContext'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var3 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @param var4 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var5 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var6 original type: 'java.lang.String'
     * @param var7 original type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     * @param var8 original type: 'boolean'
     * @param var9 original type: 'boolean'
     * @param var10 original type: 'org.hl7.fhir.validation.instance.utils.ElementInfo'
     * @param var11 original type: 'java.lang.String'
     * @param var12 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @param var13 original type: 'boolean'
     * @param var14 original type: 'org.hl7.fhir.validation.instance.PercentageTracker'
     * @param var15 original type: 'org.hl7.fhir.r5.model.Base$ValidationMode'
     * @return original return type: 'boolean'
     */
    checkChildByDefinitionSync(var0: org_hl7_fhir_validation_instance_utils_ValidatorHostContext | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_hl7_fhir_r5_model_StructureDefinition | null, var3: org_hl7_fhir_r5_model_ElementDefinition | null, var4: org_hl7_fhir_r5_elementmodel_Element | null, var5: org_hl7_fhir_r5_elementmodel_Element | null, var6: string | null, var7: org_hl7_fhir_validation_instance_utils_NodeStack | null, var8: java_lang_Boolean | boolean, var9: java_lang_Boolean | boolean, var10: org_hl7_fhir_validation_instance_utils_ElementInfo | null, var11: string | null, var12: org_hl7_fhir_r5_model_ElementDefinition | null, var13: java_lang_Boolean | boolean, var14: org_hl7_fhir_validation_instance_PercentageTracker | null, var15: org_hl7_fhir_r5_model_Base$ValidationMode | null): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.ValidatorHostContext'
     * @param var1 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var4 original type: 'org.hl7.fhir.r5.model.ExpressionNode'
     * @return original return type: 'boolean'
     */
    evaluateSlicingExpression(var0: org_hl7_fhir_validation_instance_utils_ValidatorHostContext | null, var1: org_hl7_fhir_r5_elementmodel_Element | null, var2: string | null, var3: org_hl7_fhir_r5_model_StructureDefinition | null, var4: org_hl7_fhir_r5_model_ExpressionNode | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.ValidatorHostContext'
     * @param var1 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var4 original type: 'org.hl7.fhir.r5.model.ExpressionNode'
     * @return original return type: 'boolean'
     */
    evaluateSlicingExpressionSync(var0: org_hl7_fhir_validation_instance_utils_ValidatorHostContext | null, var1: org_hl7_fhir_r5_elementmodel_Element | null, var2: string | null, var3: org_hl7_fhir_r5_model_StructureDefinition | null, var4: org_hl7_fhir_r5_model_ExpressionNode | null): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.ValidatorHostContext'
     * @param var1 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.conformance.profile.ProfileUtilities$SourcedChildDefinitions'
     */
    getActualTypeChildren(var0: org_hl7_fhir_validation_instance_utils_ValidatorHostContext | null, var1: org_hl7_fhir_r5_elementmodel_Element | null, var2: string | null): Promise<org_hl7_fhir_r5_conformance_profile_ProfileUtilities$SourcedChildDefinitions | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.ValidatorHostContext'
     * @param var1 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.conformance.profile.ProfileUtilities$SourcedChildDefinitions'
     */
    getActualTypeChildrenSync(var0: org_hl7_fhir_validation_instance_utils_ValidatorHostContext | null, var1: org_hl7_fhir_r5_elementmodel_Element | null, var2: string | null): org_hl7_fhir_r5_conformance_profile_ProfileUtilities$SourcedChildDefinitions | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setAllowXsiLocation(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setAllowXsiLocationSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setSuppressLoincSnomedMessages(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setSuppressLoincSnomedMessagesSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'org.hl7.fhir.r5.utils.FHIRPathEngine$IEvaluationContext'
     */
    getExternalHostServices(): Promise<org_hl7_fhir_r5_utils_FHIRPathEngine$IEvaluationContext | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.utils.FHIRPathEngine$IEvaluationContext'
     */
    getExternalHostServicesSync(): org_hl7_fhir_r5_utils_FHIRPathEngine$IEvaluationContext | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getValidationLanguage(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getValidationLanguageSync(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    isHintAboutNonMustSupport(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isHintAboutNonMustSupportSync(): boolean;
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
     * @return original return type: 'void'
     */
    setHtmlInMarkdownCheck(var0: org_hl7_fhir_validation_cli_model_HtmlInMarkdownCheck | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.cli.model.HtmlInMarkdownCheck'
     * @return original return type: 'void'
     */
    setHtmlInMarkdownCheckSync(var0: org_hl7_fhir_validation_cli_model_HtmlInMarkdownCheck | null): void;
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
     * @return original return type: 'void'
     */
    setAllowDoubleQuotesInFHIRPath(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setAllowDoubleQuotesInFHIRPathSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'java.util.List'
     */
    getExtensionDomains(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getExtensionDomainsSync(): java_util_List | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setHintAboutNonMustSupport(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setHintAboutNonMustSupportSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'boolean'
     */
    isAnyExtensionsAllowed(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isAnyExtensionsAllowedSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.cli.utils.QuestionnaireMode'
     * @return original return type: 'void'
     */
    setQuestionnaireMode(var0: org_hl7_fhir_validation_cli_utils_QuestionnaireMode | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.cli.utils.QuestionnaireMode'
     * @return original return type: 'void'
     */
    setQuestionnaireModeSync(var0: org_hl7_fhir_validation_cli_utils_QuestionnaireMode | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setValidationLanguage(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setValidationLanguageSync(var0: string | null): void;
    /**
     * @return original return type: 'java.util.List'
     */
    getImplementationGuides(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getImplementationGuidesSync(): java_util_List | null;
    /**
     * @return original return type: 'org.hl7.fhir.validation.cli.utils.QuestionnaireMode'
     */
    getQuestionnaireMode(): Promise<org_hl7_fhir_validation_cli_utils_QuestionnaireMode | null>;
    /**
     * @return original return type: 'org.hl7.fhir.validation.cli.utils.QuestionnaireMode'
     */
    getQuestionnaireModeSync(): org_hl7_fhir_validation_cli_utils_QuestionnaireMode | null;
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
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.IValidationPolicyAdvisor'
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     */
    setPolicyAdvisor(var0: org_hl7_fhir_r5_utils_validation_IValidationPolicyAdvisor | JavaInterfaceProxy<org_hl7_fhir_r5_utils_validation_IValidationPolicyAdvisorInterface> | null): Promise<org_hl7_fhir_r5_utils_validation_IResourceValidator | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.IValidationPolicyAdvisor'
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     */
    setPolicyAdvisorSync(var0: org_hl7_fhir_r5_utils_validation_IValidationPolicyAdvisor | JavaInterfaceProxy<org_hl7_fhir_r5_utils_validation_IValidationPolicyAdvisorInterface> | null): org_hl7_fhir_r5_utils_validation_IResourceValidator | null;
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
     * @return original return type: 'void'
     */
    setCrumbTrails(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setCrumbTrailsSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.IValidationProfileUsageTracker'
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     */
    setTracker(var0: org_hl7_fhir_r5_utils_validation_IValidationProfileUsageTracker | JavaInterfaceProxy<org_hl7_fhir_r5_utils_validation_IValidationProfileUsageTrackerInterface> | null): Promise<org_hl7_fhir_r5_utils_validation_IResourceValidator | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.IValidationProfileUsageTracker'
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     */
    setTrackerSync(var0: org_hl7_fhir_r5_utils_validation_IValidationProfileUsageTracker | JavaInterfaceProxy<org_hl7_fhir_r5_utils_validation_IValidationProfileUsageTrackerInterface> | null): org_hl7_fhir_r5_utils_validation_IResourceValidator | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IValidationProfileUsageTracker'
     */
    getTracker(): Promise<org_hl7_fhir_r5_utils_validation_IValidationProfileUsageTracker | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IValidationProfileUsageTracker'
     */
    getTrackerSync(): org_hl7_fhir_r5_utils_validation_IValidationProfileUsageTracker | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IValidatorResourceFetcher'
     */
    getFetcher(): Promise<org_hl7_fhir_r5_utils_validation_IValidatorResourceFetcher | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IValidatorResourceFetcher'
     */
    getFetcherSync(): org_hl7_fhir_r5_utils_validation_IValidatorResourceFetcher | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.constants.IdStatus'
     */
    getResourceIdRule(): Promise<org_hl7_fhir_r5_utils_validation_constants_IdStatus | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.constants.IdStatus'
     */
    getResourceIdRuleSync(): org_hl7_fhir_r5_utils_validation_constants_IdStatus | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.IValidatorResourceFetcher'
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     */
    setFetcher(var0: org_hl7_fhir_r5_utils_validation_IValidatorResourceFetcher | JavaInterfaceProxy<org_hl7_fhir_r5_utils_validation_IValidatorResourceFetcherInterface> | null): Promise<org_hl7_fhir_r5_utils_validation_IResourceValidator | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.IValidatorResourceFetcher'
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     */
    setFetcherSync(var0: org_hl7_fhir_r5_utils_validation_IValidatorResourceFetcher | JavaInterfaceProxy<org_hl7_fhir_r5_utils_validation_IValidatorResourceFetcherInterface> | null): org_hl7_fhir_r5_utils_validation_IResourceValidator | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.constants.CheckDisplayOption'
     */
    getCheckDisplay(): Promise<org_hl7_fhir_r5_utils_validation_constants_CheckDisplayOption | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.constants.CheckDisplayOption'
     */
    getCheckDisplaySync(): org_hl7_fhir_r5_utils_validation_constants_CheckDisplayOption | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IValidationPolicyAdvisor'
     */
    getPolicyAdvisor(): Promise<org_hl7_fhir_r5_utils_validation_IValidationPolicyAdvisor | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IValidationPolicyAdvisor'
     */
    getPolicyAdvisorSync(): org_hl7_fhir_r5_utils_validation_IValidationPolicyAdvisor | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.constants.CheckDisplayOption'
     * @return original return type: 'void'
     */
    setCheckDisplay(var0: org_hl7_fhir_r5_utils_validation_constants_CheckDisplayOption | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.constants.CheckDisplayOption'
     * @return original return type: 'void'
     */
    setCheckDisplaySync(var0: org_hl7_fhir_r5_utils_validation_constants_CheckDisplayOption | null): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.constants.IdStatus'
     * @return original return type: 'void'
     */
    setResourceIdRule(var0: org_hl7_fhir_r5_utils_validation_constants_IdStatus | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.constants.IdStatus'
     * @return original return type: 'void'
     */
    setResourceIdRuleSync(var0: org_hl7_fhir_r5_utils_validation_constants_IdStatus | null): void;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setDoImplicitFHIRPathStringConversion(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setDoImplicitFHIRPathStringConversionSync(var0: java_lang_Boolean | boolean): void;
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
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     */
    setNoInvariantChecks(var0: java_lang_Boolean | boolean): Promise<org_hl7_fhir_r5_utils_validation_IResourceValidator | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     */
    setNoInvariantChecksSync(var0: java_lang_Boolean | boolean): org_hl7_fhir_r5_utils_validation_IResourceValidator | null;
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
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     */
    setWantInvariantInMessage(var0: java_lang_Boolean | boolean): Promise<org_hl7_fhir_r5_utils_validation_IResourceValidator | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     */
    setWantInvariantInMessageSync(var0: java_lang_Boolean | boolean): org_hl7_fhir_r5_utils_validation_IResourceValidator | null;
    /**
     * @return original return type: 'boolean'
     */
    isNoBindingMsgSuppressed(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isNoBindingMsgSuppressedSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isNoTerminologyChecks(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isNoTerminologyChecksSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     */
    setNoTerminologyChecks(var0: java_lang_Boolean | boolean): Promise<org_hl7_fhir_r5_utils_validation_IResourceValidator | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     */
    setNoTerminologyChecksSync(var0: java_lang_Boolean | boolean): org_hl7_fhir_r5_utils_validation_IResourceValidator | null;
    /**
     * @return original return type: 'boolean'
     */
    isNoExtensibleWarnings(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isNoExtensibleWarningsSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     */
    setNoExtensibleWarnings(var0: java_lang_Boolean | boolean): Promise<org_hl7_fhir_r5_utils_validation_IResourceValidator | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     */
    setNoExtensibleWarningsSync(var0: java_lang_Boolean | boolean): org_hl7_fhir_r5_utils_validation_IResourceValidator | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.constants.BestPracticeWarningLevel'
     */
    getBestPracticeWarningLevel(): Promise<org_hl7_fhir_r5_utils_validation_constants_BestPracticeWarningLevel | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.constants.BestPracticeWarningLevel'
     */
    getBestPracticeWarningLevelSync(): org_hl7_fhir_r5_utils_validation_constants_BestPracticeWarningLevel | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.constants.BestPracticeWarningLevel'
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     */
    setBestPracticeWarningLevel(var0: org_hl7_fhir_r5_utils_validation_constants_BestPracticeWarningLevel | null): Promise<org_hl7_fhir_r5_utils_validation_IResourceValidator | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.utils.validation.constants.BestPracticeWarningLevel'
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     */
    setBestPracticeWarningLevelSync(var0: org_hl7_fhir_r5_utils_validation_constants_BestPracticeWarningLevel | null): org_hl7_fhir_r5_utils_validation_IResourceValidator | null;
    /**
     * @return original return type: 'boolean'
     */
    isNoInvariantChecks(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isNoInvariantChecksSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     */
    setNoBindingMsgSuppressed(var0: java_lang_Boolean | boolean): Promise<org_hl7_fhir_r5_utils_validation_IResourceValidator | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.utils.validation.IResourceValidator'
     */
    setNoBindingMsgSuppressedSync(var0: java_lang_Boolean | boolean): org_hl7_fhir_r5_utils_validation_IResourceValidator | null;
    /**
     * @return original return type: 'boolean'
     */
    isNoUnicodeBiDiControlChars(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isNoUnicodeBiDiControlCharsSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setValidateValueSetCodesOnTxServer(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setValidateValueSetCodesOnTxServerSync(var0: java_lang_Boolean | boolean): void;
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
     * @return original return type: 'void'
     */
    setNoUnicodeBiDiControlChars(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setNoUnicodeBiDiControlCharsSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setWantCheckSnapshotUnchanged(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setWantCheckSnapshotUnchangedSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setErrorForUnknownProfiles(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setErrorForUnknownProfilesSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'boolean'
     */
    isShowMessagesFromReferences(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isShowMessagesFromReferencesSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isValidateValueSetCodesOnTxServer(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isValidateValueSetCodesOnTxServerSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setNoCheckAggregation(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setNoCheckAggregationSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setShowMessagesFromReferences(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setShowMessagesFromReferencesSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'boolean'
     */
    isWantCheckSnapshotUnchanged(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isWantCheckSnapshotUnchangedSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setAssumeValidRestReferences(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setAssumeValidRestReferencesSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'java.util.List'
     */
    getBundleValidationRules(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getBundleValidationRulesSync(): java_util_List | null;
    /**
     * @return original return type: 'boolean'
     */
    isErrorForUnknownProfiles(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isErrorForUnknownProfilesSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isNoCheckAggregation(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isNoCheckAggregationSync(): boolean;
    /**
     * @param var0 original type: 'java.util.List'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var3 original type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     * @param var4 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @param var5 original type: 'org.hl7.fhir.r5.model.Coding'
     * @return original return type: 'void'
     */
    checkBindings(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var1: string | null, var2: org_hl7_fhir_r5_elementmodel_Element | null, var3: org_hl7_fhir_validation_instance_utils_NodeStack | null, var4: org_hl7_fhir_r5_model_ValueSet | null, var5: org_hl7_fhir_r5_model_Coding | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.List'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var3 original type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     * @param var4 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @param var5 original type: 'org.hl7.fhir.r5.model.Coding'
     * @return original return type: 'void'
     */
    checkBindingsSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var1: string | null, var2: org_hl7_fhir_r5_elementmodel_Element | null, var3: org_hl7_fhir_validation_instance_utils_NodeStack | null, var4: org_hl7_fhir_r5_model_ValueSet | null, var5: org_hl7_fhir_r5_model_Coding | null): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.ValidatorHostContext'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @param var5 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var6 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    validateReference(var0: org_hl7_fhir_validation_instance_utils_ValidatorHostContext | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: string | null, var3: string | null, var4: org_hl7_fhir_r5_model_ElementDefinition | null, var5: org_hl7_fhir_r5_elementmodel_Element | null, var6: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.ValidatorHostContext'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @param var5 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var6 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    validateReferenceSync(var0: org_hl7_fhir_validation_instance_utils_ValidatorHostContext | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: string | null, var3: string | null, var4: org_hl7_fhir_r5_model_ElementDefinition | null, var5: org_hl7_fhir_r5_elementmodel_Element | null, var6: string | null): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isAllowXsiLocation(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isAllowXsiLocationSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.ValidatorHostContext'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var3 original type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     * @param var4 original type: 'boolean'
     * @param var5 original type: 'org.hl7.fhir.validation.instance.PercentageTracker'
     * @param var6 original type: 'org.hl7.fhir.r5.model.Base$ValidationMode'
     * @return original return type: 'boolean'
     */
    checkSpecials(var0: org_hl7_fhir_validation_instance_utils_ValidatorHostContext | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_hl7_fhir_r5_elementmodel_Element | null, var3: org_hl7_fhir_validation_instance_utils_NodeStack | null, var4: java_lang_Boolean | boolean, var5: org_hl7_fhir_validation_instance_PercentageTracker | null, var6: org_hl7_fhir_r5_model_Base$ValidationMode | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.ValidatorHostContext'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var3 original type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     * @param var4 original type: 'boolean'
     * @param var5 original type: 'org.hl7.fhir.validation.instance.PercentageTracker'
     * @param var6 original type: 'org.hl7.fhir.r5.model.Base$ValidationMode'
     * @return original return type: 'boolean'
     */
    checkSpecialsSync(var0: org_hl7_fhir_validation_instance_utils_ValidatorHostContext | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_hl7_fhir_r5_elementmodel_Element | null, var3: org_hl7_fhir_validation_instance_utils_NodeStack | null, var4: java_lang_Boolean | boolean, var5: org_hl7_fhir_validation_instance_PercentageTracker | null, var6: org_hl7_fhir_r5_model_Base$ValidationMode | null): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.ValidatorHostContext'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var3 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var4 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var5 original type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     * @param var6 original type: 'boolean'
     * @param var7 original type: 'org.hl7.fhir.validation.instance.PercentageTracker'
     * @param var8 original type: 'org.hl7.fhir.r5.model.Base$ValidationMode'
     * @return original return type: 'boolean'
     */
    startInner(var0: org_hl7_fhir_validation_instance_utils_ValidatorHostContext | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_hl7_fhir_r5_elementmodel_Element | null, var3: org_hl7_fhir_r5_elementmodel_Element | null, var4: org_hl7_fhir_r5_model_StructureDefinition | null, var5: org_hl7_fhir_validation_instance_utils_NodeStack | null, var6: java_lang_Boolean | boolean, var7: org_hl7_fhir_validation_instance_PercentageTracker | null, var8: org_hl7_fhir_r5_model_Base$ValidationMode | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.ValidatorHostContext'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var3 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var4 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var5 original type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     * @param var6 original type: 'boolean'
     * @param var7 original type: 'org.hl7.fhir.validation.instance.PercentageTracker'
     * @param var8 original type: 'org.hl7.fhir.r5.model.Base$ValidationMode'
     * @return original return type: 'boolean'
     */
    startInnerSync(var0: org_hl7_fhir_validation_instance_utils_ValidatorHostContext | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_hl7_fhir_r5_elementmodel_Element | null, var3: org_hl7_fhir_r5_elementmodel_Element | null, var4: org_hl7_fhir_r5_model_StructureDefinition | null, var5: org_hl7_fhir_validation_instance_utils_NodeStack | null, var6: java_lang_Boolean | boolean, var7: org_hl7_fhir_validation_instance_PercentageTracker | null, var8: org_hl7_fhir_r5_model_Base$ValidationMode | null): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setDisplayWarnings(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setDisplayWarningsSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'boolean'
     */
    isDisplayWarnings(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isDisplayWarningsSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setSecurityChecks(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setSecurityChecksSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'boolean'
     */
    isSecurityChecks(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isSecurityChecksSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.utils.FHIRPathEngine'
     */
    getFHIRPathEngine(): Promise<org_hl7_fhir_r5_utils_FHIRPathEngine | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.utils.FHIRPathEngine'
     */
    getFHIRPathEngineSync(): org_hl7_fhir_r5_utils_FHIRPathEngine | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    reportTimes(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    reportTimesSync(): string | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setLogProgress(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setLogProgressSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.ValidatorHostContext'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var3 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @param var4 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var5 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var6 original type: 'java.lang.String'
     * @param var7 original type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     * @param var8 original type: 'boolean'
     * @param var9 original type: 'boolean'
     * @param var10 original type: 'org.hl7.fhir.validation.instance.utils.ElementInfo'
     * @param var11 original type: 'java.lang.String'
     * @param var12 original type: 'org.hl7.fhir.validation.instance.PercentageTracker'
     * @param var13 original type: 'org.hl7.fhir.r5.model.Base$ValidationMode'
     * @return original return type: 'boolean'
     */
    checkChild(var0: org_hl7_fhir_validation_instance_utils_ValidatorHostContext | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_hl7_fhir_r5_model_StructureDefinition | null, var3: org_hl7_fhir_r5_model_ElementDefinition | null, var4: org_hl7_fhir_r5_elementmodel_Element | null, var5: org_hl7_fhir_r5_elementmodel_Element | null, var6: string | null, var7: org_hl7_fhir_validation_instance_utils_NodeStack | null, var8: java_lang_Boolean | boolean, var9: java_lang_Boolean | boolean, var10: org_hl7_fhir_validation_instance_utils_ElementInfo | null, var11: string | null, var12: org_hl7_fhir_validation_instance_PercentageTracker | null, var13: org_hl7_fhir_r5_model_Base$ValidationMode | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.ValidatorHostContext'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var3 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @param var4 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var5 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var6 original type: 'java.lang.String'
     * @param var7 original type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     * @param var8 original type: 'boolean'
     * @param var9 original type: 'boolean'
     * @param var10 original type: 'org.hl7.fhir.validation.instance.utils.ElementInfo'
     * @param var11 original type: 'java.lang.String'
     * @param var12 original type: 'org.hl7.fhir.validation.instance.PercentageTracker'
     * @param var13 original type: 'org.hl7.fhir.r5.model.Base$ValidationMode'
     * @return original return type: 'boolean'
     */
    checkChildSync(var0: org_hl7_fhir_validation_instance_utils_ValidatorHostContext | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_hl7_fhir_r5_model_StructureDefinition | null, var3: org_hl7_fhir_r5_model_ElementDefinition | null, var4: org_hl7_fhir_r5_elementmodel_Element | null, var5: org_hl7_fhir_r5_elementmodel_Element | null, var6: string | null, var7: org_hl7_fhir_validation_instance_utils_NodeStack | null, var8: java_lang_Boolean | boolean, var9: java_lang_Boolean | boolean, var10: org_hl7_fhir_validation_instance_utils_ElementInfo | null, var11: string | null, var12: org_hl7_fhir_validation_instance_PercentageTracker | null, var13: org_hl7_fhir_r5_model_Base$ValidationMode | null): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var1 original type: 'org.hl7.fhir.validation.instance.utils.ElementInfo'
     * @return original return type: 'void'
     */
    checkMustSupport(var0: org_hl7_fhir_r5_model_StructureDefinition | null, var1: org_hl7_fhir_validation_instance_utils_ElementInfo | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var1 original type: 'org.hl7.fhir.validation.instance.utils.ElementInfo'
     * @return original return type: 'void'
     */
    checkMustSupportSync(var0: org_hl7_fhir_r5_model_StructureDefinition | null, var1: org_hl7_fhir_validation_instance_utils_ElementInfo | null): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.ValidatorHostContext'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var3 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var4 original type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     * @param var5 original type: 'org.hl7.fhir.r5.conformance.profile.ProfileUtilities$SourcedChildDefinitions'
     * @param var6 original type: 'java.util.List'
     * @return original return type: 'java.util.List'
     */
    assignChildren(var0: org_hl7_fhir_validation_instance_utils_ValidatorHostContext | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_hl7_fhir_r5_model_StructureDefinition | null, var3: org_hl7_fhir_r5_elementmodel_Element | null, var4: org_hl7_fhir_validation_instance_utils_NodeStack | null, var5: org_hl7_fhir_r5_conformance_profile_ProfileUtilities$SourcedChildDefinitions | null, var6: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<java_util_List | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.ValidatorHostContext'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var3 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var4 original type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     * @param var5 original type: 'org.hl7.fhir.r5.conformance.profile.ProfileUtilities$SourcedChildDefinitions'
     * @param var6 original type: 'java.util.List'
     * @return original return type: 'java.util.List'
     */
    assignChildrenSync(var0: org_hl7_fhir_validation_instance_utils_ValidatorHostContext | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: org_hl7_fhir_r5_model_StructureDefinition | null, var3: org_hl7_fhir_r5_elementmodel_Element | null, var4: org_hl7_fhir_validation_instance_utils_NodeStack | null, var5: org_hl7_fhir_r5_conformance_profile_ProfileUtilities$SourcedChildDefinitions | null, var6: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): java_util_List | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @param var1 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var2 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var3 original type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     * @param var4 original type: 'org.hl7.fhir.r5.conformance.profile.ProfileUtilities$SourcedChildDefinitions'
     * @param var5 original type: 'java.util.List'
     * @param var6 original type: 'java.util.List'
     * @return original return type: 'boolean'
     */
    checkCardinalities(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var1: org_hl7_fhir_r5_model_StructureDefinition | null, var2: org_hl7_fhir_r5_elementmodel_Element | null, var3: org_hl7_fhir_validation_instance_utils_NodeStack | null, var4: org_hl7_fhir_r5_conformance_profile_ProfileUtilities$SourcedChildDefinitions | null, var5: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var6: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.List'
     * @param var1 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var2 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var3 original type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     * @param var4 original type: 'org.hl7.fhir.r5.conformance.profile.ProfileUtilities$SourcedChildDefinitions'
     * @param var5 original type: 'java.util.List'
     * @param var6 original type: 'java.util.List'
     * @return original return type: 'boolean'
     */
    checkCardinalitiesSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var1: org_hl7_fhir_r5_model_StructureDefinition | null, var2: org_hl7_fhir_r5_elementmodel_Element | null, var3: org_hl7_fhir_validation_instance_utils_NodeStack | null, var4: org_hl7_fhir_r5_conformance_profile_ProfileUtilities$SourcedChildDefinitions | null, var5: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var6: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): boolean;
    /**
     * @return original return type: 'void'
     */
    checkAllInvariants(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    checkAllInvariantsSync(): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.ValidatorHostContext'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.util.List'
     * @param var3 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var4 original type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     * @param var5 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @param var6 original type: 'boolean'
     * @param var7 original type: 'java.util.List'
     * @param var8 original type: 'int'
     * @param var9 original type: 'int'
     * @param var10 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @param var11 original type: 'boolean'
     * @param var12 original type: 'org.hl7.fhir.validation.instance.utils.ElementInfo'
     * @return original return type: 'boolean'
     */
    matchSlice(var0: org_hl7_fhir_validation_instance_utils_ValidatorHostContext | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var3: org_hl7_fhir_r5_model_StructureDefinition | null, var4: org_hl7_fhir_validation_instance_utils_NodeStack | null, var5: org_hl7_fhir_r5_model_ElementDefinition | null, var6: java_lang_Boolean | boolean, var7: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var8: java_lang_Integer | number, var9: java_lang_Integer | number, var10: org_hl7_fhir_r5_model_ElementDefinition | null, var11: java_lang_Boolean | boolean, var12: org_hl7_fhir_validation_instance_utils_ElementInfo | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.ValidatorHostContext'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.util.List'
     * @param var3 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var4 original type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     * @param var5 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @param var6 original type: 'boolean'
     * @param var7 original type: 'java.util.List'
     * @param var8 original type: 'int'
     * @param var9 original type: 'int'
     * @param var10 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @param var11 original type: 'boolean'
     * @param var12 original type: 'org.hl7.fhir.validation.instance.utils.ElementInfo'
     * @return original return type: 'boolean'
     */
    matchSliceSync(var0: org_hl7_fhir_validation_instance_utils_ValidatorHostContext | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var3: org_hl7_fhir_r5_model_StructureDefinition | null, var4: org_hl7_fhir_validation_instance_utils_NodeStack | null, var5: org_hl7_fhir_r5_model_ElementDefinition | null, var6: java_lang_Boolean | boolean, var7: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var8: java_lang_Integer | number, var9: java_lang_Integer | number, var10: org_hl7_fhir_r5_model_ElementDefinition | null, var11: java_lang_Boolean | boolean, var12: org_hl7_fhir_validation_instance_utils_ElementInfo | null): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.ValidatorHostContext'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var4 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var5 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var6 original type: 'org.hl7.fhir.r5.model.ElementDefinition$ElementDefinitionConstraintComponent'
     * @return original return type: 'boolean'
     */
    checkInvariant(var0: org_hl7_fhir_validation_instance_utils_ValidatorHostContext | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: string | null, var3: org_hl7_fhir_r5_model_StructureDefinition | null, var4: org_hl7_fhir_r5_elementmodel_Element | null, var5: org_hl7_fhir_r5_elementmodel_Element | null, var6: org_hl7_fhir_r5_model_ElementDefinition$ElementDefinitionConstraintComponent | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.ValidatorHostContext'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var4 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var5 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var6 original type: 'org.hl7.fhir.r5.model.ElementDefinition$ElementDefinitionConstraintComponent'
     * @return original return type: 'boolean'
     */
    checkInvariantSync(var0: org_hl7_fhir_validation_instance_utils_ValidatorHostContext | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: string | null, var3: org_hl7_fhir_r5_model_StructureDefinition | null, var4: org_hl7_fhir_r5_elementmodel_Element | null, var5: org_hl7_fhir_r5_elementmodel_Element | null, var6: org_hl7_fhir_r5_model_ElementDefinition$ElementDefinitionConstraintComponent | null): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @return original return type: 'void'
     */
    static setParentsInner(var0: org_hl7_fhir_r5_elementmodel_Element | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @return original return type: 'void'
     */
    static setParentsInnerSync(var0: org_hl7_fhir_r5_elementmodel_Element | null): void;
    /**
     * @return original return type: 'boolean'
     */
    isLogProgress(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isLogProgressSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     * @param var1 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @param var2 original type: 'org.hl7.fhir.r5.model.CodeableConcept'
     * @param var3 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext$ValidationResult'
     */
    checkCodeOnServer(var0: org_hl7_fhir_validation_instance_utils_NodeStack | null, var1: org_hl7_fhir_r5_model_ValueSet | null, var2: org_hl7_fhir_r5_model_CodeableConcept | null, var3: java_lang_Boolean | boolean): Promise<org_hl7_fhir_r5_context_IWorkerContext$ValidationResult | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     * @param var1 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @param var2 original type: 'org.hl7.fhir.r5.model.CodeableConcept'
     * @param var3 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext$ValidationResult'
     */
    checkCodeOnServerSync(var0: org_hl7_fhir_validation_instance_utils_NodeStack | null, var1: org_hl7_fhir_r5_model_ValueSet | null, var2: org_hl7_fhir_r5_model_CodeableConcept | null, var3: java_lang_Boolean | boolean): org_hl7_fhir_r5_context_IWorkerContext$ValidationResult | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     * @param var1 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @param var2 original type: 'org.hl7.fhir.r5.model.Coding'
     * @param var3 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext$ValidationResult'
     */
    checkCodeOnServer(var0: org_hl7_fhir_validation_instance_utils_NodeStack | null, var1: org_hl7_fhir_r5_model_ValueSet | null, var2: org_hl7_fhir_r5_model_Coding | null, var3: java_lang_Boolean | boolean): Promise<org_hl7_fhir_r5_context_IWorkerContext$ValidationResult | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     * @param var1 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @param var2 original type: 'org.hl7.fhir.r5.model.Coding'
     * @param var3 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext$ValidationResult'
     */
    checkCodeOnServerSync(var0: org_hl7_fhir_validation_instance_utils_NodeStack | null, var1: org_hl7_fhir_r5_model_ValueSet | null, var2: org_hl7_fhir_r5_model_Coding | null, var3: java_lang_Boolean | boolean): org_hl7_fhir_r5_context_IWorkerContext$ValidationResult | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     * @param var1 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'org.hl7.fhir.utilities.validation.ValidationOptions'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext$ValidationResult'
     */
    checkCodeOnServer(var0: org_hl7_fhir_validation_instance_utils_NodeStack | null, var1: org_hl7_fhir_r5_model_ValueSet | null, var2: string | null, var3: org_hl7_fhir_utilities_validation_ValidationOptions | null): Promise<org_hl7_fhir_r5_context_IWorkerContext$ValidationResult | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     * @param var1 original type: 'org.hl7.fhir.r5.model.ValueSet'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'org.hl7.fhir.utilities.validation.ValidationOptions'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext$ValidationResult'
     */
    checkCodeOnServerSync(var0: org_hl7_fhir_validation_instance_utils_NodeStack | null, var1: org_hl7_fhir_r5_model_ValueSet | null, var2: string | null, var3: org_hl7_fhir_utilities_validation_ValidationOptions | null): org_hl7_fhir_r5_context_IWorkerContext$ValidationResult | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'java.lang.String'
     * @param var5 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext$ValidationResult'
     */
    checkCodeOnServer(var0: org_hl7_fhir_validation_instance_utils_NodeStack | null, var1: string | null, var2: string | null, var3: string | null, var4: string | null, var5: java_lang_Boolean | boolean): Promise<org_hl7_fhir_r5_context_IWorkerContext$ValidationResult | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.instance.utils.NodeStack'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'java.lang.String'
     * @param var5 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext$ValidationResult'
     */
    checkCodeOnServerSync(var0: org_hl7_fhir_validation_instance_utils_NodeStack | null, var1: string | null, var2: string | null, var3: string | null, var4: string | null, var5: java_lang_Boolean | boolean): org_hl7_fhir_r5_context_IWorkerContext$ValidationResult | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @return original return type: 'void'
     */
    static setParents(var0: org_hl7_fhir_r5_elementmodel_Element | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @return original return type: 'void'
     */
    static setParentsSync(var0: org_hl7_fhir_r5_elementmodel_Element | null): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationOptions'
     * @return original return type: 'void'
     */
    setBaseOptions(var0: org_hl7_fhir_utilities_validation_ValidationOptions | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationOptions'
     * @return original return type: 'void'
     */
    setBaseOptionsSync(var0: org_hl7_fhir_utilities_validation_ValidationOptions | null): void;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationOptions'
     */
    getBaseOptions(): Promise<org_hl7_fhir_utilities_validation_ValidationOptions | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.validation.ValidationOptions'
     */
    getBaseOptionsSync(): org_hl7_fhir_utilities_validation_ValidationOptions | null;
    /**
     * @return original return type: 'boolean'
     */
    isDebug(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isDebugSync(): boolean;
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
     * @return original return type: 'void'
     */
    setLevel(var0: org_hl7_fhir_validation_cli_utils_ValidationLevel | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.validation.cli.utils.ValidationLevel'
     * @return original return type: 'void'
     */
    setLevelSync(var0: org_hl7_fhir_validation_cli_utils_ValidationLevel | null): void;
    /**
     * @param var0 original type: 'java.util.List'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$Source'
     * @param var3 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$IssueType'
     * @param var4 original type: 'java.lang.String'
     * @param var5 original type: 'boolean'
     * @param var6 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    rule(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var1: string | null, var2: org_hl7_fhir_utilities_validation_ValidationMessage$Source | null, var3: org_hl7_fhir_utilities_validation_ValidationMessage$IssueType | null, var4: string | null, var5: java_lang_Boolean | boolean, var6: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.List'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$Source'
     * @param var3 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage$IssueType'
     * @param var4 original type: 'java.lang.String'
     * @param var5 original type: 'boolean'
     * @param var6 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    ruleSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var1: string | null, var2: org_hl7_fhir_utilities_validation_ValidationMessage$Source | null, var3: org_hl7_fhir_utilities_validation_ValidationMessage$IssueType | null, var4: string | null, var5: java_lang_Boolean | boolean, var6: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     * @return original return type: 'boolean'
     */
    checkMsgId(var0: string | null, var1: org_hl7_fhir_utilities_validation_ValidationMessage | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     * @return original return type: 'boolean'
     */
    checkMsgIdSync(var0: string | null, var1: org_hl7_fhir_utilities_validation_ValidationMessage | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    xverDefn(var0: string | null): Promise<org_hl7_fhir_r5_model_StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    xverDefnSync(var0: string | null): org_hl7_fhir_r5_model_StructureDefinition | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.utils.XVerExtensionManager$XVerExtensionStatus'
     */
    xverStatus(var0: string | null): Promise<org_hl7_fhir_r5_utils_XVerExtensionManager$XVerExtensionStatus | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.utils.XVerExtensionManager$XVerExtensionStatus'
     */
    xverStatusSync(var0: string | null): org_hl7_fhir_r5_utils_XVerExtensionManager$XVerExtensionStatus | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    getXverExt(var0: org_hl7_fhir_r5_model_StructureDefinition | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: string | null): Promise<org_hl7_fhir_r5_model_StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    getXverExtSync(var0: org_hl7_fhir_r5_model_StructureDefinition | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: string | null): org_hl7_fhir_r5_model_StructureDefinition | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var3 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    getXverExt(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var1: string | null, var2: org_hl7_fhir_r5_elementmodel_Element | null, var3: string | null): Promise<org_hl7_fhir_r5_model_StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var3 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    getXverExtSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var1: string | null, var2: org_hl7_fhir_r5_elementmodel_Element | null, var3: string | null): org_hl7_fhir_r5_model_StructureDefinition | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    xverVersion(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    xverVersionSync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    xverElementId(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    xverElementIdSync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    isXverUrl(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    isXverUrlSync(var0: string | null): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isAllowExamples(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isAllowExamplesSync(): boolean;
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
     * @return original return type: 'void'
     */
    setDebug(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setDebugSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setAllowExamples(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setAllowExamplesSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'java.util.Map'
     */
    getValidationControl(): Promise<java_util_Map | null>;
    /**
     * @return original return type: 'java.util.Map'
     */
    getValidationControlSync(): java_util_Map | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'java.lang.Class'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    loadContainedResource(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var1: string | null, var2: org_hl7_fhir_r5_elementmodel_Element | null, var3: string | null, var4: java_lang_Class | null): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.elementmodel.Element'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'java.lang.Class'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    loadContainedResourceSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var1: string | null, var2: org_hl7_fhir_r5_elementmodel_Element | null, var3: string | null, var4: java_lang_Class | null): org_hl7_fhir_r5_model_Resource | null;
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
     * @param var0 original type: 'org.hl7.fhir.r5.context.IWorkerContext'
     * @param var1 original type: 'org.hl7.fhir.r5.utils.FHIRPathEngine$IEvaluationContext'
     * @param var2 original type: 'org.hl7.fhir.r5.utils.XVerExtensionManager'
     * @return original return type: 'org.hl7.fhir.validation.instance.InstanceValidator'
     */
    static newInstanceAsync(var0: org_hl7_fhir_r5_context_IWorkerContext | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContextInterface> | null, var1: org_hl7_fhir_r5_utils_FHIRPathEngine$IEvaluationContext | JavaInterfaceProxy<org_hl7_fhir_r5_utils_FHIRPathEngine$IEvaluationContextInterface> | null, var2: org_hl7_fhir_r5_utils_XVerExtensionManager | null): Promise<InstanceValidator>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.context.IWorkerContext'
     * @param var1 original type: 'org.hl7.fhir.r5.utils.FHIRPathEngine$IEvaluationContext'
     * @param var2 original type: 'org.hl7.fhir.r5.utils.XVerExtensionManager'
     */
    constructor(var0: org_hl7_fhir_r5_context_IWorkerContext | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContextInterface> | null, var1: org_hl7_fhir_r5_utils_FHIRPathEngine$IEvaluationContext | JavaInterfaceProxy<org_hl7_fhir_r5_utils_FHIRPathEngine$IEvaluationContextInterface> | null, var2: org_hl7_fhir_r5_utils_XVerExtensionManager | null);
}
declare const InstanceValidator_base: typeof InstanceValidatorClass;
/**
 * Class org.hl7.fhir.validation.instance.InstanceValidator.
 *
 * This actually imports the java class for further use.
 * The class {@link InstanceValidatorClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class InstanceValidator extends InstanceValidator_base {
}
export default InstanceValidator;
//# sourceMappingURL=InstanceValidator.d.ts.map