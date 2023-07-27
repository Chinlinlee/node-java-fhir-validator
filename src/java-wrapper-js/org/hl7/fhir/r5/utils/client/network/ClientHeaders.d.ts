import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { ArrayList as java_util_ArrayList } from "./../../../../../../../java/util/ArrayList";
import { Header as okhttp3_internal_http2_Header } from "./../../../../../../../okhttp3/internal/http2/Header";
import { List as java_util_List, ListInterface as java_util_ListInterface } from "./../../../../../../../java/util/List";
import { Long as java_lang_Long } from "./../../../../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../../../../java/lang/Integer";
import { Class as java_lang_Class } from "./../../../../../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link ClientHeaders} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ClientHeadersClass extends JavaClass {
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): Promise<string>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @return original return type: 'java.util.ArrayList'
     */
    headers(): Promise<java_util_ArrayList | null>;
    /**
     * @return original return type: 'java.util.ArrayList'
     */
    headersSync(): java_util_ArrayList | null;
    /**
     * @param var0 original type: 'okhttp3.internal.http2.Header'
     * @return original return type: 'org.hl7.fhir.r5.utils.client.network.ClientHeaders'
     */
    addHeader(var0: okhttp3_internal_http2_Header | null): Promise<ClientHeaders | null>;
    /**
     * @param var0 original type: 'okhttp3.internal.http2.Header'
     * @return original return type: 'org.hl7.fhir.r5.utils.client.network.ClientHeaders'
     */
    addHeaderSync(var0: okhttp3_internal_http2_Header | null): ClientHeaders | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.utils.client.network.ClientHeaders'
     */
    removeHeaders(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<ClientHeaders | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.utils.client.network.ClientHeaders'
     */
    removeHeadersSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): ClientHeaders | null;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.utils.client.network.ClientHeaders'
     */
    addHeaders(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): Promise<ClientHeaders | null>;
    /**
     * @param var0 original type: 'java.util.List'
     * @return original return type: 'org.hl7.fhir.r5.utils.client.network.ClientHeaders'
     */
    addHeadersSync(var0: java_util_List | JavaInterfaceProxy<java_util_ListInterface> | null): ClientHeaders | null;
    /**
     * @param var0 original type: 'okhttp3.internal.http2.Header'
     * @return original return type: 'org.hl7.fhir.r5.utils.client.network.ClientHeaders'
     */
    removeHeader(var0: okhttp3_internal_http2_Header | null): Promise<ClientHeaders | null>;
    /**
     * @param var0 original type: 'okhttp3.internal.http2.Header'
     * @return original return type: 'org.hl7.fhir.r5.utils.client.network.ClientHeaders'
     */
    removeHeaderSync(var0: okhttp3_internal_http2_Header | null): ClientHeaders | null;
    /**
     * @return original return type: 'org.hl7.fhir.r5.utils.client.network.ClientHeaders'
     */
    clearHeaders(): Promise<ClientHeaders | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.utils.client.network.ClientHeaders'
     */
    clearHeadersSync(): ClientHeaders | null;
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
     * @return original return type: 'org.hl7.fhir.r5.utils.client.network.ClientHeaders'
     */
    static newInstanceAsync(): Promise<ClientHeaders>;
    /**
     * @param var0 original type: 'java.util.ArrayList'
     * @return original return type: 'org.hl7.fhir.r5.utils.client.network.ClientHeaders'
     */
    static newInstanceAsync(var0: java_util_ArrayList | null): Promise<ClientHeaders>;
    constructor();
    /**
     * @param var0 original type: 'java.util.ArrayList'
     */
    constructor(var0: java_util_ArrayList | null);
}
declare const ClientHeaders_base: typeof ClientHeadersClass;
/**
 * Class org.hl7.fhir.r5.utils.client.network.ClientHeaders.
 *
 * This actually imports the java class for further use.
 * The class {@link ClientHeadersClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ClientHeaders extends ClientHeaders_base {
}
export default ClientHeaders;
//# sourceMappingURL=ClientHeaders.d.ts.map