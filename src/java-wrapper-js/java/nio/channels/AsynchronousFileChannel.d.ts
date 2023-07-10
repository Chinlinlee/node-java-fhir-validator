import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Future as java_util_concurrent_Future } from "./../../util/concurrent/Future";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Boolean as java_lang_Boolean } from "./../../lang/Boolean";
import { CompletionHandler as java_nio_channels_CompletionHandler, CompletionHandlerInterface as java_nio_channels_CompletionHandlerInterface } from "./CompletionHandler";
import { ByteBuffer as java_nio_ByteBuffer } from "./../ByteBuffer";
import { Path as java_nio_file_Path, PathInterface as java_nio_file_PathInterface } from "./../file/Path";
import { Set as java_util_Set, SetInterface as java_util_SetInterface } from "./../../util/Set";
import { ExecutorService as java_util_concurrent_ExecutorService, ExecutorServiceInterface as java_util_concurrent_ExecutorServiceInterface } from "./../../util/concurrent/ExecutorService";
import { FileAttribute as java_nio_file_attribute_FileAttribute, FileAttributeInterface as java_nio_file_attribute_FileAttributeInterface } from "./../file/attribute/FileAttribute";
import { OpenOption as java_nio_file_OpenOption, OpenOptionInterface as java_nio_file_OpenOptionInterface } from "./../file/OpenOption";
import { FileLock as java_nio_channels_FileLock } from "./FileLock";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { Class as java_lang_Class } from "./../../lang/Class";
/**
 * This class just defines types, you should import {@link AsynchronousFileChannel} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AsynchronousFileChannelClass extends JavaClass {
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @param var2 original type: 'boolean'
     * @return original return type: 'java.util.concurrent.Future'
     */
    lock(var0: java_lang_Long | bigint | number, var1: java_lang_Long | bigint | number, var2: java_lang_Boolean | boolean): Promise<java_util_concurrent_Future | null>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @param var2 original type: 'boolean'
     * @return original return type: 'java.util.concurrent.Future'
     */
    lockSync(var0: java_lang_Long | bigint | number, var1: java_lang_Long | bigint | number, var2: java_lang_Boolean | boolean): java_util_concurrent_Future | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.nio.channels.CompletionHandler'
     * @return original return type: 'void'
     */
    lock(var0: BasicOrJavaType | null, var1: java_nio_channels_CompletionHandler | JavaInterfaceProxy<java_nio_channels_CompletionHandlerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'java.nio.channels.CompletionHandler'
     * @return original return type: 'void'
     */
    lockSync(var0: BasicOrJavaType | null, var1: java_nio_channels_CompletionHandler | JavaInterfaceProxy<java_nio_channels_CompletionHandlerInterface> | null): void;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @param var2 original type: 'boolean'
     * @param var3 original type: 'java.lang.Object'
     * @param var4 original type: 'java.nio.channels.CompletionHandler'
     * @return original return type: 'void'
     */
    lock(var0: java_lang_Long | bigint | number, var1: java_lang_Long | bigint | number, var2: java_lang_Boolean | boolean, var3: BasicOrJavaType | null, var4: java_nio_channels_CompletionHandler | JavaInterfaceProxy<java_nio_channels_CompletionHandlerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @param var2 original type: 'boolean'
     * @param var3 original type: 'java.lang.Object'
     * @param var4 original type: 'java.nio.channels.CompletionHandler'
     * @return original return type: 'void'
     */
    lockSync(var0: java_lang_Long | bigint | number, var1: java_lang_Long | bigint | number, var2: java_lang_Boolean | boolean, var3: BasicOrJavaType | null, var4: java_nio_channels_CompletionHandler | JavaInterfaceProxy<java_nio_channels_CompletionHandlerInterface> | null): void;
    /**
     * @return original return type: 'java.util.concurrent.Future'
     */
    lock(): Promise<java_util_concurrent_Future | null>;
    /**
     * @return original return type: 'java.util.concurrent.Future'
     */
    lockSync(): java_util_concurrent_Future | null;
    /**
     * @return original return type: 'long'
     */
    size(): Promise<number>;
    /**
     * @return original return type: 'long'
     */
    sizeSync(): number;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @param var1 original type: 'long'
     * @return original return type: 'java.util.concurrent.Future'
     */
    write(var0: java_nio_ByteBuffer | null, var1: java_lang_Long | bigint | number): Promise<java_util_concurrent_Future | null>;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @param var1 original type: 'long'
     * @return original return type: 'java.util.concurrent.Future'
     */
    writeSync(var0: java_nio_ByteBuffer | null, var1: java_lang_Long | bigint | number): java_util_concurrent_Future | null;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @param var1 original type: 'long'
     * @param var2 original type: 'java.lang.Object'
     * @param var3 original type: 'java.nio.channels.CompletionHandler'
     * @return original return type: 'void'
     */
    write(var0: java_nio_ByteBuffer | null, var1: java_lang_Long | bigint | number, var2: BasicOrJavaType | null, var3: java_nio_channels_CompletionHandler | JavaInterfaceProxy<java_nio_channels_CompletionHandlerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @param var1 original type: 'long'
     * @param var2 original type: 'java.lang.Object'
     * @param var3 original type: 'java.nio.channels.CompletionHandler'
     * @return original return type: 'void'
     */
    writeSync(var0: java_nio_ByteBuffer | null, var1: java_lang_Long | bigint | number, var2: BasicOrJavaType | null, var3: java_nio_channels_CompletionHandler | JavaInterfaceProxy<java_nio_channels_CompletionHandlerInterface> | null): void;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @param var1 original type: 'long'
     * @return original return type: 'java.util.concurrent.Future'
     */
    read(var0: java_nio_ByteBuffer | null, var1: java_lang_Long | bigint | number): Promise<java_util_concurrent_Future | null>;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @param var1 original type: 'long'
     * @return original return type: 'java.util.concurrent.Future'
     */
    readSync(var0: java_nio_ByteBuffer | null, var1: java_lang_Long | bigint | number): java_util_concurrent_Future | null;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @param var1 original type: 'long'
     * @param var2 original type: 'java.lang.Object'
     * @param var3 original type: 'java.nio.channels.CompletionHandler'
     * @return original return type: 'void'
     */
    read(var0: java_nio_ByteBuffer | null, var1: java_lang_Long | bigint | number, var2: BasicOrJavaType | null, var3: java_nio_channels_CompletionHandler | JavaInterfaceProxy<java_nio_channels_CompletionHandlerInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.nio.ByteBuffer'
     * @param var1 original type: 'long'
     * @param var2 original type: 'java.lang.Object'
     * @param var3 original type: 'java.nio.channels.CompletionHandler'
     * @return original return type: 'void'
     */
    readSync(var0: java_nio_ByteBuffer | null, var1: java_lang_Long | bigint | number, var2: BasicOrJavaType | null, var3: java_nio_channels_CompletionHandler | JavaInterfaceProxy<java_nio_channels_CompletionHandlerInterface> | null): void;
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.util.Set'
     * @param var2 original type: 'java.util.concurrent.ExecutorService'
     * @param var3 original type: 'java.nio.file.attribute.FileAttribute[]'
     * @return original return type: 'java.nio.channels.AsynchronousFileChannel'
     */
    static open(var0: java_nio_file_Path | JavaInterfaceProxy<java_nio_file_PathInterface> | null, var1: java_util_Set | JavaInterfaceProxy<java_util_SetInterface> | null, var2: java_util_concurrent_ExecutorService | JavaInterfaceProxy<java_util_concurrent_ExecutorServiceInterface> | null, var3: (java_nio_file_attribute_FileAttribute | JavaInterfaceProxy<java_nio_file_attribute_FileAttributeInterface> | null)[] | null): Promise<AsynchronousFileChannel | null>;
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.util.Set'
     * @param var2 original type: 'java.util.concurrent.ExecutorService'
     * @param var3 original type: 'java.nio.file.attribute.FileAttribute[]'
     * @return original return type: 'java.nio.channels.AsynchronousFileChannel'
     */
    static openSync(var0: java_nio_file_Path | JavaInterfaceProxy<java_nio_file_PathInterface> | null, var1: java_util_Set | JavaInterfaceProxy<java_util_SetInterface> | null, var2: java_util_concurrent_ExecutorService | JavaInterfaceProxy<java_util_concurrent_ExecutorServiceInterface> | null, var3: (java_nio_file_attribute_FileAttribute | JavaInterfaceProxy<java_nio_file_attribute_FileAttributeInterface> | null)[] | null): AsynchronousFileChannel | null;
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.OpenOption[]'
     * @return original return type: 'java.nio.channels.AsynchronousFileChannel'
     */
    static open(var0: java_nio_file_Path | JavaInterfaceProxy<java_nio_file_PathInterface> | null, var1: (java_nio_file_OpenOption | JavaInterfaceProxy<java_nio_file_OpenOptionInterface> | null)[] | null): Promise<AsynchronousFileChannel | null>;
    /**
     * @param var0 original type: 'java.nio.file.Path'
     * @param var1 original type: 'java.nio.file.OpenOption[]'
     * @return original return type: 'java.nio.channels.AsynchronousFileChannel'
     */
    static openSync(var0: java_nio_file_Path | JavaInterfaceProxy<java_nio_file_PathInterface> | null, var1: (java_nio_file_OpenOption | JavaInterfaceProxy<java_nio_file_OpenOptionInterface> | null)[] | null): AsynchronousFileChannel | null;
    /**
     * @return original return type: 'java.nio.channels.FileLock'
     */
    tryLock(): Promise<java_nio_channels_FileLock | null>;
    /**
     * @return original return type: 'java.nio.channels.FileLock'
     */
    tryLockSync(): java_nio_channels_FileLock | null;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @param var2 original type: 'boolean'
     * @return original return type: 'java.nio.channels.FileLock'
     */
    tryLock(var0: java_lang_Long | bigint | number, var1: java_lang_Long | bigint | number, var2: java_lang_Boolean | boolean): Promise<java_nio_channels_FileLock | null>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'long'
     * @param var2 original type: 'boolean'
     * @return original return type: 'java.nio.channels.FileLock'
     */
    tryLockSync(var0: java_lang_Long | bigint | number, var1: java_lang_Long | bigint | number, var2: java_lang_Boolean | boolean): java_nio_channels_FileLock | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    force(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    forceSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.nio.channels.AsynchronousFileChannel'
     */
    truncate(var0: java_lang_Long | bigint | number): Promise<AsynchronousFileChannel | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.nio.channels.AsynchronousFileChannel'
     */
    truncateSync(var0: java_lang_Long | bigint | number): AsynchronousFileChannel | null;
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
     * @return original return type: 'void'
     */
    close(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    closeSync(): void;
    /**
     * @return original return type: 'boolean'
     */
    isOpen(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isOpenSync(): boolean;
}
declare const AsynchronousFileChannel_base: typeof AsynchronousFileChannelClass;
/**
 * Class java.nio.channels.AsynchronousFileChannel.
 *
 * This actually imports the java class for further use.
 * The class {@link AsynchronousFileChannelClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AsynchronousFileChannel extends AsynchronousFileChannel_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default AsynchronousFileChannel;
//# sourceMappingURL=AsynchronousFileChannel.d.ts.map