import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
import { Base as org_hl7_fhir_r4_model_Base } from "./Base";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../../../java/util/List";
import { ElementDefinition$TypeRefComponent as org_hl7_fhir_r4_model_ElementDefinition$TypeRefComponent } from "./ElementDefinition$TypeRefComponent";
import { Element as org_hl7_fhir_r4_model_Element } from "./Element";
import { Type as org_hl7_fhir_r4_model_Type } from "./Type";
import { BackboneType as org_hl7_fhir_r4_model_BackboneType } from "./BackboneType";
import { ElementDefinition$ElementDefinitionMappingComponent as org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionMappingComponent } from "./ElementDefinition$ElementDefinitionMappingComponent";
import { ElementDefinition$ElementDefinitionBaseComponent as org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionBaseComponent } from "./ElementDefinition$ElementDefinitionBaseComponent";
import { Property as org_hl7_fhir_r4_model_Property } from "./Property";
import { StringType as org_hl7_fhir_r4_model_StringType } from "./StringType";
import { ElementDefinition$PropertyRepresentation as org_hl7_fhir_r4_model_ElementDefinition$PropertyRepresentation } from "./ElementDefinition$PropertyRepresentation";
import { ElementDefinition$ElementDefinitionSlicingComponent as org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionSlicingComponent } from "./ElementDefinition$ElementDefinitionSlicingComponent";
import { Coding as org_hl7_fhir_r4_model_Coding } from "./Coding";
import { MarkdownType as org_hl7_fhir_r4_model_MarkdownType } from "./MarkdownType";
import { UnsignedIntType as org_hl7_fhir_r4_model_UnsignedIntType } from "./UnsignedIntType";
import { ElementDefinition$ElementDefinitionExampleComponent as org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionExampleComponent } from "./ElementDefinition$ElementDefinitionExampleComponent";
import { ElementDefinition$ElementDefinitionConstraintComponent as org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionConstraintComponent } from "./ElementDefinition$ElementDefinitionConstraintComponent";
import { ElementDefinition$ElementDefinitionBindingComponent as org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionBindingComponent } from "./ElementDefinition$ElementDefinitionBindingComponent";
import { IntegerType as org_hl7_fhir_r4_model_IntegerType } from "./IntegerType";
import { TimeType as org_hl7_fhir_r4_model_TimeType } from "./TimeType";
import { BooleanType as org_hl7_fhir_r4_model_BooleanType } from "./BooleanType";
import { PositiveIntType as org_hl7_fhir_r4_model_PositiveIntType } from "./PositiveIntType";
import { DateType as org_hl7_fhir_r4_model_DateType } from "./DateType";
import { IdType as org_hl7_fhir_r4_model_IdType } from "./IdType";
import { DecimalType as org_hl7_fhir_r4_model_DecimalType } from "./DecimalType";
import { Quantity as org_hl7_fhir_r4_model_Quantity } from "./Quantity";
import { DateTimeType as org_hl7_fhir_r4_model_DateTimeType } from "./DateTimeType";
import { InstantType as org_hl7_fhir_r4_model_InstantType } from "./InstantType";
import { Enumeration as org_hl7_fhir_r4_model_Enumeration } from "./Enumeration";
import { UriType as org_hl7_fhir_r4_model_UriType } from "./UriType";
import { Extension as org_hl7_fhir_r4_model_Extension } from "./Extension";
import { IBaseExtension as org_hl7_fhir_instance_model_api_IBaseExtension } from "./../../instance/model/api/IBaseExtension";
import { IBaseElement as org_hl7_fhir_instance_model_api_IBaseElement } from "./../../instance/model/api/IBaseElement";
import { PrimitiveType as org_hl7_fhir_r4_model_PrimitiveType } from "./PrimitiveType";
import { UrlType as org_hl7_fhir_r4_model_UrlType } from "./UrlType";
import { Base64BinaryType as org_hl7_fhir_r4_model_Base64BinaryType } from "./Base64BinaryType";
import { Resource as org_hl7_fhir_r4_model_Resource } from "./Resource";
import { Narrative as org_hl7_fhir_r4_model_Narrative } from "./Narrative";
import { BaseDateTimeType as org_hl7_fhir_r4_model_BaseDateTimeType } from "./BaseDateTimeType";
import { XhtmlNode as org_hl7_fhir_utilities_xhtml_XhtmlNode } from "./../../utilities/xhtml/XhtmlNode";
import { Meta as org_hl7_fhir_r4_model_Meta } from "./Meta";
import { CodeType as org_hl7_fhir_r4_model_CodeType } from "./CodeType";
import { Identifier as org_hl7_fhir_r4_model_Identifier } from "./Identifier";
import { UsageContext as org_hl7_fhir_r4_model_UsageContext } from "./UsageContext";
import { ContactPoint as org_hl7_fhir_r4_model_ContactPoint } from "./ContactPoint";
import { Period as org_hl7_fhir_r4_model_Period } from "./Period";
import { Reference as org_hl7_fhir_r4_model_Reference } from "./Reference";
import { Expression as org_hl7_fhir_r4_model_Expression } from "./Expression";
import { HumanName as org_hl7_fhir_r4_model_HumanName } from "./HumanName";
import { Address as org_hl7_fhir_r4_model_Address } from "./Address";
import { Attachment as org_hl7_fhir_r4_model_Attachment } from "./Attachment";
import { CodeableConcept as org_hl7_fhir_r4_model_CodeableConcept } from "./CodeableConcept";
import { ContactDetail as org_hl7_fhir_r4_model_ContactDetail } from "./ContactDetail";
import { CanonicalType as org_hl7_fhir_r4_model_CanonicalType } from "./CanonicalType";
import { DataRequirement as org_hl7_fhir_r4_model_DataRequirement } from "./DataRequirement";
import { Timing as org_hl7_fhir_r4_model_Timing } from "./Timing";
import { Ratio as org_hl7_fhir_r4_model_Ratio } from "./Ratio";
import { Annotation as org_hl7_fhir_r4_model_Annotation } from "./Annotation";
import { Dosage as org_hl7_fhir_r4_model_Dosage } from "./Dosage";
import { Population as org_hl7_fhir_r4_model_Population } from "./Population";
import { Range as org_hl7_fhir_r4_model_Range } from "./Range";
import { Signature as org_hl7_fhir_r4_model_Signature } from "./Signature";
import { OidType as org_hl7_fhir_r4_model_OidType } from "./OidType";
import { Duration as org_hl7_fhir_r4_model_Duration } from "./Duration";
import { Money as org_hl7_fhir_r4_model_Money } from "./Money";
import { SampledData as org_hl7_fhir_r4_model_SampledData } from "./SampledData";
import { Contributor as org_hl7_fhir_r4_model_Contributor } from "./Contributor";
import { SimpleQuantity as org_hl7_fhir_r4_model_SimpleQuantity } from "./SimpleQuantity";
import { MarketingStatus as org_hl7_fhir_r4_model_MarketingStatus } from "./MarketingStatus";
import { TriggerDefinition as org_hl7_fhir_r4_model_TriggerDefinition } from "./TriggerDefinition";
import { RelatedArtifact as org_hl7_fhir_r4_model_RelatedArtifact } from "./RelatedArtifact";
import { ProdCharacteristic as org_hl7_fhir_r4_model_ProdCharacteristic } from "./ProdCharacteristic";
import { ParameterDefinition as org_hl7_fhir_r4_model_ParameterDefinition } from "./ParameterDefinition";
import { SubstanceAmount as org_hl7_fhir_r4_model_SubstanceAmount } from "./SubstanceAmount";
import { ProductShelfLife as org_hl7_fhir_r4_model_ProductShelfLife } from "./ProductShelfLife";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link ElementDefinition} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ElementDefinitionClass extends JavaClass {
    /**
     * Original type: 'boolean'
     */
    static readonly NOT_MODIFIER: java_lang_Boolean | boolean;
    /**
     * Original type: 'boolean'
     */
    static readonly NOT_IN_SUMMARY: java_lang_Boolean | boolean;
    /**
     * Original type: 'boolean'
     */
    static readonly IS_MODIFIER: java_lang_Boolean | boolean;
    /**
     * Original type: 'boolean'
     */
    static readonly IS_IN_SUMMARY: java_lang_Boolean | boolean;
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
    getShort(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getShortSync(): string | null;
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
     * @return original return type: 'java.util.List'
     */
    getType(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getTypeSync(): java_util_List | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition$TypeRefComponent'
     */
    getType(var0: string | null): Promise<org_hl7_fhir_r4_model_ElementDefinition$TypeRefComponent | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition$TypeRefComponent'
     */
    getTypeSync(var0: string | null): org_hl7_fhir_r4_model_ElementDefinition$TypeRefComponent | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setShort(var0: string | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setShortSync(var0: string | null): ElementDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    copy(): Promise<ElementDefinition | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    copySync(): ElementDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Element'
     */
    copy(): Promise<org_hl7_fhir_r4_model_Element | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Element'
     */
    copySync(): org_hl7_fhir_r4_model_Element | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    copy(): Promise<org_hl7_fhir_r4_model_Type | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    copySync(): org_hl7_fhir_r4_model_Type | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.BackboneType'
     */
    copy(): Promise<org_hl7_fhir_r4_model_BackboneType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.BackboneType'
     */
    copySync(): org_hl7_fhir_r4_model_BackboneType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    getDefaultValue(): Promise<org_hl7_fhir_r4_model_Type | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    getDefaultValueSync(): org_hl7_fhir_r4_model_Type | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getDefinition(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getDefinitionSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPath(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getPathSync(): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getComment(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getCommentSync(): string | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.ElementDefinition$TypeRefComponent'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    addType(var0: org_hl7_fhir_r4_model_ElementDefinition$TypeRefComponent | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.ElementDefinition$TypeRefComponent'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    addTypeSync(var0: org_hl7_fhir_r4_model_ElementDefinition$TypeRefComponent | null): ElementDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition$TypeRefComponent'
     */
    addType(): Promise<org_hl7_fhir_r4_model_ElementDefinition$TypeRefComponent | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition$TypeRefComponent'
     */
    addTypeSync(): org_hl7_fhir_r4_model_ElementDefinition$TypeRefComponent | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    present(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    presentSync(): string | null;
    /**
     * @return original return type: 'int'
     */
    getMin(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getMinSync(): number;
    /**
     * @return original return type: 'java.lang.String'
     */
    getMax(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getMaxSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setComment(var0: string | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setCommentSync(var0: string | null): ElementDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionMappingComponent'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    addMapping(var0: org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionMappingComponent | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionMappingComponent'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    addMappingSync(var0: org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionMappingComponent | null): ElementDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionMappingComponent'
     */
    addMapping(): Promise<org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionMappingComponent | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionMappingComponent'
     */
    addMappingSync(): org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionMappingComponent | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionBaseComponent'
     */
    getBase(): Promise<org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionBaseComponent | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionBaseComponent'
     */
    getBaseSync(): org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionBaseComponent | null;
    /**
     * @return original return type: 'boolean'
     */
    hasCode(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasCodeSync(): boolean;
    /**
     * @return original return type: 'java.util.List'
     */
    getCode(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getCodeSync(): java_util_List | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    fhirType(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    fhirTypeSync(): string | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.ElementDefinition'
     * @return original return type: 'void'
     */
    copyValues(var0: ElementDefinitionClass | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.ElementDefinition'
     * @return original return type: 'void'
     */
    copyValuesSync(var0: ElementDefinitionClass | null): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.BackboneType'
     * @return original return type: 'void'
     */
    copyValues(var0: org_hl7_fhir_r4_model_BackboneType | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.BackboneType'
     * @return original return type: 'void'
     */
    copyValuesSync(var0: org_hl7_fhir_r4_model_BackboneType | null): void;
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
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setMapping(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setMappingSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): ElementDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasMapping(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMappingSync(): boolean;
    /**
     * @return original return type: 'java.util.List'
     */
    getMapping(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getMappingSync(): java_util_List | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionMappingComponent'
     */
    getMappingFirstRep(): Promise<org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionMappingComponent | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionMappingComponent'
     */
    getMappingFirstRepSync(): org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionMappingComponent | null;
    /**
     * @return original return type: 'boolean'
     */
    hasPathElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasPathElementSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setPathElement(var0: org_hl7_fhir_r4_model_StringType | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setPathElementSync(var0: org_hl7_fhir_r4_model_StringType | null): ElementDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getPathElement(): Promise<org_hl7_fhir_r4_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getPathElementSync(): org_hl7_fhir_r4_model_StringType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasPath(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasPathSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasLabel(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasLabelSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.ElementDefinition$PropertyRepresentation'
     * @return original return type: 'boolean'
     */
    hasRepresentation(var0: org_hl7_fhir_r4_model_ElementDefinition$PropertyRepresentation | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.ElementDefinition$PropertyRepresentation'
     * @return original return type: 'boolean'
     */
    hasRepresentationSync(var0: org_hl7_fhir_r4_model_ElementDefinition$PropertyRepresentation | null): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasRepresentation(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasRepresentationSync(): boolean;
    /**
     * @return original return type: 'java.util.List'
     */
    getRepresentation(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getRepresentationSync(): java_util_List | null;
    /**
     * @return original return type: 'boolean'
     */
    hasSliceName(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasSliceNameSync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    getLabel(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getLabelSync(): string | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionSlicingComponent'
     */
    getSlicing(): Promise<org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionSlicingComponent | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionSlicingComponent'
     */
    getSlicingSync(): org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionSlicingComponent | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setRepresentation(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setRepresentationSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): ElementDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.ElementDefinition$PropertyRepresentation'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    addRepresentation(var0: org_hl7_fhir_r4_model_ElementDefinition$PropertyRepresentation | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.ElementDefinition$PropertyRepresentation'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    addRepresentationSync(var0: org_hl7_fhir_r4_model_ElementDefinition$PropertyRepresentation | null): ElementDefinition | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setPath(var0: string | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setPathSync(var0: string | null): ElementDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getLabelElement(): Promise<org_hl7_fhir_r4_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getLabelElementSync(): org_hl7_fhir_r4_model_StringType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setLabel(var0: string | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setLabelSync(var0: string | null): ElementDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Coding'
     */
    getCodeFirstRep(): Promise<org_hl7_fhir_r4_model_Coding | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Coding'
     */
    getCodeFirstRepSync(): org_hl7_fhir_r4_model_Coding | null;
    /**
     * @return original return type: 'boolean'
     */
    hasLabelElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasLabelElementSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Coding'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    addCode(var0: org_hl7_fhir_r4_model_Coding | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Coding'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    addCodeSync(var0: org_hl7_fhir_r4_model_Coding | null): ElementDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Coding'
     */
    addCode(): Promise<org_hl7_fhir_r4_model_Coding | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Coding'
     */
    addCodeSync(): org_hl7_fhir_r4_model_Coding | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setLabelElement(var0: org_hl7_fhir_r4_model_StringType | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setLabelElementSync(var0: org_hl7_fhir_r4_model_StringType | null): ElementDefinition | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getSliceName(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getSliceNameSync(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    hasSlicing(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasSlicingSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionSlicingComponent'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setSlicing(var0: org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionSlicingComponent | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionSlicingComponent'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setSlicingSync(var0: org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionSlicingComponent | null): ElementDefinition | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setSliceName(var0: string | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setSliceNameSync(var0: string | null): ElementDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasRequirements(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasRequirementsSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasShort(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasShortSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.MarkdownType'
     */
    getCommentElement(): Promise<org_hl7_fhir_r4_model_MarkdownType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.MarkdownType'
     */
    getCommentElementSync(): org_hl7_fhir_r4_model_MarkdownType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasAlias(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasAliasSync(var0: string | null): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasAlias(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasAliasSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasCommentElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasCommentElementSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasMinElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMinElementSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasMin(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMinSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasDefinition(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasDefinitionSync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    getRequirements(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getRequirementsSync(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    hasComment(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasCommentSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.UnsignedIntType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setMinElement(var0: org_hl7_fhir_r4_model_UnsignedIntType | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.UnsignedIntType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setMinElementSync(var0: org_hl7_fhir_r4_model_UnsignedIntType | null): ElementDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getShortElement(): Promise<org_hl7_fhir_r4_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getShortElementSync(): org_hl7_fhir_r4_model_StringType | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setAlias(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setAliasSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): ElementDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    addAliasElement(): Promise<org_hl7_fhir_r4_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    addAliasElementSync(): org_hl7_fhir_r4_model_StringType | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getAlias(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getAliasSync(): java_util_List | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    addAlias(var0: string | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    addAliasSync(var0: string | null): ElementDefinition | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setMin(var0: java_lang_Integer | number): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setMinSync(var0: java_lang_Integer | number): ElementDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setShortElement(var0: org_hl7_fhir_r4_model_StringType | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setShortElementSync(var0: org_hl7_fhir_r4_model_StringType | null): ElementDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setCommentElement(var0: org_hl7_fhir_r4_model_MarkdownType | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setCommentElementSync(var0: org_hl7_fhir_r4_model_MarkdownType | null): ElementDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getMaxElement(): Promise<org_hl7_fhir_r4_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getMaxElementSync(): org_hl7_fhir_r4_model_StringType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasMaxElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMaxElementSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasMax(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMaxSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.UnsignedIntType'
     */
    getMinElement(): Promise<org_hl7_fhir_r4_model_UnsignedIntType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.UnsignedIntType'
     */
    getMinElementSync(): org_hl7_fhir_r4_model_UnsignedIntType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setRequirements(var0: string | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setRequirementsSync(var0: string | null): ElementDefinition | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setDefinition(var0: string | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setDefinitionSync(var0: string | null): ElementDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasShortElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasShortElementSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setMax(var0: string | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setMaxSync(var0: string | null): ElementDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasBase(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasBaseSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition$TypeRefComponent'
     */
    getTypeFirstRep(): Promise<org_hl7_fhir_r4_model_ElementDefinition$TypeRefComponent | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition$TypeRefComponent'
     */
    getTypeFirstRepSync(): org_hl7_fhir_r4_model_ElementDefinition$TypeRefComponent | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setMaxElement(var0: org_hl7_fhir_r4_model_StringType | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setMaxElementSync(var0: org_hl7_fhir_r4_model_StringType | null): ElementDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionBaseComponent'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setBase(var0: org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionBaseComponent | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionBaseComponent'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setBaseSync(var0: org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionBaseComponent | null): ElementDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasDefaultValue(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasDefaultValueSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Type'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setDefaultValue(var0: org_hl7_fhir_r4_model_Type | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Type'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setDefaultValueSync(var0: org_hl7_fhir_r4_model_Type | null): ElementDefinition | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getOrderMeaning(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getOrderMeaningSync(): string | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    getFixed(): Promise<org_hl7_fhir_r4_model_Type | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    getFixedSync(): org_hl7_fhir_r4_model_Type | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setOrderMeaning(var0: string | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setOrderMeaningSync(var0: string | null): ElementDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasOrderMeaning(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasOrderMeaningSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    getPattern(): Promise<org_hl7_fhir_r4_model_Type | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    getPatternSync(): org_hl7_fhir_r4_model_Type | null;
    /**
     * @return original return type: 'boolean'
     */
    hasFixed(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasFixedSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Type'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setFixed(var0: org_hl7_fhir_r4_model_Type | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Type'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setFixedSync(var0: org_hl7_fhir_r4_model_Type | null): ElementDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Type'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setPattern(var0: org_hl7_fhir_r4_model_Type | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Type'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setPatternSync(var0: org_hl7_fhir_r4_model_Type | null): ElementDefinition | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setExample(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setExampleSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): ElementDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionExampleComponent'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    addExample(var0: org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionExampleComponent | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionExampleComponent'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    addExampleSync(var0: org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionExampleComponent | null): ElementDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionExampleComponent'
     */
    addExample(): Promise<org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionExampleComponent | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionExampleComponent'
     */
    addExampleSync(): org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionExampleComponent | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionExampleComponent'
     */
    getExampleFirstRep(): Promise<org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionExampleComponent | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionExampleComponent'
     */
    getExampleFirstRepSync(): org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionExampleComponent | null;
    /**
     * @return original return type: 'boolean'
     */
    hasExample(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasExampleSync(): boolean;
    /**
     * @return original return type: 'java.util.List'
     */
    getExample(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getExampleSync(): java_util_List | null;
    /**
     * @return original return type: 'boolean'
     */
    hasPattern(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasPatternSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    getMinValue(): Promise<org_hl7_fhir_r4_model_Type | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    getMinValueSync(): org_hl7_fhir_r4_model_Type | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Type'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setMinValue(var0: org_hl7_fhir_r4_model_Type | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Type'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setMinValueSync(var0: org_hl7_fhir_r4_model_Type | null): ElementDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Type'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setMaxValue(var0: org_hl7_fhir_r4_model_Type | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Type'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setMaxValueSync(var0: org_hl7_fhir_r4_model_Type | null): ElementDefinition | null;
    /**
     * @return original return type: 'int'
     */
    getMaxLength(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getMaxLengthSync(): number;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    getMaxValue(): Promise<org_hl7_fhir_r4_model_Type | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    getMaxValueSync(): org_hl7_fhir_r4_model_Type | null;
    /**
     * @return original return type: 'boolean'
     */
    hasMinValue(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMinValueSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasMaxLength(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMaxLengthSync(): boolean;
    /**
     * @return original return type: 'java.util.List'
     */
    getCondition(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getConditionSync(): java_util_List | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setCondition(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setConditionSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): ElementDefinition | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setMaxLength(var0: java_lang_Integer | number): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setMaxLengthSync(var0: java_lang_Integer | number): ElementDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasMaxValue(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMaxValueSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasCondition(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasConditionSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasCondition(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    hasConditionSync(var0: string | null): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasConstraint(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasConstraintSync(): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    addCondition(var0: string | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    addConditionSync(var0: string | null): ElementDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasIsModifier(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasIsModifierSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    getIsModifier(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    getIsModifierSync(): boolean;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setConstraint(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setConstraintSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): ElementDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionConstraintComponent'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    addConstraint(var0: org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionConstraintComponent | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionConstraintComponent'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    addConstraintSync(var0: org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionConstraintComponent | null): ElementDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionConstraintComponent'
     */
    addConstraint(): Promise<org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionConstraintComponent | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionConstraintComponent'
     */
    addConstraintSync(): org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionConstraintComponent | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setIsModifier(var0: java_lang_Boolean | boolean): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setIsModifierSync(var0: java_lang_Boolean | boolean): ElementDefinition | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getConstraint(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getConstraintSync(): java_util_List | null;
    /**
     * @return original return type: 'boolean'
     */
    hasMustSupport(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMustSupportSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    getMustSupport(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    getMustSupportSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setMustSupport(var0: java_lang_Boolean | boolean): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setMustSupportSync(var0: java_lang_Boolean | boolean): ElementDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionBindingComponent'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setBinding(var0: org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionBindingComponent | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionBindingComponent'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setBindingSync(var0: org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionBindingComponent | null): ElementDefinition | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    makeBase(var0: string | null, var1: java_lang_Integer | number, var2: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    makeBaseSync(var0: string | null, var1: java_lang_Integer | number, var2: string | null): void;
    /**
     * @return original return type: 'void'
     */
    makeBase(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    makeBaseSync(): void;
    /**
     * @return original return type: 'boolean'
     */
    hasBinding(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasBindingSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasFixedOrPattern(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasFixedOrPatternSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setIsSummary(var0: java_lang_Boolean | boolean): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setIsSummarySync(var0: java_lang_Boolean | boolean): ElementDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    getIsSummary(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    getIsSummarySync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasIsSummary(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasIsSummarySync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionBindingComponent'
     */
    getBinding(): Promise<org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionBindingComponent | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionBindingComponent'
     */
    getBindingSync(): org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionBindingComponent | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    getFixedOrPattern(): Promise<org_hl7_fhir_r4_model_Type | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Type'
     */
    getFixedOrPatternSync(): org_hl7_fhir_r4_model_Type | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    typeSummary(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    typeSummarySync(): string | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.MarkdownType'
     */
    getMeaningWhenMissingElement(): Promise<org_hl7_fhir_r4_model_MarkdownType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.MarkdownType'
     */
    getMeaningWhenMissingElementSync(): org_hl7_fhir_r4_model_MarkdownType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getOrderMeaningElement(): Promise<org_hl7_fhir_r4_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getOrderMeaningElementSync(): org_hl7_fhir_r4_model_StringType | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getMeaningWhenMissing(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getMeaningWhenMissingSync(): string | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setOrderMeaningElement(var0: org_hl7_fhir_r4_model_StringType | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setOrderMeaningElementSync(var0: org_hl7_fhir_r4_model_StringType | null): ElementDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setMeaningWhenMissingElement(var0: org_hl7_fhir_r4_model_MarkdownType | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setMeaningWhenMissingElementSync(var0: org_hl7_fhir_r4_model_MarkdownType | null): ElementDefinition | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setMeaningWhenMissing(var0: string | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setMeaningWhenMissingSync(var0: string | null): ElementDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasOrderMeaningElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasOrderMeaningElementSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasMeaningWhenMissing(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMeaningWhenMissingSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasMeaningWhenMissingElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMeaningWhenMissingElementSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.IntegerType'
     */
    getMaxValueIntegerType(): Promise<org_hl7_fhir_r4_model_IntegerType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.IntegerType'
     */
    getMaxValueIntegerTypeSync(): org_hl7_fhir_r4_model_IntegerType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasMinValueDecimalType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMinValueDecimalTypeSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.TimeType'
     */
    getMaxValueTimeType(): Promise<org_hl7_fhir_r4_model_TimeType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.TimeType'
     */
    getMaxValueTimeTypeSync(): org_hl7_fhir_r4_model_TimeType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasMaxValueIntegerType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMaxValueIntegerTypeSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.BooleanType'
     */
    getMustSupportElement(): Promise<org_hl7_fhir_r4_model_BooleanType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.BooleanType'
     */
    getMustSupportElementSync(): org_hl7_fhir_r4_model_BooleanType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasMustSupportElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMustSupportElementSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasMaxValueDateType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMaxValueDateTypeSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.UnsignedIntType'
     */
    getMinValueUnsignedIntType(): Promise<org_hl7_fhir_r4_model_UnsignedIntType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.UnsignedIntType'
     */
    getMinValueUnsignedIntTypeSync(): org_hl7_fhir_r4_model_UnsignedIntType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasMinValueInstantType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMinValueInstantTypeSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.PositiveIntType'
     */
    getMaxValuePositiveIntType(): Promise<org_hl7_fhir_r4_model_PositiveIntType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.PositiveIntType'
     */
    getMaxValuePositiveIntTypeSync(): org_hl7_fhir_r4_model_PositiveIntType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.DateType'
     */
    getMinValueDateType(): Promise<org_hl7_fhir_r4_model_DateType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.DateType'
     */
    getMinValueDateTypeSync(): org_hl7_fhir_r4_model_DateType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasMaxValueTimeType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMaxValueTimeTypeSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasMinValueUnsignedIntType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMinValueUnsignedIntTypeSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasMinValueQuantity(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMinValueQuantitySync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasMinValueIntegerType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMinValueIntegerTypeSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasMaxLengthElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMaxLengthElementSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.IdType'
     */
    addConditionElement(): Promise<org_hl7_fhir_r4_model_IdType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.IdType'
     */
    addConditionElementSync(): org_hl7_fhir_r4_model_IdType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.TimeType'
     */
    getMinValueTimeType(): Promise<org_hl7_fhir_r4_model_TimeType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.TimeType'
     */
    getMinValueTimeTypeSync(): org_hl7_fhir_r4_model_TimeType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasMaxValuePositiveIntType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMaxValuePositiveIntTypeSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasMaxValueInstantType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMaxValueInstantTypeSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.DecimalType'
     */
    getMaxValueDecimalType(): Promise<org_hl7_fhir_r4_model_DecimalType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.DecimalType'
     */
    getMaxValueDecimalTypeSync(): org_hl7_fhir_r4_model_DecimalType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionConstraintComponent'
     */
    getConstraintFirstRep(): Promise<org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionConstraintComponent | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition$ElementDefinitionConstraintComponent'
     */
    getConstraintFirstRepSync(): org_hl7_fhir_r4_model_ElementDefinition$ElementDefinitionConstraintComponent | null;
    /**
     * @return original return type: 'boolean'
     */
    hasMaxValueUnsignedIntType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMaxValueUnsignedIntTypeSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasMaxValueQuantity(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMaxValueQuantitySync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.IntegerType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setMaxLengthElement(var0: org_hl7_fhir_r4_model_IntegerType | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.IntegerType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setMaxLengthElementSync(var0: org_hl7_fhir_r4_model_IntegerType | null): ElementDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasMinValuePositiveIntType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMinValuePositiveIntTypeSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Quantity'
     */
    getMaxValueQuantity(): Promise<org_hl7_fhir_r4_model_Quantity | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Quantity'
     */
    getMaxValueQuantitySync(): org_hl7_fhir_r4_model_Quantity | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.BooleanType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setMustSupportElement(var0: org_hl7_fhir_r4_model_BooleanType | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.BooleanType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setMustSupportElementSync(var0: org_hl7_fhir_r4_model_BooleanType | null): ElementDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.BooleanType'
     */
    getIsModifierElement(): Promise<org_hl7_fhir_r4_model_BooleanType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.BooleanType'
     */
    getIsModifierElementSync(): org_hl7_fhir_r4_model_BooleanType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.IntegerType'
     */
    getMaxLengthElement(): Promise<org_hl7_fhir_r4_model_IntegerType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.IntegerType'
     */
    getMaxLengthElementSync(): org_hl7_fhir_r4_model_IntegerType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.DateTimeType'
     */
    getMinValueDateTimeType(): Promise<org_hl7_fhir_r4_model_DateTimeType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.DateTimeType'
     */
    getMinValueDateTimeTypeSync(): org_hl7_fhir_r4_model_DateTimeType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasMinValueTimeType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMinValueTimeTypeSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.InstantType'
     */
    getMaxValueInstantType(): Promise<org_hl7_fhir_r4_model_InstantType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.InstantType'
     */
    getMaxValueInstantTypeSync(): org_hl7_fhir_r4_model_InstantType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.PositiveIntType'
     */
    getMinValuePositiveIntType(): Promise<org_hl7_fhir_r4_model_PositiveIntType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.PositiveIntType'
     */
    getMinValuePositiveIntTypeSync(): org_hl7_fhir_r4_model_PositiveIntType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.BooleanType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setIsModifierElement(var0: org_hl7_fhir_r4_model_BooleanType | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.BooleanType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setIsModifierElementSync(var0: org_hl7_fhir_r4_model_BooleanType | null): ElementDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getIsModifierReasonElement(): Promise<org_hl7_fhir_r4_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getIsModifierReasonElementSync(): org_hl7_fhir_r4_model_StringType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasMaxValueDateTimeType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMaxValueDateTimeTypeSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.DateTimeType'
     */
    getMaxValueDateTimeType(): Promise<org_hl7_fhir_r4_model_DateTimeType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.DateTimeType'
     */
    getMaxValueDateTimeTypeSync(): org_hl7_fhir_r4_model_DateTimeType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasIsModifierElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasIsModifierElementSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasIsModifierReasonElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasIsModifierReasonElementSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.DecimalType'
     */
    getMinValueDecimalType(): Promise<org_hl7_fhir_r4_model_DecimalType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.DecimalType'
     */
    getMinValueDecimalTypeSync(): org_hl7_fhir_r4_model_DecimalType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasIsModifierReason(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasIsModifierReasonSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setIsModifierReasonElement(var0: org_hl7_fhir_r4_model_StringType | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setIsModifierReasonElementSync(var0: org_hl7_fhir_r4_model_StringType | null): ElementDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.DateType'
     */
    getMaxValueDateType(): Promise<org_hl7_fhir_r4_model_DateType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.DateType'
     */
    getMaxValueDateTypeSync(): org_hl7_fhir_r4_model_DateType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasMinValueDateTimeType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMinValueDateTimeTypeSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.InstantType'
     */
    getMinValueInstantType(): Promise<org_hl7_fhir_r4_model_InstantType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.InstantType'
     */
    getMinValueInstantTypeSync(): org_hl7_fhir_r4_model_InstantType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Quantity'
     */
    getMinValueQuantity(): Promise<org_hl7_fhir_r4_model_Quantity | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Quantity'
     */
    getMinValueQuantitySync(): org_hl7_fhir_r4_model_Quantity | null;
    /**
     * @return original return type: 'boolean'
     */
    hasMinValueDateType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMinValueDateTypeSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasMaxValueDecimalType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasMaxValueDecimalTypeSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.IntegerType'
     */
    getMinValueIntegerType(): Promise<org_hl7_fhir_r4_model_IntegerType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.IntegerType'
     */
    getMinValueIntegerTypeSync(): org_hl7_fhir_r4_model_IntegerType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.UnsignedIntType'
     */
    getMaxValueUnsignedIntType(): Promise<org_hl7_fhir_r4_model_UnsignedIntType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.UnsignedIntType'
     */
    getMaxValueUnsignedIntTypeSync(): org_hl7_fhir_r4_model_UnsignedIntType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasIsSummaryElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasIsSummaryElementSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.BooleanType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setIsSummaryElement(var0: org_hl7_fhir_r4_model_BooleanType | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.BooleanType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setIsSummaryElementSync(var0: org_hl7_fhir_r4_model_BooleanType | null): ElementDefinition | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setIsModifierReason(var0: string | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setIsModifierReasonSync(var0: string | null): ElementDefinition | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getIsModifierReason(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getIsModifierReasonSync(): string | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.BooleanType'
     */
    getIsSummaryElement(): Promise<org_hl7_fhir_r4_model_BooleanType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.BooleanType'
     */
    getIsSummaryElementSync(): org_hl7_fhir_r4_model_BooleanType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setRequirementsElement(var0: org_hl7_fhir_r4_model_MarkdownType | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setRequirementsElementSync(var0: org_hl7_fhir_r4_model_MarkdownType | null): ElementDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.MarkdownType'
     */
    getRequirementsElement(): Promise<org_hl7_fhir_r4_model_MarkdownType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.MarkdownType'
     */
    getRequirementsElementSync(): org_hl7_fhir_r4_model_MarkdownType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getSliceNameElement(): Promise<org_hl7_fhir_r4_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getSliceNameElementSync(): org_hl7_fhir_r4_model_StringType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.BooleanType'
     */
    getSliceIsConstrainingElement(): Promise<org_hl7_fhir_r4_model_BooleanType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.BooleanType'
     */
    getSliceIsConstrainingElementSync(): org_hl7_fhir_r4_model_BooleanType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.MarkdownType'
     */
    getDefinitionElement(): Promise<org_hl7_fhir_r4_model_MarkdownType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.MarkdownType'
     */
    getDefinitionElementSync(): org_hl7_fhir_r4_model_MarkdownType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setContentReference(var0: string | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setContentReferenceSync(var0: string | null): ElementDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setSliceNameElement(var0: org_hl7_fhir_r4_model_StringType | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setSliceNameElementSync(var0: org_hl7_fhir_r4_model_StringType | null): ElementDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasSliceIsConstraining(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasSliceIsConstrainingSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Enumeration'
     */
    addRepresentationElement(): Promise<org_hl7_fhir_r4_model_Enumeration | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Enumeration'
     */
    addRepresentationElementSync(): org_hl7_fhir_r4_model_Enumeration | null;
    /**
     * @return original return type: 'boolean'
     */
    hasSliceIsConstrainingElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasSliceIsConstrainingElementSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.BooleanType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setSliceIsConstrainingElement(var0: org_hl7_fhir_r4_model_BooleanType | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.BooleanType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setSliceIsConstrainingElementSync(var0: org_hl7_fhir_r4_model_BooleanType | null): ElementDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setDefinitionElement(var0: org_hl7_fhir_r4_model_MarkdownType | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.MarkdownType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setDefinitionElementSync(var0: org_hl7_fhir_r4_model_MarkdownType | null): ElementDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasRequirementsElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasRequirementsElementSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasContentReference(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasContentReferenceSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.UriType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setContentReferenceElement(var0: org_hl7_fhir_r4_model_UriType | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.UriType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setContentReferenceElementSync(var0: org_hl7_fhir_r4_model_UriType | null): ElementDefinition | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getContentReference(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getContentReferenceSync(): string | null;
    /**
     * @return original return type: 'boolean'
     */
    hasSliceNameElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasSliceNameElementSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    getSliceIsConstraining(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    getSliceIsConstrainingSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasContentReferenceElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasContentReferenceElementSync(): boolean;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setSliceIsConstraining(var0: java_lang_Boolean | boolean): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setSliceIsConstrainingSync(var0: java_lang_Boolean | boolean): ElementDefinition | null;
    /**
     * @return original return type: 'boolean'
     */
    hasDefinitionElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasDefinitionElementSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.UriType'
     */
    getContentReferenceElement(): Promise<org_hl7_fhir_r4_model_UriType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.UriType'
     */
    getContentReferenceElementSync(): org_hl7_fhir_r4_model_UriType | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setCode(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setCodeSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): ElementDefinition | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setType(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    setTypeSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): ElementDefinition | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.BackboneType'
     */
    setModifierExtension(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<org_hl7_fhir_r4_model_BackboneType | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r4.model.BackboneType'
     */
    setModifierExtensionSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): org_hl7_fhir_r4_model_BackboneType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasModifierExtension(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasModifierExtensionSync(): boolean;
    /**
     * @return original return type: 'java.util.List'
     */
    getModifierExtension(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getModifierExtensionSync(): java_util_List | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Extension'
     * @return original return type: 'org.hl7.fhir.r4.model.BackboneType'
     */
    addModifierExtension(var0: org_hl7_fhir_r4_model_Extension | null): Promise<org_hl7_fhir_r4_model_BackboneType | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Extension'
     * @return original return type: 'org.hl7.fhir.r4.model.BackboneType'
     */
    addModifierExtensionSync(var0: org_hl7_fhir_r4_model_Extension | null): org_hl7_fhir_r4_model_BackboneType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Extension'
     */
    addModifierExtension(): Promise<org_hl7_fhir_r4_model_Extension | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Extension'
     */
    addModifierExtensionSync(): org_hl7_fhir_r4_model_Extension | null;
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
    getModifierExtensionFirstRep(): Promise<org_hl7_fhir_r4_model_Extension | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.Extension'
     */
    getModifierExtensionFirstRepSync(): org_hl7_fhir_r4_model_Extension | null;
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
    hasId(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasIdSync(): boolean;
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
     * @return original return type: 'boolean'
     */
    hasIdElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasIdElementSync(): boolean;
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
     * @return original return type: 'org.hl7.fhir.r4.model.Element'
     */
    setId(var0: string | null): Promise<org_hl7_fhir_r4_model_Element | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Element'
     */
    setIdSync(var0: string | null): org_hl7_fhir_r4_model_Element | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getIdElement(): Promise<org_hl7_fhir_r4_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.StringType'
     */
    getIdElementSync(): org_hl7_fhir_r4_model_StringType | null;
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
    isDisallowExtensions(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isDisallowExtensionsSync(): boolean;
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
     * @return original return type: 'org.hl7.fhir.r4.model.Extension'
     */
    getExtensionByUrl(var0: string | null): Promise<org_hl7_fhir_r4_model_Extension | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Extension'
     */
    getExtensionByUrlSync(var0: string | null): org_hl7_fhir_r4_model_Extension | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    dateTimeValue(): Promise<org_hl7_fhir_r4_model_BaseDateTimeType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    dateTimeValueSync(): org_hl7_fhir_r4_model_BaseDateTimeType | null;
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
     * @return original return type: 'boolean'
     */
    isDateTime(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isDateTimeSync(): boolean;
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
     * @return original return type: 'org.hl7.fhir.r4.model.UsageContext'
     */
    castToUsageContext(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_UsageContext | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.UsageContext'
     */
    castToUsageContextSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_UsageContext | null;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPost(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getFormatCommentsPostSync(): java_util_List | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    castToElementDefinition(var0: org_hl7_fhir_r4_model_Base | null): Promise<ElementDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    castToElementDefinitionSync(var0: org_hl7_fhir_r4_model_Base | null): ElementDefinition | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.ProductShelfLife'
     */
    castToProductShelfLife(var0: org_hl7_fhir_r4_model_Base | null): Promise<org_hl7_fhir_r4_model_ProductShelfLife | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.ProductShelfLife'
     */
    castToProductShelfLifeSync(var0: org_hl7_fhir_r4_model_Base | null): org_hl7_fhir_r4_model_ProductShelfLife | null;
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
     * @param var0 original type: 'boolean'
     * @param var1 original type: 'boolean'
     * @param var2 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    static newInstanceAsync(var0: java_lang_Boolean | boolean, var1: java_lang_Boolean | boolean, var2: java_lang_Boolean | boolean): Promise<ElementDefinition>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    static newInstanceAsync(var0: org_hl7_fhir_r4_model_StringType | null): Promise<ElementDefinition>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.ElementDefinition'
     */
    static newInstanceAsync(): Promise<ElementDefinition>;
    /**
     * @param var0 original type: 'boolean'
     * @param var1 original type: 'boolean'
     * @param var2 original type: 'boolean'
     */
    constructor(var0: java_lang_Boolean | boolean, var1: java_lang_Boolean | boolean, var2: java_lang_Boolean | boolean);
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.StringType'
     */
    constructor(var0: org_hl7_fhir_r4_model_StringType | null);
    constructor();
}
declare const ElementDefinition_base: typeof ElementDefinitionClass;
/**
 * Class org.hl7.fhir.r4.model.ElementDefinition.
 *
 * This actually imports the java class for further use.
 * The class {@link ElementDefinitionClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ElementDefinition extends ElementDefinition_base {
}
export default ElementDefinition;
//# sourceMappingURL=ElementDefinition.d.ts.map