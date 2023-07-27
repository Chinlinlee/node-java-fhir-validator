import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { QuantityClientParam as ca_uhn_fhir_rest_gclient_QuantityClientParam } from "./../../../../../ca/uhn/fhir/rest/gclient/QuantityClientParam";
import { CompositeClientParam as ca_uhn_fhir_rest_gclient_CompositeClientParam } from "./../../../../../ca/uhn/fhir/rest/gclient/CompositeClientParam";
import { TokenClientParam as ca_uhn_fhir_rest_gclient_TokenClientParam } from "./../../../../../ca/uhn/fhir/rest/gclient/TokenClientParam";
import { DateClientParam as ca_uhn_fhir_rest_gclient_DateClientParam } from "./../../../../../ca/uhn/fhir/rest/gclient/DateClientParam";
import { StringClientParam as ca_uhn_fhir_rest_gclient_StringClientParam } from "./../../../../../ca/uhn/fhir/rest/gclient/StringClientParam";
import { UriClientParam as ca_uhn_fhir_rest_gclient_UriClientParam } from "./../../../../../ca/uhn/fhir/rest/gclient/UriClientParam";
import { ReferenceClientParam as ca_uhn_fhir_rest_gclient_ReferenceClientParam } from "./../../../../../ca/uhn/fhir/rest/gclient/ReferenceClientParam";
import { Include as ca_uhn_fhir_model_api_Include } from "./../../../../../ca/uhn/fhir/model/api/Include";
import { SpecialClientParam as ca_uhn_fhir_rest_gclient_SpecialClientParam } from "./../../../../../ca/uhn/fhir/rest/gclient/SpecialClientParam";
import { Set as java_util_Set, SetInterface as java_util_SetInterface } from "./../../../../../java/util/Set";
import { Base as org_hl7_fhir_r5_model_Base } from "./Base";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../../../java/util/List";
import { CanonicalResource as org_hl7_fhir_r5_model_CanonicalResource } from "./CanonicalResource";
import { DomainResource as org_hl7_fhir_r5_model_DomainResource } from "./DomainResource";
import { Resource as org_hl7_fhir_r5_model_Resource } from "./Resource";
import { StructureDefinition$StructureDefinitionMappingComponent as org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionMappingComponent } from "./StructureDefinition$StructureDefinitionMappingComponent";
import { Date as java_util_Date } from "./../../../../../java/util/Date";
import { ResourceType as org_hl7_fhir_r5_model_ResourceType } from "./ResourceType";
import { Property as org_hl7_fhir_r5_model_Property } from "./Property";
import { DataType as org_hl7_fhir_r5_model_DataType } from "./DataType";
import { Coding as org_hl7_fhir_r5_model_Coding } from "./Coding";
import { StringType as org_hl7_fhir_r5_model_StringType } from "./StringType";
import { MarkdownType as org_hl7_fhir_r5_model_MarkdownType } from "./MarkdownType";
import { CodeableConcept as org_hl7_fhir_r5_model_CodeableConcept } from "./CodeableConcept";
import { UsageContext as org_hl7_fhir_r5_model_UsageContext } from "./UsageContext";
import { BooleanType as org_hl7_fhir_r5_model_BooleanType } from "./BooleanType";
import { Identifier as org_hl7_fhir_r5_model_Identifier } from "./Identifier";
import { CanonicalType as org_hl7_fhir_r5_model_CanonicalType } from "./CanonicalType";
import { Enumeration as org_hl7_fhir_r5_model_Enumeration } from "./Enumeration";
import { Enumerations$PublicationStatus as org_hl7_fhir_r5_model_Enumerations$PublicationStatus } from "./Enumerations$PublicationStatus";
import { UriType as org_hl7_fhir_r5_model_UriType } from "./UriType";
import { DateTimeType as org_hl7_fhir_r5_model_DateTimeType } from "./DateTimeType";
import { ContactDetail as org_hl7_fhir_r5_model_ContactDetail } from "./ContactDetail";
import { Enumerations$FHIRVersion as org_hl7_fhir_r5_model_Enumerations$FHIRVersion } from "./Enumerations$FHIRVersion";
import { StructureDefinition$StructureDefinitionKind as org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionKind } from "./StructureDefinition$StructureDefinitionKind";
import { StructureDefinition$StructureDefinitionContextComponent as org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionContextComponent } from "./StructureDefinition$StructureDefinitionContextComponent";
import { StructureDefinition$StructureDefinitionSnapshotComponent as org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionSnapshotComponent } from "./StructureDefinition$StructureDefinitionSnapshotComponent";
import { StructureDefinition$TypeDerivationRule as org_hl7_fhir_r5_model_StructureDefinition$TypeDerivationRule } from "./StructureDefinition$TypeDerivationRule";
import { StructureDefinition$StructureDefinitionDifferentialComponent as org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionDifferentialComponent } from "./StructureDefinition$StructureDefinitionDifferentialComponent";
import { Narrative as org_hl7_fhir_r5_model_Narrative } from "./Narrative";
import { INarrative as org_hl7_fhir_instance_model_api_INarrative } from "./../../instance/model/api/INarrative";
import { Extension as org_hl7_fhir_r5_model_Extension } from "./Extension";
import { IBaseExtension as org_hl7_fhir_instance_model_api_IBaseExtension } from "./../../instance/model/api/IBaseExtension";
import { StandardsStatus as org_hl7_fhir_utilities_StandardsStatus } from "./../../utilities/StandardsStatus";
import { Meta as org_hl7_fhir_r5_model_Meta } from "./Meta";
import { IBaseMetaType as org_hl7_fhir_instance_model_api_IBaseMetaType } from "./../../instance/model/api/IBaseMetaType";
import { IPrimitiveType as org_hl7_fhir_instance_model_api_IPrimitiveType } from "./../../instance/model/api/IPrimitiveType";
import { CodeType as org_hl7_fhir_r5_model_CodeType } from "./CodeType";
import { PackageInformation as org_hl7_fhir_r5_model_PackageInformation } from "./PackageInformation";
import { IdType as org_hl7_fhir_r5_model_IdType } from "./IdType";
import { BaseResource as org_hl7_fhir_r5_model_BaseResource } from "./BaseResource";
import { IAnyResource as org_hl7_fhir_instance_model_api_IAnyResource } from "./../../instance/model/api/IAnyResource";
import { IBaseResource as org_hl7_fhir_instance_model_api_IBaseResource } from "./../../instance/model/api/IBaseResource";
import { IIdType as org_hl7_fhir_instance_model_api_IIdType, IIdTypeInterface as org_hl7_fhir_instance_model_api_IIdTypeInterface } from "./../../instance/model/api/IIdType";
import { FhirVersionEnum as ca_uhn_fhir_context_FhirVersionEnum } from "./../../../../../ca/uhn/fhir/context/FhirVersionEnum";
import { PrimitiveType as org_hl7_fhir_r5_model_PrimitiveType } from "./PrimitiveType";
import { ValidationMessage as org_hl7_fhir_utilities_validation_ValidationMessage } from "./../../utilities/validation/ValidationMessage";
import { XhtmlNode as org_hl7_fhir_utilities_xhtml_XhtmlNode } from "./../../utilities/xhtml/XhtmlNode";
import { Base$ValidationInfo as org_hl7_fhir_r5_model_Base$ValidationInfo } from "./Base$ValidationInfo";
import { ElementDefinition as org_hl7_fhir_r5_model_ElementDefinition } from "./ElementDefinition";
import { Base$ValidationMode as org_hl7_fhir_r5_model_Base$ValidationMode } from "./Base$ValidationMode";
import { BaseDateTimeType as org_hl7_fhir_r5_model_BaseDateTimeType } from "./BaseDateTimeType";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link StructureDefinition} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class StructureDefinitionClass extends JavaClass {
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_CONTEXT_QUANTITY: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.QuantityClientParam'
     */
    static readonly CONTEXT_QUANTITY: ca_uhn_fhir_rest_gclient_QuantityClientParam | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_CONTEXT_TYPE_QUANTITY: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.CompositeClientParam'
     */
    static readonly CONTEXT_TYPE_QUANTITY: ca_uhn_fhir_rest_gclient_CompositeClientParam | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_CONTEXT_TYPE_VALUE: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.CompositeClientParam'
     */
    static readonly CONTEXT_TYPE_VALUE: ca_uhn_fhir_rest_gclient_CompositeClientParam | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_CONTEXT_TYPE: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.TokenClientParam'
     */
    static readonly CONTEXT_TYPE: ca_uhn_fhir_rest_gclient_TokenClientParam | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_CONTEXT: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.TokenClientParam'
     */
    static readonly CONTEXT: ca_uhn_fhir_rest_gclient_TokenClientParam | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_DATE: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.DateClientParam'
     */
    static readonly DATE: ca_uhn_fhir_rest_gclient_DateClientParam | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_DESCRIPTION: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.StringClientParam'
     */
    static readonly DESCRIPTION: ca_uhn_fhir_rest_gclient_StringClientParam | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_IDENTIFIER: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.TokenClientParam'
     */
    static readonly IDENTIFIER: ca_uhn_fhir_rest_gclient_TokenClientParam | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_JURISDICTION: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.TokenClientParam'
     */
    static readonly JURISDICTION: ca_uhn_fhir_rest_gclient_TokenClientParam | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_NAME: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.StringClientParam'
     */
    static readonly NAME: ca_uhn_fhir_rest_gclient_StringClientParam | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_PUBLISHER: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.StringClientParam'
     */
    static readonly PUBLISHER: ca_uhn_fhir_rest_gclient_StringClientParam | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_STATUS: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.TokenClientParam'
     */
    static readonly STATUS: ca_uhn_fhir_rest_gclient_TokenClientParam | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_TITLE: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.StringClientParam'
     */
    static readonly TITLE: ca_uhn_fhir_rest_gclient_StringClientParam | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_URL: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.UriClientParam'
     */
    static readonly URL: ca_uhn_fhir_rest_gclient_UriClientParam | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_VERSION: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.TokenClientParam'
     */
    static readonly VERSION: ca_uhn_fhir_rest_gclient_TokenClientParam | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_ABSTRACT: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.TokenClientParam'
     */
    static readonly ABSTRACT: ca_uhn_fhir_rest_gclient_TokenClientParam | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_BASE_PATH: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.TokenClientParam'
     */
    static readonly BASE_PATH: ca_uhn_fhir_rest_gclient_TokenClientParam | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_BASE: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.ReferenceClientParam'
     */
    static readonly BASE: ca_uhn_fhir_rest_gclient_ReferenceClientParam | null;
    /**
     * Original type: 'ca.uhn.fhir.model.api.Include'
     */
    static readonly INCLUDE_BASE: ca_uhn_fhir_model_api_Include | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_DERIVATION: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.TokenClientParam'
     */
    static readonly DERIVATION: ca_uhn_fhir_rest_gclient_TokenClientParam | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_EXPERIMENTAL: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.TokenClientParam'
     */
    static readonly EXPERIMENTAL: ca_uhn_fhir_rest_gclient_TokenClientParam | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_EXT_CONTEXT_EXPRESSION: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.TokenClientParam'
     */
    static readonly EXT_CONTEXT_EXPRESSION: ca_uhn_fhir_rest_gclient_TokenClientParam | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_EXT_CONTEXT_TYPE: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.TokenClientParam'
     */
    static readonly EXT_CONTEXT_TYPE: ca_uhn_fhir_rest_gclient_TokenClientParam | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_EXT_CONTEXT: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.CompositeClientParam'
     */
    static readonly EXT_CONTEXT: ca_uhn_fhir_rest_gclient_CompositeClientParam | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_KEYWORD: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.TokenClientParam'
     */
    static readonly KEYWORD: ca_uhn_fhir_rest_gclient_TokenClientParam | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_KIND: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.TokenClientParam'
     */
    static readonly KIND: ca_uhn_fhir_rest_gclient_TokenClientParam | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_PATH: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.TokenClientParam'
     */
    static readonly PATH: ca_uhn_fhir_rest_gclient_TokenClientParam | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_TYPE: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.UriClientParam'
     */
    static readonly TYPE: ca_uhn_fhir_rest_gclient_UriClientParam | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_VALUESET: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.ReferenceClientParam'
     */
    static readonly VALUESET: ca_uhn_fhir_rest_gclient_ReferenceClientParam | null;
    /**
     * Original type: 'ca.uhn.fhir.model.api.Include'
     */
    static readonly INCLUDE_VALUESET: ca_uhn_fhir_model_api_Include | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_TEXT: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.SpecialClientParam'
     */
    static readonly TEXT: ca_uhn_fhir_rest_gclient_SpecialClientParam | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_RES_ID: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.TokenClientParam'
     */
    static readonly RES_ID: ca_uhn_fhir_rest_gclient_TokenClientParam | null;
    /**
     * Original type: 'ca.uhn.fhir.model.api.Include'
     */
    static readonly INCLUDE_ALL: ca_uhn_fhir_model_api_Include | null;
    /**
     * Original type: 'java.util.Set'
     */
    static readonly WILDCARD_ALL_SET: java_util_Set | JavaInterfaceProxy<java_util_SetInterface> | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getNameSync(): string | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.model.Base[]'
     */
    getProperty(var0: java_lang_Integer | number, var1: string | null, var2: java_lang_Boolean | boolean): Promise<(org_hl7_fhir_r5_model_Base | null)[] | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.model.Base[]'
     */
    getPropertySync(var0: java_lang_Integer | number, var1: string | null, var2: java_lang_Boolean | boolean): (org_hl7_fhir_r5_model_Base | null)[] | null;
    /**
     * @return original return type: 'boolean'
     */
    isEmpty(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isEmptySync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTypeName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTypeNameSync(): string | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.model.Base'
     * @return original return type: 'org.hl7.fhir.r5.model.Base'
     */
    setProperty(var0: java_lang_Integer | number, var1: string | null, var2: org_hl7_fhir_r5_model_Base | null): Promise<org_hl7_fhir_r5_model_Base | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.model.Base'
     * @return original return type: 'org.hl7.fhir.r5.model.Base'
     */
    setPropertySync(var0: java_lang_Integer | number, var1: string | null, var2: org_hl7_fhir_r5_model_Base | null): org_hl7_fhir_r5_model_Base | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.r5.model.Base'
     * @return original return type: 'org.hl7.fhir.r5.model.Base'
     */
    setProperty(var0: string | null, var1: org_hl7_fhir_r5_model_Base | null): Promise<org_hl7_fhir_r5_model_Base | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.r5.model.Base'
     * @return original return type: 'org.hl7.fhir.r5.model.Base'
     */
    setPropertySync(var0: string | null, var1: org_hl7_fhir_r5_model_Base | null): org_hl7_fhir_r5_model_Base | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getContext(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getContextSync(): java_util_List | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setName(var0: string | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setNameSync(var0: string | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setName(var0: string | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setNameSync(var0: string | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getType(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTypeSync(): string | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    copy(): Promise<StructureDefinition | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    copySync(): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Base'
     */
    copy(): Promise<org_hl7_fhir_r5_model_Base | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Base'
     */
    copySync(): org_hl7_fhir_r5_model_Base | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    copy(): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    copySync(): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.DomainResource'
     */
    copy(): Promise<org_hl7_fhir_r5_model_DomainResource | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.DomainResource'
     */
    copySync(): org_hl7_fhir_r5_model_DomainResource | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    copy(): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    copySync(): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getVersion(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getVersionSync(): string | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition$StructureDefinitionMappingComponent'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    addMapping(var0: org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionMappingComponent | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition$StructureDefinitionMappingComponent'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    addMappingSync(var0: org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionMappingComponent | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition$StructureDefinitionMappingComponent'
     */
    addMapping(): Promise<org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionMappingComponent | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition$StructureDefinitionMappingComponent'
     */
    addMappingSync(): org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionMappingComponent | null;
    /**
     * @param var0 original type: 'java.util.Date'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setDate(var0: java_util_Date | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.util.Date'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setDateSync(var0: java_util_Date | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @param var0 original type: 'java.util.Date'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setDate(var0: java_util_Date | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.util.Date'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setDateSync(var0: java_util_Date | null): StructureDefinition | null;
    /**
     * @return original return type: 'java.util.Date'
     */
    getDate(): Promise<java_util_Date | null>;
    /**
     * @return original return type: 'java.util.Date'
     */
    getDateSync(): java_util_Date | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getUrl(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getUrlSync(): string | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.ResourceType'
     */
    getResourceType(): Promise<org_hl7_fhir_r5_model_ResourceType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.ResourceType'
     */
    getResourceTypeSync(): org_hl7_fhir_r5_model_ResourceType | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String[]'
     */
    getTypesForProperty(var0: java_lang_Integer | number, var1: string | null): Promise<(string | null)[] | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String[]'
     */
    getTypesForPropertySync(var0: java_lang_Integer | number, var1: string | null): (string | null)[] | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Base'
     */
    makeProperty(var0: java_lang_Integer | number, var1: string | null): Promise<org_hl7_fhir_r5_model_Base | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Base'
     */
    makePropertySync(var0: java_lang_Integer | number, var1: string | null): org_hl7_fhir_r5_model_Base | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Base'
     */
    addChild(var0: string | null): Promise<org_hl7_fhir_r5_model_Base | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Base'
     */
    addChildSync(var0: string | null): org_hl7_fhir_r5_model_Base | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Base'
     * @return original return type: 'boolean'
     */
    equalsDeep(var0: org_hl7_fhir_r5_model_Base | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Base'
     * @return original return type: 'boolean'
     */
    equalsDeepSync(var0: org_hl7_fhir_r5_model_Base | null): boolean;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.model.Property'
     */
    getNamedProperty(var0: java_lang_Integer | number, var1: string | null, var2: java_lang_Boolean | boolean): Promise<org_hl7_fhir_r5_model_Property | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.model.Property'
     */
    getNamedPropertySync(var0: java_lang_Integer | number, var1: string | null, var2: java_lang_Boolean | boolean): org_hl7_fhir_r5_model_Property | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Property'
     */
    getNamedProperty(var0: string | null): Promise<org_hl7_fhir_r5_model_Property | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Property'
     */
    getNamedPropertySync(var0: string | null): org_hl7_fhir_r5_model_Property | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Base'
     * @return original return type: 'boolean'
     */
    equalsShallow(var0: org_hl7_fhir_r5_model_Base | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Base'
     * @return original return type: 'boolean'
     */
    equalsShallowSync(var0: org_hl7_fhir_r5_model_Base | null): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasVersion(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasVersionSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setUrl(var0: string | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setUrlSync(var0: string | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setUrl(var0: string | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setUrlSync(var0: string | null): StructureDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasTypeSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'boolean'
     */
    hasType(var0: (string | null)[] | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String[]'
     * @return original return type: 'boolean'
     */
    hasTypeSync(var0: (string | null)[] | null): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    fhirType(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    fhirTypeSync(): string | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @return original return type: 'void'
     */
    copyValues(var0: StructureDefinitionClass | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @return original return type: 'void'
     */
    copyValuesSync(var0: StructureDefinitionClass | null): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.CanonicalResource'
     * @return original return type: 'void'
     */
    copyValues(var0: org_hl7_fhir_r5_model_CanonicalResource | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.CanonicalResource'
     * @return original return type: 'void'
     */
    copyValuesSync(var0: org_hl7_fhir_r5_model_CanonicalResource | null): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.DomainResource'
     * @return original return type: 'void'
     */
    copyValues(var0: org_hl7_fhir_r5_model_DomainResource | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.DomainResource'
     * @return original return type: 'void'
     */
    copyValuesSync(var0: org_hl7_fhir_r5_model_DomainResource | null): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'void'
     */
    copyValues(var0: org_hl7_fhir_r5_model_Resource | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'void'
     */
    copyValuesSync(var0: org_hl7_fhir_r5_model_Resource | null): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Base'
     * @return original return type: 'void'
     */
    copyValues(var0: org_hl7_fhir_r5_model_Base | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Base'
     * @return original return type: 'void'
     */
    copyValuesSync(var0: org_hl7_fhir_r5_model_Base | null): void;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.DataType'
     */
    getVersionAlgorithm(): Promise<org_hl7_fhir_r5_model_DataType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.DataType'
     */
    getVersionAlgorithmSync(): org_hl7_fhir_r5_model_DataType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Coding'
     */
    getVersionAlgorithmCoding(): Promise<org_hl7_fhir_r5_model_Coding | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Coding'
     */
    getVersionAlgorithmCodingSync(): org_hl7_fhir_r5_model_Coding | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setPublisherElement(var0: org_hl7_fhir_r5_model_StringType | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setPublisherElementSync(var0: org_hl7_fhir_r5_model_StringType | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setPublisherElement(var0: org_hl7_fhir_r5_model_StringType | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setPublisherElementSync(var0: org_hl7_fhir_r5_model_StringType | null): StructureDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasDescriptionElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasDescriptionElementSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setDescriptionElement(var0: org_hl7_fhir_r5_model_MarkdownType | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setDescriptionElementSync(var0: org_hl7_fhir_r5_model_MarkdownType | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setDescriptionElement(var0: org_hl7_fhir_r5_model_MarkdownType | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setDescriptionElementSync(var0: org_hl7_fhir_r5_model_MarkdownType | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.CodeableConcept'
     */
    getJurisdictionFirstRep(): Promise<org_hl7_fhir_r5_model_CodeableConcept | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.CodeableConcept'
     */
    getJurisdictionFirstRepSync(): org_hl7_fhir_r5_model_CodeableConcept | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.MarkdownType'
     */
    getCopyrightElement(): Promise<org_hl7_fhir_r5_model_MarkdownType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.MarkdownType'
     */
    getCopyrightElementSync(): org_hl7_fhir_r5_model_MarkdownType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasCopyrightElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasCopyrightElementSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setCopyrightElement(var0: org_hl7_fhir_r5_model_MarkdownType | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setCopyrightElementSync(var0: org_hl7_fhir_r5_model_MarkdownType | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setCopyrightElement(var0: org_hl7_fhir_r5_model_MarkdownType | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setCopyrightElementSync(var0: org_hl7_fhir_r5_model_MarkdownType | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @return original return type: 'boolean'
     */
    hasVersionAlgorithmStringType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasVersionAlgorithmStringTypeSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.DataType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setVersionAlgorithm(var0: org_hl7_fhir_r5_model_DataType | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.DataType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setVersionAlgorithmSync(var0: org_hl7_fhir_r5_model_DataType | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.DataType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setVersionAlgorithm(var0: org_hl7_fhir_r5_model_DataType | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.DataType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setVersionAlgorithmSync(var0: org_hl7_fhir_r5_model_DataType | null): StructureDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasVersionAlgorithm(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasVersionAlgorithmSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasExperimentalElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasExperimentalElementSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StringType'
     */
    getPublisherElement(): Promise<org_hl7_fhir_r5_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StringType'
     */
    getPublisherElementSync(): org_hl7_fhir_r5_model_StringType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasPublisherElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasPublisherElementSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.MarkdownType'
     */
    getDescriptionElement(): Promise<org_hl7_fhir_r5_model_MarkdownType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.MarkdownType'
     */
    getDescriptionElementSync(): org_hl7_fhir_r5_model_MarkdownType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.UsageContext'
     */
    getUseContextFirstRep(): Promise<org_hl7_fhir_r5_model_UsageContext | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.UsageContext'
     */
    getUseContextFirstRepSync(): org_hl7_fhir_r5_model_UsageContext | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.BooleanType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setExperimentalElement(var0: org_hl7_fhir_r5_model_BooleanType | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.BooleanType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setExperimentalElementSync(var0: org_hl7_fhir_r5_model_BooleanType | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.BooleanType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setExperimentalElement(var0: org_hl7_fhir_r5_model_BooleanType | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.BooleanType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setExperimentalElementSync(var0: org_hl7_fhir_r5_model_BooleanType | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.BooleanType'
     */
    getExperimentalElement(): Promise<org_hl7_fhir_r5_model_BooleanType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.BooleanType'
     */
    getExperimentalElementSync(): org_hl7_fhir_r5_model_BooleanType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Identifier'
     */
    getIdentifierFirstRep(): Promise<org_hl7_fhir_r5_model_Identifier | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Identifier'
     */
    getIdentifierFirstRepSync(): org_hl7_fhir_r5_model_Identifier | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StringType'
     */
    getVersionAlgorithmStringType(): Promise<org_hl7_fhir_r5_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StringType'
     */
    getVersionAlgorithmStringTypeSync(): org_hl7_fhir_r5_model_StringType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasVersionAlgorithmCoding(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasVersionAlgorithmCodingSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StringType'
     */
    getCopyrightLabelElement(): Promise<org_hl7_fhir_r5_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StringType'
     */
    getCopyrightLabelElementSync(): org_hl7_fhir_r5_model_StringType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.CanonicalType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setBaseDefinitionElement(var0: org_hl7_fhir_r5_model_CanonicalType | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.CanonicalType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setBaseDefinitionElementSync(var0: org_hl7_fhir_r5_model_CanonicalType | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setCopyrightLabelElement(var0: org_hl7_fhir_r5_model_StringType | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setCopyrightLabelElementSync(var0: org_hl7_fhir_r5_model_StringType | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setCopyrightLabelElement(var0: org_hl7_fhir_r5_model_StringType | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setCopyrightLabelElementSync(var0: org_hl7_fhir_r5_model_StringType | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalType'
     */
    getBaseDefinitionElement(): Promise<org_hl7_fhir_r5_model_CanonicalType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalType'
     */
    getBaseDefinitionElementSync(): org_hl7_fhir_r5_model_CanonicalType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasBaseDefinitionElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasBaseDefinitionElementSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Enumeration'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setFhirVersionElement(var0: org_hl7_fhir_r5_model_Enumeration | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Enumeration'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setFhirVersionElementSync(var0: org_hl7_fhir_r5_model_Enumeration | null): StructureDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasFhirVersionElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasFhirVersionElementSync(): boolean;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setContextInvariant(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setContextInvariantSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Enumeration'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setDerivationElement(var0: org_hl7_fhir_r5_model_Enumeration | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Enumeration'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setDerivationElementSync(var0: org_hl7_fhir_r5_model_Enumeration | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StringType'
     */
    addContextInvariantElement(): Promise<org_hl7_fhir_r5_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StringType'
     */
    addContextInvariantElementSync(): org_hl7_fhir_r5_model_StringType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasCopyrightLabelElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasCopyrightLabelElementSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Enumeration'
     */
    getFhirVersionElement(): Promise<org_hl7_fhir_r5_model_Enumeration | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Enumeration'
     */
    getFhirVersionElementSync(): org_hl7_fhir_r5_model_Enumeration | null;
    /**
     * @return original return type: 'boolean'
     */
    hasDerivationElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasDerivationElementSync(): boolean;
    /**
     * @return original return type: 'java.util.List'
     */
    getContextInvariant(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getContextInvariantSync(): java_util_List | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setGeneratedSnapshot(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setGeneratedSnapshotSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Enumeration'
     */
    getDerivationElement(): Promise<org_hl7_fhir_r5_model_Enumeration | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Enumeration'
     */
    getDerivationElementSync(): org_hl7_fhir_r5_model_Enumeration | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setGeneratingSnapshot(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    setGeneratingSnapshotSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'boolean'
     */
    isGeneratedSnapshot(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isGeneratedSnapshotSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    addContextInvariant(var0: string | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    addContextInvariantSync(var0: string | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasContextInvariant(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasContextInvariantSync(var0: string | null): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasContextInvariant(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasContextInvariantSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isGeneratingSnapshot(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isGeneratingSnapshotSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setVersion(var0: string | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setVersionSync(var0: string | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setVersion(var0: string | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setVersionSync(var0: string | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StringType'
     */
    getVersionElement(): Promise<org_hl7_fhir_r5_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StringType'
     */
    getVersionElementSync(): org_hl7_fhir_r5_model_StringType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setVersionElement(var0: org_hl7_fhir_r5_model_StringType | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setVersionElementSync(var0: org_hl7_fhir_r5_model_StringType | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setVersionElement(var0: org_hl7_fhir_r5_model_StringType | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setVersionElementSync(var0: org_hl7_fhir_r5_model_StringType | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @return original return type: 'boolean'
     */
    hasVersionElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasVersionElementSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Enumeration'
     */
    getStatusElement(): Promise<org_hl7_fhir_r5_model_Enumeration | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Enumeration'
     */
    getStatusElementSync(): org_hl7_fhir_r5_model_Enumeration | null;
    /**
     * @return original return type: 'boolean'
     */
    hasStatus(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasStatusSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasStatusElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasStatusElementSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Enumeration'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setStatusElement(var0: org_hl7_fhir_r5_model_Enumeration | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Enumeration'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setStatusElementSync(var0: org_hl7_fhir_r5_model_Enumeration | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Enumeration'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setStatusElement(var0: org_hl7_fhir_r5_model_Enumeration | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Enumeration'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setStatusElementSync(var0: org_hl7_fhir_r5_model_Enumeration | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Enumerations$PublicationStatus'
     */
    getStatus(): Promise<org_hl7_fhir_r5_model_Enumerations$PublicationStatus | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Enumerations$PublicationStatus'
     */
    getStatusSync(): org_hl7_fhir_r5_model_Enumerations$PublicationStatus | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Enumerations$PublicationStatus'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setStatus(var0: org_hl7_fhir_r5_model_Enumerations$PublicationStatus | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Enumerations$PublicationStatus'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setStatusSync(var0: org_hl7_fhir_r5_model_Enumerations$PublicationStatus | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Enumerations$PublicationStatus'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setStatus(var0: org_hl7_fhir_r5_model_Enumerations$PublicationStatus | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Enumerations$PublicationStatus'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setStatusSync(var0: org_hl7_fhir_r5_model_Enumerations$PublicationStatus | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.UriType'
     */
    getUrlElement(): Promise<org_hl7_fhir_r5_model_UriType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.UriType'
     */
    getUrlElementSync(): org_hl7_fhir_r5_model_UriType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasUrlElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasUrlElementSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasUrl(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasUrlSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.UriType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setUrlElement(var0: org_hl7_fhir_r5_model_UriType | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.UriType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setUrlElementSync(var0: org_hl7_fhir_r5_model_UriType | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.UriType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setUrlElement(var0: org_hl7_fhir_r5_model_UriType | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.UriType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setUrlElementSync(var0: org_hl7_fhir_r5_model_UriType | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setIdentifier(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setIdentifierSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setIdentifier(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setIdentifierSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): StructureDefinition | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getIdentifier(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getIdentifierSync(): java_util_List | null;
    /**
     * @return original return type: 'boolean'
     */
    hasIdentifier(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasIdentifierSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setType(var0: string | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setTypeSync(var0: string | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Identifier'
     */
    addIdentifier(): Promise<org_hl7_fhir_r5_model_Identifier | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Identifier'
     */
    addIdentifierSync(): org_hl7_fhir_r5_model_Identifier | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Identifier'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    addIdentifier(var0: org_hl7_fhir_r5_model_Identifier | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Identifier'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    addIdentifierSync(var0: org_hl7_fhir_r5_model_Identifier | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Identifier'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    addIdentifier(var0: org_hl7_fhir_r5_model_Identifier | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Identifier'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    addIdentifierSync(var0: org_hl7_fhir_r5_model_Identifier | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.DateTimeType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setDateElement(var0: org_hl7_fhir_r5_model_DateTimeType | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.DateTimeType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setDateElementSync(var0: org_hl7_fhir_r5_model_DateTimeType | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.DateTimeType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setDateElement(var0: org_hl7_fhir_r5_model_DateTimeType | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.DateTimeType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setDateElementSync(var0: org_hl7_fhir_r5_model_DateTimeType | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setTitle(var0: string | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setTitleSync(var0: string | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setTitle(var0: string | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setTitleSync(var0: string | null): StructureDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasTitleElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasTitleElementSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasTitle(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasTitleSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setTitleElement(var0: org_hl7_fhir_r5_model_StringType | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setTitleElementSync(var0: org_hl7_fhir_r5_model_StringType | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setTitleElement(var0: org_hl7_fhir_r5_model_StringType | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setTitleElementSync(var0: org_hl7_fhir_r5_model_StringType | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.DateTimeType'
     */
    getDateElement(): Promise<org_hl7_fhir_r5_model_DateTimeType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.DateTimeType'
     */
    getDateElementSync(): org_hl7_fhir_r5_model_DateTimeType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasPublisher(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasPublisherSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setPublisher(var0: string | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setPublisherSync(var0: string | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setPublisher(var0: string | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setPublisherSync(var0: string | null): StructureDefinition | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPublisher(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPublisherSync(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    getExperimental(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    getExperimentalSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasExperimental(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasExperimentalSync(): boolean;
    /**
     * @return original return type: 'java.util.List'
     */
    getContact(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getContactSync(): java_util_List | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setContact(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setContactSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setContact(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setContactSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @return original return type: 'boolean'
     */
    hasNameElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasNameElementSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setNameElement(var0: org_hl7_fhir_r5_model_StringType | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setNameElementSync(var0: org_hl7_fhir_r5_model_StringType | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setNameElement(var0: org_hl7_fhir_r5_model_StringType | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setNameElementSync(var0: org_hl7_fhir_r5_model_StringType | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StringType'
     */
    getTitleElement(): Promise<org_hl7_fhir_r5_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StringType'
     */
    getTitleElementSync(): org_hl7_fhir_r5_model_StringType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasDateElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasDateElementSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setExperimental(var0: java_lang_Boolean | boolean): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setExperimentalSync(var0: java_lang_Boolean | boolean): StructureDefinition | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setExperimental(var0: java_lang_Boolean | boolean): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setExperimentalSync(var0: java_lang_Boolean | boolean): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @return original return type: 'boolean'
     */
    hasDate(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasDateSync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTitle(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTitleSync(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    hasName(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasNameSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StringType'
     */
    getNameElement(): Promise<org_hl7_fhir_r5_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StringType'
     */
    getNameElementSync(): org_hl7_fhir_r5_model_StringType | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setJurisdiction(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setJurisdictionSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setJurisdiction(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setJurisdictionSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.ContactDetail'
     */
    getContactFirstRep(): Promise<org_hl7_fhir_r5_model_ContactDetail | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.ContactDetail'
     */
    getContactFirstRepSync(): org_hl7_fhir_r5_model_ContactDetail | null;
    /**
     * @return original return type: 'boolean'
     */
    hasUseContext(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasUseContextSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.CodeableConcept'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    addJurisdiction(var0: org_hl7_fhir_r5_model_CodeableConcept | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.CodeableConcept'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    addJurisdictionSync(var0: org_hl7_fhir_r5_model_CodeableConcept | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.CodeableConcept'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    addJurisdiction(var0: org_hl7_fhir_r5_model_CodeableConcept | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.CodeableConcept'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    addJurisdictionSync(var0: org_hl7_fhir_r5_model_CodeableConcept | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.CodeableConcept'
     */
    addJurisdiction(): Promise<org_hl7_fhir_r5_model_CodeableConcept | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.CodeableConcept'
     */
    addJurisdictionSync(): org_hl7_fhir_r5_model_CodeableConcept | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.MarkdownType'
     */
    getPurposeElement(): Promise<org_hl7_fhir_r5_model_MarkdownType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.MarkdownType'
     */
    getPurposeElementSync(): org_hl7_fhir_r5_model_MarkdownType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasPurposeElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasPurposeElementSync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    getDescription(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getDescriptionSync(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    hasPurpose(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasPurposeSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setPurposeElement(var0: org_hl7_fhir_r5_model_MarkdownType | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setPurposeElementSync(var0: org_hl7_fhir_r5_model_MarkdownType | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setPurposeElement(var0: org_hl7_fhir_r5_model_MarkdownType | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setPurposeElementSync(var0: org_hl7_fhir_r5_model_MarkdownType | null): StructureDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasJurisdiction(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasJurisdictionSync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPurpose(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPurposeSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setPurpose(var0: string | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setPurposeSync(var0: string | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setPurpose(var0: string | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setPurposeSync(var0: string | null): StructureDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasCopyright(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasCopyrightSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.ContactDetail'
     */
    addContact(): Promise<org_hl7_fhir_r5_model_ContactDetail | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.ContactDetail'
     */
    addContactSync(): org_hl7_fhir_r5_model_ContactDetail | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.ContactDetail'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    addContact(var0: org_hl7_fhir_r5_model_ContactDetail | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.ContactDetail'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    addContactSync(var0: org_hl7_fhir_r5_model_ContactDetail | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.ContactDetail'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    addContact(var0: org_hl7_fhir_r5_model_ContactDetail | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.ContactDetail'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    addContactSync(var0: org_hl7_fhir_r5_model_ContactDetail | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @return original return type: 'boolean'
     */
    hasDescription(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasDescriptionSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.UsageContext'
     */
    addUseContext(): Promise<org_hl7_fhir_r5_model_UsageContext | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.UsageContext'
     */
    addUseContextSync(): org_hl7_fhir_r5_model_UsageContext | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.UsageContext'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    addUseContext(var0: org_hl7_fhir_r5_model_UsageContext | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.UsageContext'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    addUseContextSync(var0: org_hl7_fhir_r5_model_UsageContext | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.UsageContext'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    addUseContext(var0: org_hl7_fhir_r5_model_UsageContext | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.UsageContext'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    addUseContextSync(var0: org_hl7_fhir_r5_model_UsageContext | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getUseContext(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getUseContextSync(): java_util_List | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setDescription(var0: string | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setDescriptionSync(var0: string | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setDescription(var0: string | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setDescriptionSync(var0: string | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setUseContext(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setUseContextSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setUseContext(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setUseContextSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): StructureDefinition | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getJurisdiction(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getJurisdictionSync(): java_util_List | null;
    /**
     * @return original return type: 'boolean'
     */
    hasContact(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasContactSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Coding'
     */
    getKeywordFirstRep(): Promise<org_hl7_fhir_r5_model_Coding | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Coding'
     */
    getKeywordFirstRepSync(): org_hl7_fhir_r5_model_Coding | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getKeyword(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getKeywordSync(): java_util_List | null;
    /**
     * @return original return type: 'boolean'
     */
    hasKindElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasKindElementSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasKind(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasKindSync(): boolean;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setKeyword(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setKeywordSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Coding'
     */
    addKeyword(): Promise<org_hl7_fhir_r5_model_Coding | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Coding'
     */
    addKeywordSync(): org_hl7_fhir_r5_model_Coding | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Coding'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    addKeyword(var0: org_hl7_fhir_r5_model_Coding | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Coding'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    addKeywordSync(var0: org_hl7_fhir_r5_model_Coding | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    getFhirVersion(): Promise<org_hl7_fhir_r5_model_Enumerations$FHIRVersion | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     */
    getFhirVersionSync(): org_hl7_fhir_r5_model_Enumerations$FHIRVersion | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setCopyrightLabel(var0: string | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setCopyrightLabelSync(var0: string | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setCopyrightLabel(var0: string | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setCopyrightLabelSync(var0: string | null): StructureDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasKeyword(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasKeywordSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasCopyrightLabel(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasCopyrightLabelSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition$StructureDefinitionMappingComponent'
     */
    getMappingFirstRep(): Promise<org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionMappingComponent | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition$StructureDefinitionMappingComponent'
     */
    getMappingFirstRepSync(): org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionMappingComponent | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setFhirVersion(var0: org_hl7_fhir_r5_model_Enumerations$FHIRVersion | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Enumerations$FHIRVersion'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setFhirVersionSync(var0: org_hl7_fhir_r5_model_Enumerations$FHIRVersion | null): StructureDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasMapping(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMappingSync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCopyrightLabel(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCopyrightLabelSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCopyright(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCopyrightSync(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    hasFhirVersion(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasFhirVersionSync(): boolean;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setMapping(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setMappingSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Enumeration'
     */
    getKindElement(): Promise<org_hl7_fhir_r5_model_Enumeration | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Enumeration'
     */
    getKindElementSync(): org_hl7_fhir_r5_model_Enumeration | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setCopyright(var0: string | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setCopyrightSync(var0: string | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setCopyright(var0: string | null): Promise<org_hl7_fhir_r5_model_CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setCopyrightSync(var0: string | null): org_hl7_fhir_r5_model_CanonicalResource | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getMapping(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getMappingSync(): java_util_List | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setContext(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setContextSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition$StructureDefinitionKind'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setKind(var0: org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionKind | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition$StructureDefinitionKind'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setKindSync(var0: org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionKind | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.BooleanType'
     */
    getAbstractElement(): Promise<org_hl7_fhir_r5_model_BooleanType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.BooleanType'
     */
    getAbstractElementSync(): org_hl7_fhir_r5_model_BooleanType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition$StructureDefinitionContextComponent'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    addContext(var0: org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionContextComponent | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition$StructureDefinitionContextComponent'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    addContextSync(var0: org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionContextComponent | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition$StructureDefinitionContextComponent'
     */
    addContext(): Promise<org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionContextComponent | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition$StructureDefinitionContextComponent'
     */
    addContextSync(): org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionContextComponent | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.UriType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setTypeElement(var0: org_hl7_fhir_r5_model_UriType | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.UriType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setTypeElementSync(var0: org_hl7_fhir_r5_model_UriType | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setAbstract(var0: java_lang_Boolean | boolean): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setAbstractSync(var0: java_lang_Boolean | boolean): StructureDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    getAbstract(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    getAbstractSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Enumeration'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setKindElement(var0: org_hl7_fhir_r5_model_Enumeration | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Enumeration'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setKindElementSync(var0: org_hl7_fhir_r5_model_Enumeration | null): StructureDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasContext(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasContextSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.BooleanType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setAbstractElement(var0: org_hl7_fhir_r5_model_BooleanType | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.BooleanType'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setAbstractElementSync(var0: org_hl7_fhir_r5_model_BooleanType | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition$StructureDefinitionContextComponent'
     */
    getContextFirstRep(): Promise<org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionContextComponent | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition$StructureDefinitionContextComponent'
     */
    getContextFirstRepSync(): org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionContextComponent | null;
    /**
     * @return original return type: 'boolean'
     */
    hasDerivation(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasDerivationSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.UriType'
     */
    getTypeElement(): Promise<org_hl7_fhir_r5_model_UriType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.UriType'
     */
    getTypeElementSync(): org_hl7_fhir_r5_model_UriType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition$StructureDefinitionKind'
     */
    getKind(): Promise<org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionKind | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition$StructureDefinitionKind'
     */
    getKindSync(): org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionKind | null;
    /**
     * @return original return type: 'boolean'
     */
    hasTypeElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasTypeElementSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasAbstractElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasAbstractElementSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasAbstract(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasAbstractSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasBaseDefinition(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasBaseDefinitionSync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    getBaseDefinition(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getBaseDefinitionSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setBaseDefinition(var0: string | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setBaseDefinitionSync(var0: string | null): StructureDefinition | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    describeType(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    describeTypeSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTypeTail(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTypeTailSync(): string | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition$StructureDefinitionSnapshotComponent'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setSnapshot(var0: org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionSnapshotComponent | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition$StructureDefinitionSnapshotComponent'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setSnapshotSync(var0: org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionSnapshotComponent | null): StructureDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasDifferential(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasDifferentialSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition$TypeDerivationRule'
     */
    getDerivation(): Promise<org_hl7_fhir_r5_model_StructureDefinition$TypeDerivationRule | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition$TypeDerivationRule'
     */
    getDerivationSync(): org_hl7_fhir_r5_model_StructureDefinition$TypeDerivationRule | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition$StructureDefinitionDifferentialComponent'
     */
    getDifferential(): Promise<org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionDifferentialComponent | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition$StructureDefinitionDifferentialComponent'
     */
    getDifferentialSync(): org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionDifferentialComponent | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition$StructureDefinitionSnapshotComponent'
     */
    getSnapshot(): Promise<org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionSnapshotComponent | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition$StructureDefinitionSnapshotComponent'
     */
    getSnapshotSync(): org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionSnapshotComponent | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition$TypeDerivationRule'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setDerivation(var0: org_hl7_fhir_r5_model_StructureDefinition$TypeDerivationRule | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition$TypeDerivationRule'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setDerivationSync(var0: org_hl7_fhir_r5_model_StructureDefinition$TypeDerivationRule | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition$StructureDefinitionDifferentialComponent'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setDifferential(var0: org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionDifferentialComponent | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition$StructureDefinitionDifferentialComponent'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    setDifferentialSync(var0: org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionDifferentialComponent | null): StructureDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasSnapshot(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasSnapshotSync(): boolean;
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
    getNameMax(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getNameMaxSync(): number;
    /**
     * @return original return type: 'java.lang.String'
     */
    present(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    presentSync(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    supportsCopyright(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    supportsCopyrightSync(): boolean;
    /**
     * @return original return type: 'int'
     */
    getVersionAlgorithmMax(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getVersionAlgorithmMaxSync(): number;
    /**
     * @return original return type: 'int'
     */
    getCopyrightLabelMax(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getCopyrightLabelMaxSync(): number;
    /**
     * @return original return type: 'java.lang.String'
     */
    oid(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    oidSync(): string | null;
    /**
     * @return original return type: 'int'
     */
    getTitleMax(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getTitleMaxSync(): number;
    /**
     * @return original return type: 'int'
     */
    getPublisherMax(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getPublisherMaxSync(): number;
    /**
     * @return original return type: 'int'
     */
    getIdentifierMax(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getIdentifierMaxSync(): number;
    /**
     * @return original return type: 'int'
     */
    getContactMax(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getContactMaxSync(): number;
    /**
     * @return original return type: 'int'
     */
    getDescriptionMax(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getDescriptionMaxSync(): number;
    /**
     * @return original return type: 'int'
     */
    getUseContextMax(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getUseContextMaxSync(): number;
    /**
     * @return original return type: 'int'
     */
    getStatusMax(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getStatusMaxSync(): number;
    /**
     * @return original return type: 'int'
     */
    getJurisdictionMax(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getJurisdictionMaxSync(): number;
    /**
     * @return original return type: 'int'
     */
    getDateMax(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getDateMaxSync(): number;
    /**
     * @return original return type: 'int'
     */
    getExperimentalMax(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getExperimentalMaxSync(): number;
    /**
     * @return original return type: 'int'
     */
    getUrlMax(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getUrlMaxSync(): number;
    /**
     * @return original return type: 'int'
     */
    getVersionMax(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getVersionMaxSync(): number;
    /**
     * @return original return type: 'int'
     */
    getCopyrightMax(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getCopyrightMaxSync(): number;
    /**
     * @return original return type: 'java.lang.String'
     */
    getOid(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getOidSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getVersionedUrl(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getVersionedUrlSync(): string | null;
    /**
     * @return original return type: 'int'
     */
    getPurposeMax(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getPurposeMaxSync(): number;
    /**
     * @return original return type: 'java.lang.String'
     */
    getVUrl(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getVUrlSync(): string | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getExtension(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getExtensionSync(): java_util_List | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Narrative'
     */
    getText(): Promise<org_hl7_fhir_r5_model_Narrative | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Narrative'
     */
    getTextSync(): org_hl7_fhir_r5_model_Narrative | null;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.INarrative'
     */
    getText(): Promise<org_hl7_fhir_instance_model_api_INarrative | null>;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.INarrative'
     */
    getTextSync(): org_hl7_fhir_instance_model_api_INarrative | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Narrative'
     * @return original return type: 'org.hl7.fhir.r5.model.DomainResource'
     */
    setText(var0: org_hl7_fhir_r5_model_Narrative | null): Promise<org_hl7_fhir_r5_model_DomainResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Narrative'
     * @return original return type: 'org.hl7.fhir.r5.model.DomainResource'
     */
    setTextSync(var0: org_hl7_fhir_r5_model_Narrative | null): org_hl7_fhir_r5_model_DomainResource | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.DomainResource'
     */
    setExtension(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<org_hl7_fhir_r5_model_DomainResource | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.DomainResource'
     */
    setExtensionSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): org_hl7_fhir_r5_model_DomainResource | null;
    /**
     * @return original return type: 'boolean'
     */
    hasContained(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasContainedSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasText(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasTextSync(): boolean;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.DomainResource'
     */
    setContained(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<org_hl7_fhir_r5_model_DomainResource | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.DomainResource'
     */
    setContainedSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): org_hl7_fhir_r5_model_DomainResource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'org.hl7.fhir.r5.model.DomainResource'
     */
    addContained(var0: org_hl7_fhir_r5_model_Resource | null): Promise<org_hl7_fhir_r5_model_DomainResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'org.hl7.fhir.r5.model.DomainResource'
     */
    addContainedSync(var0: org_hl7_fhir_r5_model_Resource | null): org_hl7_fhir_r5_model_DomainResource | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getContained(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getContainedSync(): java_util_List | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    getContained(var0: string | null): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    getContainedSync(var0: string | null): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Extension'
     */
    addModifierExtension(): Promise<org_hl7_fhir_r5_model_Extension | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Extension'
     */
    addModifierExtensionSync(): org_hl7_fhir_r5_model_Extension | null;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseExtension'
     */
    addModifierExtension(): Promise<org_hl7_fhir_instance_model_api_IBaseExtension | null>;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseExtension'
     */
    addModifierExtensionSync(): org_hl7_fhir_instance_model_api_IBaseExtension | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Extension'
     * @return original return type: 'org.hl7.fhir.r5.model.DomainResource'
     */
    addModifierExtension(var0: org_hl7_fhir_r5_model_Extension | null): Promise<org_hl7_fhir_r5_model_DomainResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Extension'
     * @return original return type: 'org.hl7.fhir.r5.model.DomainResource'
     */
    addModifierExtensionSync(var0: org_hl7_fhir_r5_model_Extension | null): org_hl7_fhir_r5_model_DomainResource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.List'
     */
    getModifierExtensionsByUrl(var0: string | null): Promise<java_util_List | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.List'
     */
    getModifierExtensionsByUrlSync(var0: string | null): java_util_List | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getModifierExtension(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getModifierExtensionSync(): java_util_List | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.DomainResource'
     */
    setModifierExtension(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<org_hl7_fhir_r5_model_DomainResource | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.DomainResource'
     */
    setModifierExtensionSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): org_hl7_fhir_r5_model_DomainResource | null;
    /**
     * @return original return type: 'boolean'
     */
    hasModifierExtension(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasModifierExtensionSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    checkNoModifiers(var0: string | null, var1: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    checkNoModifiersSync(var0: string | null, var1: string | null): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Extension'
     * @return original return type: 'org.hl7.fhir.r5.model.DomainResource'
     */
    addExtension(var0: org_hl7_fhir_r5_model_Extension | null): Promise<org_hl7_fhir_r5_model_DomainResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Extension'
     * @return original return type: 'org.hl7.fhir.r5.model.DomainResource'
     */
    addExtensionSync(var0: org_hl7_fhir_r5_model_Extension | null): org_hl7_fhir_r5_model_DomainResource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.r5.model.DataType'
     * @return original return type: 'void'
     */
    addExtension(var0: string | null, var1: org_hl7_fhir_r5_model_DataType | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.r5.model.DataType'
     * @return original return type: 'void'
     */
    addExtensionSync(var0: string | null, var1: org_hl7_fhir_r5_model_DataType | null): void;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Extension'
     */
    addExtension(): Promise<org_hl7_fhir_r5_model_Extension | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Extension'
     */
    addExtensionSync(): org_hl7_fhir_r5_model_Extension | null;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseExtension'
     */
    addExtension(): Promise<org_hl7_fhir_instance_model_api_IBaseExtension | null>;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseExtension'
     */
    addExtensionSync(): org_hl7_fhir_instance_model_api_IBaseExtension | null;
    /**
     * @return original return type: 'boolean'
     */
    hasExtension(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasExtensionSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasExtension(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasExtensionSync(var0: string | null): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.StandardsStatus'
     * @return original return type: 'void'
     */
    setStandardsStatus(var0: org_hl7_fhir_utilities_StandardsStatus | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.StandardsStatus'
     * @return original return type: 'void'
     */
    setStandardsStatusSync(var0: org_hl7_fhir_utilities_StandardsStatus | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.List'
     */
    getExtensionsByUrl(var0: string | null): Promise<java_util_List | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.List'
     */
    getExtensionsByUrlSync(var0: string | null): java_util_List | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.StandardsStatus'
     */
    getStandardsStatus(): Promise<org_hl7_fhir_utilities_StandardsStatus | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.StandardsStatus'
     */
    getStandardsStatusSync(): org_hl7_fhir_utilities_StandardsStatus | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Extension'
     */
    getExtensionByUrl(var0: string | null): Promise<org_hl7_fhir_r5_model_Extension | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Extension'
     */
    getExtensionByUrlSync(var0: string | null): org_hl7_fhir_r5_model_Extension | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getId(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getIdSync(): string | null;
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
     * @return original return type: 'java.lang.String'
     */
    getLanguage(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getLanguageSync(var0: string | null): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    setLanguage(var0: string | null): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    setLanguageSync(var0: string | null): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.UriType'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    setImplicitRulesElement(var0: org_hl7_fhir_r5_model_UriType | null): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.UriType'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    setImplicitRulesElementSync(var0: org_hl7_fhir_r5_model_UriType | null): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Meta'
     */
    getMeta(): Promise<org_hl7_fhir_r5_model_Meta | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Meta'
     */
    getMetaSync(): org_hl7_fhir_r5_model_Meta | null;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseMetaType'
     */
    getMeta(): Promise<org_hl7_fhir_instance_model_api_IBaseMetaType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseMetaType'
     */
    getMetaSync(): org_hl7_fhir_instance_model_api_IBaseMetaType | null;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IPrimitiveType'
     */
    getLanguageElement(): Promise<org_hl7_fhir_instance_model_api_IPrimitiveType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IPrimitiveType'
     */
    getLanguageElementSync(): org_hl7_fhir_instance_model_api_IPrimitiveType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.CodeType'
     */
    getLanguageElement(): Promise<org_hl7_fhir_r5_model_CodeType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.CodeType'
     */
    getLanguageElementSync(): org_hl7_fhir_r5_model_CodeType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasMeta(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMetaSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Meta'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    setMeta(var0: org_hl7_fhir_r5_model_Meta | null): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Meta'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    setMetaSync(var0: org_hl7_fhir_r5_model_Meta | null): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @return original return type: 'boolean'
     */
    hasImplicitRules(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasImplicitRulesSync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    getImplicitRules(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getImplicitRulesSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getIdPart(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getIdPartSync(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    hasLanguage(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasLanguageSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasLanguageElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasLanguageElementSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasSourcePackage(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasSourcePackageSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.PackageInformation'
     */
    getSourcePackage(): Promise<org_hl7_fhir_r5_model_PackageInformation | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.PackageInformation'
     */
    getSourcePackageSync(): org_hl7_fhir_r5_model_PackageInformation | null;
    /**
     * @return original return type: 'boolean'
     */
    hasWebPath(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasWebPathSync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    getWebPath(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getWebPathSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setWebPath(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setWebPathSync(var0: string | null): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.CodeType'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    setLanguageElement(var0: org_hl7_fhir_r5_model_CodeType | null): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.CodeType'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    setLanguageElementSync(var0: org_hl7_fhir_r5_model_CodeType | null): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    setImplicitRules(var0: string | null): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    setImplicitRulesSync(var0: string | null): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.PackageInformation'
     * @return original return type: 'void'
     */
    setSourcePackage(var0: org_hl7_fhir_r5_model_PackageInformation | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.PackageInformation'
     * @return original return type: 'void'
     */
    setSourcePackageSync(var0: org_hl7_fhir_r5_model_PackageInformation | null): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.IdType'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    setIdElement(var0: org_hl7_fhir_r5_model_IdType | null): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.IdType'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    setIdElementSync(var0: org_hl7_fhir_r5_model_IdType | null): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.IdType'
     * @return original return type: 'org.hl7.fhir.r5.model.BaseResource'
     */
    setIdElement(var0: org_hl7_fhir_r5_model_IdType | null): Promise<org_hl7_fhir_r5_model_BaseResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.IdType'
     * @return original return type: 'org.hl7.fhir.r5.model.BaseResource'
     */
    setIdElementSync(var0: org_hl7_fhir_r5_model_IdType | null): org_hl7_fhir_r5_model_BaseResource | null;
    /**
     * @return original return type: 'boolean'
     */
    hasId(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasIdSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasIdElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasIdElementSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    setId(var0: string | null): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    setIdSync(var0: string | null): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IAnyResource'
     */
    setId(var0: string | null): Promise<org_hl7_fhir_instance_model_api_IAnyResource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IAnyResource'
     */
    setIdSync(var0: string | null): org_hl7_fhir_instance_model_api_IAnyResource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     */
    setId(var0: string | null): Promise<org_hl7_fhir_instance_model_api_IBaseResource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     */
    setIdSync(var0: string | null): org_hl7_fhir_instance_model_api_IBaseResource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IIdType'
     * @return original return type: 'org.hl7.fhir.r5.model.BaseResource'
     */
    setId(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null): Promise<org_hl7_fhir_r5_model_BaseResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IIdType'
     * @return original return type: 'org.hl7.fhir.r5.model.BaseResource'
     */
    setIdSync(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null): org_hl7_fhir_r5_model_BaseResource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IIdType'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     */
    setId(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null): Promise<org_hl7_fhir_instance_model_api_IBaseResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IIdType'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     */
    setIdSync(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null): org_hl7_fhir_instance_model_api_IBaseResource | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getIdBase(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getIdBaseSync(): string | null;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IIdType'
     */
    getIdElement(): Promise<org_hl7_fhir_instance_model_api_IIdType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IIdType'
     */
    getIdElementSync(): org_hl7_fhir_instance_model_api_IIdType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.IdType'
     */
    getIdElement(): Promise<org_hl7_fhir_r5_model_IdType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.IdType'
     */
    getIdElementSync(): org_hl7_fhir_r5_model_IdType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setIdBase(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setIdBaseSync(var0: string | null): void;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.UriType'
     */
    getImplicitRulesElement(): Promise<org_hl7_fhir_r5_model_UriType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.UriType'
     */
    getImplicitRulesElementSync(): org_hl7_fhir_r5_model_UriType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasImplicitRulesElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasImplicitRulesElementSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isResource(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isResourceSync(): boolean;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirVersionEnum'
     */
    getStructureFhirVersionEnum(): Promise<ca_uhn_fhir_context_FhirVersionEnum | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.context.FhirVersionEnum'
     */
    getStructureFhirVersionEnumSync(): ca_uhn_fhir_context_FhirVersionEnum | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static equals(var0: string | null, var1: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    static equalsSync(var0: string | null, var1: string | null): boolean;
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
     * @return original return type: 'boolean'
     */
    isPrimitive(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isPrimitiveSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.PrimitiveType'
     * @param var1 original type: 'org.hl7.fhir.r5.model.PrimitiveType'
     * @param var2 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    static compareValues(var0: org_hl7_fhir_r5_model_PrimitiveType | null, var1: org_hl7_fhir_r5_model_PrimitiveType | null, var2: java_lang_Boolean | boolean): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.PrimitiveType'
     * @param var1 original type: 'org.hl7.fhir.r5.model.PrimitiveType'
     * @param var2 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    static compareValuesSync(var0: org_hl7_fhir_r5_model_PrimitiveType | null, var1: org_hl7_fhir_r5_model_PrimitiveType | null, var2: java_lang_Boolean | boolean): boolean;
    /**
     * @param var0 original type: 'java.util.List'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    static compareValues(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_lang_Boolean | boolean): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.List'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    static compareValuesSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_lang_Boolean | boolean): boolean;
    /**
     * @return original return type: 'java.util.List'
     */
    children(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    childrenSync(): java_util_List | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Object'
     */
    getUserData(var0: string | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Object'
     */
    getUserDataSync(var0: string | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    setUserData(var0: string | null, var1: BasicOrJavaType | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    setUserDataSync(var0: string | null, var1: BasicOrJavaType | null): void;
    /**
     * @return original return type: 'boolean'
     */
    hasFormatComment(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasFormatCommentSync(): boolean;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'void'
     */
    addFormatCommentsPost(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'void'
     */
    addFormatCommentsPostSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): void;
    /**
     * @return original return type: 'boolean'
     */
    hasFormatCommentPre(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasFormatCommentPreSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasValidationMessages(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValidationMessagesSync(): boolean;
    /**
     * @return original return type: 'java.util.List'
     */
    getValidationMessages(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getValidationMessagesSync(): java_util_List | null;
    /**
     * @return original return type: 'boolean'
     */
    hasFormatCommentPost(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasFormatCommentPostSync(): boolean;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'void'
     */
    addFormatCommentsPre(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'void'
     */
    addFormatCommentsPreSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     * @return original return type: 'org.hl7.fhir.r5.model.Base'
     */
    addValidationMessage(var0: org_hl7_fhir_utilities_validation_ValidationMessage | null): Promise<org_hl7_fhir_r5_model_Base | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.validation.ValidationMessage'
     * @return original return type: 'org.hl7.fhir.r5.model.Base'
     */
    addValidationMessageSync(var0: org_hl7_fhir_utilities_validation_ValidationMessage | null): org_hl7_fhir_r5_model_Base | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPre(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPreSync(): java_util_List | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPost(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPostSync(): java_util_List | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    getXhtml(): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    getXhtmlSync(): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var1 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @param var2 original type: 'org.hl7.fhir.r5.model.Base$ValidationMode'
     * @return original return type: 'org.hl7.fhir.r5.model.Base$ValidationInfo'
     */
    addDefinition(var0: StructureDefinitionClass | null, var1: org_hl7_fhir_r5_model_ElementDefinition | null, var2: org_hl7_fhir_r5_model_Base$ValidationMode | null): Promise<org_hl7_fhir_r5_model_Base$ValidationInfo | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var1 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @param var2 original type: 'org.hl7.fhir.r5.model.Base$ValidationMode'
     * @return original return type: 'org.hl7.fhir.r5.model.Base$ValidationInfo'
     */
    addDefinitionSync(var0: StructureDefinitionClass | null, var1: org_hl7_fhir_r5_model_ElementDefinition | null, var2: org_hl7_fhir_r5_model_Base$ValidationMode | null): org_hl7_fhir_r5_model_Base$ValidationInfo | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValidationInfo(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValidationInfoSync(): boolean;
    /**
     * @return original return type: 'java.util.List'
     */
    getValidationInfo(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getValidationInfoSync(): java_util_List | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    primitiveValue(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    primitiveValueSync(): string | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    static compareDeep(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_lang_Boolean | boolean): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.List'
     * @param var1 original type: 'java.util.List'
     * @param var2 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    static compareDeepSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var1: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null, var2: java_lang_Boolean | boolean): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    static compareDeep(var0: string | null, var1: string | null, var2: java_lang_Boolean | boolean): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    static compareDeepSync(var0: string | null, var1: string | null, var2: java_lang_Boolean | boolean): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Base'
     * @param var1 original type: 'org.hl7.fhir.r5.model.Base'
     * @param var2 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    static compareDeep(var0: org_hl7_fhir_r5_model_Base | null, var1: org_hl7_fhir_r5_model_Base | null, var2: java_lang_Boolean | boolean): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Base'
     * @param var1 original type: 'org.hl7.fhir.r5.model.Base'
     * @param var2 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    static compareDeepSync(var0: org_hl7_fhir_r5_model_Base | null, var1: org_hl7_fhir_r5_model_Base | null, var2: java_lang_Boolean | boolean): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     * @param var1 original type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     * @param var2 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    static compareDeep(var0: org_hl7_fhir_utilities_xhtml_XhtmlNode | null, var1: org_hl7_fhir_utilities_xhtml_XhtmlNode | null, var2: java_lang_Boolean | boolean): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     * @param var1 original type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     * @param var2 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    static compareDeepSync(var0: org_hl7_fhir_utilities_xhtml_XhtmlNode | null, var1: org_hl7_fhir_utilities_xhtml_XhtmlNode | null, var2: java_lang_Boolean | boolean): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Property'
     */
    getChildByName(var0: string | null): Promise<org_hl7_fhir_r5_model_Property | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Property'
     */
    getChildByNameSync(var0: string | null): org_hl7_fhir_r5_model_Property | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getUserString(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getUserStringSync(var0: string | null): string | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.BaseDateTimeType'
     */
    dateTimeValue(): Promise<org_hl7_fhir_r5_model_BaseDateTimeType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.BaseDateTimeType'
     */
    dateTimeValueSync(): org_hl7_fhir_r5_model_BaseDateTimeType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Base'
     * @return original return type: 'void'
     */
    copyUserData(var0: org_hl7_fhir_r5_model_Base | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Base'
     * @return original return type: 'void'
     */
    copyUserDataSync(var0: org_hl7_fhir_r5_model_Base | null): void;
    /**
     * @return original return type: 'boolean'
     */
    hasPrimitiveValue(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasPrimitiveValueSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isBooleanPrimitive(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isBooleanPrimitiveSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isDateTime(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isDateTimeSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.r5.model.Base'
     * @return original return type: 'boolean'
     */
    removeChild(var0: string | null, var1: org_hl7_fhir_r5_model_Base | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.r5.model.Base'
     * @return original return type: 'boolean'
     */
    removeChildSync(var0: string | null, var1: org_hl7_fhir_r5_model_Base | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.List'
     */
    listChildrenByName(var0: string | null): Promise<java_util_List | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.List'
     */
    listChildrenByNameSync(var0: string | null): java_util_List | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.model.Base[]'
     */
    listChildrenByName(var0: string | null, var1: java_lang_Boolean | boolean): Promise<(org_hl7_fhir_r5_model_Base | null)[] | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.model.Base[]'
     */
    listChildrenByNameSync(var0: string | null, var1: java_lang_Boolean | boolean): (org_hl7_fhir_r5_model_Base | null)[] | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    setUserDataINN(var0: string | null, var1: BasicOrJavaType | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'void'
     */
    setUserDataINNSync(var0: string | null, var1: BasicOrJavaType | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'int'
     */
    getUserInt(var0: string | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'int'
     */
    getUserIntSync(var0: string | null): number;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Base'
     * @return original return type: 'void'
     */
    copyFormatComments(var0: org_hl7_fhir_r5_model_Base | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Base'
     * @return original return type: 'void'
     */
    copyFormatCommentsSync(var0: org_hl7_fhir_r5_model_Base | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    clearUserData(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    clearUserDataSync(var0: string | null): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasUserData(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasUserDataSync(var0: string | null): boolean;
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
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    static newInstanceAsync(): Promise<StructureDefinition>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.model.Enumerations$PublicationStatus'
     * @param var3 original type: 'org.hl7.fhir.r5.model.StructureDefinition$StructureDefinitionKind'
     * @param var4 original type: 'boolean'
     * @param var5 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.StructureDefinition'
     */
    static newInstanceAsync(var0: string | null, var1: string | null, var2: org_hl7_fhir_r5_model_Enumerations$PublicationStatus | null, var3: org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionKind | null, var4: java_lang_Boolean | boolean, var5: string | null): Promise<StructureDefinition>;
    constructor();
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.model.Enumerations$PublicationStatus'
     * @param var3 original type: 'org.hl7.fhir.r5.model.StructureDefinition$StructureDefinitionKind'
     * @param var4 original type: 'boolean'
     * @param var5 original type: 'java.lang.String'
     */
    constructor(var0: string | null, var1: string | null, var2: org_hl7_fhir_r5_model_Enumerations$PublicationStatus | null, var3: org_hl7_fhir_r5_model_StructureDefinition$StructureDefinitionKind | null, var4: java_lang_Boolean | boolean, var5: string | null);
}
declare const StructureDefinition_base: typeof StructureDefinitionClass;
/**
 * Class org.hl7.fhir.r5.model.StructureDefinition.
 *
 * This actually imports the java class for further use.
 * The class {@link StructureDefinitionClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class StructureDefinition extends StructureDefinition_base {
}
export default StructureDefinition;
//# sourceMappingURL=StructureDefinition.d.ts.map