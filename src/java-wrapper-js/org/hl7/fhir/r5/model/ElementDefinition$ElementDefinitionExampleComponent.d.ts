import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Base as org_hl7_fhir_r5_model_Base } from "./Base";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
import { DataType as org_hl7_fhir_r5_model_DataType } from "./DataType";
import { Element as org_hl7_fhir_r5_model_Element } from "./Element";
import { Property as org_hl7_fhir_r5_model_Property } from "./Property";
import { ContactDetail as org_hl7_fhir_r5_model_ContactDetail } from "./ContactDetail";
import { ContactPoint as org_hl7_fhir_r5_model_ContactPoint } from "./ContactPoint";
import { SampledData as org_hl7_fhir_r5_model_SampledData } from "./SampledData";
import { UsageContext as org_hl7_fhir_r5_model_UsageContext } from "./UsageContext";
import { Base64BinaryType as org_hl7_fhir_r5_model_Base64BinaryType } from "./Base64BinaryType";
import { UnsignedIntType as org_hl7_fhir_r5_model_UnsignedIntType } from "./UnsignedIntType";
import { CodeableReference as org_hl7_fhir_r5_model_CodeableReference } from "./CodeableReference";
import { TriggerDefinition as org_hl7_fhir_r5_model_TriggerDefinition } from "./TriggerDefinition";
import { CanonicalType as org_hl7_fhir_r5_model_CanonicalType } from "./CanonicalType";
import { DecimalType as org_hl7_fhir_r5_model_DecimalType } from "./DecimalType";
import { Integer64Type as org_hl7_fhir_r5_model_Integer64Type } from "./Integer64Type";
import { ExtendedContactDetail as org_hl7_fhir_r5_model_ExtendedContactDetail } from "./ExtendedContactDetail";
import { InstantType as org_hl7_fhir_r5_model_InstantType } from "./InstantType";
import { PositiveIntType as org_hl7_fhir_r5_model_PositiveIntType } from "./PositiveIntType";
import { ParameterDefinition as org_hl7_fhir_r5_model_ParameterDefinition } from "./ParameterDefinition";
import { RelatedArtifact as org_hl7_fhir_r5_model_RelatedArtifact } from "./RelatedArtifact";
import { BooleanType as org_hl7_fhir_r5_model_BooleanType } from "./BooleanType";
import { DateTimeType as org_hl7_fhir_r5_model_DateTimeType } from "./DateTimeType";
import { Availability as org_hl7_fhir_r5_model_Availability } from "./Availability";
import { MarkdownType as org_hl7_fhir_r5_model_MarkdownType } from "./MarkdownType";
import { IntegerType as org_hl7_fhir_r5_model_IntegerType } from "./IntegerType";
import { DataRequirement as org_hl7_fhir_r5_model_DataRequirement } from "./DataRequirement";
import { CodeableConcept as org_hl7_fhir_r5_model_CodeableConcept } from "./CodeableConcept";
import { StringType as org_hl7_fhir_r5_model_StringType } from "./StringType";
import { DateType as org_hl7_fhir_r5_model_DateType } from "./DateType";
import { IdType as org_hl7_fhir_r5_model_IdType } from "./IdType";
import { OidType as org_hl7_fhir_r5_model_OidType } from "./OidType";
import { CodeType as org_hl7_fhir_r5_model_CodeType } from "./CodeType";
import { TimeType as org_hl7_fhir_r5_model_TimeType } from "./TimeType";
import { Age as org_hl7_fhir_r5_model_Age } from "./Age";
import { UrlType as org_hl7_fhir_r5_model_UrlType } from "./UrlType";
import { UriType as org_hl7_fhir_r5_model_UriType } from "./UriType";
import { UuidType as org_hl7_fhir_r5_model_UuidType } from "./UuidType";
import { Attachment as org_hl7_fhir_r5_model_Attachment } from "./Attachment";
import { Count as org_hl7_fhir_r5_model_Count } from "./Count";
import { Address as org_hl7_fhir_r5_model_Address } from "./Address";
import { Annotation as org_hl7_fhir_r5_model_Annotation } from "./Annotation";
import { Coding as org_hl7_fhir_r5_model_Coding } from "./Coding";
import { Duration as org_hl7_fhir_r5_model_Duration } from "./Duration";
import { RatioRange as org_hl7_fhir_r5_model_RatioRange } from "./RatioRange";
import { Money as org_hl7_fhir_r5_model_Money } from "./Money";
import { Quantity as org_hl7_fhir_r5_model_Quantity } from "./Quantity";
import { Ratio as org_hl7_fhir_r5_model_Ratio } from "./Ratio";
import { Reference as org_hl7_fhir_r5_model_Reference } from "./Reference";
import { Signature as org_hl7_fhir_r5_model_Signature } from "./Signature";
import { Period as org_hl7_fhir_r5_model_Period } from "./Period";
import { Distance as org_hl7_fhir_r5_model_Distance } from "./Distance";
import { HumanName as org_hl7_fhir_r5_model_HumanName } from "./HumanName";
import { Identifier as org_hl7_fhir_r5_model_Identifier } from "./Identifier";
import { Range as org_hl7_fhir_r5_model_Range } from "./Range";
import { Timing as org_hl7_fhir_r5_model_Timing } from "./Timing";
import { Expression as org_hl7_fhir_r5_model_Expression } from "./Expression";
import { Meta as org_hl7_fhir_r5_model_Meta } from "./Meta";
import { Dosage as org_hl7_fhir_r5_model_Dosage } from "./Dosage";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../../../java/util/List";
import { Extension as org_hl7_fhir_r5_model_Extension } from "./Extension";
import { IBaseElement as org_hl7_fhir_instance_model_api_IBaseElement } from "./../../instance/model/api/IBaseElement";
import { IBaseExtension as org_hl7_fhir_instance_model_api_IBaseExtension } from "./../../instance/model/api/IBaseExtension";
import { StandardsStatus as org_hl7_fhir_utilities_StandardsStatus } from "./../../utilities/StandardsStatus";
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
 * This class just defines types, you should import {@link ElementDefinition$ElementDefinitionExampleComponent} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ElementDefinition$ElementDefinitionExampleComponentClass extends JavaClass {
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
     * @return original return type: 'org.hl7.fhir.r5.model.DataType'
     */
    getValue(): Promise<org_hl7_fhir_r5_model_DataType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.DataType'
     */
    getValueSync(): org_hl7_fhir_r5_model_DataType | null;
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
     * @param var0 original type: 'org.hl7.fhir.r5.model.DataType'
     * @return original return type: 'org.hl7.fhir.r5.model.ElementDefinition$ElementDefinitionExampleComponent'
     */
    setValue(var0: org_hl7_fhir_r5_model_DataType | null): Promise<ElementDefinition$ElementDefinitionExampleComponent | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.DataType'
     * @return original return type: 'org.hl7.fhir.r5.model.ElementDefinition$ElementDefinitionExampleComponent'
     */
    setValueSync(var0: org_hl7_fhir_r5_model_DataType | null): ElementDefinition$ElementDefinitionExampleComponent | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Base'
     */
    copy(): Promise<org_hl7_fhir_r5_model_Base | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Base'
     */
    copySync(): org_hl7_fhir_r5_model_Base | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Element'
     */
    copy(): Promise<org_hl7_fhir_r5_model_Element | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Element'
     */
    copySync(): org_hl7_fhir_r5_model_Element | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.ElementDefinition$ElementDefinitionExampleComponent'
     */
    copy(): Promise<ElementDefinition$ElementDefinitionExampleComponent | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.ElementDefinition$ElementDefinitionExampleComponent'
     */
    copySync(): ElementDefinition$ElementDefinitionExampleComponent | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValue(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueSync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    fhirType(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    fhirTypeSync(): string | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.ElementDefinition$ElementDefinitionExampleComponent'
     * @return original return type: 'void'
     */
    copyValues(var0: ElementDefinition$ElementDefinitionExampleComponentClass | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.ElementDefinition$ElementDefinitionExampleComponent'
     * @return original return type: 'void'
     */
    copyValuesSync(var0: ElementDefinition$ElementDefinitionExampleComponentClass | null): void;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Element'
     * @return original return type: 'void'
     */
    copyValues(var0: org_hl7_fhir_r5_model_Element | null): Promise<void>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Element'
     * @return original return type: 'void'
     */
    copyValuesSync(var0: org_hl7_fhir_r5_model_Element | null): void;
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
    hasValueSampledData(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueSampledDataSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasValueDecimalType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueDecimalTypeSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.ContactDetail'
     */
    getValueContactDetail(): Promise<org_hl7_fhir_r5_model_ContactDetail | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.ContactDetail'
     */
    getValueContactDetailSync(): org_hl7_fhir_r5_model_ContactDetail | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.ContactPoint'
     */
    getValueContactPoint(): Promise<org_hl7_fhir_r5_model_ContactPoint | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.ContactPoint'
     */
    getValueContactPointSync(): org_hl7_fhir_r5_model_ContactPoint | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.SampledData'
     */
    getValueSampledData(): Promise<org_hl7_fhir_r5_model_SampledData | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.SampledData'
     */
    getValueSampledDataSync(): org_hl7_fhir_r5_model_SampledData | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValueTriggerDefinition(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueTriggerDefinitionSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.UsageContext'
     */
    getValueUsageContext(): Promise<org_hl7_fhir_r5_model_UsageContext | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.UsageContext'
     */
    getValueUsageContextSync(): org_hl7_fhir_r5_model_UsageContext | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Base64BinaryType'
     */
    getValueBase64BinaryType(): Promise<org_hl7_fhir_r5_model_Base64BinaryType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Base64BinaryType'
     */
    getValueBase64BinaryTypeSync(): org_hl7_fhir_r5_model_Base64BinaryType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.UnsignedIntType'
     */
    getValueUnsignedIntType(): Promise<org_hl7_fhir_r5_model_UnsignedIntType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.UnsignedIntType'
     */
    getValueUnsignedIntTypeSync(): org_hl7_fhir_r5_model_UnsignedIntType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValueBooleanType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueBooleanTypeSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasValueDateTimeType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueDateTimeTypeSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasValueInstantType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueInstantTypeSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasValueAvailability(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueAvailabilitySync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.CodeableReference'
     */
    getValueCodeableReference(): Promise<org_hl7_fhir_r5_model_CodeableReference | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.CodeableReference'
     */
    getValueCodeableReferenceSync(): org_hl7_fhir_r5_model_CodeableReference | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValueRelatedArtifact(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueRelatedArtifactSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasValueExtendedContactDetail(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueExtendedContactDetailSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasValueInteger64Type(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueInteger64TypeSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasValuePositiveIntType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValuePositiveIntTypeSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.TriggerDefinition'
     */
    getValueTriggerDefinition(): Promise<org_hl7_fhir_r5_model_TriggerDefinition | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.TriggerDefinition'
     */
    getValueTriggerDefinitionSync(): org_hl7_fhir_r5_model_TriggerDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalType'
     */
    getValueCanonicalType(): Promise<org_hl7_fhir_r5_model_CanonicalType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.CanonicalType'
     */
    getValueCanonicalTypeSync(): org_hl7_fhir_r5_model_CanonicalType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.DecimalType'
     */
    getValueDecimalType(): Promise<org_hl7_fhir_r5_model_DecimalType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.DecimalType'
     */
    getValueDecimalTypeSync(): org_hl7_fhir_r5_model_DecimalType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValueCodeableReference(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueCodeableReferenceSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Integer64Type'
     */
    getValueInteger64Type(): Promise<org_hl7_fhir_r5_model_Integer64Type | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Integer64Type'
     */
    getValueInteger64TypeSync(): org_hl7_fhir_r5_model_Integer64Type | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValueContactPoint(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueContactPointSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.ExtendedContactDetail'
     */
    getValueExtendedContactDetail(): Promise<org_hl7_fhir_r5_model_ExtendedContactDetail | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.ExtendedContactDetail'
     */
    getValueExtendedContactDetailSync(): org_hl7_fhir_r5_model_ExtendedContactDetail | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.InstantType'
     */
    getValueInstantType(): Promise<org_hl7_fhir_r5_model_InstantType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.InstantType'
     */
    getValueInstantTypeSync(): org_hl7_fhir_r5_model_InstantType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValueCanonicalType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueCanonicalTypeSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasValueBase64BinaryType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueBase64BinaryTypeSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasValueIntegerType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueIntegerTypeSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasValueUnsignedIntType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueUnsignedIntTypeSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.PositiveIntType'
     */
    getValuePositiveIntType(): Promise<org_hl7_fhir_r5_model_PositiveIntType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.PositiveIntType'
     */
    getValuePositiveIntTypeSync(): org_hl7_fhir_r5_model_PositiveIntType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValueDataRequirement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueDataRequirementSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasValueMarkdownType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueMarkdownTypeSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.ParameterDefinition'
     */
    getValueParameterDefinition(): Promise<org_hl7_fhir_r5_model_ParameterDefinition | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.ParameterDefinition'
     */
    getValueParameterDefinitionSync(): org_hl7_fhir_r5_model_ParameterDefinition | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.RelatedArtifact'
     */
    getValueRelatedArtifact(): Promise<org_hl7_fhir_r5_model_RelatedArtifact | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.RelatedArtifact'
     */
    getValueRelatedArtifactSync(): org_hl7_fhir_r5_model_RelatedArtifact | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.BooleanType'
     */
    getValueBooleanType(): Promise<org_hl7_fhir_r5_model_BooleanType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.BooleanType'
     */
    getValueBooleanTypeSync(): org_hl7_fhir_r5_model_BooleanType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.DateTimeType'
     */
    getValueDateTimeType(): Promise<org_hl7_fhir_r5_model_DateTimeType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.DateTimeType'
     */
    getValueDateTimeTypeSync(): org_hl7_fhir_r5_model_DateTimeType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValueParameterDefinition(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueParameterDefinitionSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Availability'
     */
    getValueAvailability(): Promise<org_hl7_fhir_r5_model_Availability | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Availability'
     */
    getValueAvailabilitySync(): org_hl7_fhir_r5_model_Availability | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.MarkdownType'
     */
    getValueMarkdownType(): Promise<org_hl7_fhir_r5_model_MarkdownType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.MarkdownType'
     */
    getValueMarkdownTypeSync(): org_hl7_fhir_r5_model_MarkdownType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValueContactDetail(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueContactDetailSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasValueCodeableConcept(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueCodeableConceptSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.IntegerType'
     */
    getValueIntegerType(): Promise<org_hl7_fhir_r5_model_IntegerType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.IntegerType'
     */
    getValueIntegerTypeSync(): org_hl7_fhir_r5_model_IntegerType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.DataRequirement'
     */
    getValueDataRequirement(): Promise<org_hl7_fhir_r5_model_DataRequirement | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.DataRequirement'
     */
    getValueDataRequirementSync(): org_hl7_fhir_r5_model_DataRequirement | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.CodeableConcept'
     */
    getValueCodeableConcept(): Promise<org_hl7_fhir_r5_model_CodeableConcept | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.CodeableConcept'
     */
    getValueCodeableConceptSync(): org_hl7_fhir_r5_model_CodeableConcept | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValueUsageContext(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueUsageContextSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasLabel(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasLabelSync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    getLabel(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getLabelSync(): string | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StringType'
     */
    getLabelElement(): Promise<org_hl7_fhir_r5_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StringType'
     */
    getLabelElementSync(): org_hl7_fhir_r5_model_StringType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.ElementDefinition$ElementDefinitionExampleComponent'
     */
    setLabel(var0: string | null): Promise<ElementDefinition$ElementDefinitionExampleComponent | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.ElementDefinition$ElementDefinitionExampleComponent'
     */
    setLabelSync(var0: string | null): ElementDefinition$ElementDefinitionExampleComponent | null;
    /**
     * @return original return type: 'boolean'
     */
    hasLabelElement(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasLabelElementSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.ElementDefinition$ElementDefinitionExampleComponent'
     */
    setLabelElement(var0: org_hl7_fhir_r5_model_StringType | null): Promise<ElementDefinition$ElementDefinitionExampleComponent | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.ElementDefinition$ElementDefinitionExampleComponent'
     */
    setLabelElementSync(var0: org_hl7_fhir_r5_model_StringType | null): ElementDefinition$ElementDefinitionExampleComponent | null;
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
     * @return original return type: 'boolean'
     */
    hasValueCodeType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueCodeTypeSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.DateType'
     */
    getValueDateType(): Promise<org_hl7_fhir_r5_model_DateType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.DateType'
     */
    getValueDateTypeSync(): org_hl7_fhir_r5_model_DateType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValueIdType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueIdTypeSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.IdType'
     */
    getValueIdType(): Promise<org_hl7_fhir_r5_model_IdType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.IdType'
     */
    getValueIdTypeSync(): org_hl7_fhir_r5_model_IdType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.OidType'
     */
    getValueOidType(): Promise<org_hl7_fhir_r5_model_OidType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.OidType'
     */
    getValueOidTypeSync(): org_hl7_fhir_r5_model_OidType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValueDateType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueDateTypeSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasValueOidType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueOidTypeSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.CodeType'
     */
    getValueCodeType(): Promise<org_hl7_fhir_r5_model_CodeType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.CodeType'
     */
    getValueCodeTypeSync(): org_hl7_fhir_r5_model_CodeType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValueStringType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueStringTypeSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.TimeType'
     */
    getValueTimeType(): Promise<org_hl7_fhir_r5_model_TimeType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.TimeType'
     */
    getValueTimeTypeSync(): org_hl7_fhir_r5_model_TimeType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Age'
     */
    getValueAge(): Promise<org_hl7_fhir_r5_model_Age | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Age'
     */
    getValueAgeSync(): org_hl7_fhir_r5_model_Age | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.UrlType'
     */
    getValueUrlType(): Promise<org_hl7_fhir_r5_model_UrlType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.UrlType'
     */
    getValueUrlTypeSync(): org_hl7_fhir_r5_model_UrlType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.UriType'
     */
    getValueUriType(): Promise<org_hl7_fhir_r5_model_UriType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.UriType'
     */
    getValueUriTypeSync(): org_hl7_fhir_r5_model_UriType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.UuidType'
     */
    getValueUuidType(): Promise<org_hl7_fhir_r5_model_UuidType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.UuidType'
     */
    getValueUuidTypeSync(): org_hl7_fhir_r5_model_UuidType | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValueAge(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueAgeSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasValueAttachment(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueAttachmentSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasValueCoding(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueCodingSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Attachment'
     */
    getValueAttachment(): Promise<org_hl7_fhir_r5_model_Attachment | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Attachment'
     */
    getValueAttachmentSync(): org_hl7_fhir_r5_model_Attachment | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Count'
     */
    getValueCount(): Promise<org_hl7_fhir_r5_model_Count | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Count'
     */
    getValueCountSync(): org_hl7_fhir_r5_model_Count | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Address'
     */
    getValueAddress(): Promise<org_hl7_fhir_r5_model_Address | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Address'
     */
    getValueAddressSync(): org_hl7_fhir_r5_model_Address | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValueUriType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueUriTypeSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasValueUuidType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueUuidTypeSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasValueTimeType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueTimeTypeSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasValueAddress(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueAddressSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Annotation'
     */
    getValueAnnotation(): Promise<org_hl7_fhir_r5_model_Annotation | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Annotation'
     */
    getValueAnnotationSync(): org_hl7_fhir_r5_model_Annotation | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValueAnnotation(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueAnnotationSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasValueUrlType(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueUrlTypeSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Coding'
     */
    getValueCoding(): Promise<org_hl7_fhir_r5_model_Coding | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Coding'
     */
    getValueCodingSync(): org_hl7_fhir_r5_model_Coding | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StringType'
     */
    getValueStringType(): Promise<org_hl7_fhir_r5_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StringType'
     */
    getValueStringTypeSync(): org_hl7_fhir_r5_model_StringType | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Duration'
     */
    getValueDuration(): Promise<org_hl7_fhir_r5_model_Duration | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Duration'
     */
    getValueDurationSync(): org_hl7_fhir_r5_model_Duration | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValueDuration(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueDurationSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.RatioRange'
     */
    getValueRatioRange(): Promise<org_hl7_fhir_r5_model_RatioRange | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.RatioRange'
     */
    getValueRatioRangeSync(): org_hl7_fhir_r5_model_RatioRange | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Money'
     */
    getValueMoney(): Promise<org_hl7_fhir_r5_model_Money | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Money'
     */
    getValueMoneySync(): org_hl7_fhir_r5_model_Money | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValueIdentifier(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueIdentifierSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasValueRange(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueRangeSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Quantity'
     */
    getValueQuantity(): Promise<org_hl7_fhir_r5_model_Quantity | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Quantity'
     */
    getValueQuantitySync(): org_hl7_fhir_r5_model_Quantity | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValueRatioRange(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueRatioRangeSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Ratio'
     */
    getValueRatio(): Promise<org_hl7_fhir_r5_model_Ratio | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Ratio'
     */
    getValueRatioSync(): org_hl7_fhir_r5_model_Ratio | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Reference'
     */
    getValueReference(): Promise<org_hl7_fhir_r5_model_Reference | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Reference'
     */
    getValueReferenceSync(): org_hl7_fhir_r5_model_Reference | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValueHumanName(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueHumanNameSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasValueReference(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueReferenceSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Signature'
     */
    getValueSignature(): Promise<org_hl7_fhir_r5_model_Signature | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Signature'
     */
    getValueSignatureSync(): org_hl7_fhir_r5_model_Signature | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Period'
     */
    getValuePeriod(): Promise<org_hl7_fhir_r5_model_Period | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Period'
     */
    getValuePeriodSync(): org_hl7_fhir_r5_model_Period | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValueSignature(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueSignatureSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasValueCount(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueCountSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Distance'
     */
    getValueDistance(): Promise<org_hl7_fhir_r5_model_Distance | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Distance'
     */
    getValueDistanceSync(): org_hl7_fhir_r5_model_Distance | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.HumanName'
     */
    getValueHumanName(): Promise<org_hl7_fhir_r5_model_HumanName | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.HumanName'
     */
    getValueHumanNameSync(): org_hl7_fhir_r5_model_HumanName | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Identifier'
     */
    getValueIdentifier(): Promise<org_hl7_fhir_r5_model_Identifier | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Identifier'
     */
    getValueIdentifierSync(): org_hl7_fhir_r5_model_Identifier | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValueMoney(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueMoneySync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasValueQuantity(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueQuantitySync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasValueDistance(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueDistanceSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasValueRatio(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueRatioSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Range'
     */
    getValueRange(): Promise<org_hl7_fhir_r5_model_Range | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Range'
     */
    getValueRangeSync(): org_hl7_fhir_r5_model_Range | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValuePeriod(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValuePeriodSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Timing'
     */
    getValueTiming(): Promise<org_hl7_fhir_r5_model_Timing | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Timing'
     */
    getValueTimingSync(): org_hl7_fhir_r5_model_Timing | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValueExpression(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueExpressionSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    hasValueTiming(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueTimingSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Expression'
     */
    getValueExpression(): Promise<org_hl7_fhir_r5_model_Expression | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Expression'
     */
    getValueExpressionSync(): org_hl7_fhir_r5_model_Expression | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValueMeta(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueMetaSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Meta'
     */
    getValueMeta(): Promise<org_hl7_fhir_r5_model_Meta | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Meta'
     */
    getValueMetaSync(): org_hl7_fhir_r5_model_Meta | null;
    /**
     * @return original return type: 'boolean'
     */
    hasValueDosage(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueDosageSync(): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Dosage'
     */
    getValueDosage(): Promise<org_hl7_fhir_r5_model_Dosage | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Dosage'
     */
    getValueDosageSync(): org_hl7_fhir_r5_model_Dosage | null;
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
     * @return original return type: 'org.hl7.fhir.r5.model.Element'
     */
    setExtension(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<org_hl7_fhir_r5_model_Element | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.model.Element'
     */
    setExtensionSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): org_hl7_fhir_r5_model_Element | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Extension'
     */
    getExtensionFirstRep(): Promise<org_hl7_fhir_r5_model_Extension | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Extension'
     */
    getExtensionFirstRepSync(): org_hl7_fhir_r5_model_Extension | null;
    /**
     * @return original return type: 'boolean'
     */
    hasId(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasIdSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.Element'
     */
    setIdElement(var0: org_hl7_fhir_r5_model_StringType | null): Promise<org_hl7_fhir_r5_model_Element | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StringType'
     * @return original return type: 'org.hl7.fhir.r5.model.Element'
     */
    setIdElementSync(var0: org_hl7_fhir_r5_model_StringType | null): org_hl7_fhir_r5_model_Element | null;
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
     * @return original return type: 'org.hl7.fhir.r5.model.Element'
     */
    setId(var0: string | null): Promise<org_hl7_fhir_r5_model_Element | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Element'
     */
    setIdSync(var0: string | null): org_hl7_fhir_r5_model_Element | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Extension'
     * @return original return type: 'boolean'
     */
    hasExtension(var0: org_hl7_fhir_r5_model_Extension | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Extension'
     * @return original return type: 'boolean'
     */
    hasExtensionSync(var0: org_hl7_fhir_r5_model_Extension | null): boolean;
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
     * @return original return type: 'org.hl7.fhir.r5.model.StringType'
     */
    getIdElement(): Promise<org_hl7_fhir_r5_model_StringType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.StringType'
     */
    getIdElementSync(): org_hl7_fhir_r5_model_StringType | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.model.Element'
     */
    setDisallowExtensions(var0: java_lang_Boolean | boolean): Promise<org_hl7_fhir_r5_model_Element | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.model.Element'
     */
    setDisallowExtensionsSync(var0: java_lang_Boolean | boolean): org_hl7_fhir_r5_model_Element | null;
    /**
     * @return original return type: 'boolean'
     */
    isDisallowExtensions(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isDisallowExtensionsSync(): boolean;
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
     * @param var0 original type: 'org.hl7.fhir.r5.model.Extension'
     * @return original return type: 'org.hl7.fhir.r5.model.Element'
     */
    addExtension(var0: org_hl7_fhir_r5_model_Extension | null): Promise<org_hl7_fhir_r5_model_Element | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Extension'
     * @return original return type: 'org.hl7.fhir.r5.model.Element'
     */
    addExtensionSync(var0: org_hl7_fhir_r5_model_Extension | null): org_hl7_fhir_r5_model_Element | null;
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
     * @return original return type: 'java.lang.String'
     */
    getIdBase(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getIdBaseSync(): string | null;
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
     * @return original return type: 'org.hl7.fhir.r5.model.Element'
     */
    noExtensions(): Promise<org_hl7_fhir_r5_model_Element | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Element'
     */
    noExtensionsSync(): org_hl7_fhir_r5_model_Element | null;
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
     * @return original return type: 'org.hl7.fhir.r5.model.ElementDefinition$ElementDefinitionExampleComponent'
     */
    static newInstanceAsync(): Promise<ElementDefinition$ElementDefinitionExampleComponent>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.r5.model.DataType'
     * @return original return type: 'org.hl7.fhir.r5.model.ElementDefinition$ElementDefinitionExampleComponent'
     */
    static newInstanceAsync(var0: string | null, var1: org_hl7_fhir_r5_model_DataType | null): Promise<ElementDefinition$ElementDefinitionExampleComponent>;
    constructor();
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.r5.model.DataType'
     */
    constructor(var0: string | null, var1: org_hl7_fhir_r5_model_DataType | null);
}
declare const ElementDefinition$ElementDefinitionExampleComponent_base: typeof ElementDefinition$ElementDefinitionExampleComponentClass;
/**
 * Class org.hl7.fhir.r5.model.ElementDefinition$ElementDefinitionExampleComponent.
 *
 * This actually imports the java class for further use.
 * The class {@link ElementDefinition$ElementDefinitionExampleComponentClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ElementDefinition$ElementDefinitionExampleComponent extends ElementDefinition$ElementDefinitionExampleComponent_base {
}
export default ElementDefinition$ElementDefinitionExampleComponent;
//# sourceMappingURL=ElementDefinition$ElementDefinitionExampleComponent.d.ts.map