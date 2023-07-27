import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Integer as java_lang_Integer } from "./../../../java/lang/Integer";
import { ByteString as okio_ByteString } from "./../../../okio/ByteString";
import { Header$Companion as okhttp3_internal_http2_Header$Companion } from "./Header$Companion";
import { Long as java_lang_Long } from "./../../../java/lang/Long";
import { Class as java_lang_Class } from "./../../../java/lang/Class";
/**
 * This class just defines types, you should import {@link Header} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class HeaderClass extends JavaClass {
    /**
     * Original type: 'int'
     */
    readonly hpackSize: java_lang_Integer | number;
    /**
     * Original type: 'okio.ByteString'
     */
    readonly name: okio_ByteString | null;
    /**
     * Original type: 'okio.ByteString'
     */
    readonly value: okio_ByteString | null;
    /**
     * Original type: 'okio.ByteString'
     */
    static readonly PSEUDO_PREFIX: okio_ByteString | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly RESPONSE_STATUS_UTF8: string | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly TARGET_METHOD_UTF8: string | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly TARGET_PATH_UTF8: string | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly TARGET_SCHEME_UTF8: string | null;
    /**
     * Original type: 'java.lang.String'
     */
    static readonly TARGET_AUTHORITY_UTF8: string | null;
    /**
     * Original type: 'okio.ByteString'
     */
    static readonly RESPONSE_STATUS: okio_ByteString | null;
    /**
     * Original type: 'okio.ByteString'
     */
    static readonly TARGET_METHOD: okio_ByteString | null;
    /**
     * Original type: 'okio.ByteString'
     */
    static readonly TARGET_PATH: okio_ByteString | null;
    /**
     * Original type: 'okio.ByteString'
     */
    static readonly TARGET_SCHEME: okio_ByteString | null;
    /**
     * Original type: 'okio.ByteString'
     */
    static readonly TARGET_AUTHORITY: okio_ByteString | null;
    /**
     * Original type: 'okhttp3.internal.http2.Header$Companion'
     */
    static readonly Companion: okhttp3_internal_http2_Header$Companion | null;
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
     * @param var0 original type: 'okio.ByteString'
     * @param var1 original type: 'okio.ByteString'
     * @return original return type: 'okhttp3.internal.http2.Header'
     */
    copy(var0: okio_ByteString | null, var1: okio_ByteString | null): Promise<Header | null>;
    /**
     * @param var0 original type: 'okio.ByteString'
     * @param var1 original type: 'okio.ByteString'
     * @return original return type: 'okhttp3.internal.http2.Header'
     */
    copySync(var0: okio_ByteString | null, var1: okio_ByteString | null): Header | null;
    /**
     * @return original return type: 'okio.ByteString'
     */
    component2(): Promise<okio_ByteString | null>;
    /**
     * @return original return type: 'okio.ByteString'
     */
    component2Sync(): okio_ByteString | null;
    /**
     * @param var0 original type: 'okhttp3.internal.http2.Header'
     * @param var1 original type: 'okio.ByteString'
     * @param var2 original type: 'okio.ByteString'
     * @param var3 original type: 'int'
     * @param var4 original type: 'java.lang.Object'
     * @return original return type: 'okhttp3.internal.http2.Header'
     */
    static copy$default(var0: HeaderClass | null, var1: okio_ByteString | null, var2: okio_ByteString | null, var3: java_lang_Integer | number, var4: BasicOrJavaType | null): Promise<Header | null>;
    /**
     * @param var0 original type: 'okhttp3.internal.http2.Header'
     * @param var1 original type: 'okio.ByteString'
     * @param var2 original type: 'okio.ByteString'
     * @param var3 original type: 'int'
     * @param var4 original type: 'java.lang.Object'
     * @return original return type: 'okhttp3.internal.http2.Header'
     */
    static copy$defaultSync(var0: HeaderClass | null, var1: okio_ByteString | null, var2: okio_ByteString | null, var3: java_lang_Integer | number, var4: BasicOrJavaType | null): Header | null;
    /**
     * @return original return type: 'okio.ByteString'
     */
    component1(): Promise<okio_ByteString | null>;
    /**
     * @return original return type: 'okio.ByteString'
     */
    component1Sync(): okio_ByteString | null;
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
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'okhttp3.internal.http2.Header'
     */
    static newInstanceAsync(var0: string | null, var1: string | null): Promise<Header>;
    /**
     * @param var0 original type: 'okio.ByteString'
     * @param var1 original type: 'okio.ByteString'
     * @return original return type: 'okhttp3.internal.http2.Header'
     */
    static newInstanceAsync(var0: okio_ByteString | null, var1: okio_ByteString | null): Promise<Header>;
    /**
     * @param var0 original type: 'okio.ByteString'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'okhttp3.internal.http2.Header'
     */
    static newInstanceAsync(var0: okio_ByteString | null, var1: string | null): Promise<Header>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     */
    constructor(var0: string | null, var1: string | null);
    /**
     * @param var0 original type: 'okio.ByteString'
     * @param var1 original type: 'okio.ByteString'
     */
    constructor(var0: okio_ByteString | null, var1: okio_ByteString | null);
    /**
     * @param var0 original type: 'okio.ByteString'
     * @param var1 original type: 'java.lang.String'
     */
    constructor(var0: okio_ByteString | null, var1: string | null);
}
declare const Header_base: typeof HeaderClass;
/**
 * Class okhttp3.internal.http2.Header.
 *
 * This actually imports the java class for further use.
 * The class {@link HeaderClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Header extends Header_base {
}
export default Header;
//# sourceMappingURL=Header.d.ts.map