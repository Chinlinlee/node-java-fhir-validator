import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { TokenClientParam as ca_uhn_fhir_rest_gclient_TokenClientParam } from "./../../../../../ca/uhn/fhir/rest/gclient/TokenClientParam";
import { Include as ca_uhn_fhir_model_api_Include } from "./../../../../../ca/uhn/fhir/model/api/Include";
import { Set as java_util_Set, SetInterface as java_util_SetInterface } from "./../../../../../java/util/Set";
import { FhirVersionEnum as ca_uhn_fhir_context_FhirVersionEnum } from "./../../../../../ca/uhn/fhir/context/FhirVersionEnum";
import { IdType as org_hl7_fhir_r5_model_IdType } from "./IdType";
import { IIdType as org_hl7_fhir_instance_model_api_IIdType, IIdTypeInterface as org_hl7_fhir_instance_model_api_IIdTypeInterface } from "./../../instance/model/api/IIdType";
import { IBaseResource as org_hl7_fhir_instance_model_api_IBaseResource } from "./../../instance/model/api/IBaseResource";
import { IAnyResource as org_hl7_fhir_instance_model_api_IAnyResource } from "./../../instance/model/api/IAnyResource";
import { Base as org_hl7_fhir_r5_model_Base } from "./Base";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
import { PrimitiveType as org_hl7_fhir_r5_model_PrimitiveType } from "./PrimitiveType";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../../../java/util/List";
import { ValidationMessage as org_hl7_fhir_utilities_validation_ValidationMessage } from "./../../utilities/validation/ValidationMessage";
import { XhtmlNode as org_hl7_fhir_utilities_xhtml_XhtmlNode } from "./../../utilities/xhtml/XhtmlNode";
import { Property as org_hl7_fhir_r5_model_Property } from "./Property";
import { BaseDateTimeType as org_hl7_fhir_r5_model_BaseDateTimeType } from "./BaseDateTimeType";
import { Base$ValidationInfo as org_hl7_fhir_r5_model_Base$ValidationInfo } from "./Base$ValidationInfo";
import { StructureDefinition as org_hl7_fhir_r5_model_StructureDefinition } from "./StructureDefinition";
import { ElementDefinition as org_hl7_fhir_r5_model_ElementDefinition } from "./ElementDefinition";
import { Base$ValidationMode as org_hl7_fhir_r5_model_Base$ValidationMode } from "./Base$ValidationMode";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
import { IPrimitiveType as org_hl7_fhir_instance_model_api_IPrimitiveType } from "./../../instance/model/api/IPrimitiveType";
import { IBaseMetaType as org_hl7_fhir_instance_model_api_IBaseMetaType } from "./../../instance/model/api/IBaseMetaType";
/**
 * This class just defines types, you should import {@link BaseResource} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class BaseResourceClass extends JavaClass {
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
     * @param var0 original type: 'org.hl7.fhir.r5.model.IdType'
     * @return original return type: 'org.hl7.fhir.r5.model.BaseResource'
     */
    setIdElement(var0: org_hl7_fhir_r5_model_IdType | null): Promise<BaseResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.IdType'
     * @return original return type: 'org.hl7.fhir.r5.model.BaseResource'
     */
    setIdElementSync(var0: org_hl7_fhir_r5_model_IdType | null): BaseResource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IIdType'
     * @return original return type: 'org.hl7.fhir.r5.model.BaseResource'
     */
    setId(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null): Promise<BaseResource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IIdType'
     * @return original return type: 'org.hl7.fhir.r5.model.BaseResource'
     */
    setIdSync(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null): BaseResource | null;
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
     * @return original return type: 'org.hl7.fhir.r5.model.Base'
     */
    copy(): Promise<org_hl7_fhir_r5_model_Base | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.Base'
     */
    copySync(): org_hl7_fhir_r5_model_Base | null;
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
    hasFormatCommentPost(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasFormatCommentPostSync(): boolean;
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
    hasValidationMessages(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasValidationMessagesSync(): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    fhirType(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    fhirTypeSync(): string | null;
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
     * @return original return type: 'java.lang.String'
     */
    getIdBase(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getIdBaseSync(): string | null;
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
     * @return original return type: 'org.hl7.fhir.r5.model.Base'
     */
    addChild(var0: string | null): Promise<org_hl7_fhir_r5_model_Base | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.model.Base'
     */
    addChildSync(var0: string | null): org_hl7_fhir_r5_model_Base | null;
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
     * @return original return type: 'java.util.List'
     */
    getValidationMessages(): Promise<java_util_List | null>;
    /**
     * @return original return type: 'java.util.List'
     */
    getValidationMessagesSync(): java_util_List | null;
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
    isDateTime(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isDateTimeSync(): boolean;
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
     * @return original return type: 'org.hl7.fhir.r5.model.BaseDateTimeType'
     */
    dateTimeValue(): Promise<org_hl7_fhir_r5_model_BaseDateTimeType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.model.BaseDateTimeType'
     */
    dateTimeValueSync(): org_hl7_fhir_r5_model_BaseDateTimeType | null;
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
     * @return original return type: 'java.lang.String'
     */
    getId(): Promise<string | null>;
    /**
     * @return original return type: 'java.lang.String'
     */
    getIdSync(): string | null;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IPrimitiveType'
     */
    getLanguageElement(): Promise<org_hl7_fhir_instance_model_api_IPrimitiveType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IPrimitiveType'
     */
    getLanguageElementSync(): org_hl7_fhir_instance_model_api_IPrimitiveType | null;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IIdType'
     */
    getIdElement(): Promise<org_hl7_fhir_instance_model_api_IIdType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IIdType'
     */
    getIdElementSync(): org_hl7_fhir_instance_model_api_IIdType | null;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseMetaType'
     */
    getMeta(): Promise<org_hl7_fhir_instance_model_api_IBaseMetaType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseMetaType'
     */
    getMetaSync(): org_hl7_fhir_instance_model_api_IBaseMetaType | null;
}
declare const BaseResource_base: typeof BaseResourceClass;
/**
 * Class org.hl7.fhir.r5.model.BaseResource.
 *
 * This actually imports the java class for further use.
 * The class {@link BaseResourceClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class BaseResource extends BaseResource_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default BaseResource;
//# sourceMappingURL=BaseResource.d.ts.map