import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { SpecialClientParam as ca_uhn_fhir_rest_gclient_SpecialClientParam } from "./../../../../../ca/uhn/fhir/rest/gclient/SpecialClientParam";
import { TokenClientParam as ca_uhn_fhir_rest_gclient_TokenClientParam } from "./../../../../../ca/uhn/fhir/rest/gclient/TokenClientParam";
import { Include as ca_uhn_fhir_model_api_Include } from "./../../../../../ca/uhn/fhir/model/api/Include";
import { Set as java_util_Set, SetInterface as java_util_SetInterface } from "./../../../../../java/util/Set";
import { Base as org_hl7_fhir_r5_model_Base } from "./Base";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
import { Resource as org_hl7_fhir_r5_model_Resource } from "./Resource";
import { DomainResource as org_hl7_fhir_r5_model_DomainResource } from "./DomainResource";
import { Date as java_util_Date } from "./../../../../../java/util/Date";
import { Property as org_hl7_fhir_r5_model_Property } from "./Property";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../../../java/util/List";
import { StringType as org_hl7_fhir_r5_model_StringType } from "./StringType";
import { Identifier as org_hl7_fhir_r5_model_Identifier } from "./Identifier";
import { DateTimeType as org_hl7_fhir_r5_model_DateTimeType } from "./DateTimeType";
import { ContactDetail as org_hl7_fhir_r5_model_ContactDetail } from "./ContactDetail";
import { CodeableConcept as org_hl7_fhir_r5_model_CodeableConcept } from "./CodeableConcept";
import { UsageContext as org_hl7_fhir_r5_model_UsageContext } from "./UsageContext";
import { MarkdownType as org_hl7_fhir_r5_model_MarkdownType } from "./MarkdownType";
import { DataType as org_hl7_fhir_r5_model_DataType } from "./DataType";
import { Coding as org_hl7_fhir_r5_model_Coding } from "./Coding";
import { BooleanType as org_hl7_fhir_r5_model_BooleanType } from "./BooleanType";
import { Enumerations$PublicationStatus as org_hl7_fhir_r5_model_Enumerations$PublicationStatus } from "./Enumerations$PublicationStatus";
import { Enumeration as org_hl7_fhir_r5_model_Enumeration } from "./Enumeration";
import { UriType as org_hl7_fhir_r5_model_UriType } from "./UriType";
import { INarrative as org_hl7_fhir_instance_model_api_INarrative } from "./../../instance/model/api/INarrative";
import { Narrative as org_hl7_fhir_r5_model_Narrative } from "./Narrative";
import { IBaseExtension as org_hl7_fhir_instance_model_api_IBaseExtension } from "./../../instance/model/api/IBaseExtension";
import { Extension as org_hl7_fhir_r5_model_Extension } from "./Extension";
import { StandardsStatus as org_hl7_fhir_utilities_StandardsStatus } from "./../../utilities/StandardsStatus";
import { ResourceType as org_hl7_fhir_r5_model_ResourceType } from "./ResourceType";
import { IdType as org_hl7_fhir_r5_model_IdType } from "./IdType";
import { BaseResource as org_hl7_fhir_r5_model_BaseResource } from "./BaseResource";
import { IAnyResource as org_hl7_fhir_instance_model_api_IAnyResource } from "./../../instance/model/api/IAnyResource";
import { IBaseResource as org_hl7_fhir_instance_model_api_IBaseResource } from "./../../instance/model/api/IBaseResource";
import { IIdType as org_hl7_fhir_instance_model_api_IIdType, IIdTypeInterface as org_hl7_fhir_instance_model_api_IIdTypeInterface } from "./../../instance/model/api/IIdType";
import { CodeType as org_hl7_fhir_r5_model_CodeType } from "./CodeType";
import { PackageInformation as org_hl7_fhir_r5_model_PackageInformation } from "./PackageInformation";
import { Meta as org_hl7_fhir_r5_model_Meta } from "./Meta";
import { IBaseMetaType as org_hl7_fhir_instance_model_api_IBaseMetaType } from "./../../instance/model/api/IBaseMetaType";
import { IPrimitiveType as org_hl7_fhir_instance_model_api_IPrimitiveType } from "./../../instance/model/api/IPrimitiveType";
import { FhirVersionEnum as ca_uhn_fhir_context_FhirVersionEnum } from "./../../../../../ca/uhn/fhir/context/FhirVersionEnum";
import { PrimitiveType as org_hl7_fhir_r5_model_PrimitiveType } from "./PrimitiveType";
import { ValidationMessage as org_hl7_fhir_utilities_validation_ValidationMessage } from "./../../utilities/validation/ValidationMessage";
import { BaseDateTimeType as org_hl7_fhir_r5_model_BaseDateTimeType } from "./BaseDateTimeType";
import { Base$ValidationInfo as org_hl7_fhir_r5_model_Base$ValidationInfo } from "./Base$ValidationInfo";
import { StructureDefinition as org_hl7_fhir_r5_model_StructureDefinition } from "./StructureDefinition";
import { ElementDefinition as org_hl7_fhir_r5_model_ElementDefinition } from "./ElementDefinition";
import { Base$ValidationMode as org_hl7_fhir_r5_model_Base$ValidationMode } from "./Base$ValidationMode";
import { XhtmlNode as org_hl7_fhir_utilities_xhtml_XhtmlNode } from "./../../utilities/xhtml/XhtmlNode";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link CanonicalResource} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class CanonicalResourceClass extends JavaClass {
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
     * @return original return type: 'java.lang.String'
     */
    toString(): Promise<string>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @return original return type: 'boolean'
     */
    isEmpty(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isEmptySync(): boolean;
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
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setName(var0: string | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setNameSync(var0: string | null): CanonicalResource | null;
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
    copy(): Promise<CanonicalResource | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    copySync(): CanonicalResource | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    copy(): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    copySync(): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.DomainResource'
     */
    copy(): Promise<org_hl7_fhir_r5_model_DomainResource | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.DomainResource'
     */
    copySync(): org_hl7_fhir_r5_model_DomainResource | null;
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
    getVersion(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getVersionSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    present(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    presentSync(): string | null;
    /**
     * @param var0 original type: 'java.util.Date'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setDate(var0: java_util_Date | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.util.Date'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setDateSync(var0: java_util_Date | null): CanonicalResource | null;
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
     * @return original return type: 'boolean'
     */
    supportsCopyright(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    supportsCopyrightSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasVersion(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasVersionSync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    fhirType(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    fhirTypeSync(): string | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.CanonicalResource'
     * @return original return type: 'void'
     */
    copyValues(var0: CanonicalResourceClass | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.CanonicalResource'
     * @return original return type: 'void'
     */
    copyValuesSync(var0: CanonicalResourceClass | null): void;
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
     * @return original return type: 'boolean'
     */
    hasTitleElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasTitleElementSync(): boolean;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setIdentifier(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setIdentifierSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): CanonicalResource | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StringType'
     */
    getNameElement(): Promise<org_hl7_fhir_r5_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StringType'
     */
    getNameElementSync(): org_hl7_fhir_r5_model_StringType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasTitle(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasTitleSync(): boolean;
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
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setTitleElement(var0: org_hl7_fhir_r5_model_StringType | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setTitleElementSync(var0: org_hl7_fhir_r5_model_StringType | null): CanonicalResource | null;
    /**
     * @return original return type: 'boolean'
     */
    hasVersionElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasVersionElementSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setVersionElement(var0: org_hl7_fhir_r5_model_StringType | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setVersionElementSync(var0: org_hl7_fhir_r5_model_StringType | null): CanonicalResource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setVersion(var0: string | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setVersionSync(var0: string | null): CanonicalResource | null;
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
    hasIdentifier(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasIdentifierSync(): boolean;
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
    hasNameElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasNameElementSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Identifier'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    addIdentifier(var0: org_hl7_fhir_r5_model_Identifier | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Identifier'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    addIdentifierSync(var0: org_hl7_fhir_r5_model_Identifier | null): CanonicalResource | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Identifier'
     */
    addIdentifier(): Promise<org_hl7_fhir_r5_model_Identifier | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Identifier'
     */
    addIdentifierSync(): org_hl7_fhir_r5_model_Identifier | null;
    /**
     * @return original return type: 'boolean'
     */
    hasName(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasNameSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setNameElement(var0: org_hl7_fhir_r5_model_StringType | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setNameElementSync(var0: org_hl7_fhir_r5_model_StringType | null): CanonicalResource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setTitle(var0: string | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setTitleSync(var0: string | null): CanonicalResource | null;
    /**
     * @return original return type: 'boolean'
     */
    hasPublisher(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasPublisherSync(): boolean;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setContact(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setContactSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): CanonicalResource | null;
    /**
     * @return original return type: 'boolean'
     */
    hasDate(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasDateSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    getExperimental(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    getExperimentalSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.DateTimeType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setDateElement(var0: org_hl7_fhir_r5_model_DateTimeType | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.DateTimeType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setDateElementSync(var0: org_hl7_fhir_r5_model_DateTimeType | null): CanonicalResource | null;
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
    hasDateElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasDateElementSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasExperimental(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasExperimentalSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.DateTimeType'
     */
    getDateElement(): Promise<org_hl7_fhir_r5_model_DateTimeType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.DateTimeType'
     */
    getDateElementSync(): org_hl7_fhir_r5_model_DateTimeType | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setExperimental(var0: java_lang_Boolean | boolean): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setExperimentalSync(var0: java_lang_Boolean | boolean): CanonicalResource | null;
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
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    addContact(var0: org_hl7_fhir_r5_model_ContactDetail | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.ContactDetail'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    addContactSync(var0: org_hl7_fhir_r5_model_ContactDetail | null): CanonicalResource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setPublisher(var0: string | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setPublisherSync(var0: string | null): CanonicalResource | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.ContactDetail'
     */
    getContactFirstRep(): Promise<org_hl7_fhir_r5_model_ContactDetail | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.ContactDetail'
     */
    getContactFirstRepSync(): org_hl7_fhir_r5_model_ContactDetail | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getContact(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getContactSync(): java_util_List | null;
    /**
     * @return original return type: 'boolean'
     */
    hasDescription(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasDescriptionSync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    getDescription(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getDescriptionSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setDescription(var0: string | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setDescriptionSync(var0: string | null): CanonicalResource | null;
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
    hasContact(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasContactSync(): boolean;
    /**
     * @return original return type: 'java.util.List'
     */
    getUseContext(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getUseContextSync(): java_util_List | null;
    /**
     * @return original return type: 'boolean'
     */
    hasCopyright(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasCopyrightSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.CodeableConcept'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    addJurisdiction(var0: org_hl7_fhir_r5_model_CodeableConcept | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.CodeableConcept'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    addJurisdictionSync(var0: org_hl7_fhir_r5_model_CodeableConcept | null): CanonicalResource | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.CodeableConcept'
     */
    addJurisdiction(): Promise<org_hl7_fhir_r5_model_CodeableConcept | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.CodeableConcept'
     */
    addJurisdictionSync(): org_hl7_fhir_r5_model_CodeableConcept | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setCopyright(var0: string | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setCopyrightSync(var0: string | null): CanonicalResource | null;
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
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    addUseContext(var0: org_hl7_fhir_r5_model_UsageContext | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.UsageContext'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    addUseContextSync(var0: org_hl7_fhir_r5_model_UsageContext | null): CanonicalResource | null;
    /**
     * @return original return type: 'boolean'
     */
    hasPurposeElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasPurposeElementSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasPurpose(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasPurposeSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setPurpose(var0: string | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setPurposeSync(var0: string | null): CanonicalResource | null;
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
    hasUseContext(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasUseContextSync(): boolean;
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
    getCopyright(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCopyrightSync(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    hasCopyrightLabel(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasCopyrightLabelSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setCopyrightLabel(var0: string | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setCopyrightLabelSync(var0: string | null): CanonicalResource | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getJurisdiction(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getJurisdictionSync(): java_util_List | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setUseContext(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setUseContextSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): CanonicalResource | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPurpose(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPurposeSync(): string | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setJurisdiction(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setJurisdictionSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): CanonicalResource | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCopyrightLabel(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCopyrightLabelSync(): string | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setPurposeElement(var0: org_hl7_fhir_r5_model_MarkdownType | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setPurposeElementSync(var0: org_hl7_fhir_r5_model_MarkdownType | null): CanonicalResource | null;
    /**
     * @return original return type: 'int'
     */
    getPurposeMax(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getPurposeMaxSync(): number;
    /**
     * @return original return type: 'int'
     */
    getCopyrightMax(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getCopyrightMaxSync(): number;
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
    getDescriptionMax(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getDescriptionMaxSync(): number;
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
    getExperimentalMax(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getExperimentalMaxSync(): number;
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
    getDateMax(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getDateMaxSync(): number;
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
    getUrlMax(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getUrlMaxSync(): number;
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
     * @return original return type: 'java.lang.String'
     */
    getVUrl(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getVUrlSync(): string | null;
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
    getVersionMax(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getVersionMaxSync(): number;
    /**
     * @return original return type: 'int'
     */
    getIdentifierMax(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getIdentifierMaxSync(): number;
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
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setUrl(var0: string | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setUrlSync(var0: string | null): CanonicalResource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setDescriptionElement(var0: org_hl7_fhir_r5_model_MarkdownType | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setDescriptionElementSync(var0: org_hl7_fhir_r5_model_MarkdownType | null): CanonicalResource | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.MarkdownType'
     */
    getCopyrightElement(): Promise<org_hl7_fhir_r5_model_MarkdownType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.MarkdownType'
     */
    getCopyrightElementSync(): org_hl7_fhir_r5_model_MarkdownType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StringType'
     */
    getCopyrightLabelElement(): Promise<org_hl7_fhir_r5_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StringType'
     */
    getCopyrightLabelElementSync(): org_hl7_fhir_r5_model_StringType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasVersionAlgorithm(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasVersionAlgorithmSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.DataType'
     */
    getVersionAlgorithm(): Promise<org_hl7_fhir_r5_model_DataType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.DataType'
     */
    getVersionAlgorithmSync(): org_hl7_fhir_r5_model_DataType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StringType'
     */
    getVersionAlgorithmStringType(): Promise<org_hl7_fhir_r5_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StringType'
     */
    getVersionAlgorithmStringTypeSync(): org_hl7_fhir_r5_model_StringType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Coding'
     */
    getVersionAlgorithmCoding(): Promise<org_hl7_fhir_r5_model_Coding | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Coding'
     */
    getVersionAlgorithmCodingSync(): org_hl7_fhir_r5_model_Coding | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.MarkdownType'
     */
    getDescriptionElement(): Promise<org_hl7_fhir_r5_model_MarkdownType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.MarkdownType'
     */
    getDescriptionElementSync(): org_hl7_fhir_r5_model_MarkdownType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setCopyrightLabelElement(var0: org_hl7_fhir_r5_model_StringType | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setCopyrightLabelElementSync(var0: org_hl7_fhir_r5_model_StringType | null): CanonicalResource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.DataType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setVersionAlgorithm(var0: org_hl7_fhir_r5_model_DataType | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.DataType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setVersionAlgorithmSync(var0: org_hl7_fhir_r5_model_DataType | null): CanonicalResource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setCopyrightElement(var0: org_hl7_fhir_r5_model_MarkdownType | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setCopyrightElementSync(var0: org_hl7_fhir_r5_model_MarkdownType | null): CanonicalResource | null;
    /**
     * @return original return type: 'boolean'
     */
    hasExperimentalElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasExperimentalElementSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.BooleanType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setExperimentalElement(var0: org_hl7_fhir_r5_model_BooleanType | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.BooleanType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setExperimentalElementSync(var0: org_hl7_fhir_r5_model_BooleanType | null): CanonicalResource | null;
    /**
     * @return original return type: 'boolean'
     */
    hasPublisherElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasPublisherElementSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasCopyrightLabelElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasCopyrightLabelElementSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasVersionAlgorithmCoding(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasVersionAlgorithmCodingSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasCopyrightElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasCopyrightElementSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.UsageContext'
     */
    getUseContextFirstRep(): Promise<org_hl7_fhir_r5_model_UsageContext | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.UsageContext'
     */
    getUseContextFirstRepSync(): org_hl7_fhir_r5_model_UsageContext | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setPublisherElement(var0: org_hl7_fhir_r5_model_StringType | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setPublisherElementSync(var0: org_hl7_fhir_r5_model_StringType | null): CanonicalResource | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.CodeableConcept'
     */
    getJurisdictionFirstRep(): Promise<org_hl7_fhir_r5_model_CodeableConcept | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.CodeableConcept'
     */
    getJurisdictionFirstRepSync(): org_hl7_fhir_r5_model_CodeableConcept | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.BooleanType'
     */
    getExperimentalElement(): Promise<org_hl7_fhir_r5_model_BooleanType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.BooleanType'
     */
    getExperimentalElementSync(): org_hl7_fhir_r5_model_BooleanType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasVersionAlgorithmStringType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasVersionAlgorithmStringTypeSync(): boolean;
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
    getPublisherElement(): Promise<org_hl7_fhir_r5_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StringType'
     */
    getPublisherElementSync(): org_hl7_fhir_r5_model_StringType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasDescriptionElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasDescriptionElementSync(): boolean;
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
     * @param var0 original type: 'org.hl7.fhir.r5.model.Enumerations$PublicationStatus'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setStatus(var0: org_hl7_fhir_r5_model_Enumerations$PublicationStatus | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Enumerations$PublicationStatus'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setStatusSync(var0: org_hl7_fhir_r5_model_Enumerations$PublicationStatus | null): CanonicalResource | null;
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
     * @return original return type: 'org.hl7.fhir.r5.model.Enumerations$PublicationStatus'
     */
    getStatus(): Promise<org_hl7_fhir_r5_model_Enumerations$PublicationStatus | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Enumerations$PublicationStatus'
     */
    getStatusSync(): org_hl7_fhir_r5_model_Enumerations$PublicationStatus | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Enumeration'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setStatusElement(var0: org_hl7_fhir_r5_model_Enumeration | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Enumeration'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setStatusElementSync(var0: org_hl7_fhir_r5_model_Enumeration | null): CanonicalResource | null;
    /**
     * @return original return type: 'boolean'
     */
    hasUrl(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasUrlSync(): boolean;
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
     * @param var0 original type: 'org.hl7.fhir.r5.model.UriType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setUrlElement(var0: org_hl7_fhir_r5_model_UriType | null): Promise<CanonicalResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.UriType'
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalResource'
     */
    setUrlElementSync(var0: org_hl7_fhir_r5_model_UriType | null): CanonicalResource | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    oid(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    oidSync(): string | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getExtension(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getExtensionSync(): java_util_List | null;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.INarrative'
     */
    getText(): Promise<org_hl7_fhir_instance_model_api_INarrative | null>;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.INarrative'
     */
    getTextSync(): org_hl7_fhir_instance_model_api_INarrative | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Narrative'
     */
    getText(): Promise<org_hl7_fhir_r5_model_Narrative | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Narrative'
     */
    getTextSync(): org_hl7_fhir_r5_model_Narrative | null;
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
     * @return original return type: 'boolean'
     */
    hasExtension(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasExtensionSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasText(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasTextSync(): boolean;
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
     * @return original return type: 'boolean'
     */
    hasContained(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasContainedSync(): boolean;
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
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseExtension'
     */
    addModifierExtension(): Promise<org_hl7_fhir_instance_model_api_IBaseExtension | null>;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseExtension'
     */
    addModifierExtensionSync(): org_hl7_fhir_instance_model_api_IBaseExtension | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Extension'
     */
    addModifierExtension(): Promise<org_hl7_fhir_r5_model_Extension | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Extension'
     */
    addModifierExtensionSync(): org_hl7_fhir_r5_model_Extension | null;
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
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseExtension'
     */
    addExtension(): Promise<org_hl7_fhir_instance_model_api_IBaseExtension | null>;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseExtension'
     */
    addExtensionSync(): org_hl7_fhir_instance_model_api_IBaseExtension | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Extension'
     */
    addExtension(): Promise<org_hl7_fhir_r5_model_Extension | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Extension'
     */
    addExtensionSync(): org_hl7_fhir_r5_model_Extension | null;
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
     * @return original return type: 'org.hl7.fhir.utilities.StandardsStatus'
     */
    getStandardsStatus(): Promise<org_hl7_fhir_utilities_StandardsStatus | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.StandardsStatus'
     */
    getStandardsStatusSync(): org_hl7_fhir_utilities_StandardsStatus | null;
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
     * @return original return type: 'org.hl7.fhir.r5.model.ResourceType'
     */
    getResourceType(): Promise<org_hl7_fhir_r5_model_ResourceType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.ResourceType'
     */
    getResourceTypeSync(): org_hl7_fhir_r5_model_ResourceType | null;
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
     * @return original return type: 'boolean'
     */
    hasImplicitRulesElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasImplicitRulesElementSync(): boolean;
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
    hasId(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasIdSync(): boolean;
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
    hasIdElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasIdElementSync(): boolean;
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
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     */
    setId(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null): Promise<org_hl7_fhir_instance_model_api_IBaseResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IIdType'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     */
    setIdSync(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null): org_hl7_fhir_instance_model_api_IBaseResource | null;
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
    getWebPath(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getWebPathSync(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    hasMeta(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMetaSync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    getIdPart(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getIdPartSync(): string | null;
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
     * @return original return type: 'boolean'
     */
    hasWebPath(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasWebPathSync(): boolean;
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
    hasSourcePackage(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasSourcePackageSync(): boolean;
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
     * @return original return type: 'boolean'
     */
    hasImplicitRules(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasImplicitRulesSync(): boolean;
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
    hasLanguage(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasLanguageSync(): boolean;
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
     * @return original return type: 'java.lang.String'
     */
    getIdBase(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getIdBaseSync(): string | null;
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
     * @return original return type: 'java.util.List'
     */
    children(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    childrenSync(): java_util_List | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPre(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPreSync(): java_util_List | null;
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
    addFormatCommentsPost(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'void'
     */
    addFormatCommentsPostSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): void;
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
    getValidationMessages(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getValidationMessagesSync(): java_util_List | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValidationMessages(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValidationMessagesSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasFormatCommentPre(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasFormatCommentPreSync(): boolean;
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
     * @return original return type: 'boolean'
     */
    hasFormatComment(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasFormatCommentSync(): boolean;
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
     * @return original return type: 'java.lang.String'
     */
    getUserString(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getUserStringSync(var0: string | null): string | null;
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
     * @return original return type: 'boolean'
     */
    isBooleanPrimitive(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isBooleanPrimitiveSync(): boolean;
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
     * @return original return type: 'boolean'
     */
    hasPrimitiveValue(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasPrimitiveValueSync(): boolean;
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
     * @return original return type: 'org.hl7.fhir.r5.model.BaseDateTimeType'
     */
    dateTimeValue(): Promise<org_hl7_fhir_r5_model_BaseDateTimeType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.BaseDateTimeType'
     */
    dateTimeValueSync(): org_hl7_fhir_r5_model_BaseDateTimeType | null;
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
     * @return original return type: 'org.hl7.fhir.r5.model.Property'
     */
    getChildByName(var0: string | null): Promise<org_hl7_fhir_r5_model_Property | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Property'
     */
    getChildByNameSync(var0: string | null): org_hl7_fhir_r5_model_Property | null;
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
    isDateTime(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isDateTimeSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var1 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @param var2 original type: 'org.hl7.fhir.r5.model.Base$ValidationMode'
     * @return original return type: 'org.hl7.fhir.r5.model.Base$ValidationInfo'
     */
    addDefinition(var0: org_hl7_fhir_r5_model_StructureDefinition | null, var1: org_hl7_fhir_r5_model_ElementDefinition | null, var2: org_hl7_fhir_r5_model_Base$ValidationMode | null): Promise<org_hl7_fhir_r5_model_Base$ValidationInfo | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var1 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @param var2 original type: 'org.hl7.fhir.r5.model.Base$ValidationMode'
     * @return original return type: 'org.hl7.fhir.r5.model.Base$ValidationInfo'
     */
    addDefinitionSync(var0: org_hl7_fhir_r5_model_StructureDefinition | null, var1: org_hl7_fhir_r5_model_ElementDefinition | null, var2: org_hl7_fhir_r5_model_Base$ValidationMode | null): org_hl7_fhir_r5_model_Base$ValidationInfo | null;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    getXhtml(): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    getXhtmlSync(): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getValidationInfo(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getValidationInfoSync(): java_util_List | null;
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
    getFormatCommentsPost(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPostSync(): java_util_List | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    primitiveValue(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    primitiveValueSync(): string | null;
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
}
declare const CanonicalResource_base: typeof CanonicalResourceClass;
/**
 * Class org.hl7.fhir.r5.model.CanonicalResource.
 *
 * This actually imports the java class for further use.
 * The class {@link CanonicalResourceClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class CanonicalResource extends CanonicalResource_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default CanonicalResource;
//# sourceMappingURL=CanonicalResource.d.ts.map