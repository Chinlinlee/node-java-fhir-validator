import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { IWorkerContext as org_hl7_fhir_r5_context_IWorkerContext, IWorkerContextInterface as org_hl7_fhir_r5_context_IWorkerContextInterface } from "./../context/IWorkerContext";
import { List as java_util_List } from "./../../../../../java/util/List";
import { Resource as org_hl7_fhir_r5_model_Resource } from "./../model/Resource";
import { Base as org_hl7_fhir_r5_model_Base } from "./../model/Base";
import { PEDefinition as org_hl7_fhir_r5_profilemodel_PEDefinition } from "./PEDefinition";
import { StructureDefinition as org_hl7_fhir_r5_model_StructureDefinition } from "./../model/StructureDefinition";
import { PEInstance as org_hl7_fhir_r5_profilemodel_PEInstance } from "./PEInstance";
import { Boolean as java_lang_Boolean } from "./../../../../../java/lang/Boolean";
import { ElementDefinition$ElementDefinitionSlicingComponent as org_hl7_fhir_r5_model_ElementDefinition$ElementDefinitionSlicingComponent } from "./../model/ElementDefinition$ElementDefinitionSlicingComponent";
import { ElementDefinition as org_hl7_fhir_r5_model_ElementDefinition } from "./../model/ElementDefinition";
import { Long as java_lang_Long } from "./../../../../../java/lang/Long";
import { Integer as java_lang_Integer } from "./../../../../../java/lang/Integer";
import { Class as java_lang_Class } from "./../../../../../java/lang/Class";
import { PEBuilder$PEElementPropertiesPolicy as org_hl7_fhir_r5_profilemodel_PEBuilder$PEElementPropertiesPolicy } from "./PEBuilder$PEElementPropertiesPolicy";
/**
 * This class just defines types, you should import {@link PEBuilder} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PEBuilderClass extends JavaClass {
    /**
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext'
     */
    getContext(): Promise<org_hl7_fhir_r5_context_IWorkerContext | null>;
    /**
     * @return original return type: 'org.hl7.fhir.r5.context.IWorkerContext'
     */
    getContextSync(): org_hl7_fhir_r5_context_IWorkerContext | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Resource'
     * @param var1 original type: 'org.hl7.fhir.r5.model.Base'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'java.util.List'
     */
    exec(var0: org_hl7_fhir_r5_model_Resource | null, var1: org_hl7_fhir_r5_model_Base | null, var2: string | null): Promise<java_util_List | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.Resource'
     * @param var1 original type: 'org.hl7.fhir.r5.model.Base'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'java.util.List'
     */
    execSync(var0: org_hl7_fhir_r5_model_Resource | null, var1: org_hl7_fhir_r5_model_Base | null, var2: string | null): java_util_List | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    isResource(var0: string | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    isResourceSync(var0: string | null): boolean;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.profilemodel.PEDefinition'
     */
    buildPEDefinition(var0: string | null): Promise<org_hl7_fhir_r5_profilemodel_PEDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.profilemodel.PEDefinition'
     */
    buildPEDefinitionSync(var0: string | null): org_hl7_fhir_r5_profilemodel_PEDefinition | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @return original return type: 'org.hl7.fhir.r5.profilemodel.PEDefinition'
     */
    buildPEDefinition(var0: org_hl7_fhir_r5_model_StructureDefinition | null): Promise<org_hl7_fhir_r5_profilemodel_PEDefinition | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @return original return type: 'org.hl7.fhir.r5.profilemodel.PEDefinition'
     */
    buildPEDefinitionSync(var0: org_hl7_fhir_r5_model_StructureDefinition | null): org_hl7_fhir_r5_profilemodel_PEDefinition | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.profilemodel.PEDefinition'
     */
    buildPEDefinition(var0: string | null, var1: string | null): Promise<org_hl7_fhir_r5_profilemodel_PEDefinition | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'org.hl7.fhir.r5.profilemodel.PEDefinition'
     */
    buildPEDefinitionSync(var0: string | null, var1: string | null): org_hl7_fhir_r5_profilemodel_PEDefinition | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'org.hl7.fhir.r5.profilemodel.PEInstance'
     */
    buildPEInstance(var0: string | null, var1: org_hl7_fhir_r5_model_Resource | null): Promise<org_hl7_fhir_r5_profilemodel_PEInstance | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'org.hl7.fhir.r5.profilemodel.PEInstance'
     */
    buildPEInstanceSync(var0: string | null, var1: org_hl7_fhir_r5_model_Resource | null): org_hl7_fhir_r5_profilemodel_PEInstance | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var1 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'org.hl7.fhir.r5.profilemodel.PEInstance'
     */
    buildPEInstance(var0: org_hl7_fhir_r5_model_StructureDefinition | null, var1: org_hl7_fhir_r5_model_Resource | null): Promise<org_hl7_fhir_r5_profilemodel_PEInstance | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var1 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'org.hl7.fhir.r5.profilemodel.PEInstance'
     */
    buildPEInstanceSync(var0: org_hl7_fhir_r5_model_StructureDefinition | null, var1: org_hl7_fhir_r5_model_Resource | null): org_hl7_fhir_r5_profilemodel_PEInstance | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'org.hl7.fhir.r5.profilemodel.PEInstance'
     */
    buildPEInstance(var0: string | null, var1: string | null, var2: org_hl7_fhir_r5_model_Resource | null): Promise<org_hl7_fhir_r5_profilemodel_PEInstance | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'org.hl7.fhir.r5.model.Resource'
     * @return original return type: 'org.hl7.fhir.r5.profilemodel.PEInstance'
     */
    buildPEInstanceSync(var0: string | null, var1: string | null, var2: org_hl7_fhir_r5_model_Resource | null): org_hl7_fhir_r5_profilemodel_PEInstance | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var1 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    createResource(var0: org_hl7_fhir_r5_model_StructureDefinition | null, var1: java_lang_Boolean | boolean): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var1 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    createResourceSync(var0: org_hl7_fhir_r5_model_StructureDefinition | null, var1: java_lang_Boolean | boolean): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    createResource(var0: string | null, var1: java_lang_Boolean | boolean): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    createResourceSync(var0: string | null, var1: java_lang_Boolean | boolean): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    createResource(var0: string | null, var1: string | null, var2: java_lang_Boolean | boolean): Promise<org_hl7_fhir_r5_model_Resource | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.model.Resource'
     */
    createResourceSync(var0: string | null, var1: string | null, var2: java_lang_Boolean | boolean): org_hl7_fhir_r5_model_Resource | null;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var1 original type: 'org.hl7.fhir.r5.model.ElementDefinition$ElementDefinitionSlicingComponent'
     * @param var2 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @return original return type: 'java.lang.String'
     */
    makeSliceExpression(var0: org_hl7_fhir_r5_model_StructureDefinition | null, var1: org_hl7_fhir_r5_model_ElementDefinition$ElementDefinitionSlicingComponent | null, var2: org_hl7_fhir_r5_model_ElementDefinition | null): Promise<string | null>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.model.StructureDefinition'
     * @param var1 original type: 'org.hl7.fhir.r5.model.ElementDefinition$ElementDefinitionSlicingComponent'
     * @param var2 original type: 'org.hl7.fhir.r5.model.ElementDefinition'
     * @return original return type: 'java.lang.String'
     */
    makeSliceExpressionSync(var0: org_hl7_fhir_r5_model_StructureDefinition | null, var1: org_hl7_fhir_r5_model_ElementDefinition$ElementDefinitionSlicingComponent | null, var2: org_hl7_fhir_r5_model_ElementDefinition | null): string | null;
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
     * @param var0 original type: 'org.hl7.fhir.r5.context.IWorkerContext'
     * @param var1 original type: 'org.hl7.fhir.r5.profilemodel.PEBuilder$PEElementPropertiesPolicy'
     * @param var2 original type: 'boolean'
     * @return original return type: 'org.hl7.fhir.r5.profilemodel.PEBuilder'
     */
    static newInstanceAsync(var0: org_hl7_fhir_r5_context_IWorkerContext | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContextInterface> | null, var1: org_hl7_fhir_r5_profilemodel_PEBuilder$PEElementPropertiesPolicy | null, var2: java_lang_Boolean | boolean): Promise<PEBuilder>;
    /**
     * @param var0 original type: 'org.hl7.fhir.r5.context.IWorkerContext'
     * @param var1 original type: 'org.hl7.fhir.r5.profilemodel.PEBuilder$PEElementPropertiesPolicy'
     * @param var2 original type: 'boolean'
     */
    constructor(var0: org_hl7_fhir_r5_context_IWorkerContext | JavaInterfaceProxy<org_hl7_fhir_r5_context_IWorkerContextInterface> | null, var1: org_hl7_fhir_r5_profilemodel_PEBuilder$PEElementPropertiesPolicy | null, var2: java_lang_Boolean | boolean);
}
declare const PEBuilder_base: typeof PEBuilderClass;
/**
 * Class org.hl7.fhir.r5.profilemodel.PEBuilder.
 *
 * This actually imports the java class for further use.
 * The class {@link PEBuilderClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PEBuilder extends PEBuilder_base {
}
export default PEBuilder;
//# sourceMappingURL=PEBuilder.d.ts.map