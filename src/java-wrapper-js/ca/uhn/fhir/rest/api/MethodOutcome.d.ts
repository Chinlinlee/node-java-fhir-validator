import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { IBaseResource as org_hl7_fhir_instance_model_api_IBaseResource, IBaseResourceInterface as org_hl7_fhir_instance_model_api_IBaseResourceInterface } from "./../../../../../org/hl7/fhir/instance/model/api/IBaseResource";
import { IIdType as org_hl7_fhir_instance_model_api_IIdType, IIdTypeInterface as org_hl7_fhir_instance_model_api_IIdTypeInterface } from "./../../../../../org/hl7/fhir/instance/model/api/IIdType";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
import { Map as java_util_Map, MapInterface as java_util_MapInterface } from "./../../../../../java/util/Map";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { Runnable as java_lang_Runnable, RunnableInterface as java_lang_RunnableInterface } from "./../../../../../java/lang/Runnable";
import { Optional as java_util_Optional } from "./../../../../../java/util/Optional";
import { IBaseOperationOutcome as org_hl7_fhir_instance_model_api_IBaseOperationOutcome, IBaseOperationOutcomeInterface as org_hl7_fhir_instance_model_api_IBaseOperationOutcomeInterface } from "./../../../../../org/hl7/fhir/instance/model/api/IBaseOperationOutcome";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link MethodOutcome} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class MethodOutcomeClass extends JavaClass {
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     */
    getResource(): Promise<org_hl7_fhir_instance_model_api_IBaseResource | null>;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     */
    getResourceSync(): org_hl7_fhir_instance_model_api_IBaseResource | null;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IIdType'
     */
    getId(): Promise<org_hl7_fhir_instance_model_api_IIdType | null>;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IIdType'
     */
    getIdSync(): org_hl7_fhir_instance_model_api_IIdType | null;
    /**
     * @param var0 original type: 'java.lang.Boolean'
     * @return original return type: 'ca.uhn.fhir.rest.api.MethodOutcome'
     */
    setCreated(var0: java_lang_Boolean | boolean | null): Promise<MethodOutcome | null>;
    /**
     * @param var0 original type: 'java.lang.Boolean'
     * @return original return type: 'ca.uhn.fhir.rest.api.MethodOutcome'
     */
    setCreatedSync(var0: java_lang_Boolean | boolean | null): MethodOutcome | null;
    /**
     * @return original return type: 'java.lang.Boolean'
     */
    getCreated(): Promise<boolean | null>;
    /**
     * @return original return type: 'java.lang.Boolean'
     */
    getCreatedSync(): boolean | null;
    /**
     * @param var0 original type: 'java.util.Map'
     * @return original return type: 'void'
     */
    setResponseHeaders(var0: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.util.Map'
     * @return original return type: 'void'
     */
    setResponseHeadersSync(var0: java_util_Map | JavaInterfaceProxy<java_util_MapInterface> | null): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setStatusCode(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setStatusCodeSync(var0: java_lang_Integer | number): void;
    /**
     * @return original return type: 'void'
     */
    fireResourceViewCallbacks(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    fireResourceViewCallbacksSync(): void;
    /**
     * @param var0 original type: 'java.lang.Runnable'
     * @return original return type: 'void'
     */
    registerResourceViewCallback(var0: java_lang_Runnable | JavaInterfaceProxy<java_lang_RunnableInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Runnable'
     * @return original return type: 'void'
     */
    registerResourceViewCallbackSync(var0: java_lang_Runnable | JavaInterfaceProxy<java_lang_RunnableInterface> | null): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setCreatedUsingStatusCode(var0: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    setCreatedUsingStatusCodeSync(var0: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.Optional'
     */
    getFirstResponseHeader(var0: string | null): Promise<java_util_Optional | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.util.Optional'
     */
    getFirstResponseHeaderSync(var0: string | null): java_util_Optional | null;
    /**
     * @return original return type: 'int'
     */
    getResponseStatusCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getResponseStatusCodeSync(): number;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IIdType'
     * @return original return type: 'ca.uhn.fhir.rest.api.MethodOutcome'
     */
    setId(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null): Promise<MethodOutcome | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IIdType'
     * @return original return type: 'ca.uhn.fhir.rest.api.MethodOutcome'
     */
    setIdSync(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null): MethodOutcome | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     * @return original return type: 'ca.uhn.fhir.rest.api.MethodOutcome'
     */
    setResource(var0: org_hl7_fhir_instance_model_api_IBaseResource | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseResourceInterface> | null): Promise<MethodOutcome | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBaseResource'
     * @return original return type: 'ca.uhn.fhir.rest.api.MethodOutcome'
     */
    setResourceSync(var0: org_hl7_fhir_instance_model_api_IBaseResource | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseResourceInterface> | null): MethodOutcome | null;
    /**
     * @return original return type: 'java.util.Map'
     */
    getResponseHeaders(): Promise<java_util_Map | null>;
    /**
     * @return original return type: 'java.util.Map'
     */
    getResponseHeadersSync(): java_util_Map | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBaseOperationOutcome'
     * @return original return type: 'ca.uhn.fhir.rest.api.MethodOutcome'
     */
    setOperationOutcome(var0: org_hl7_fhir_instance_model_api_IBaseOperationOutcome | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseOperationOutcomeInterface> | null): Promise<MethodOutcome | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBaseOperationOutcome'
     * @return original return type: 'ca.uhn.fhir.rest.api.MethodOutcome'
     */
    setOperationOutcomeSync(var0: org_hl7_fhir_instance_model_api_IBaseOperationOutcome | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseOperationOutcomeInterface> | null): MethodOutcome | null;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseOperationOutcome'
     */
    getOperationOutcome(): Promise<org_hl7_fhir_instance_model_api_IBaseOperationOutcome | null>;
    /**
     * @return original return type: 'org.hl7.fhir.instance.model.api.IBaseOperationOutcome'
     */
    getOperationOutcomeSync(): org_hl7_fhir_instance_model_api_IBaseOperationOutcome | null;
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
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBaseOperationOutcome'
     * @return original return type: 'ca.uhn.fhir.rest.api.MethodOutcome'
     */
    static newInstanceAsync(var0: org_hl7_fhir_instance_model_api_IBaseOperationOutcome | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseOperationOutcomeInterface> | null): Promise<MethodOutcome>;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IIdType'
     * @return original return type: 'ca.uhn.fhir.rest.api.MethodOutcome'
     */
    static newInstanceAsync(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null): Promise<MethodOutcome>;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IIdType'
     * @param var1 original type: 'org.hl7.fhir.instance.model.api.IBaseOperationOutcome'
     * @param var2 original type: 'java.lang.Boolean'
     * @return original return type: 'ca.uhn.fhir.rest.api.MethodOutcome'
     */
    static newInstanceAsync(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null, var1: org_hl7_fhir_instance_model_api_IBaseOperationOutcome | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseOperationOutcomeInterface> | null, var2: java_lang_Boolean | boolean | null): Promise<MethodOutcome>;
    /**
     * @return original return type: 'ca.uhn.fhir.rest.api.MethodOutcome'
     */
    static newInstanceAsync(): Promise<MethodOutcome>;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IIdType'
     * @param var1 original type: 'java.lang.Boolean'
     * @return original return type: 'ca.uhn.fhir.rest.api.MethodOutcome'
     */
    static newInstanceAsync(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null, var1: java_lang_Boolean | boolean | null): Promise<MethodOutcome>;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IIdType'
     * @param var1 original type: 'org.hl7.fhir.instance.model.api.IBaseOperationOutcome'
     * @return original return type: 'ca.uhn.fhir.rest.api.MethodOutcome'
     */
    static newInstanceAsync(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null, var1: org_hl7_fhir_instance_model_api_IBaseOperationOutcome | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseOperationOutcomeInterface> | null): Promise<MethodOutcome>;
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IBaseOperationOutcome'
     */
    constructor(var0: org_hl7_fhir_instance_model_api_IBaseOperationOutcome | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseOperationOutcomeInterface> | null);
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IIdType'
     */
    constructor(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null);
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IIdType'
     * @param var1 original type: 'org.hl7.fhir.instance.model.api.IBaseOperationOutcome'
     * @param var2 original type: 'java.lang.Boolean'
     */
    constructor(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null, var1: org_hl7_fhir_instance_model_api_IBaseOperationOutcome | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseOperationOutcomeInterface> | null, var2: java_lang_Boolean | boolean | null);
    constructor();
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IIdType'
     * @param var1 original type: 'java.lang.Boolean'
     */
    constructor(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null, var1: java_lang_Boolean | boolean | null);
    /**
     * @param var0 original type: 'org.hl7.fhir.instance.model.api.IIdType'
     * @param var1 original type: 'org.hl7.fhir.instance.model.api.IBaseOperationOutcome'
     */
    constructor(var0: org_hl7_fhir_instance_model_api_IIdType | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IIdTypeInterface> | null, var1: org_hl7_fhir_instance_model_api_IBaseOperationOutcome | JavaInterfaceProxy<org_hl7_fhir_instance_model_api_IBaseOperationOutcomeInterface> | null);
}
declare const MethodOutcome_base: typeof MethodOutcomeClass;
/**
 * Class ca.uhn.fhir.rest.api.MethodOutcome.
 *
 * This actually imports the java class for further use.
 * The class {@link MethodOutcomeClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class MethodOutcome extends MethodOutcome_base {
}
export default MethodOutcome;
//# sourceMappingURL=MethodOutcome.d.ts.map