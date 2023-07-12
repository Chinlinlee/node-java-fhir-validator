import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Base as org_hl7_fhir_r4_model_Base } from "./Base";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
import { RelatedArtifact$RelatedArtifactType as org_hl7_fhir_r4_model_RelatedArtifact$RelatedArtifactType } from "./RelatedArtifact$RelatedArtifactType";
import { Type as org_hl7_fhir_r4_model_Type } from "./Type";
import { Element as org_hl7_fhir_r4_model_Element } from "./Element";
import { StringType as org_hl7_fhir_r4_model_StringType } from "./StringType";
import { MarkdownType as org_hl7_fhir_r4_model_MarkdownType } from "./MarkdownType";
import { Attachment as org_hl7_fhir_r4_model_Attachment } from "./Attachment";
import { CanonicalType as org_hl7_fhir_r4_model_CanonicalType } from "./CanonicalType";
import { Property as org_hl7_fhir_r4_model_Property } from "./Property";
import { UrlType as org_hl7_fhir_r4_model_UrlType } from "./UrlType";
import { Enumeration as org_hl7_fhir_r4_model_Enumeration } from "./Enumeration";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../../../java/util/List";
import { Extension as org_hl7_fhir_r4_model_Extension } from "./Extension";
import { IBaseExtension as org_hl7_fhir_instance_model_api_IBaseExtension } from "./../../instance/model/api/IBaseExtension";
import { IBaseElement as org_hl7_fhir_instance_model_api_IBaseElement } from "./../../instance/model/api/IBaseElement";
import { PrimitiveType as org_hl7_fhir_r4_model_PrimitiveType } from "./PrimitiveType";
import { SimpleQuantity as org_hl7_fhir_r4_model_SimpleQuantity } from "./SimpleQuantity";
import { MarketingStatus as org_hl7_fhir_r4_model_MarketingStatus } from "./MarketingStatus";
import { ProductShelfLife as org_hl7_fhir_r4_model_ProductShelfLife } from "./ProductShelfLife";
import { ProdCharacteristic as org_hl7_fhir_r4_model_ProdCharacteristic } from "./ProdCharacteristic";
import { TriggerDefinition as org_hl7_fhir_r4_model_TriggerDefinition } from "./TriggerDefinition";
import { SubstanceAmount as org_hl7_fhir_r4_model_SubstanceAmount } from "./SubstanceAmount";
import { ParameterDefinition as org_hl7_fhir_r4_model_ParameterDefinition } from "./ParameterDefinition";
import { Narrative as org_hl7_fhir_r4_model_Narrative } from "./Narrative";
import { Resource as org_hl7_fhir_r4_model_Resource } from "./Resource";
import { IdType as org_hl7_fhir_r4_model_IdType } from "./IdType";
import { Meta as org_hl7_fhir_r4_model_Meta } from "./Meta";
import { UriType as org_hl7_fhir_r4_model_UriType } from "./UriType";
import { CodeType as org_hl7_fhir_r4_model_CodeType } from "./CodeType";
import { XhtmlNode as org_hl7_fhir_utilities_xhtml_XhtmlNode } from "./../../utilities/xhtml/XhtmlNode";
import { Timing as org_hl7_fhir_r4_model_Timing } from "./Timing";
import { Ratio as org_hl7_fhir_r4_model_Ratio } from "./Ratio";
import { Period as org_hl7_fhir_r4_model_Period } from "./Period";
import { DecimalType as org_hl7_fhir_r4_model_DecimalType } from "./DecimalType";
import { PositiveIntType as org_hl7_fhir_r4_model_PositiveIntType } from "./PositiveIntType";
import { Reference as org_hl7_fhir_r4_model_Reference } from "./Reference";
import { Base64BinaryType as org_hl7_fhir_r4_model_Base64BinaryType } from "./Base64BinaryType";
import { Quantity as org_hl7_fhir_r4_model_Quantity } from "./Quantity";
import { ContactPoint as org_hl7_fhir_r4_model_ContactPoint } from "./ContactPoint";
import { DateType as org_hl7_fhir_r4_model_DateType } from "./DateType";
import { Expression as org_hl7_fhir_r4_model_Expression } from "./Expression";
import { HumanName as org_hl7_fhir_r4_model_HumanName } from "./HumanName";
import { Address as org_hl7_fhir_r4_model_Address } from "./Address";
import { BaseDateTimeType as org_hl7_fhir_r4_model_BaseDateTimeType } from "./BaseDateTimeType";
import { CodeableConcept as org_hl7_fhir_r4_model_CodeableConcept } from "./CodeableConcept";
import { ContactDetail as org_hl7_fhir_r4_model_ContactDetail } from "./ContactDetail";
import { InstantType as org_hl7_fhir_r4_model_InstantType } from "./InstantType";
import { Coding as org_hl7_fhir_r4_model_Coding } from "./Coding";
import { UnsignedIntType as org_hl7_fhir_r4_model_UnsignedIntType } from "./UnsignedIntType";
import { IntegerType as org_hl7_fhir_r4_model_IntegerType } from "./IntegerType";
import { Identifier as org_hl7_fhir_r4_model_Identifier } from "./Identifier";
import { DateTimeType as org_hl7_fhir_r4_model_DateTimeType } from "./DateTimeType";
import { UsageContext as org_hl7_fhir_r4_model_UsageContext } from "./UsageContext";
import { BooleanType as org_hl7_fhir_r4_model_BooleanType } from "./BooleanType";
import { DataRequirement as org_hl7_fhir_r4_model_DataRequirement } from "./DataRequirement";
import { ElementDefinition as org_hl7_fhir_r4_model_ElementDefinition } from "./ElementDefinition";
import { TimeType as org_hl7_fhir_r4_model_TimeType } from "./TimeType";
import { OidType as org_hl7_fhir_r4_model_OidType } from "./OidType";
import { Population as org_hl7_fhir_r4_model_Population } from "./Population";
import { Money as org_hl7_fhir_r4_model_Money } from "./Money";
import { Annotation as org_hl7_fhir_r4_model_Annotation } from "./Annotation";
import { Dosage as org_hl7_fhir_r4_model_Dosage } from "./Dosage";
import { Contributor as org_hl7_fhir_r4_model_Contributor } from "./Contributor";
import { SampledData as org_hl7_fhir_r4_model_SampledData } from "./SampledData";
import { Signature as org_hl7_fhir_r4_model_Signature } from "./Signature";
import { Range as org_hl7_fhir_r4_model_Range } from "./Range";
import { Duration as org_hl7_fhir_r4_model_Duration } from "./Duration";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link RelatedArtifact} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class RelatedArtifactClass extends JavaClass {
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
     * @return original return type: 'java.lang.String'
     */
    getResource(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getResourceSync(): string | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact$RelatedArtifactType'
     */
    getType(): Promise<org_hl7_fhir_r4_model_RelatedArtifact$RelatedArtifactType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact$RelatedArtifactType'
     */
    getTypeSync(): org_hl7_fhir_r4_model_RelatedArtifact$RelatedArtifactType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    copy(): Promise<org_hl7_fhir_r4_model_Type | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    copySync(): org_hl7_fhir_r4_model_Type | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Element'
     */
    copy(): Promise<org_hl7_fhir_r4_model_Element | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Element'
     */
    copySync(): org_hl7_fhir_r4_model_Element | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    copy(): Promise<RelatedArtifact | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    copySync(): RelatedArtifact | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    fhirType(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    fhirTypeSync(): string | null;
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
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    setUrl(var0: string | null): Promise<RelatedArtifact | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    setUrlSync(var0: string | null): RelatedArtifact | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.RelatedArtifact$RelatedArtifactType'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    setType(var0: org_hl7_fhir_r4_model_RelatedArtifact$RelatedArtifactType | null): Promise<RelatedArtifact | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.RelatedArtifact$RelatedArtifactType'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    setTypeSync(var0: org_hl7_fhir_r4_model_RelatedArtifact$RelatedArtifactType | null): RelatedArtifact | null;
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
    hasDisplayElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasDisplayElementSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getDisplayElement(): Promise<org_hl7_fhir_r4_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getDisplayElementSync(): org_hl7_fhir_r4_model_StringType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    setDisplayElement(var0: org_hl7_fhir_r4_model_StringType | null): Promise<RelatedArtifact | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    setDisplayElementSync(var0: org_hl7_fhir_r4_model_StringType | null): RelatedArtifact | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    setResource(var0: string | null): Promise<RelatedArtifact | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    setResourceSync(var0: string | null): RelatedArtifact | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    setCitationElement(var0: org_hl7_fhir_r4_model_MarkdownType | null): Promise<RelatedArtifact | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    setCitationElementSync(var0: org_hl7_fhir_r4_model_MarkdownType | null): RelatedArtifact | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    setCitation(var0: string | null): Promise<RelatedArtifact | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    setCitationSync(var0: string | null): RelatedArtifact | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.MarkdownType'
     */
    getCitationElement(): Promise<org_hl7_fhir_r4_model_MarkdownType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.MarkdownType'
     */
    getCitationElementSync(): org_hl7_fhir_r4_model_MarkdownType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Attachment'
     */
    getDocument(): Promise<org_hl7_fhir_r4_model_Attachment | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Attachment'
     */
    getDocumentSync(): org_hl7_fhir_r4_model_Attachment | null;
    /**
     * @return original return type: 'boolean'
     */
    hasDocument(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasDocumentSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.CanonicalType'
     */
    getResourceElement(): Promise<org_hl7_fhir_r4_model_CanonicalType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.CanonicalType'
     */
    getResourceElementSync(): org_hl7_fhir_r4_model_CanonicalType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasResourceElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasResourceElementSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasCitation(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasCitationSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Attachment'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    setDocument(var0: org_hl7_fhir_r4_model_Attachment | null): Promise<RelatedArtifact | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Attachment'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    setDocumentSync(var0: org_hl7_fhir_r4_model_Attachment | null): RelatedArtifact | null;
    /**
     * @return original return type: 'boolean'
     */
    hasCitationElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasCitationElementSync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCitation(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCitationSync(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    hasResource(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasResourceSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.CanonicalType'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    setResourceElement(var0: org_hl7_fhir_r4_model_CanonicalType | null): Promise<RelatedArtifact | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.CanonicalType'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    setResourceElementSync(var0: org_hl7_fhir_r4_model_CanonicalType | null): RelatedArtifact | null;
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
     * @return original return type: 'boolean'
     */
    hasDisplay(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasDisplaySync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    getDisplay(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getDisplaySync(): string | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     * @return original return type: 'void'
     */
    copyValues(var0: RelatedArtifactClass | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     * @return original return type: 'void'
     */
    copyValuesSync(var0: RelatedArtifactClass | null): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Element'
     * @return original return type: 'void'
     */
    copyValues(var0: org_hl7_fhir_r4_model_Element | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Element'
     * @return original return type: 'void'
     */
    copyValuesSync(var0: org_hl7_fhir_r4_model_Element | null): void;
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
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    setDisplay(var0: string | null): Promise<RelatedArtifact | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    setDisplaySync(var0: string | null): RelatedArtifact | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.UrlType'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    setUrlElement(var0: org_hl7_fhir_r4_model_UrlType | null): Promise<RelatedArtifact | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.UrlType'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    setUrlElementSync(var0: org_hl7_fhir_r4_model_UrlType | null): RelatedArtifact | null;
    /**
     * @return original return type: 'boolean'
     */
    hasUrl(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasUrlSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasUrlElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasUrlElementSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.UrlType'
     */
    getUrlElement(): Promise<org_hl7_fhir_r4_model_UrlType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.UrlType'
     */
    getUrlElementSync(): org_hl7_fhir_r4_model_UrlType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Enumeration'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    setTypeElement(var0: org_hl7_fhir_r4_model_Enumeration | null): Promise<RelatedArtifact | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Enumeration'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    setTypeElementSync(var0: org_hl7_fhir_r4_model_Enumeration | null): RelatedArtifact | null;
    /**
     * @return original return type: 'boolean'
     */
    hasTypeElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasTypeElementSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Enumeration'
     */
    getTypeElement(): Promise<org_hl7_fhir_r4_model_Enumeration | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Enumeration'
     */
    getTypeElementSync(): org_hl7_fhir_r4_model_Enumeration | null;
    /**
     * @return original return type: 'boolean'
     */
    hasLabel(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasLabelSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    setLabelElement(var0: org_hl7_fhir_r4_model_StringType | null): Promise<RelatedArtifact | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    setLabelElementSync(var0: org_hl7_fhir_r4_model_StringType | null): RelatedArtifact | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getLabel(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getLabelSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    setLabel(var0: string | null): Promise<RelatedArtifact | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    setLabelSync(var0: string | null): RelatedArtifact | null;
    /**
     * @return original return type: 'boolean'
     */
    hasLabelElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasLabelElementSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getLabelElement(): Promise<org_hl7_fhir_r4_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getLabelElementSync(): org_hl7_fhir_r4_model_StringType | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getId(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getIdSync(): string | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getExtension(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getExtensionSync(): java_util_List | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.Element'
     */
    setExtension(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<org_hl7_fhir_r4_model_Element | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.Element'
     */
    setExtensionSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): org_hl7_fhir_r4_model_Element | null;
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
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    removeExtension(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    removeExtensionSync(var0: string | null): void;
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
     * @return original return type: 'java.lang.String'
     */
    getIdBase(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getIdBaseSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getExtensionString(var0: string | null): Promise<string | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    getExtensionStringSync(var0: string | null): string | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.Element'
     */
    noExtensions(): Promise<org_hl7_fhir_r4_model_Element | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Element'
     */
    noExtensionsSync(): org_hl7_fhir_r4_model_Element | null;
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
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseExtension'
     */
    addExtension(): Promise<org_hl7_fhir_instance_model_api_IBaseExtension | null>;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseExtension'
     */
    addExtensionSync(): org_hl7_fhir_instance_model_api_IBaseExtension | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Extension'
     */
    addExtension(): Promise<org_hl7_fhir_r4_model_Extension | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Extension'
     */
    addExtensionSync(): org_hl7_fhir_r4_model_Extension | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Extension'
     * @return original return type: 'org.hl7.fhir.r4.model.Element'
     */
    addExtension(var0: org_hl7_fhir_r4_model_Extension | null): Promise<org_hl7_fhir_r4_model_Element | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Extension'
     * @return original return type: 'org.hl7.fhir.r4.model.Element'
     */
    addExtensionSync(var0: org_hl7_fhir_r4_model_Extension | null): org_hl7_fhir_r4_model_Element | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Extension'
     */
    getExtensionFirstRep(): Promise<org_hl7_fhir_r4_model_Extension | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Extension'
     */
    getExtensionFirstRepSync(): org_hl7_fhir_r4_model_Extension | null;
    /**
     * @return original return type: 'boolean'
     */
    isDisallowExtensions(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isDisallowExtensionsSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r4.model.Element'
     */
    setDisallowExtensions(var0: java_lang_Boolean | boolean): Promise<org_hl7_fhir_r4_model_Element | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r4.model.Element'
     */
    setDisallowExtensionsSync(var0: java_lang_Boolean | boolean): org_hl7_fhir_r4_model_Element | null;
    /**
     * @return original return type: 'boolean'
     */
    hasIdElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasIdElementSync(): boolean;
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
     * @return original return type: 'boolean'
     */
    hasId(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasIdSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getIdElement(): Promise<org_hl7_fhir_r4_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getIdElementSync(): org_hl7_fhir_r4_model_StringType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.Element'
     */
    setIdElement(var0: org_hl7_fhir_r4_model_StringType | null): Promise<org_hl7_fhir_r4_model_Element | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.Element'
     */
    setIdElementSync(var0: org_hl7_fhir_r4_model_StringType | null): org_hl7_fhir_r4_model_Element | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Element'
     */
    setId(var0: string | null): Promise<org_hl7_fhir_r4_model_Element | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Element'
     */
    setIdSync(var0: string | null): org_hl7_fhir_r4_model_Element | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseElement'
     */
    setId(var0: string | null): Promise<org_hl7_fhir_instance_model_api_IBaseElement | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseElement'
     */
    setIdSync(var0: string | null): org_hl7_fhir_instance_model_api_IBaseElement | null;
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
     * @return original return type: 'java.util.List'
     */
    children(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    childrenSync(): java_util_List | null;
    /**
     * @return original return type: 'boolean'
     */
    isResource(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isResourceSync(): boolean;
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
    castToRelatedArtifact(var0: org_hl7_fhir_r4_model_Base | null): Promise<RelatedArtifact | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    castToRelatedArtifactSync(var0: org_hl7_fhir_r4_model_Base | null): RelatedArtifact | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.UriType'
     */
    castToUri(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_UriType | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.UriType'
     */
    castToUriSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_UriType | null;
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
     * @return original return type: 'java.lang.String'
     */
    primitiveValue(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    primitiveValueSync(): string | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    castToType(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_Type | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    castToTypeSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_Type | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPost(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPostSync(): java_util_List | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPre(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPreSync(): java_util_List | null;
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
     * @return original return type: 'boolean'
     */
    isDateTime(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isDateTimeSync(): boolean;
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
     * @return original return type: 'int'
     */
    getUserInt(var0: string | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'int'
     */
    getUserIntSync(var0: string | null): number;
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
     * @return original return type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    dateTimeValue(): Promise<org_hl7_fhir_r4_model_BaseDateTimeType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    dateTimeValueSync(): org_hl7_fhir_r4_model_BaseDateTimeType | null;
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
     * @return original return type: 'boolean'
     */
    isBooleanPrimitive(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isBooleanPrimitiveSync(): boolean;
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
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    getXhtml(): Promise<org_hl7_fhir_utilities_xhtml_XhtmlNode | null>;
    /**
     * @return original return type: 'org.hl7.fhir.utilities.xhtml.XhtmlNode'
     */
    getXhtmlSync(): org_hl7_fhir_utilities_xhtml_XhtmlNode | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.ContactDetail'
     */
    castToContactDetail(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_ContactDetail | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.ContactDetail'
     */
    castToContactDetailSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_ContactDetail | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.TimeType'
     */
    castToTime(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_TimeType | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.TimeType'
     */
    castToTimeSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_TimeType | null;
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
     * @return original return type: 'java.lang.String'
     */
    castToXhtmlString(var0: org_hl7_fhir_r4_model_Base | null): Promise<string | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'java.lang.String'
     */
    castToXhtmlStringSync(var0: org_hl7_fhir_r4_model_Base | null): string | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    static newInstanceAsync(): Promise<RelatedArtifact>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Enumeration'
     * @return original return type: 'org.hl7.fhir.r4.model.RelatedArtifact'
     */
    static newInstanceAsync(var0: org_hl7_fhir_r4_model_Enumeration | null): Promise<RelatedArtifact>;
    constructor();
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Enumeration'
     */
    constructor(var0: org_hl7_fhir_r4_model_Enumeration | null);
}
declare const RelatedArtifact_base: typeof RelatedArtifactClass;
/**
 * Class org.hl7.fhir.r4.model.RelatedArtifact.
 *
 * This actually imports the java class for further use.
 * The class {@link RelatedArtifactClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class RelatedArtifact extends RelatedArtifact_base {
}
export default RelatedArtifact;
//# sourceMappingURL=RelatedArtifact.d.ts.map