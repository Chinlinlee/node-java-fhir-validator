import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { TokenClientParam as ca_uhn_fhir_rest_gclient_TokenClientParam } from "./../../../../../ca/uhn/fhir/rest/gclient/TokenClientParam";
import { ReferenceClientParam as ca_uhn_fhir_rest_gclient_ReferenceClientParam } from "./../../../../../ca/uhn/fhir/rest/gclient/ReferenceClientParam";
import { Include as ca_uhn_fhir_model_api_Include } from "./../../../../../ca/uhn/fhir/model/api/Include";
import { StringClientParam as ca_uhn_fhir_rest_gclient_StringClientParam } from "./../../../../../ca/uhn/fhir/rest/gclient/StringClientParam";
import { Set as java_util_Set, SetInterface as java_util_SetInterface } from "./../../../../../java/util/Set";
import { Base as org_hl7_fhir_r4_model_Base } from "./Base";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
import { Resource as org_hl7_fhir_r4_model_Resource } from "./Resource";
import { DomainResource as org_hl7_fhir_r4_model_DomainResource } from "./DomainResource";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../../../java/util/List";
import { CodeableConcept as org_hl7_fhir_r4_model_CodeableConcept } from "./CodeableConcept";
import { StringType as org_hl7_fhir_r4_model_StringType } from "./StringType";
import { Coding as org_hl7_fhir_r4_model_Coding } from "./Coding";
import { Reference as org_hl7_fhir_r4_model_Reference } from "./Reference";
import { ResourceType as org_hl7_fhir_r4_model_ResourceType } from "./ResourceType";
import { Property as org_hl7_fhir_r4_model_Property } from "./Property";
import { Identifier as org_hl7_fhir_r4_model_Identifier } from "./Identifier";
import { Enumeration as org_hl7_fhir_r4_model_Enumeration } from "./Enumeration";
import { Endpoint$EndpointStatus as org_hl7_fhir_r4_model_Endpoint$EndpointStatus } from "./Endpoint$EndpointStatus";
import { ContactPoint as org_hl7_fhir_r4_model_ContactPoint } from "./ContactPoint";
import { Period as org_hl7_fhir_r4_model_Period } from "./Period";
import { Organization as org_hl7_fhir_r4_model_Organization } from "./Organization";
import { CodeType as org_hl7_fhir_r4_model_CodeType } from "./CodeType";
import { UrlType as org_hl7_fhir_r4_model_UrlType } from "./UrlType";
import { INarrative as org_hl7_fhir_instance_model_api_INarrative } from "./../../instance/model/api/INarrative";
import { Narrative as org_hl7_fhir_r4_model_Narrative } from "./Narrative";
import { IBaseExtension as org_hl7_fhir_instance_model_api_IBaseExtension } from "./../../instance/model/api/IBaseExtension";
import { Extension as org_hl7_fhir_r4_model_Extension } from "./Extension";
import { Type as org_hl7_fhir_r4_model_Type } from "./Type";
import { UriType as org_hl7_fhir_r4_model_UriType } from "./UriType";
import { IBaseMetaType as org_hl7_fhir_instance_model_api_IBaseMetaType } from "./../../instance/model/api/IBaseMetaType";
import { Meta as org_hl7_fhir_r4_model_Meta } from "./Meta";
import { IPrimitiveType as org_hl7_fhir_instance_model_api_IPrimitiveType } from "./../../instance/model/api/IPrimitiveType";
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
import { ContactDetail as org_hl7_fhir_r4_model_ContactDetail } from "./ContactDetail";
import { InstantType as org_hl7_fhir_r4_model_InstantType } from "./InstantType";
import { CanonicalType as org_hl7_fhir_r4_model_CanonicalType } from "./CanonicalType";
import { BooleanType as org_hl7_fhir_r4_model_BooleanType } from "./BooleanType";
import { DateTimeType as org_hl7_fhir_r4_model_DateTimeType } from "./DateTimeType";
import { UsageContext as org_hl7_fhir_r4_model_UsageContext } from "./UsageContext";
import { MarkdownType as org_hl7_fhir_r4_model_MarkdownType } from "./MarkdownType";
import { UnsignedIntType as org_hl7_fhir_r4_model_UnsignedIntType } from "./UnsignedIntType";
import { IntegerType as org_hl7_fhir_r4_model_IntegerType } from "./IntegerType";
import { Expression as org_hl7_fhir_r4_model_Expression } from "./Expression";
import { Base64BinaryType as org_hl7_fhir_r4_model_Base64BinaryType } from "./Base64BinaryType";
import { Timing as org_hl7_fhir_r4_model_Timing } from "./Timing";
import { Ratio as org_hl7_fhir_r4_model_Ratio } from "./Ratio";
import { DataRequirement as org_hl7_fhir_r4_model_DataRequirement } from "./DataRequirement";
import { HumanName as org_hl7_fhir_r4_model_HumanName } from "./HumanName";
import { Address as org_hl7_fhir_r4_model_Address } from "./Address";
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
 * This class just defines types, you should import {@link Endpoint} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class EndpointClass extends JavaClass {
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_PAYLOAD_TYPE: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.TokenClientParam'
     */
    static readonly PAYLOAD_TYPE: ca_uhn_fhir_rest_gclient_TokenClientParam | null;
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
    static readonly SP_ORGANIZATION: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.ReferenceClientParam'
     */
    static readonly ORGANIZATION: ca_uhn_fhir_rest_gclient_ReferenceClientParam | null;
    /**
     * Original type: 'ca.uhn.fhir.model.api.Include'
     */
    static readonly INCLUDE_ORGANIZATION: ca_uhn_fhir_model_api_Include | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly SP_CONNECTION_TYPE: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.TokenClientParam'
     */
    static readonly CONNECTION_TYPE: ca_uhn_fhir_rest_gclient_TokenClientParam | null;
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
    static readonly SP_STATUS: string | null;
    /**
     * Original type: 'ca.uhn.fhir.rest.gclient.TokenClientParam'
     */
    static readonly STATUS: ca_uhn_fhir_rest_gclient_TokenClientParam | null;
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
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setName(var0: string | null): Promise<Endpoint | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setNameSync(var0: string | null): Endpoint | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    copy(): Promise<Endpoint | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    copySync(): Endpoint | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    copy(): Promise<org_hl7_fhir_r4_model_Resource | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Resource'
     */
    copySync(): org_hl7_fhir_r4_model_Resource | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.DomainResource'
     */
    copy(): Promise<org_hl7_fhir_r4_model_DomainResource | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.DomainResource'
     */
    copySync(): org_hl7_fhir_r4_model_DomainResource | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getAddress(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getAddressSync(): string | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getHeader(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getHeaderSync(): java_util_List | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.CodeableConcept'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    addPayloadType(var0: org_hl7_fhir_r4_model_CodeableConcept | null): Promise<Endpoint | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.CodeableConcept'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    addPayloadTypeSync(var0: org_hl7_fhir_r4_model_CodeableConcept | null): Endpoint | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.CodeableConcept'
     */
    addPayloadType(): Promise<org_hl7_fhir_r4_model_CodeableConcept | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.CodeableConcept'
     */
    addPayloadTypeSync(): org_hl7_fhir_r4_model_CodeableConcept | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setPayloadMimeType(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<Endpoint | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setPayloadMimeTypeSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Endpoint | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setHeader(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<Endpoint | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setHeaderSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Endpoint | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    addHeaderElement(): Promise<org_hl7_fhir_r4_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    addHeaderElementSync(): org_hl7_fhir_r4_model_StringType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    addPayloadMimeType(var0: string | null): Promise<Endpoint | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    addPayloadMimeTypeSync(var0: string | null): Endpoint | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setPayloadType(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<Endpoint | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setPayloadTypeSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Endpoint | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Coding'
     */
    getConnectionType(): Promise<org_hl7_fhir_r4_model_Coding | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Coding'
     */
    getConnectionTypeSync(): org_hl7_fhir_r4_model_Coding | null;
    /**
     * @return original return type: 'boolean'
     */
    hasConnectionType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasConnectionTypeSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasHeader(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasHeaderSync(var0: string | null): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasHeader(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasHeaderSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasPayloadType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasPayloadTypeSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasPayloadMimeType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasPayloadMimeTypeSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasPayloadMimeType(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasPayloadMimeTypeSync(var0: string | null): boolean;
    /**
     * @return original return type: 'java.util.List'
     */
    getPayloadType(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getPayloadTypeSync(): java_util_List | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getPayloadMimeType(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getPayloadMimeTypeSync(): java_util_List | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Coding'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setConnectionType(var0: org_hl7_fhir_r4_model_Coding | null): Promise<Endpoint | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Coding'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setConnectionTypeSync(var0: org_hl7_fhir_r4_model_Coding | null): Endpoint | null;
    /**
     * @return original return type: 'boolean'
     */
    hasAddressElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasAddressElementSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Reference'
     */
    getManagingOrganization(): Promise<org_hl7_fhir_r4_model_Reference | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Reference'
     */
    getManagingOrganizationSync(): org_hl7_fhir_r4_model_Reference | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Reference'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setManagingOrganization(var0: org_hl7_fhir_r4_model_Reference | null): Promise<Endpoint | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Reference'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setManagingOrganizationSync(var0: org_hl7_fhir_r4_model_Reference | null): Endpoint | null;
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
     * @return original return type: 'java.lang.String'
     */
    fhirType(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    fhirTypeSync(): string | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Endpoint'
     * @return original return type: 'void'
     */
    copyValues(var0: EndpointClass | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Endpoint'
     * @return original return type: 'void'
     */
    copyValuesSync(var0: EndpointClass | null): void;
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
     * @return original return type: 'org.hl7.fhir.r4.model.Identifier'
     */
    getIdentifierFirstRep(): Promise<org_hl7_fhir_r4_model_Identifier | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Identifier'
     */
    getIdentifierFirstRepSync(): org_hl7_fhir_r4_model_Identifier | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setStatusElement(var0: org_hl7_fhir_r4_model_Enumeration | null): Promise<Endpoint | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Enumeration'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setStatusElementSync(var0: org_hl7_fhir_r4_model_Enumeration | null): Endpoint | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint$EndpointStatus'
     */
    getStatus(): Promise<org_hl7_fhir_r4_model_Endpoint$EndpointStatus | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint$EndpointStatus'
     */
    getStatusSync(): org_hl7_fhir_r4_model_Endpoint$EndpointStatus | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Endpoint$EndpointStatus'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setStatus(var0: org_hl7_fhir_r4_model_Endpoint$EndpointStatus | null): Promise<Endpoint | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Endpoint$EndpointStatus'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setStatusSync(var0: org_hl7_fhir_r4_model_Endpoint$EndpointStatus | null): Endpoint | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setIdentifier(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<Endpoint | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setIdentifierSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Endpoint | null;
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
     * @param var0 original type: 'org.hl7.fhir.r4.model.Identifier'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    addIdentifier(var0: org_hl7_fhir_r4_model_Identifier | null): Promise<Endpoint | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Identifier'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    addIdentifierSync(var0: org_hl7_fhir_r4_model_Identifier | null): Endpoint | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Identifier'
     */
    addIdentifier(): Promise<org_hl7_fhir_r4_model_Identifier | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Identifier'
     */
    addIdentifierSync(): org_hl7_fhir_r4_model_Identifier | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setContact(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<Endpoint | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setContactSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Endpoint | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setNameElement(var0: org_hl7_fhir_r4_model_StringType | null): Promise<Endpoint | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setNameElementSync(var0: org_hl7_fhir_r4_model_StringType | null): Endpoint | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.ContactPoint'
     */
    getContactFirstRep(): Promise<org_hl7_fhir_r4_model_ContactPoint | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ContactPoint'
     */
    getContactFirstRepSync(): org_hl7_fhir_r4_model_ContactPoint | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.ContactPoint'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    addContact(var0: org_hl7_fhir_r4_model_ContactPoint | null): Promise<Endpoint | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.ContactPoint'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    addContactSync(var0: org_hl7_fhir_r4_model_ContactPoint | null): Endpoint | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ContactPoint'
     */
    addContact(): Promise<org_hl7_fhir_r4_model_ContactPoint | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ContactPoint'
     */
    addContactSync(): org_hl7_fhir_r4_model_ContactPoint | null;
    /**
     * @return original return type: 'boolean'
     */
    hasContact(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasContactSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setAddress(var0: string | null): Promise<Endpoint | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setAddressSync(var0: string | null): Endpoint | null;
    /**
     * @return original return type: 'boolean'
     */
    hasAddress(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasAddressSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasPeriod(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasPeriodSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Period'
     */
    getPeriod(): Promise<org_hl7_fhir_r4_model_Period | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Period'
     */
    getPeriodSync(): org_hl7_fhir_r4_model_Period | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Period'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setPeriod(var0: org_hl7_fhir_r4_model_Period | null): Promise<Endpoint | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Period'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setPeriodSync(var0: org_hl7_fhir_r4_model_Period | null): Endpoint | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    addHeader(var0: string | null): Promise<Endpoint | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    addHeaderSync(var0: string | null): Endpoint | null;
    /**
     * @return original return type: 'boolean'
     */
    hasManagingOrganization(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasManagingOrganizationSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Organization'
     */
    getManagingOrganizationTarget(): Promise<org_hl7_fhir_r4_model_Organization | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Organization'
     */
    getManagingOrganizationTargetSync(): org_hl7_fhir_r4_model_Organization | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.CodeableConcept'
     */
    getPayloadTypeFirstRep(): Promise<org_hl7_fhir_r4_model_CodeableConcept | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.CodeableConcept'
     */
    getPayloadTypeFirstRepSync(): org_hl7_fhir_r4_model_CodeableConcept | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.CodeType'
     */
    addPayloadMimeTypeElement(): Promise<org_hl7_fhir_r4_model_CodeType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.CodeType'
     */
    addPayloadMimeTypeElementSync(): org_hl7_fhir_r4_model_CodeType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Organization'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setManagingOrganizationTarget(var0: org_hl7_fhir_r4_model_Organization | null): Promise<Endpoint | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Organization'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setManagingOrganizationTargetSync(var0: org_hl7_fhir_r4_model_Organization | null): Endpoint | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.UrlType'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setAddressElement(var0: org_hl7_fhir_r4_model_UrlType | null): Promise<Endpoint | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.UrlType'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    setAddressElementSync(var0: org_hl7_fhir_r4_model_UrlType | null): Endpoint | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.UrlType'
     */
    getAddressElement(): Promise<org_hl7_fhir_r4_model_UrlType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.UrlType'
     */
    getAddressElementSync(): org_hl7_fhir_r4_model_UrlType | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    static newInstanceAsync(): Promise<Endpoint>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Enumeration'
     * @param var1 original type: 'org.hl7.fhir.r4.model.Coding'
     * @param var2 original type: 'org.hl7.fhir.r4.model.UrlType'
     * @return original return type: 'org.hl7.fhir.r4.model.Endpoint'
     */
    static newInstanceAsync(var0: org_hl7_fhir_r4_model_Enumeration | null, var1: org_hl7_fhir_r4_model_Coding | null, var2: org_hl7_fhir_r4_model_UrlType | null): Promise<Endpoint>;
    constructor();
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Enumeration'
     * @param var1 original type: 'org.hl7.fhir.r4.model.Coding'
     * @param var2 original type: 'org.hl7.fhir.r4.model.UrlType'
     */
    constructor(var0: org_hl7_fhir_r4_model_Enumeration | null, var1: org_hl7_fhir_r4_model_Coding | null, var2: org_hl7_fhir_r4_model_UrlType | null);
}
declare const Endpoint_base: typeof EndpointClass;
/**
 * Class org.hl7.fhir.r4.model.Endpoint.
 *
 * This actually imports the java class for further use.
 * The class {@link EndpointClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Endpoint extends Endpoint_base {
}
export default Endpoint;
//# sourceMappingURL=Endpoint.d.ts.map