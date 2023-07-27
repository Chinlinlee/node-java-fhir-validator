import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { DateClientParam as ca_uhn_fhir_rest_gclient_DateClientParam } from "./../../../../../ca/uhn/fhir/rest/gclient/DateClientParam";
import { CompositeClientParam as ca_uhn_fhir_rest_gclient_CompositeClientParam } from "./../../../../../ca/uhn/fhir/rest/gclient/CompositeClientParam";
import { TokenClientParam as ca_uhn_fhir_rest_gclient_TokenClientParam } from "./../../../../../ca/uhn/fhir/rest/gclient/TokenClientParam";
import { StringClientParam as ca_uhn_fhir_rest_gclient_StringClientParam } from "./../../../../../ca/uhn/fhir/rest/gclient/StringClientParam";
import { UriClientParam as ca_uhn_fhir_rest_gclient_UriClientParam } from "./../../../../../ca/uhn/fhir/rest/gclient/UriClientParam";
import { QuantityClientParam as ca_uhn_fhir_rest_gclient_QuantityClientParam } from "./../../../../../ca/uhn/fhir/rest/gclient/QuantityClientParam";
import { ReferenceClientParam as ca_uhn_fhir_rest_gclient_ReferenceClientParam } from "./../../../../../ca/uhn/fhir/rest/gclient/ReferenceClientParam";
import { Include as ca_uhn_fhir_model_api_Include } from "./../../../../../ca/uhn/fhir/model/api/Include";
import { Set as java_util_Set, SetInterface as java_util_SetInterface } from "./../../../../../java/util/Set";
import { Base as org_hl7_fhir_r4_model_Base } from "./Base";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../../../java/util/List";
import { MetadataResource as org_hl7_fhir_r4_model_MetadataResource } from "./MetadataResource";
import { DomainResource as org_hl7_fhir_r4_model_DomainResource } from "./DomainResource";
import { Resource as org_hl7_fhir_r4_model_Resource } from "./Resource";
import { StructureDefinition$StructureDefinitionMappingComponent as org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionMappingComponent } from "./StructureDefinition$StructureDefinitionMappingComponent";
import { Date as java_util_Date } from "./../../../../../java/util/Date";
import { ResourceType as org_hl7_fhir_r4_model_ResourceType } from "./ResourceType";
import { Property as org_hl7_fhir_r4_model_Property } from "./Property";
import { StringType as org_hl7_fhir_r4_model_StringType } from "./StringType";
import { MarkdownType as org_hl7_fhir_r4_model_MarkdownType } from "./MarkdownType";
import { CodeableConcept as org_hl7_fhir_r4_model_CodeableConcept } from "./CodeableConcept";
import { UsageContext as org_hl7_fhir_r4_model_UsageContext } from "./UsageContext";
import { BooleanType as org_hl7_fhir_r4_model_BooleanType } from "./BooleanType";
import { Identifier as org_hl7_fhir_r4_model_Identifier } from "./Identifier";
import { CanonicalType as org_hl7_fhir_r4_model_CanonicalType } from "./CanonicalType";
import { Enumeration as org_hl7_fhir_r4_model_Enumeration } from "./Enumeration";
import { Enumerations$PublicationStatus as org_hl7_fhir_r4_model_Enumerations$PublicationStatus } from "./Enumerations$PublicationStatus";
import { UriType as org_hl7_fhir_r4_model_UriType } from "./UriType";
import { DateTimeType as org_hl7_fhir_r4_model_DateTimeType } from "./DateTimeType";
import { ContactDetail as org_hl7_fhir_r4_model_ContactDetail } from "./ContactDetail";
import { Coding as org_hl7_fhir_r4_model_Coding } from "./Coding";
import { Enumerations$FHIRVersion as org_hl7_fhir_r4_model_Enumerations$FHIRVersion } from "./Enumerations$FHIRVersion";
import { StructureDefinition$StructureDefinitionKind as org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionKind } from "./StructureDefinition$StructureDefinitionKind";
import { StructureDefinition$StructureDefinitionContextComponent as org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionContextComponent } from "./StructureDefinition$StructureDefinitionContextComponent";
import { StructureDefinition$StructureDefinitionSnapshotComponent as org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionSnapshotComponent } from "./StructureDefinition$StructureDefinitionSnapshotComponent";
import { StructureDefinition$TypeDerivationRule as org_hl7_fhir_r4_model_StructureDefinition$TypeDerivationRule } from "./StructureDefinition$TypeDerivationRule";
import { StructureDefinition$StructureDefinitionDifferentialComponent as org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionDifferentialComponent } from "./StructureDefinition$StructureDefinitionDifferentialComponent";
import { INarrative as org_hl7_fhir_instance_model_api_INarrative } from "./../../instance/model/api/INarrative";
import { Narrative as org_hl7_fhir_r4_model_Narrative } from "./Narrative";
import { IBaseExtension as org_hl7_fhir_instance_model_api_IBaseExtension } from "./../../instance/model/api/IBaseExtension";
import { Extension as org_hl7_fhir_r4_model_Extension } from "./Extension";
import { Type as org_hl7_fhir_r4_model_Type } from "./Type";
import { IBaseMetaType as org_hl7_fhir_instance_model_api_IBaseMetaType } from "./../../instance/model/api/IBaseMetaType";
import { Meta as org_hl7_fhir_r4_model_Meta } from "./Meta";
import { IPrimitiveType as org_hl7_fhir_instance_model_api_IPrimitiveType } from "./../../instance/model/api/IPrimitiveType";
import { CodeType as org_hl7_fhir_r4_model_CodeType } from "./CodeType";
import { BaseResource as org_hl7_fhir_r4_model_BaseResource } from "./BaseResource";
import { IdType as org_hl7_fhir_r4_model_IdType } from "./IdType";
import { IBaseResource as org_hl7_fhir_instance_model_api_IBaseResource } from "./../../instance/model/api/IBaseResource";
import { IAnyResource as org_hl7_fhir_instance_model_api_IAnyResource } from "./../../instance/model/api/IAnyResource";
import { IIdType as org_hl7_fhir_instance_model_api_IIdType, IIdTypeInterface as org_hl7_fhir_instance_model_api_IIdTypeInterface } from "./../../instance/model/api/IIdType";
import { FhirVersionEnum as ca_uhn_fhir_context_FhirVersionEnum } from "./../../../../../ca/uhn/fhir/context/FhirVersionEnum";
import { PrimitiveType as org_hl7_fhir_r4_model_PrimitiveType } from "./PrimitiveType";
import { Signature as org_hl7_fhir_r4_model_Signature } from "./Signature";
import { OidType as org_hl7_fhir_r4_model_OidType } from "./OidType";
import { Population as org_hl7_fhir_r4_model_Population } from "./Population";
import { Money as org_hl7_fhir_r4_model_Money } from "./Money";
import { Dosage as org_hl7_fhir_r4_model_Dosage } from "./Dosage";
import { SampledData as org_hl7_fhir_r4_model_SampledData } from "./SampledData";
import { Contributor as org_hl7_fhir_r4_model_Contributor } from "./Contributor";
import { Duration as org_hl7_fhir_r4_model_Duration } from "./Duration";
import { Annotation as org_hl7_fhir_r4_model_Annotation } from "./Annotation";
import { Range as org_hl7_fhir_r4_model_Range } from "./Range";
import { XhtmlNode as org_hl7_fhir_utilities_xhtml_XhtmlNode } from "./../../utilities/xhtml/XhtmlNode";
import { BaseDateTimeType as org_hl7_fhir_r4_model_BaseDateTimeType } from "./BaseDateTimeType";
import { InstantType as org_hl7_fhir_r4_model_InstantType } from "./InstantType";
import { UnsignedIntType as org_hl7_fhir_r4_model_UnsignedIntType } from "./UnsignedIntType";
import { IntegerType as org_hl7_fhir_r4_model_IntegerType } from "./IntegerType";
import { Expression as org_hl7_fhir_r4_model_Expression } from "./Expression";
import { Base64BinaryType as org_hl7_fhir_r4_model_Base64BinaryType } from "./Base64BinaryType";
import { UrlType as org_hl7_fhir_r4_model_UrlType } from "./UrlType";
import { Timing as org_hl7_fhir_r4_model_Timing } from "./Timing";
import { Ratio as org_hl7_fhir_r4_model_Ratio } from "./Ratio";
import { DataRequirement as org_hl7_fhir_r4_model_DataRequirement } from "./DataRequirement";
import { ContactPoint as org_hl7_fhir_r4_model_ContactPoint } from "./ContactPoint";
import { HumanName as org_hl7_fhir_r4_model_HumanName } from "./HumanName";
import { Address as org_hl7_fhir_r4_model_Address } from "./Address";
import { Reference as org_hl7_fhir_r4_model_Reference } from "./Reference";
import { Period as org_hl7_fhir_r4_model_Period } from "./Period";
import { PositiveIntType as org_hl7_fhir_r4_model_PositiveIntType } from "./PositiveIntType";
import { Quantity as org_hl7_fhir_r4_model_Quantity } from "./Quantity";
import { DecimalType as org_hl7_fhir_r4_model_DecimalType } from "./DecimalType";
import { DateType as org_hl7_fhir_r4_model_DateType } from "./DateType";
import { Attachment as org_hl7_fhir_r4_model_Attachment } from "./Attachment";
import { ElementDefinition as org_hl7_fhir_r4_model_ElementDefinition } from "./ElementDefinition";
import { TriggerDefinition as org_hl7_fhir_r4_model_TriggerDefinition } from "./TriggerDefinition";
import { ProdCharacteristic as org_hl7_fhir_r4_model_ProdCharacteristic } from "./ProdCharacteristic";
import { SubstanceAmount as org_hl7_fhir_r4_model_SubstanceAmount } from "./SubstanceAmount";
import { ParameterDefinition as org_hl7_fhir_r4_model_ParameterDefinition } from "./ParameterDefinition";
import { SimpleQuantity as org_hl7_fhir_r4_model_SimpleQuantity } from "./SimpleQuantity";
import { RelatedArtifact as org_hl7_fhir_r4_model_RelatedArtifact } from "./RelatedArtifact";
import { MarketingStatus as org_hl7_fhir_r4_model_MarketingStatus } from "./MarketingStatus";
import { ProductShelfLife as org_hl7_fhir_r4_model_ProductShelfLife } from "./ProductShelfLife";
import { TimeType as org_hl7_fhir_r4_model_TimeType } from "./TimeType";
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
    static readonly SP_DATE: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.DateClientParam'
     */
    static readonly DATE: ca_uhn_fhir_rest_gclient_DateClientParam | null;
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
    static readonly SP_JURISDICTION: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.TokenClientParam'
     */
    static readonly JURISDICTION: ca_uhn_fhir_rest_gclient_TokenClientParam | null;
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
    static readonly SP_CONTEXT_TYPE: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.TokenClientParam'
     */
    static readonly CONTEXT_TYPE: ca_uhn_fhir_rest_gclient_TokenClientParam | null;
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
    static readonly SP_TITLE: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.StringClientParam'
     */
    static readonly TITLE: ca_uhn_fhir_rest_gclient_StringClientParam | null;
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
    static readonly SP_CONTEXT_QUANTITY: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.QuantityClientParam'
     */
    static readonly CONTEXT_QUANTITY: ca_uhn_fhir_rest_gclient_QuantityClientParam | null;
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
    static readonly SP_CONTEXT: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.TokenClientParam'
     */
    static readonly CONTEXT: ca_uhn_fhir_rest_gclient_TokenClientParam | null;
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
    static readonly SP_KEYWORD: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.TokenClientParam'
     */
    static readonly KEYWORD: ca_uhn_fhir_rest_gclient_TokenClientParam | null;
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
    static readonly SP_IDENTIFIER: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.TokenClientParam'
     */
    static readonly IDENTIFIER: ca_uhn_fhir_rest_gclient_TokenClientParam | null;
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
    static readonly SP_KIND: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.TokenClientParam'
     */
    static readonly KIND: ca_uhn_fhir_rest_gclient_TokenClientParam | null;
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
    static readonly SP_VERSION: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.TokenClientParam'
     */
    static readonly VERSION: ca_uhn_fhir_rest_gclient_TokenClientParam | null;
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
    static readonly SP_EXT_CONTEXT: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.TokenClientParam'
     */
    static readonly EXT_CONTEXT: ca_uhn_fhir_rest_gclient_TokenClientParam | null;
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
    static readonly SP_DERIVATION: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.TokenClientParam'
     */
    static readonly DERIVATION: ca_uhn_fhir_rest_gclient_TokenClientParam | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.Base[]'
     */
    getProperty(var0: java_lang_Integer | number, var1: string | null, var2: java_lang_Boolean | boolean): Promise<(org_hl7_fhir_r4_model_Base | null)[] | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r4.model.Base[]'
     */
    getPropertySync(var0: java_lang_Integer | number, var1: string | null, var2: java_lang_Boolean | boolean): (org_hl7_fhir_r4_model_Base | null)[] | null;
    /**
     * @return original return type: 'boolean'
     */
    isEmpty(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isEmptySync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Base'
     */
    setProperty(var0: string | null, var1: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_Base | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Base'
     */
    setPropertySync(var0: string | null, var1: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_Base | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Base'
     */
    setProperty(var0: java_lang_Integer | number, var1: string | null, var2: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_Base | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Base'
     */
    setPropertySync(var0: java_lang_Integer | number, var1: string | null, var2: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_Base | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setName(var0: string | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setNameSync(var0: string | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setName(var0: string | null): Promise<org_hl7_fhir_r4_model_MetadataResource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setNameSync(var0: string | null): org_hl7_fhir_r4_model_MetadataResource | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getType(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getTypeSync(): string | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.DomainResource'
     */
    copy(): Promise<org_hl7_fhir_r4_model_DomainResource | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.DomainResource'
     */
    copySync(): org_hl7_fhir_r4_model_DomainResource | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    copy(): Promise<org_hl7_fhir_r4_model_MetadataResource | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    copySync(): org_hl7_fhir_r4_model_MetadataResource | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    copy(): Promise<StructureDefinition | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    copySync(): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    copy(): Promise<org_hl7_fhir_r4_model_Resource | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    copySync(): org_hl7_fhir_r4_model_Resource | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getVersion(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getVersionSync(): string | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StructureDefinition$StructureDefinitionMappingComponent'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    addMapping(var0: org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionMappingComponent | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StructureDefinition$StructureDefinitionMappingComponent'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    addMappingSync(var0: org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionMappingComponent | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition$StructureDefinitionMappingComponent'
     */
    addMapping(): Promise<org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionMappingComponent | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition$StructureDefinitionMappingComponent'
     */
    addMappingSync(): org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionMappingComponent | null;
    /**
     * @param var0 original type: 'java.util.Date'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setDate(var0: java_util_Date | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.util.Date'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setDateSync(var0: java_util_Date | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'java.util.Date'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setDate(var0: java_util_Date | null): Promise<org_hl7_fhir_r4_model_MetadataResource | null>;
    /**
     * @param var0 original type: 'java.util.Date'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setDateSync(var0: java_util_Date | null): org_hl7_fhir_r4_model_MetadataResource | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.ResourceType'
     */
    getResourceType(): Promise<org_hl7_fhir_r4_model_ResourceType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ResourceType'
     */
    getResourceTypeSync(): org_hl7_fhir_r4_model_ResourceType | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.Base'
     */
    makeProperty(var0: java_lang_Integer | number, var1: string | null): Promise<org_hl7_fhir_r4_model_Base | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Base'
     */
    makePropertySync(var0: java_lang_Integer | number, var1: string | null): org_hl7_fhir_r4_model_Base | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Base'
     */
    addChild(var0: string | null): Promise<org_hl7_fhir_r4_model_Base | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Base'
     */
    addChildSync(var0: string | null): org_hl7_fhir_r4_model_Base | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'boolean'
     */
    equalsDeep(var0: org_hl7_fhir_r4_model_Base | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'boolean'
     */
    equalsDeepSync(var0: org_hl7_fhir_r4_model_Base | null): boolean;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r4.model.Property'
     */
    getNamedProperty(var0: java_lang_Integer | number, var1: string | null, var2: java_lang_Boolean | boolean): Promise<org_hl7_fhir_r4_model_Property | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r4.model.Property'
     */
    getNamedPropertySync(var0: java_lang_Integer | number, var1: string | null, var2: java_lang_Boolean | boolean): org_hl7_fhir_r4_model_Property | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Property'
     */
    getNamedProperty(var0: string | null): Promise<org_hl7_fhir_r4_model_Property | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Property'
     */
    getNamedPropertySync(var0: string | null): org_hl7_fhir_r4_model_Property | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'boolean'
     */
    equalsShallow(var0: org_hl7_fhir_r4_model_Base | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'boolean'
     */
    equalsShallowSync(var0: org_hl7_fhir_r4_model_Base | null): boolean;
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
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setUrl(var0: string | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setUrlSync(var0: string | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setUrl(var0: string | null): Promise<org_hl7_fhir_r4_model_MetadataResource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setUrlSync(var0: string | null): org_hl7_fhir_r4_model_MetadataResource | null;
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
     * @param var0 original type: 'org.hl7.fhir.r4.model.StructureDefinition'
     * @return original return type: 'void'
     */
    copyValues(var0: StructureDefinitionClass | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StructureDefinition'
     * @return original return type: 'void'
     */
    copyValuesSync(var0: StructureDefinitionClass | null): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.MetadataResource'
     * @return original return type: 'void'
     */
    copyValues(var0: org_hl7_fhir_r4_model_MetadataResource | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.MetadataResource'
     * @return original return type: 'void'
     */
    copyValuesSync(var0: org_hl7_fhir_r4_model_MetadataResource | null): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.DomainResource'
     * @return original return type: 'void'
     */
    copyValues(var0: org_hl7_fhir_r4_model_DomainResource | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.DomainResource'
     * @return original return type: 'void'
     */
    copyValuesSync(var0: org_hl7_fhir_r4_model_DomainResource | null): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Resource'
     * @return original return type: 'void'
     */
    copyValues(var0: org_hl7_fhir_r4_model_Resource | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Resource'
     * @return original return type: 'void'
     */
    copyValuesSync(var0: org_hl7_fhir_r4_model_Resource | null): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setPublisherElement(var0: org_hl7_fhir_r4_model_StringType | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setPublisherElementSync(var0: org_hl7_fhir_r4_model_StringType | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setPublisherElement(var0: org_hl7_fhir_r4_model_StringType | null): Promise<org_hl7_fhir_r4_model_MetadataResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setPublisherElementSync(var0: org_hl7_fhir_r4_model_StringType | null): org_hl7_fhir_r4_model_MetadataResource | null;
    /**
     * @return original return type: 'boolean'
     */
    hasDescriptionElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasDescriptionElementSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setDescriptionElement(var0: org_hl7_fhir_r4_model_MarkdownType | null): Promise<org_hl7_fhir_r4_model_MetadataResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setDescriptionElementSync(var0: org_hl7_fhir_r4_model_MarkdownType | null): org_hl7_fhir_r4_model_MetadataResource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setDescriptionElement(var0: org_hl7_fhir_r4_model_MarkdownType | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setDescriptionElementSync(var0: org_hl7_fhir_r4_model_MarkdownType | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.CodeableConcept'
     */
    getJurisdictionFirstRep(): Promise<org_hl7_fhir_r4_model_CodeableConcept | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.CodeableConcept'
     */
    getJurisdictionFirstRepSync(): org_hl7_fhir_r4_model_CodeableConcept | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.MarkdownType'
     */
    getCopyrightElement(): Promise<org_hl7_fhir_r4_model_MarkdownType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.MarkdownType'
     */
    getCopyrightElementSync(): org_hl7_fhir_r4_model_MarkdownType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasCopyrightElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasCopyrightElementSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setCopyrightElement(var0: org_hl7_fhir_r4_model_MarkdownType | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setCopyrightElementSync(var0: org_hl7_fhir_r4_model_MarkdownType | null): StructureDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasExperimentalElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasExperimentalElementSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getPublisherElement(): Promise<org_hl7_fhir_r4_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getPublisherElementSync(): org_hl7_fhir_r4_model_StringType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasPublisherElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasPublisherElementSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.MarkdownType'
     */
    getDescriptionElement(): Promise<org_hl7_fhir_r4_model_MarkdownType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.MarkdownType'
     */
    getDescriptionElementSync(): org_hl7_fhir_r4_model_MarkdownType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.UsageContext'
     */
    getUseContextFirstRep(): Promise<org_hl7_fhir_r4_model_UsageContext | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.UsageContext'
     */
    getUseContextFirstRepSync(): org_hl7_fhir_r4_model_UsageContext | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.BooleanType'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setExperimentalElement(var0: org_hl7_fhir_r4_model_BooleanType | null): Promise<org_hl7_fhir_r4_model_MetadataResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.BooleanType'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setExperimentalElementSync(var0: org_hl7_fhir_r4_model_BooleanType | null): org_hl7_fhir_r4_model_MetadataResource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.BooleanType'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setExperimentalElement(var0: org_hl7_fhir_r4_model_BooleanType | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.BooleanType'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setExperimentalElementSync(var0: org_hl7_fhir_r4_model_BooleanType | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.BooleanType'
     */
    getExperimentalElement(): Promise<org_hl7_fhir_r4_model_BooleanType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.BooleanType'
     */
    getExperimentalElementSync(): org_hl7_fhir_r4_model_BooleanType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Identifier'
     */
    getIdentifierFirstRep(): Promise<org_hl7_fhir_r4_model_Identifier | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Identifier'
     */
    getIdentifierFirstRepSync(): org_hl7_fhir_r4_model_Identifier | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.CanonicalType'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setBaseDefinitionElement(var0: org_hl7_fhir_r4_model_CanonicalType | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.CanonicalType'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setBaseDefinitionElementSync(var0: org_hl7_fhir_r4_model_CanonicalType | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.CanonicalType'
     */
    getBaseDefinitionElement(): Promise<org_hl7_fhir_r4_model_CanonicalType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.CanonicalType'
     */
    getBaseDefinitionElementSync(): org_hl7_fhir_r4_model_CanonicalType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasBaseDefinitionElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasBaseDefinitionElementSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Enumeration'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setFhirVersionElement(var0: org_hl7_fhir_r4_model_Enumeration | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Enumeration'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setFhirVersionElementSync(var0: org_hl7_fhir_r4_model_Enumeration | null): StructureDefinition | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setContextInvariant(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setContextInvariantSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Enumeration'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setDerivationElement(var0: org_hl7_fhir_r4_model_Enumeration | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Enumeration'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setDerivationElementSync(var0: org_hl7_fhir_r4_model_Enumeration | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    addContextInvariantElement(): Promise<org_hl7_fhir_r4_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    addContextInvariantElementSync(): org_hl7_fhir_r4_model_StringType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Enumeration'
     */
    getFhirVersionElement(): Promise<org_hl7_fhir_r4_model_Enumeration | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Enumeration'
     */
    getFhirVersionElementSync(): org_hl7_fhir_r4_model_Enumeration | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.Enumeration'
     */
    getDerivationElement(): Promise<org_hl7_fhir_r4_model_Enumeration | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Enumeration'
     */
    getDerivationElementSync(): org_hl7_fhir_r4_model_Enumeration | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    addContextInvariant(var0: string | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
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
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setVersion(var0: string | null): Promise<org_hl7_fhir_r4_model_MetadataResource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setVersionSync(var0: string | null): org_hl7_fhir_r4_model_MetadataResource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setVersion(var0: string | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setVersionSync(var0: string | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getVersionElement(): Promise<org_hl7_fhir_r4_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getVersionElementSync(): org_hl7_fhir_r4_model_StringType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setVersionElement(var0: org_hl7_fhir_r4_model_StringType | null): Promise<org_hl7_fhir_r4_model_MetadataResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setVersionElementSync(var0: org_hl7_fhir_r4_model_StringType | null): org_hl7_fhir_r4_model_MetadataResource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setVersionElement(var0: org_hl7_fhir_r4_model_StringType | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setVersionElementSync(var0: org_hl7_fhir_r4_model_StringType | null): StructureDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasVersionElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasVersionElementSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Enumeration'
     */
    getStatusElement(): Promise<org_hl7_fhir_r4_model_Enumeration | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Enumeration'
     */
    getStatusElementSync(): org_hl7_fhir_r4_model_Enumeration | null;
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
     * @param var0 original type: 'org.hl7.fhir.r4.model.Enumeration'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setStatusElement(var0: org_hl7_fhir_r4_model_Enumeration | null): Promise<org_hl7_fhir_r4_model_MetadataResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Enumeration'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setStatusElementSync(var0: org_hl7_fhir_r4_model_Enumeration | null): org_hl7_fhir_r4_model_MetadataResource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Enumeration'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setStatusElement(var0: org_hl7_fhir_r4_model_Enumeration | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Enumeration'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setStatusElementSync(var0: org_hl7_fhir_r4_model_Enumeration | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Enumerations$PublicationStatus'
     */
    getStatus(): Promise<org_hl7_fhir_r4_model_Enumerations$PublicationStatus | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Enumerations$PublicationStatus'
     */
    getStatusSync(): org_hl7_fhir_r4_model_Enumerations$PublicationStatus | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Enumerations$PublicationStatus'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setStatus(var0: org_hl7_fhir_r4_model_Enumerations$PublicationStatus | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Enumerations$PublicationStatus'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setStatusSync(var0: org_hl7_fhir_r4_model_Enumerations$PublicationStatus | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Enumerations$PublicationStatus'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setStatus(var0: org_hl7_fhir_r4_model_Enumerations$PublicationStatus | null): Promise<org_hl7_fhir_r4_model_MetadataResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Enumerations$PublicationStatus'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setStatusSync(var0: org_hl7_fhir_r4_model_Enumerations$PublicationStatus | null): org_hl7_fhir_r4_model_MetadataResource | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.UriType'
     */
    getUrlElement(): Promise<org_hl7_fhir_r4_model_UriType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.UriType'
     */
    getUrlElementSync(): org_hl7_fhir_r4_model_UriType | null;
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
     * @param var0 original type: 'org.hl7.fhir.r4.model.UriType'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setUrlElement(var0: org_hl7_fhir_r4_model_UriType | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.UriType'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setUrlElementSync(var0: org_hl7_fhir_r4_model_UriType | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.UriType'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setUrlElement(var0: org_hl7_fhir_r4_model_UriType | null): Promise<org_hl7_fhir_r4_model_MetadataResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.UriType'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setUrlElementSync(var0: org_hl7_fhir_r4_model_UriType | null): org_hl7_fhir_r4_model_MetadataResource | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setIdentifier(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
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
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setType(var0: string | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setTypeSync(var0: string | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Identifier'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    addIdentifier(var0: org_hl7_fhir_r4_model_Identifier | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Identifier'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    addIdentifierSync(var0: org_hl7_fhir_r4_model_Identifier | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Identifier'
     */
    addIdentifier(): Promise<org_hl7_fhir_r4_model_Identifier | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Identifier'
     */
    addIdentifierSync(): org_hl7_fhir_r4_model_Identifier | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.DateTimeType'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setDateElement(var0: org_hl7_fhir_r4_model_DateTimeType | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.DateTimeType'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setDateElementSync(var0: org_hl7_fhir_r4_model_DateTimeType | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.DateTimeType'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setDateElement(var0: org_hl7_fhir_r4_model_DateTimeType | null): Promise<org_hl7_fhir_r4_model_MetadataResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.DateTimeType'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setDateElementSync(var0: org_hl7_fhir_r4_model_DateTimeType | null): org_hl7_fhir_r4_model_MetadataResource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setTitle(var0: string | null): Promise<org_hl7_fhir_r4_model_MetadataResource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setTitleSync(var0: string | null): org_hl7_fhir_r4_model_MetadataResource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setTitle(var0: string | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
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
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setTitleElement(var0: org_hl7_fhir_r4_model_StringType | null): Promise<org_hl7_fhir_r4_model_MetadataResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setTitleElementSync(var0: org_hl7_fhir_r4_model_StringType | null): org_hl7_fhir_r4_model_MetadataResource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setTitleElement(var0: org_hl7_fhir_r4_model_StringType | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setTitleElementSync(var0: org_hl7_fhir_r4_model_StringType | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.DateTimeType'
     */
    getDateElement(): Promise<org_hl7_fhir_r4_model_DateTimeType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.DateTimeType'
     */
    getDateElementSync(): org_hl7_fhir_r4_model_DateTimeType | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setPublisher(var0: string | null): Promise<org_hl7_fhir_r4_model_MetadataResource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setPublisherSync(var0: string | null): org_hl7_fhir_r4_model_MetadataResource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setPublisher(var0: string | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
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
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setContact(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<org_hl7_fhir_r4_model_MetadataResource | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setContactSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): org_hl7_fhir_r4_model_MetadataResource | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setContact(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setContactSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): StructureDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasNameElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasNameElementSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setNameElement(var0: org_hl7_fhir_r4_model_StringType | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setNameElementSync(var0: org_hl7_fhir_r4_model_StringType | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setNameElement(var0: org_hl7_fhir_r4_model_StringType | null): Promise<org_hl7_fhir_r4_model_MetadataResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setNameElementSync(var0: org_hl7_fhir_r4_model_StringType | null): org_hl7_fhir_r4_model_MetadataResource | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getTitleElement(): Promise<org_hl7_fhir_r4_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getTitleElementSync(): org_hl7_fhir_r4_model_StringType | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setExperimental(var0: java_lang_Boolean | boolean): Promise<org_hl7_fhir_r4_model_MetadataResource | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setExperimentalSync(var0: java_lang_Boolean | boolean): org_hl7_fhir_r4_model_MetadataResource | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setExperimental(var0: java_lang_Boolean | boolean): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setExperimentalSync(var0: java_lang_Boolean | boolean): StructureDefinition | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getNameElement(): Promise<org_hl7_fhir_r4_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getNameElementSync(): org_hl7_fhir_r4_model_StringType | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setJurisdiction(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<org_hl7_fhir_r4_model_MetadataResource | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setJurisdictionSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): org_hl7_fhir_r4_model_MetadataResource | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setJurisdiction(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setJurisdictionSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ContactDetail'
     */
    getContactFirstRep(): Promise<org_hl7_fhir_r4_model_ContactDetail | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ContactDetail'
     */
    getContactFirstRepSync(): org_hl7_fhir_r4_model_ContactDetail | null;
    /**
     * @return original return type: 'boolean'
     */
    hasUseContext(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasUseContextSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.CodeableConcept'
     */
    addJurisdiction(): Promise<org_hl7_fhir_r4_model_CodeableConcept | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.CodeableConcept'
     */
    addJurisdictionSync(): org_hl7_fhir_r4_model_CodeableConcept | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.CodeableConcept'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    addJurisdiction(var0: org_hl7_fhir_r4_model_CodeableConcept | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.CodeableConcept'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    addJurisdictionSync(var0: org_hl7_fhir_r4_model_CodeableConcept | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.CodeableConcept'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    addJurisdiction(var0: org_hl7_fhir_r4_model_CodeableConcept | null): Promise<org_hl7_fhir_r4_model_MetadataResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.CodeableConcept'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    addJurisdictionSync(var0: org_hl7_fhir_r4_model_CodeableConcept | null): org_hl7_fhir_r4_model_MetadataResource | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.MarkdownType'
     */
    getPurposeElement(): Promise<org_hl7_fhir_r4_model_MarkdownType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.MarkdownType'
     */
    getPurposeElementSync(): org_hl7_fhir_r4_model_MarkdownType | null;
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
     * @param var0 original type: 'org.hl7.fhir.r4.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setPurposeElement(var0: org_hl7_fhir_r4_model_MarkdownType | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setPurposeElementSync(var0: org_hl7_fhir_r4_model_MarkdownType | null): StructureDefinition | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setPurpose(var0: string | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
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
     * @param var0 original type: 'org.hl7.fhir.r4.model.ContactDetail'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    addContact(var0: org_hl7_fhir_r4_model_ContactDetail | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.ContactDetail'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    addContactSync(var0: org_hl7_fhir_r4_model_ContactDetail | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.ContactDetail'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    addContact(var0: org_hl7_fhir_r4_model_ContactDetail | null): Promise<org_hl7_fhir_r4_model_MetadataResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.ContactDetail'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    addContactSync(var0: org_hl7_fhir_r4_model_ContactDetail | null): org_hl7_fhir_r4_model_MetadataResource | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ContactDetail'
     */
    addContact(): Promise<org_hl7_fhir_r4_model_ContactDetail | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ContactDetail'
     */
    addContactSync(): org_hl7_fhir_r4_model_ContactDetail | null;
    /**
     * @return original return type: 'boolean'
     */
    hasDescription(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasDescriptionSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.UsageContext'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    addUseContext(var0: org_hl7_fhir_r4_model_UsageContext | null): Promise<org_hl7_fhir_r4_model_MetadataResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.UsageContext'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    addUseContextSync(var0: org_hl7_fhir_r4_model_UsageContext | null): org_hl7_fhir_r4_model_MetadataResource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.UsageContext'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    addUseContext(var0: org_hl7_fhir_r4_model_UsageContext | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.UsageContext'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    addUseContextSync(var0: org_hl7_fhir_r4_model_UsageContext | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.UsageContext'
     */
    addUseContext(): Promise<org_hl7_fhir_r4_model_UsageContext | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.UsageContext'
     */
    addUseContextSync(): org_hl7_fhir_r4_model_UsageContext | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setDescription(var0: string | null): Promise<org_hl7_fhir_r4_model_MetadataResource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setDescriptionSync(var0: string | null): org_hl7_fhir_r4_model_MetadataResource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setDescription(var0: string | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setDescriptionSync(var0: string | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setUseContext(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setUseContextSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setUseContext(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<org_hl7_fhir_r4_model_MetadataResource | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.MetadataResource'
     */
    setUseContextSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): org_hl7_fhir_r4_model_MetadataResource | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.Coding'
     */
    getKeywordFirstRep(): Promise<org_hl7_fhir_r4_model_Coding | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Coding'
     */
    getKeywordFirstRepSync(): org_hl7_fhir_r4_model_Coding | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setKeyword(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setKeywordSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Coding'
     */
    addKeyword(): Promise<org_hl7_fhir_r4_model_Coding | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Coding'
     */
    addKeywordSync(): org_hl7_fhir_r4_model_Coding | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Coding'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    addKeyword(var0: org_hl7_fhir_r4_model_Coding | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Coding'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    addKeywordSync(var0: org_hl7_fhir_r4_model_Coding | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Enumerations$FHIRVersion'
     */
    getFhirVersion(): Promise<org_hl7_fhir_r4_model_Enumerations$FHIRVersion | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Enumerations$FHIRVersion'
     */
    getFhirVersionSync(): org_hl7_fhir_r4_model_Enumerations$FHIRVersion | null;
    /**
     * @return original return type: 'boolean'
     */
    hasKeyword(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasKeywordSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition$StructureDefinitionMappingComponent'
     */
    getMappingFirstRep(): Promise<org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionMappingComponent | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition$StructureDefinitionMappingComponent'
     */
    getMappingFirstRepSync(): org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionMappingComponent | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Enumerations$FHIRVersion'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setFhirVersion(var0: org_hl7_fhir_r4_model_Enumerations$FHIRVersion | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Enumerations$FHIRVersion'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setFhirVersionSync(var0: org_hl7_fhir_r4_model_Enumerations$FHIRVersion | null): StructureDefinition | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setMapping(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setMappingSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Enumeration'
     */
    getKindElement(): Promise<org_hl7_fhir_r4_model_Enumeration | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Enumeration'
     */
    getKindElementSync(): org_hl7_fhir_r4_model_Enumeration | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setCopyright(var0: string | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setCopyrightSync(var0: string | null): StructureDefinition | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setContext(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setContextSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StructureDefinition$StructureDefinitionKind'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setKind(var0: org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionKind | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StructureDefinition$StructureDefinitionKind'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setKindSync(var0: org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionKind | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.BooleanType'
     */
    getAbstractElement(): Promise<org_hl7_fhir_r4_model_BooleanType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.BooleanType'
     */
    getAbstractElementSync(): org_hl7_fhir_r4_model_BooleanType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition$StructureDefinitionContextComponent'
     */
    addContext(): Promise<org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionContextComponent | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition$StructureDefinitionContextComponent'
     */
    addContextSync(): org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionContextComponent | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StructureDefinition$StructureDefinitionContextComponent'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    addContext(var0: org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionContextComponent | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StructureDefinition$StructureDefinitionContextComponent'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    addContextSync(var0: org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionContextComponent | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.UriType'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setTypeElement(var0: org_hl7_fhir_r4_model_UriType | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.UriType'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setTypeElementSync(var0: org_hl7_fhir_r4_model_UriType | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setAbstract(var0: java_lang_Boolean | boolean): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
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
     * @param var0 original type: 'org.hl7.fhir.r4.model.Enumeration'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setKindElement(var0: org_hl7_fhir_r4_model_Enumeration | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Enumeration'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setKindElementSync(var0: org_hl7_fhir_r4_model_Enumeration | null): StructureDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasContext(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasContextSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.BooleanType'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setAbstractElement(var0: org_hl7_fhir_r4_model_BooleanType | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.BooleanType'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setAbstractElementSync(var0: org_hl7_fhir_r4_model_BooleanType | null): StructureDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition$StructureDefinitionContextComponent'
     */
    getContextFirstRep(): Promise<org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionContextComponent | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition$StructureDefinitionContextComponent'
     */
    getContextFirstRepSync(): org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionContextComponent | null;
    /**
     * @return original return type: 'boolean'
     */
    hasDerivation(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasDerivationSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.UriType'
     */
    getTypeElement(): Promise<org_hl7_fhir_r4_model_UriType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.UriType'
     */
    getTypeElementSync(): org_hl7_fhir_r4_model_UriType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition$StructureDefinitionKind'
     */
    getKind(): Promise<org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionKind | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition$StructureDefinitionKind'
     */
    getKindSync(): org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionKind | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setBaseDefinition(var0: string | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setBaseDefinitionSync(var0: string | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StructureDefinition$StructureDefinitionSnapshotComponent'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setSnapshot(var0: org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionSnapshotComponent | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StructureDefinition$StructureDefinitionSnapshotComponent'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setSnapshotSync(var0: org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionSnapshotComponent | null): StructureDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasDifferential(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasDifferentialSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition$TypeDerivationRule'
     */
    getDerivation(): Promise<org_hl7_fhir_r4_model_StructureDefinition$TypeDerivationRule | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition$TypeDerivationRule'
     */
    getDerivationSync(): org_hl7_fhir_r4_model_StructureDefinition$TypeDerivationRule | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition$StructureDefinitionDifferentialComponent'
     */
    getDifferential(): Promise<org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionDifferentialComponent | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition$StructureDefinitionDifferentialComponent'
     */
    getDifferentialSync(): org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionDifferentialComponent | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition$StructureDefinitionSnapshotComponent'
     */
    getSnapshot(): Promise<org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionSnapshotComponent | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition$StructureDefinitionSnapshotComponent'
     */
    getSnapshotSync(): org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionSnapshotComponent | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StructureDefinition$TypeDerivationRule'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setDerivation(var0: org_hl7_fhir_r4_model_StructureDefinition$TypeDerivationRule | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StructureDefinition$TypeDerivationRule'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setDerivationSync(var0: org_hl7_fhir_r4_model_StructureDefinition$TypeDerivationRule | null): StructureDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StructureDefinition$StructureDefinitionDifferentialComponent'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setDifferential(var0: org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionDifferentialComponent | null): Promise<StructureDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StructureDefinition$StructureDefinitionDifferentialComponent'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    setDifferentialSync(var0: org_hl7_fhir_r4_model_StructureDefinition$StructureDefinitionDifferentialComponent | null): StructureDefinition | null;
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
     * @return original return type: 'java.lang.String'
     */
    present(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    presentSync(): string | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.Narrative'
     */
    getText(): Promise<org_hl7_fhir_r4_model_Narrative | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Narrative'
     */
    getTextSync(): org_hl7_fhir_r4_model_Narrative | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Narrative'
     * @return original return type: 'org.hl7.fhir.r4.model.DomainResource'
     */
    setText(var0: org_hl7_fhir_r4_model_Narrative | null): Promise<org_hl7_fhir_r4_model_DomainResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Narrative'
     * @return original return type: 'org.hl7.fhir.r4.model.DomainResource'
     */
    setTextSync(var0: org_hl7_fhir_r4_model_Narrative | null): org_hl7_fhir_r4_model_DomainResource | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.DomainResource'
     */
    setExtension(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<org_hl7_fhir_r4_model_DomainResource | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.DomainResource'
     */
    setExtensionSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): org_hl7_fhir_r4_model_DomainResource | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.DomainResource'
     */
    setContained(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<org_hl7_fhir_r4_model_DomainResource | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.DomainResource'
     */
    setContainedSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): org_hl7_fhir_r4_model_DomainResource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Resource'
     * @return original return type: 'org.hl7.fhir.r4.model.DomainResource'
     */
    addContained(var0: org_hl7_fhir_r4_model_Resource | null): Promise<org_hl7_fhir_r4_model_DomainResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Resource'
     * @return original return type: 'org.hl7.fhir.r4.model.DomainResource'
     */
    addContainedSync(var0: org_hl7_fhir_r4_model_Resource | null): org_hl7_fhir_r4_model_DomainResource | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getContained(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getContainedSync(): java_util_List | null;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseExtension'
     */
    addModifierExtension(): Promise<org_hl7_fhir_instance_model_api_IBaseExtension | null>;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseExtension'
     */
    addModifierExtensionSync(): org_hl7_fhir_instance_model_api_IBaseExtension | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Extension'
     */
    addModifierExtension(): Promise<org_hl7_fhir_r4_model_Extension | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Extension'
     */
    addModifierExtensionSync(): org_hl7_fhir_r4_model_Extension | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Extension'
     * @return original return type: 'org.hl7.fhir.r4.model.DomainResource'
     */
    addModifierExtension(var0: org_hl7_fhir_r4_model_Extension | null): Promise<org_hl7_fhir_r4_model_DomainResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Extension'
     * @return original return type: 'org.hl7.fhir.r4.model.DomainResource'
     */
    addModifierExtensionSync(var0: org_hl7_fhir_r4_model_Extension | null): org_hl7_fhir_r4_model_DomainResource | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.DomainResource'
     */
    setModifierExtension(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<org_hl7_fhir_r4_model_DomainResource | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.DomainResource'
     */
    setModifierExtensionSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): org_hl7_fhir_r4_model_DomainResource | null;
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
     * @param var0 original type: 'org.hl7.fhir.r4.model.Extension'
     * @return original return type: 'org.hl7.fhir.r4.model.DomainResource'
     */
    addExtension(var0: org_hl7_fhir_r4_model_Extension | null): Promise<org_hl7_fhir_r4_model_DomainResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Extension'
     * @return original return type: 'org.hl7.fhir.r4.model.DomainResource'
     */
    addExtensionSync(var0: org_hl7_fhir_r4_model_Extension | null): org_hl7_fhir_r4_model_DomainResource | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Extension'
     */
    addExtension(): Promise<org_hl7_fhir_r4_model_Extension | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Extension'
     */
    addExtensionSync(): org_hl7_fhir_r4_model_Extension | null;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseExtension'
     */
    addExtension(): Promise<org_hl7_fhir_instance_model_api_IBaseExtension | null>;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseExtension'
     */
    addExtensionSync(): org_hl7_fhir_instance_model_api_IBaseExtension | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.r4.model.Type'
     * @return original return type: 'void'
     */
    addExtension(var0: string | null, var1: org_hl7_fhir_r4_model_Type | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.r4.model.Type'
     * @return original return type: 'void'
     */
    addExtensionSync(var0: string | null, var1: org_hl7_fhir_r4_model_Type | null): void;
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
     * @return original return type: 'org.hl7.fhir.r4.model.Extension'
     */
    getExtensionByUrl(var0: string | null): Promise<org_hl7_fhir_r4_model_Extension | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Extension'
     */
    getExtensionByUrlSync(var0: string | null): org_hl7_fhir_r4_model_Extension | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    setLanguage(var0: string | null): Promise<org_hl7_fhir_r4_model_Resource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    setLanguageSync(var0: string | null): org_hl7_fhir_r4_model_Resource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.UriType'
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    setImplicitRulesElement(var0: org_hl7_fhir_r4_model_UriType | null): Promise<org_hl7_fhir_r4_model_Resource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.UriType'
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    setImplicitRulesElementSync(var0: org_hl7_fhir_r4_model_UriType | null): org_hl7_fhir_r4_model_Resource | null;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseMetaType'
     */
    getMeta(): Promise<org_hl7_fhir_instance_model_api_IBaseMetaType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseMetaType'
     */
    getMetaSync(): org_hl7_fhir_instance_model_api_IBaseMetaType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Meta'
     */
    getMeta(): Promise<org_hl7_fhir_r4_model_Meta | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Meta'
     */
    getMetaSync(): org_hl7_fhir_r4_model_Meta | null;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IPrimitiveType'
     */
    getLanguageElement(): Promise<org_hl7_fhir_instance_model_api_IPrimitiveType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IPrimitiveType'
     */
    getLanguageElementSync(): org_hl7_fhir_instance_model_api_IPrimitiveType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.CodeType'
     */
    getLanguageElement(): Promise<org_hl7_fhir_r4_model_CodeType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.CodeType'
     */
    getLanguageElementSync(): org_hl7_fhir_r4_model_CodeType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasMeta(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMetaSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Meta'
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    setMeta(var0: org_hl7_fhir_r4_model_Meta | null): Promise<org_hl7_fhir_r4_model_Resource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Meta'
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    setMetaSync(var0: org_hl7_fhir_r4_model_Meta | null): org_hl7_fhir_r4_model_Resource | null;
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
     * @param var0 original type: 'org.hl7.fhir.r4.model.CodeType'
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    setLanguageElement(var0: org_hl7_fhir_r4_model_CodeType | null): Promise<org_hl7_fhir_r4_model_Resource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.CodeType'
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    setLanguageElementSync(var0: org_hl7_fhir_r4_model_CodeType | null): org_hl7_fhir_r4_model_Resource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    setImplicitRules(var0: string | null): Promise<org_hl7_fhir_r4_model_Resource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    setImplicitRulesSync(var0: string | null): org_hl7_fhir_r4_model_Resource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.IdType'
     * @return original return type: 'org.hl7.fhir.r4.model.BaseResource'
     */
    setIdElement(var0: org_hl7_fhir_r4_model_IdType | null): Promise<org_hl7_fhir_r4_model_BaseResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.IdType'
     * @return original return type: 'org.hl7.fhir.r4.model.BaseResource'
     */
    setIdElementSync(var0: org_hl7_fhir_r4_model_IdType | null): org_hl7_fhir_r4_model_BaseResource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.IdType'
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    setIdElement(var0: org_hl7_fhir_r4_model_IdType | null): Promise<org_hl7_fhir_r4_model_Resource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.IdType'
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    setIdElementSync(var0: org_hl7_fhir_r4_model_IdType | null): org_hl7_fhir_r4_model_Resource | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    setId(var0: string | null): Promise<org_hl7_fhir_r4_model_Resource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    setIdSync(var0: string | null): org_hl7_fhir_r4_model_Resource | null;
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
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IIdType'
     * @return original return type: 'org.hl7.fhir.r4.model.BaseResource'
     */
    setId(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null): Promise<org_hl7_fhir_r4_model_BaseResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IIdType'
     * @return original return type: 'org.hl7.fhir.r4.model.BaseResource'
     */
    setIdSync(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null): org_hl7_fhir_r4_model_BaseResource | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.IdType'
     */
    getIdElement(): Promise<org_hl7_fhir_r4_model_IdType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.IdType'
     */
    getIdElementSync(): org_hl7_fhir_r4_model_IdType | null;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IIdType'
     */
    getIdElement(): Promise<org_hl7_fhir_instance_model_api_IIdType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IIdType'
     */
    getIdElementSync(): org_hl7_fhir_instance_model_api_IIdType | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.UriType'
     */
    getImplicitRulesElement(): Promise<org_hl7_fhir_r4_model_UriType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.UriType'
     */
    getImplicitRulesElementSync(): org_hl7_fhir_r4_model_UriType | null;
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
     * @param var0 original type: 'org.hl7.fhir.r4.model.PrimitiveType'
     * @param var1 original type: 'org.hl7.fhir.r4.model.PrimitiveType'
     * @param var2 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    static compareValues(var0: org_hl7_fhir_r4_model_PrimitiveType | null, var1: org_hl7_fhir_r4_model_PrimitiveType | null, var2: java_lang_Boolean | boolean): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.PrimitiveType'
     * @param var1 original type: 'org.hl7.fhir.r4.model.PrimitiveType'
     * @param var2 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    static compareValuesSync(var0: org_hl7_fhir_r4_model_PrimitiveType | null, var1: org_hl7_fhir_r4_model_PrimitiveType | null, var2: java_lang_Boolean | boolean): boolean;
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
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Signature'
     */
    castToSignature(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_Signature | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Signature'
     */
    castToSignatureSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_Signature | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.OidType'
     */
    castToOid(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_OidType | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.OidType'
     */
    castToOidSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_OidType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Population'
     */
    castToPopulation(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_Population | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Population'
     */
    castToPopulationSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_Population | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Money'
     */
    castToMoney(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_Money | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Money'
     */
    castToMoneySync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_Money | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Dosage'
     */
    castToDosage(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_Dosage | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Dosage'
     */
    castToDosageSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_Dosage | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.SampledData'
     */
    castToSampledData(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_SampledData | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.SampledData'
     */
    castToSampledDataSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_SampledData | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Contributor'
     */
    castToContributor(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_Contributor | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Contributor'
     */
    castToContributorSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_Contributor | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Duration'
     */
    castToDuration(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_Duration | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Duration'
     */
    castToDurationSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_Duration | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Annotation'
     */
    castToAnnotation(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_Annotation | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Annotation'
     */
    castToAnnotationSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_Annotation | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Range'
     */
    castToRange(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_Range | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Range'
     */
    castToRangeSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_Range | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'java.lang.String'
     */
    castToXhtmlString(var0: org_hl7_fhir_r4_model_Base | null): Promise<string | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'java.lang.String'
     */
    castToXhtmlStringSync(var0: org_hl7_fhir_r4_model_Base | null): string | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    castToResource(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_Resource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    castToResourceSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_Resource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Narrative'
     */
    castToNarrative(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_Narrative | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Narrative'
     */
    castToNarrativeSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_Narrative | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Meta'
     */
    castToMeta(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_Meta | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Meta'
     */
    castToMetaSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_Meta | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.IdType'
     */
    castToId(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_IdType | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.IdType'
     */
    castToIdSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_IdType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.CodeType'
     */
    castToCode(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_CodeType | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.CodeType'
     */
    castToCodeSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_CodeType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.UriType'
     */
    castToUri(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_UriType | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.UriType'
     */
    castToUriSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_UriType | null;
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
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @param var1 original type: 'org.hl7.fhir.r4.model.Base'
     * @param var2 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    static compareDeep(var0: org_hl7_fhir_r4_model_Base | null, var1: org_hl7_fhir_r4_model_Base | null, var2: java_lang_Boolean | boolean): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @param var1 original type: 'org.hl7.fhir.r4.model.Base'
     * @param var2 original type: 'boolean'
     * @return original return type: 'boolean'
     */
    static compareDeepSync(var0: org_hl7_fhir_r4_model_Base | null, var1: org_hl7_fhir_r4_model_Base | null, var2: java_lang_Boolean | boolean): boolean;
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
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Extension'
     */
    castToExtension(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_Extension | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Extension'
     */
    castToExtensionSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_Extension | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    castToString(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_StringType | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    castToStringSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_StringType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Property'
     */
    getChildByName(var0: string | null): Promise<org_hl7_fhir_r4_model_Property | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Property'
     */
    getChildByNameSync(var0: string | null): org_hl7_fhir_r4_model_Property | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    dateTimeValue(): Promise<org_hl7_fhir_r4_model_BaseDateTimeType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    dateTimeValueSync(): org_hl7_fhir_r4_model_BaseDateTimeType | null;
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
     * @param var1 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r4.model.Base[]'
     */
    listChildrenByName(var0: string | null, var1: java_lang_Boolean | boolean): Promise<(org_hl7_fhir_r4_model_Base | null)[] | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r4.model.Base[]'
     */
    listChildrenByNameSync(var0: string | null, var1: java_lang_Boolean | boolean): (org_hl7_fhir_r4_model_Base | null)[] | null;
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
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.ContactDetail'
     */
    castToContactDetail(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_ContactDetail | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.ContactDetail'
     */
    castToContactDetailSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_ContactDetail | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.CodeableConcept'
     */
    castToCodeableConcept(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_CodeableConcept | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.CodeableConcept'
     */
    castToCodeableConceptSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_CodeableConcept | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.InstantType'
     */
    castToInstant(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_InstantType | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.InstantType'
     */
    castToInstantSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_InstantType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Coding'
     */
    castToCoding(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_Coding | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Coding'
     */
    castToCodingSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_Coding | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.CanonicalType'
     */
    castToCanonical(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_CanonicalType | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.CanonicalType'
     */
    castToCanonicalSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_CanonicalType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    castToXhtml(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    castToXhtmlSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    castToType(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_Type | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    castToTypeSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_Type | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.BooleanType'
     */
    castToBoolean(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_BooleanType | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.BooleanType'
     */
    castToBooleanSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_BooleanType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.DateTimeType'
     */
    castToDateTime(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_DateTimeType | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.DateTimeType'
     */
    castToDateTimeSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_DateTimeType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Identifier'
     */
    castToIdentifier(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_Identifier | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Identifier'
     */
    castToIdentifierSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_Identifier | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.UsageContext'
     */
    castToUsageContext(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_UsageContext | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.UsageContext'
     */
    castToUsageContextSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_UsageContext | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.MarkdownType'
     */
    castToMarkdown(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_MarkdownType | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.MarkdownType'
     */
    castToMarkdownSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_MarkdownType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.UnsignedIntType'
     */
    castToUnsignedInt(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_UnsignedIntType | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.UnsignedIntType'
     */
    castToUnsignedIntSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_UnsignedIntType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.IntegerType'
     */
    castToInteger(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_IntegerType | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.IntegerType'
     */
    castToIntegerSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_IntegerType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Expression'
     */
    castToExpression(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_Expression | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Expression'
     */
    castToExpressionSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_Expression | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Base64BinaryType'
     */
    castToBase64Binary(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_Base64BinaryType | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Base64BinaryType'
     */
    castToBase64BinarySync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_Base64BinaryType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.UrlType'
     */
    castToUrl(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_UrlType | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.UrlType'
     */
    castToUrlSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_UrlType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Timing'
     */
    castToTiming(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_Timing | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Timing'
     */
    castToTimingSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_Timing | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Ratio'
     */
    castToRatio(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_Ratio | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Ratio'
     */
    castToRatioSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_Ratio | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.DataRequirement'
     */
    castToDataRequirement(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_DataRequirement | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.DataRequirement'
     */
    castToDataRequirementSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_DataRequirement | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.ContactPoint'
     */
    castToContactPoint(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_ContactPoint | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.ContactPoint'
     */
    castToContactPointSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_ContactPoint | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.HumanName'
     */
    castToHumanName(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_HumanName | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.HumanName'
     */
    castToHumanNameSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_HumanName | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Address'
     */
    castToAddress(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_Address | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Address'
     */
    castToAddressSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_Address | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Reference'
     */
    castToReference(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_Reference | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Reference'
     */
    castToReferenceSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_Reference | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Period'
     */
    castToPeriod(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_Period | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Period'
     */
    castToPeriodSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_Period | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.PositiveIntType'
     */
    castToPositiveInt(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_PositiveIntType | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.PositiveIntType'
     */
    castToPositiveIntSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_PositiveIntType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Quantity'
     */
    castToQuantity(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_Quantity | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Quantity'
     */
    castToQuantitySync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_Quantity | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.DecimalType'
     */
    castToDecimal(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_DecimalType | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.DecimalType'
     */
    castToDecimalSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_DecimalType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.DateType'
     */
    castToDate(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_DateType | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.DateType'
     */
    castToDateSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_DateType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Attachment'
     */
    castToAttachment(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_Attachment | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Attachment'
     */
    castToAttachmentSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_Attachment | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    castToElementDefinition(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    castToElementDefinitionSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_ElementDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.TriggerDefinition'
     */
    castToTriggerDefinition(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_TriggerDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.TriggerDefinition'
     */
    castToTriggerDefinitionSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_TriggerDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.ProdCharacteristic'
     */
    castToProdCharacteristic(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_ProdCharacteristic | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.ProdCharacteristic'
     */
    castToProdCharacteristicSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_ProdCharacteristic | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.SubstanceAmount'
     */
    castToSubstanceAmount(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_SubstanceAmount | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.SubstanceAmount'
     */
    castToSubstanceAmountSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_SubstanceAmount | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.ParameterDefinition'
     */
    castToParameterDefinition(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_ParameterDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.ParameterDefinition'
     */
    castToParameterDefinitionSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_ParameterDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.SimpleQuantity'
     */
    castToSimpleQuantity(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_SimpleQuantity | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.SimpleQuantity'
     */
    castToSimpleQuantitySync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_SimpleQuantity | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    castToRelatedArtifact(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_RelatedArtifact | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    castToRelatedArtifactSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_RelatedArtifact | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.MarketingStatus'
     */
    castToMarketingStatus(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_MarketingStatus | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.MarketingStatus'
     */
    castToMarketingStatusSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_MarketingStatus | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.ProductShelfLife'
     */
    castToProductShelfLife(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_ProductShelfLife | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.ProductShelfLife'
     */
    castToProductShelfLifeSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_ProductShelfLife | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.TimeType'
     */
    castToTime(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_TimeType | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.TimeType'
     */
    castToTimeSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_TimeType | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    static newInstanceAsync(): Promise<StructureDefinition>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.UriType'
     * @param var1 original type: 'org.hl7.fhir.r4.model.StringType'
     * @param var2 original type: 'org.hl7.fhir.r4.model.Enumeration'
     * @param var3 original type: 'org.hl7.fhir.r4.model.Enumeration'
     * @param var4 original type: 'org.hl7.fhir.r4.model.BooleanType'
     * @param var5 original type: 'org.hl7.fhir.r4.model.UriType'
     * @return original return type: 'org.hl7.fhir.r4.model.StructureDefinition'
     */
    static newInstanceAsync(var0: org_hl7_fhir_r4_model_UriType | null, var1: org_hl7_fhir_r4_model_StringType | null, var2: org_hl7_fhir_r4_model_Enumeration | null, var3: org_hl7_fhir_r4_model_Enumeration | null, var4: org_hl7_fhir_r4_model_BooleanType | null, var5: org_hl7_fhir_r4_model_UriType | null): Promise<StructureDefinition>;
    constructor();
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.UriType'
     * @param var1 original type: 'org.hl7.fhir.r4.model.StringType'
     * @param var2 original type: 'org.hl7.fhir.r4.model.Enumeration'
     * @param var3 original type: 'org.hl7.fhir.r4.model.Enumeration'
     * @param var4 original type: 'org.hl7.fhir.r4.model.BooleanType'
     * @param var5 original type: 'org.hl7.fhir.r4.model.UriType'
     */
    constructor(var0: org_hl7_fhir_r4_model_UriType | null, var1: org_hl7_fhir_r4_model_StringType | null, var2: org_hl7_fhir_r4_model_Enumeration | null, var3: org_hl7_fhir_r4_model_Enumeration | null, var4: org_hl7_fhir_r4_model_BooleanType | null, var5: org_hl7_fhir_r4_model_UriType | null);
}
declare const StructureDefinition_base: typeof StructureDefinitionClass;
/**
 * Class org.hl7.fhir.r4.model.StructureDefinition.
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