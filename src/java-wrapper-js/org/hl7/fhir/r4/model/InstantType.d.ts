import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { TemporalPrecisionEnum as ca_uhn_fhir_model_api_TemporalPrecisionEnum } from "./../../../../../ca/uhn/fhir/model/api/TemporalPrecisionEnum";
import { Element as org_hl7_fhir_r4_model_Element } from "./Element";
import { Type as org_hl7_fhir_r4_model_Type } from "./Type";
import { Date as java_util_Date } from "./../../../../../java/util/Date";
import { DateTimeType as org_hl7_fhir_r4_model_DateTimeType } from "./DateTimeType";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { PrimitiveType as org_hl7_fhir_r4_model_PrimitiveType } from "./PrimitiveType";
import { IPrimitiveType as org_hl7_fhir_instance_model_api_IPrimitiveType } from "./../../instance/model/api/IPrimitiveType";
import { BaseDateTimeType as org_hl7_fhir_r4_model_BaseDateTimeType } from "./BaseDateTimeType";
import { TimeZone as java_util_TimeZone } from "./../../../../../java/util/TimeZone";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Calendar as java_util_Calendar } from "./../../../../../java/util/Calendar";
import { GregorianCalendar as java_util_GregorianCalendar } from "./../../../../../java/util/GregorianCalendar";
import { Base as org_hl7_fhir_r4_model_Base } from "./Base";
import { ObjectOutput as java_io_ObjectOutput, ObjectOutputInterface as java_io_ObjectOutputInterface } from "./../../../../../java/io/ObjectOutput";
import { ObjectInput as java_io_ObjectInput, ObjectInputInterface as java_io_ObjectInputInterface } from "./../../../../../java/io/ObjectInput";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../../../java/util/List";
import { Extension as org_hl7_fhir_r4_model_Extension } from "./Extension";
import { Property as org_hl7_fhir_r4_model_Property } from "./Property";
import { StringType as org_hl7_fhir_r4_model_StringType } from "./StringType";
import { IBaseElement as org_hl7_fhir_instance_model_api_IBaseElement } from "./../../instance/model/api/IBaseElement";
import { IBaseExtension as org_hl7_fhir_instance_model_api_IBaseExtension } from "./../../instance/model/api/IBaseExtension";
import { UrlType as org_hl7_fhir_r4_model_UrlType } from "./UrlType";
import { Base64BinaryType as org_hl7_fhir_r4_model_Base64BinaryType } from "./Base64BinaryType";
import { IdType as org_hl7_fhir_r4_model_IdType } from "./IdType";
import { Resource as org_hl7_fhir_r4_model_Resource } from "./Resource";
import { Narrative as org_hl7_fhir_r4_model_Narrative } from "./Narrative";
import { XhtmlNode as org_hl7_fhir_utilities_xhtml_XhtmlNode } from "./../../utilities/xhtml/XhtmlNode";
import { UriType as org_hl7_fhir_r4_model_UriType } from "./UriType";
import { Meta as org_hl7_fhir_r4_model_Meta } from "./Meta";
import { CodeType as org_hl7_fhir_r4_model_CodeType } from "./CodeType";
import { BooleanType as org_hl7_fhir_r4_model_BooleanType } from "./BooleanType";
import { MarkdownType as org_hl7_fhir_r4_model_MarkdownType } from "./MarkdownType";
import { Identifier as org_hl7_fhir_r4_model_Identifier } from "./Identifier";
import { UsageContext as org_hl7_fhir_r4_model_UsageContext } from "./UsageContext";
import { ContactPoint as org_hl7_fhir_r4_model_ContactPoint } from "./ContactPoint";
import { PositiveIntType as org_hl7_fhir_r4_model_PositiveIntType } from "./PositiveIntType";
import { Period as org_hl7_fhir_r4_model_Period } from "./Period";
import { Quantity as org_hl7_fhir_r4_model_Quantity } from "./Quantity";
import { DecimalType as org_hl7_fhir_r4_model_DecimalType } from "./DecimalType";
import { Reference as org_hl7_fhir_r4_model_Reference } from "./Reference";
import { Expression as org_hl7_fhir_r4_model_Expression } from "./Expression";
import { HumanName as org_hl7_fhir_r4_model_HumanName } from "./HumanName";
import { Address as org_hl7_fhir_r4_model_Address } from "./Address";
import { DateType as org_hl7_fhir_r4_model_DateType } from "./DateType";
import { Attachment as org_hl7_fhir_r4_model_Attachment } from "./Attachment";
import { CodeableConcept as org_hl7_fhir_r4_model_CodeableConcept } from "./CodeableConcept";
import { ContactDetail as org_hl7_fhir_r4_model_ContactDetail } from "./ContactDetail";
import { Coding as org_hl7_fhir_r4_model_Coding } from "./Coding";
import { CanonicalType as org_hl7_fhir_r4_model_CanonicalType } from "./CanonicalType";
import { UnsignedIntType as org_hl7_fhir_r4_model_UnsignedIntType } from "./UnsignedIntType";
import { IntegerType as org_hl7_fhir_r4_model_IntegerType } from "./IntegerType";
import { DataRequirement as org_hl7_fhir_r4_model_DataRequirement } from "./DataRequirement";
import { Timing as org_hl7_fhir_r4_model_Timing } from "./Timing";
import { Ratio as org_hl7_fhir_r4_model_Ratio } from "./Ratio";
import { ElementDefinition as org_hl7_fhir_r4_model_ElementDefinition } from "./ElementDefinition";
import { TimeType as org_hl7_fhir_r4_model_TimeType } from "./TimeType";
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
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link InstantType} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class InstantTypeClass extends JavaClass {
    /**
     * Original type: 'ca.uhn.fhir.model.api.TemporalPrecisionEnum'
     */
    static readonly DEFAULT_PRECISION: ca_uhn_fhir_model_api_TemporalPrecisionEnum | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.InstantType'
     */
    copy(): Promise<InstantType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.InstantType'
     */
    copySync(): InstantType | null;
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
     * @param var0 original type: 'java.util.Date'
     * @return original return type: 'boolean'
     */
    before(var0: java_util_Date | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.Date'
     * @return original return type: 'boolean'
     */
    beforeSync(var0: java_util_Date | null): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.DateTimeType'
     * @return original return type: 'boolean'
     */
    before(var0: org_hl7_fhir_r4_model_DateTimeType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.DateTimeType'
     * @return original return type: 'boolean'
     */
    beforeSync(var0: org_hl7_fhir_r4_model_DateTimeType | null): boolean;
    /**
     * @param var0 original type: 'java.util.Date'
     * @return original return type: 'boolean'
     */
    after(var0: java_util_Date | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.util.Date'
     * @return original return type: 'boolean'
     */
    afterSync(var0: java_util_Date | null): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.DateTimeType'
     * @return original return type: 'boolean'
     */
    after(var0: org_hl7_fhir_r4_model_DateTimeType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.DateTimeType'
     * @return original return type: 'boolean'
     */
    afterSync(var0: org_hl7_fhir_r4_model_DateTimeType | null): boolean;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.InstantType'
     */
    static now(): Promise<InstantType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.InstantType'
     */
    static nowSync(): InstantType | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    fhirType(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    fhirTypeSync(): string | null;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.InstantType'
     */
    static withCurrentTime(): Promise<InstantType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.InstantType'
     */
    static withCurrentTimeSync(): InstantType | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.InstantType'
     */
    static parseV3(var0: string | null): Promise<InstantType | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.InstantType'
     */
    static parseV3Sync(var0: string | null): InstantType | null;
    /**
     * @return original return type: 'void'
     */
    setToCurrentTimeInLocalTimeZone(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    setToCurrentTimeInLocalTimeZoneSync(): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    add(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    addSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'org.hl7.fhir.r4.model.PrimitiveType'
     */
    setValue(var0: BasicOrJavaType | null): Promise<org_hl7_fhir_r4_model_PrimitiveType | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'org.hl7.fhir.r4.model.PrimitiveType'
     */
    setValueSync(var0: BasicOrJavaType | null): org_hl7_fhir_r4_model_PrimitiveType | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IPrimitiveType'
     */
    setValue(var0: BasicOrJavaType | null): Promise<org_hl7_fhir_instance_model_api_IPrimitiveType | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'org.hl7.fhir.instance.model.api.IPrimitiveType'
     */
    setValueSync(var0: BasicOrJavaType | null): org_hl7_fhir_instance_model_api_IPrimitiveType | null;
    /**
     * @param var0 original type: 'java.util.Date'
     * @param var1 original type: 'ca.uhn.fhir.model.api.TemporalPrecisionEnum'
     * @return original return type: 'void'
     */
    setValue(var0: java_util_Date | null, var1: ca_uhn_fhir_model_api_TemporalPrecisionEnum | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.Date'
     * @param var1 original type: 'ca.uhn.fhir.model.api.TemporalPrecisionEnum'
     * @return original return type: 'void'
     */
    setValueSync(var0: java_util_Date | null, var1: ca_uhn_fhir_model_api_TemporalPrecisionEnum | null): void;
    /**
     * @param var0 original type: 'java.util.Date'
     * @return original return type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    setValue(var0: java_util_Date | null): Promise<org_hl7_fhir_r4_model_BaseDateTimeType | null>;
    /**
     * @param var0 original type: 'java.util.Date'
     * @return original return type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    setValueSync(var0: java_util_Date | null): org_hl7_fhir_r4_model_BaseDateTimeType | null;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getYear(): Promise<number | null>;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getYearSync(): number | null;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getHour(): Promise<number | null>;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getHourSync(): number | null;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getMinute(): Promise<number | null>;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getMinuteSync(): number | null;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getSecond(): Promise<number | null>;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getSecondSync(): number | null;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getMonth(): Promise<number | null>;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getMonthSync(): number | null;
    /**
     * @return original return type: 'ca.uhn.fhir.model.api.TemporalPrecisionEnum'
     */
    getPrecision(): Promise<ca_uhn_fhir_model_api_TemporalPrecisionEnum | null>;
    /**
     * @return original return type: 'ca.uhn.fhir.model.api.TemporalPrecisionEnum'
     */
    getPrecisionSync(): ca_uhn_fhir_model_api_TemporalPrecisionEnum | null;
    /**
     * @param var0 original type: 'java.util.TimeZone'
     * @return original return type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    setTimeZone(var0: java_util_TimeZone | null): Promise<org_hl7_fhir_r4_model_BaseDateTimeType | null>;
    /**
     * @param var0 original type: 'java.util.TimeZone'
     * @return original return type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    setTimeZoneSync(var0: java_util_TimeZone | null): org_hl7_fhir_r4_model_BaseDateTimeType | null;
    /**
     * @return original return type: 'java.util.TimeZone'
     */
    getTimeZone(): Promise<java_util_TimeZone | null>;
    /**
     * @return original return type: 'java.util.TimeZone'
     */
    getTimeZoneSync(): java_util_TimeZone | null;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getMillis(): Promise<number | null>;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getMillisSync(): number | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    setMillis(var0: java_lang_Integer | number): Promise<org_hl7_fhir_r4_model_BaseDateTimeType | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    setMillisSync(var0: java_lang_Integer | number): org_hl7_fhir_r4_model_BaseDateTimeType | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    setMonth(var0: java_lang_Integer | number): Promise<org_hl7_fhir_r4_model_BaseDateTimeType | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    setMonthSync(var0: java_lang_Integer | number): org_hl7_fhir_r4_model_BaseDateTimeType | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    setYear(var0: java_lang_Integer | number): Promise<org_hl7_fhir_r4_model_BaseDateTimeType | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    setYearSync(var0: java_lang_Integer | number): org_hl7_fhir_r4_model_BaseDateTimeType | null;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getDay(): Promise<number | null>;
    /**
     * @return original return type: 'java.lang.Integer'
     */
    getDaySync(): number | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    fpValue(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    fpValueSync(): string | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.model.api.TemporalPrecisionEnum'
     * @return original return type: 'java.lang.String'
     */
    getValueAsString(var0: ca_uhn_fhir_model_api_TemporalPrecisionEnum | null): Promise<string | null>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.model.api.TemporalPrecisionEnum'
     * @return original return type: 'java.lang.String'
     */
    getValueAsStringSync(var0: ca_uhn_fhir_model_api_TemporalPrecisionEnum | null): string | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    getValueAsString(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getValueAsStringSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setValueAsString(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    setValueAsStringSync(var0: string | null): void;
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
    isDateTime(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isDateTimeSync(): boolean;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    setMinute(var0: java_lang_Integer | number): Promise<org_hl7_fhir_r4_model_BaseDateTimeType | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    setMinuteSync(var0: java_lang_Integer | number): org_hl7_fhir_r4_model_BaseDateTimeType | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    setHour(var0: java_lang_Integer | number): Promise<org_hl7_fhir_r4_model_BaseDateTimeType | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    setHourSync(var0: java_lang_Integer | number): org_hl7_fhir_r4_model_BaseDateTimeType | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    setTimeZoneZulu(var0: java_lang_Boolean | boolean): Promise<org_hl7_fhir_r4_model_BaseDateTimeType | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    setTimeZoneZuluSync(var0: java_lang_Boolean | boolean): org_hl7_fhir_r4_model_BaseDateTimeType | null;
    /**
     * @param var0 original type: 'ca.uhn.fhir.model.api.TemporalPrecisionEnum'
     * @return original return type: 'void'
     */
    setPrecision(var0: ca_uhn_fhir_model_api_TemporalPrecisionEnum | null): Promise<void>;
    /**
     * @param var0 original type: 'ca.uhn.fhir.model.api.TemporalPrecisionEnum'
     * @return original return type: 'void'
     */
    setPrecisionSync(var0: ca_uhn_fhir_model_api_TemporalPrecisionEnum | null): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    toHumanDisplay(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toHumanDisplaySync(): string | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    setNanos(var0: java_lang_Long | bigint | number): Promise<org_hl7_fhir_r4_model_BaseDateTimeType | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    setNanosSync(var0: java_lang_Long | bigint | number): org_hl7_fhir_r4_model_BaseDateTimeType | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    setSecond(var0: java_lang_Integer | number): Promise<org_hl7_fhir_r4_model_BaseDateTimeType | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    setSecondSync(var0: java_lang_Integer | number): org_hl7_fhir_r4_model_BaseDateTimeType | null;
    /**
     * @return original return type: 'java.util.Calendar'
     */
    toCalendar(): Promise<java_util_Calendar | null>;
    /**
     * @return original return type: 'java.util.Calendar'
     */
    toCalendarSync(): java_util_Calendar | null;
    /**
     * @return original return type: 'boolean'
     */
    hasTime(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasTimeSync(): boolean;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     * @param var1 original type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     * @param var2 original type: 'java.lang.Integer'
     * @return original return type: 'java.lang.Integer'
     */
    static compareTimes(var0: org_hl7_fhir_r4_model_BaseDateTimeType | null, var1: org_hl7_fhir_r4_model_BaseDateTimeType | null, var2: java_lang_Integer | number | null): Promise<number | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     * @param var1 original type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     * @param var2 original type: 'java.lang.Integer'
     * @return original return type: 'java.lang.Integer'
     */
    static compareTimesSync(var0: org_hl7_fhir_r4_model_BaseDateTimeType | null, var1: org_hl7_fhir_r4_model_BaseDateTimeType | null, var2: java_lang_Integer | number | null): number | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    setDay(var0: java_lang_Integer | number): Promise<org_hl7_fhir_r4_model_BaseDateTimeType | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    setDaySync(var0: java_lang_Integer | number): org_hl7_fhir_r4_model_BaseDateTimeType | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     * @return original return type: 'java.lang.Boolean'
     */
    equalsUsingFhirPathRules(var0: org_hl7_fhir_r4_model_BaseDateTimeType | null): Promise<boolean | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     * @return original return type: 'java.lang.Boolean'
     */
    equalsUsingFhirPathRulesSync(var0: org_hl7_fhir_r4_model_BaseDateTimeType | null): boolean | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    toHumanDisplayLocalTimezone(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toHumanDisplayLocalTimezoneSync(): string | null;
    /**
     * @return original return type: 'java.lang.Long'
     */
    getNanos(): Promise<number | null>;
    /**
     * @return original return type: 'java.lang.Long'
     */
    getNanosSync(): number | null;
    /**
     * @return original return type: 'java.util.GregorianCalendar'
     */
    getValueAsCalendar(): Promise<java_util_GregorianCalendar | null>;
    /**
     * @return original return type: 'java.util.GregorianCalendar'
     */
    getValueAsCalendarSync(): java_util_GregorianCalendar | null;
    /**
     * @return original return type: 'float'
     */
    getSecondsMilli(): Promise<number>;
    /**
     * @return original return type: 'float'
     */
    getSecondsMilliSync(): number;
    /**
     * @return original return type: 'boolean'
     */
    isTimeZoneZulu(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isTimeZoneZuluSync(): boolean;
    /**
     * @return original return type: 'boolean'
     */
    isToday(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isTodaySync(): boolean;
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
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @return original return type: 'boolean'
     */
    isPrimitive(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isPrimitiveSync(): boolean;
    /**
     * @return original return type: 'java.lang.Object'
     */
    getValue(): Promise<BasicOrJavaType | null>;
    /**
     * @return original return type: 'java.lang.Object'
     */
    getValueSync(): BasicOrJavaType | null;
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
     * @return original return type: 'boolean'
     */
    hasValue(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValueSync(): boolean;
    /**
     * @param var0 original type: 'java.io.ObjectOutput'
     * @return original return type: 'void'
     */
    writeExternal(var0: java_io_ObjectOutput | JavaInterfaceProxy<java_io_ObjectOutputInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.io.ObjectOutput'
     * @return original return type: 'void'
     */
    writeExternalSync(var0: java_io_ObjectOutput | JavaInterfaceProxy<java_io_ObjectOutputInterface> | null): void;
    /**
     * @param var0 original type: 'java.io.ObjectInput'
     * @return original return type: 'void'
     */
    readExternal(var0: java_io_ObjectInput | JavaInterfaceProxy<java_io_ObjectInputInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.io.ObjectInput'
     * @return original return type: 'void'
     */
    readExternalSync(var0: java_io_ObjectInput | JavaInterfaceProxy<java_io_ObjectInputInterface> | null): void;
    /**
     * @return original return type: 'java.lang.String'
     */
    asStringValue(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    asStringValueSync(): string | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    fromStringValue(var0: string | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'void'
     */
    fromStringValueSync(var0: string | null): void;
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
    hasPrimitiveValue(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasPrimitiveValueSync(): boolean;
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
     * @return original return type: 'java.lang.String'
     */
    primitiveValue(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    primitiveValueSync(): string | null;
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
     * @return original return type: 'org.hl7.fhir.r4.model.Property'
     */
    getChildByName(var0: string | null): Promise<org_hl7_fhir_r4_model_Property | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.Property'
     */
    getChildByNameSync(var0: string | null): org_hl7_fhir_r4_model_Property | null;
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
    castToInstant(var0: org_hl7_fhir_r4_model_Base | null): Promise<InstantType | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.Base'
     * @return original return type: 'org.hl7.fhir.r4.model.InstantType'
     */
    castToInstantSync(var0: org_hl7_fhir_r4_model_Base | null): InstantType | null;
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
     * @param var0 original type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     * @return original return type: 'org.hl7.fhir.r4.model.InstantType'
     */
    static newInstanceAsync(var0: org_hl7_fhir_r4_model_BaseDateTimeType | null): Promise<InstantType>;
    /**
     * @param var0 original type: 'java.util.Date'
     * @return original return type: 'org.hl7.fhir.r4.model.InstantType'
     */
    static newInstanceAsync(var0: java_util_Date | null): Promise<InstantType>;
    /**
     * @param var0 original type: 'java.util.Date'
     * @param var1 original type: 'ca.uhn.fhir.model.api.TemporalPrecisionEnum'
     * @return original return type: 'org.hl7.fhir.r4.model.InstantType'
     */
    static newInstanceAsync(var0: java_util_Date | null, var1: ca_uhn_fhir_model_api_TemporalPrecisionEnum | null): Promise<InstantType>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r4.model.InstantType'
     */
    static newInstanceAsync(var0: string | null): Promise<InstantType>;
    /**
     * @return original return type: 'org.hl7.fhir.r4.model.InstantType'
     */
    static newInstanceAsync(): Promise<InstantType>;
    /**
     * @param var0 original type: 'java.util.Calendar'
     * @return original return type: 'org.hl7.fhir.r4.model.InstantType'
     */
    static newInstanceAsync(var0: java_util_Calendar | null): Promise<InstantType>;
    /**
     * @param var0 original type: 'java.util.Date'
     * @param var1 original type: 'ca.uhn.fhir.model.api.TemporalPrecisionEnum'
     * @param var2 original type: 'java.util.TimeZone'
     * @return original return type: 'org.hl7.fhir.r4.model.InstantType'
     */
    static newInstanceAsync(var0: java_util_Date | null, var1: ca_uhn_fhir_model_api_TemporalPrecisionEnum | null, var2: java_util_TimeZone | null): Promise<InstantType>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r4.model.BaseDateTimeType'
     */
    constructor(var0: org_hl7_fhir_r4_model_BaseDateTimeType | null);
    /**
     * @param var0 original type: 'java.util.Date'
     */
    constructor(var0: java_util_Date | null);
    /**
     * @param var0 original type: 'java.util.Date'
     * @param var1 original type: 'ca.uhn.fhir.model.api.TemporalPrecisionEnum'
     */
    constructor(var0: java_util_Date | null, var1: ca_uhn_fhir_model_api_TemporalPrecisionEnum | null);
    /**
     * @param var0 original type: 'java.lang.String'
     */
    constructor(var0: string | null);
    constructor();
    /**
     * @param var0 original type: 'java.util.Calendar'
     */
    constructor(var0: java_util_Calendar | null);
    /**
     * @param var0 original type: 'java.util.Date'
     * @param var1 original type: 'ca.uhn.fhir.model.api.TemporalPrecisionEnum'
     * @param var2 original type: 'java.util.TimeZone'
     */
    constructor(var0: java_util_Date | null, var1: ca_uhn_fhir_model_api_TemporalPrecisionEnum | null, var2: java_util_TimeZone | null);
}
declare const InstantType_base: typeof InstantTypeClass;
/**
 * Class org.hl7.fhir.r4.model.InstantType.
 *
 * This actually imports the java class for further use.
 * The class {@link InstantTypeClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class InstantType extends InstantType_base {
}
export default InstantType;
//# sourceMappingURL=InstantType.d.ts.map