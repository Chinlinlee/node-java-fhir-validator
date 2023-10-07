const { java, JString, JArrays } = require("./java-instance");

const JByteArrayInputStream = java.importClass("java.io.ByteArrayInputStream");
const JFile = java.importClass("java.io.File");
const JIOException = java.importClass("java.io.IOException");
const JURL = java.importClass("java.net.URL");
const JArrayList = java.importClass("java.util.ArrayList");
const JHashMap = java.importClass("java.util.HashMap");
const JList = java.importClass("java.util.List");
const JMap = java.importClass("java.util.Map");
const JCollectors = java.importClass("java.util.stream.Collectors");

const { Manager$FhirFormat } = require("./java-wrapper-js/org/hl7/fhir/r5/elementmodel/Manager$FhirFormat");
const { FormatUtilities } = require("./java-wrapper-js/org/hl7/fhir/r5/formats/FormatUtilities");
const { CodeType } = require("./java-wrapper-js/org/hl7/fhir/r5/model/CodeType");
const { CodeableConcept } = require("./java-wrapper-js/org/hl7/fhir/r5/model/CodeableConcept");
const { ImplementationGuide } = require("./java-wrapper-js/org/hl7/fhir/r5/model/ImplementationGuide");
const { IntegerType } = require("./java-wrapper-js/org/hl7/fhir/r5/model/IntegerType");
const { OperationOutcome } = require("./java-wrapper-js/org/hl7/fhir/r5/model/OperationOutcome");
const { Resource } = require("./java-wrapper-js/org/hl7/fhir/r5/model/Resource");
const { StructureDefinition } = require("./java-wrapper-js/org/hl7/fhir/r5/model/StructureDefinition");

const { VersionUtilities } = require("./java-wrapper-js/org/hl7/fhir/utilities/VersionUtilities");
const { FhirPublication } = require("./java-wrapper-js/org/hl7/fhir/utilities/FhirPublication");
const { FilesystemPackageCacheManager } = require("./java-wrapper-js/org/hl7/fhir/utilities/npm/FilesystemPackageCacheManager");
const { NpmPackage } = require("./java-wrapper-js/org/hl7/fhir/utilities/npm/NpmPackage")
const { ValidationMessage$IssueSeverity } = require("./java-wrapper-js/org/hl7/fhir/utilities/validation/ValidationMessage$IssueSeverity");

const { BaseValidator } = require("./java-wrapper-js/org/hl7/fhir/validation/BaseValidator");
const { BaseValidator$ValidationControl } = require("./java-wrapper-js/org/hl7/fhir/validation/BaseValidator$ValidationControl");

const { ValidationEngine } = require("./java-wrapper-js/org/hl7/fhir/validation/ValidationEngine");
const { ValidationEngine$ValidationEngineBuilder } = require("./java-wrapper-js/org/hl7/fhir/validation/ValidationEngine$ValidationEngineBuilder");

const { JsonParser } = require("./java-wrapper-js/org/hl7/fhir/r5/formats/JsonParser");

const { FileUtils } = require("./java-wrapper-js/org/apache/commons/io/FileUtils");

const glob = require("glob");
const path = require("path");
const { Ig } = require("./ig.class");
const { uid } = require("uid/secure");
const fsP = require("fs/promises");
const { default: OperationOutcome$IssueSeverity } = require("./java-wrapper-js/org/hl7/fhir/r5/model/OperationOutcome$IssueSeverity");
const { default: OperationOutcome$OperationOutcomeIssueComponent } = require("./java-wrapper-js/org/hl7/fhir/r5/model/OperationOutcome$OperationOutcomeIssueComponent");
const { OperationOutcome$IssueType } = require("./java-wrapper-js/org/hl7/fhir/r5/model/OperationOutcome$IssueType");


class FhirValidator {
    /**
     * 
     * @param {import("./types/fhirValidatorOptions").FhirValidatorOptions} options 
     */
    constructor(options = {
        isDisableTx: false,
        txSeverUrl: ""
    }) {

        this.isDisableTx = options.isDisableTx;
        this.txSeverUrl = options.txSeverUrl;

        const fhirSpecVersion = "4.0";
        const definitions = `${VersionUtilities.packageForVersionSync(fhirSpecVersion)}#${VersionUtilities.getCurrentVersionSync(fhirSpecVersion)}`;
        const txServer = this.getTxServerUrl();
        const txLog = null;
        const fhirVersion = "4.0.1";

        let engineBuilder = new ValidationEngine$ValidationEngineBuilder()
            .withTxServerSync(
                txServer,
                txLog,
                FhirPublication.fromCodeSync(fhirVersion)
            );

        this.hl7Validator = engineBuilder.fromSourceSync(definitions);

        // The two lines below turn off URL resolution checking in the validator. 
        // This eliminates the need to silence these errors elsewhere in Inferno
        // And also keeps contained resources from failing validation based solely on URL errors
        let tempBaseValidator = new BaseValidator(null, null, true);
        let vc = new BaseValidator$ValidationControl(tempBaseValidator, false, ValidationMessage$IssueSeverity.INFORMATION);

        this.hl7Validator.getValidationControlSync().putSync("Type_Specific_Checks_DT_URL_Resolve", vc);


        if (!options.igDir) {
            throw new Error("Invalid/Missing IG Directory");
        }

        this.igDir = options.igDir;

        this.loadAllTgzInIgDir()
        this.hl7Validator.connectToTSServerSync(txServer, txLog, FhirPublication.fromCodeSync(fhirVersion));
        this.hl7Validator.setDoNativeSync(false);
        this.hl7Validator.setAnyExtensionsAllowedSync(true);
        this.hl7Validator.prepareSync();

        this.packageManager = new FilesystemPackageCacheManager(true);

        this.loadedPackages = new JHashMap();
    }

    async init() {
        try {
            this.validator = await Validator.newInstanceAsync(this.igDir);
        } catch (e) {
            console.error(e);
        }
    }

    /**
     * 
     * @param {string} resource string of FHIR resource
     * @param {string} profile profile URL, use comma to concatenate multiple profile URLs
     * @returns OperationOutcome JSON
     */
    async validate(resource, profile = "") {
        let operationOutcome;
        let resourceJavaString = new JString(resource);
        let resourceBytes = await resourceJavaString.getBytes();
        let format = await FormatUtilities.determineFormat(resourceBytes);
        let resourceStream = await JByteArrayInputStream.newInstanceAsync(resourceBytes);
        
        let profiles = [];
        if (profile) {
            profiles = profile.split(",").map(v => new JString(v.trim()));
        } else {
            profiles = [];
        }

        try {
            operationOutcome = await this.hl7Validator.validate(
                format,
                resourceStream,
                await JArrays.asList([...profiles])
            );
        } catch(e) {
            let severity = OperationOutcome$IssueSeverity.FATAL;
            let issue = await OperationOutcome$OperationOutcomeIssueComponent.newInstanceAsync(
                severity,
                OperationOutcome$IssueType.STRUCTURE
            );

            await issue.setDiagnostics(e.message);
            await issue.setDetails(
                await (await CodeableConcept.newInstanceAsync()).setText(e.message)
            );
            await issue.addExtension(
                "http://hl7.org/fhir/StructureDefinition/operationoutcome-issue-line",
                await IntegerType.newInstanceAsync(1)
            );
            await issue.addExtension(
                "http://hl7.org/fhir/StructureDefinition/operationoutcome-issue-col",
                await IntegerType.newInstanceAsync(1)
            );
            await issue.addExtension(
                "http://hl7.org/fhir/StructureDefinition/operationoutcome-issue-source",
                await CodeType.newInstanceAsync("ValidationService")
            );

            operationOutcome = await OperationOutcome.newInstanceAsync(issue);
        }

        let javaJsonParser = await JsonParser.newInstanceAsync();
        let jsonStr = await javaJsonParser.composeString(operationOutcome);
        return JSON.parse(jsonStr);
    }

    /**
     * @example
     * await fhirValidator.validateFromBuffer(
         resourceStr, "profile1,profile2"
     )
     * @param {Buffer} resource 
     * @param {string} profile 
     */
    async validateFromBuffer(resource, profile="") {
        let operationOutcome;
        let format = await FormatUtilities.determineFormat(resource);
        let resourceStream = await JByteArrayInputStream.newInstanceAsync(resource);
        
        let profiles = [];
        if (profile) {
            profiles = profile.split(",").map(v => new JString(v.trim()));
        } else {
            profiles = [];
        }

        try {
            operationOutcome = await this.hl7Validator.validate(
                format,
                resourceStream,
                await JArrays.asList([...profiles])
            );
        } catch(e) {
            let severity = OperationOutcome$IssueSeverity.FATAL;
            let issue = await OperationOutcome$OperationOutcomeIssueComponent.newInstanceAsync(
                severity,
                OperationOutcome$IssueType.STRUCTURE
            );

            await issue.setDiagnostics(e.message);
            await issue.setDetails(
                await (await CodeableConcept.newInstanceAsync()).setText(e.message)
            );
            await issue.addExtension(
                "http://hl7.org/fhir/StructureDefinition/operationoutcome-issue-line",
                await IntegerType.newInstanceAsync(1)
            );
            await issue.addExtension(
                "http://hl7.org/fhir/StructureDefinition/operationoutcome-issue-col",
                await IntegerType.newInstanceAsync(1)
            );
            await issue.addExtension(
                "http://hl7.org/fhir/StructureDefinition/operationoutcome-issue-source",
                await CodeType.newInstanceAsync("ValidationService")
            );

            operationOutcome = await OperationOutcome.newInstanceAsync(issue);
        }

        let javaJsonParser = await JsonParser.newInstanceAsync();
        let jsonStr = await javaJsonParser.composeString(operationOutcome);
        return JSON.parse(jsonStr);
    } 

    /**
     * Lists the names of resources defined for this version of the validator.
     *
     * @return {Promise<string[]>} a sorted list of distinct resource names
     */
    async getResources() {

        let context = await this.hl7Validator.getContext();
        let resourceName = await context.getResourceNames();
        let stream = await resourceName.stream();
        let sortedStream = await stream.sorted();
        let distinctStream = await sortedStream.distinct();
        let list = await distinctStream.collect(
            await JCollectors.toList()
        );
        return await list.toArray();
    }

    /**
     * Lists the StructureDefinitions loaded in the validator.
     *
     * @return {Promise<string[]>} a sorted list of distinct structure canonicals
     */
    async getStructures() {
        const mapStructureDefinitionsFunc = java.newProxy("java.util.function.Function", {
            apply: (v) => {
                return v.getUrlSync();
            }
        });

        let context = await this.hl7Validator.getContext();
        let structures = await context.fetchResourcesByType(StructureDefinition.class);
        let stream = await structures.stream();

        let sd = await stream.map(mapStructureDefinitionsFunc);
        let sortedStream = await sd.sorted()
        let distinctStream = await sortedStream.distinct();
        let list = await distinctStream.collect(
            await JCollectors.toList()
        );

        mapStructureDefinitionsFunc.reset();
        return await list.toArray();
    }

    /**
   * Provides a map of known IGs that can be retrieved and loaded.
   *
   * @return {Promise<import("./types/ig").Ig[]>}
   */
    async getKnownIgs() {
        /** @type {Map} */
        let igs = new JHashMap();
        let igArray = [];
        const entrySetForEach = java.newProxy("java.util.function.Consumer", {
            accept: (key, value) => {
                igArray.push({
                    id: key,
                    url: value
                });
            }
        });
        let loadedPackagesEntrySet = await this.loadedPackages.entrySet();
        await loadedPackagesEntrySet.forEach(entrySetForEach);

        await this.packageManager.listAllIds(igs);
        const igsForEach = java.newProxy("java.util.function.BiConsumer", {
            accept: (key, value) => {
                igArray.push({
                    id: key,
                    url: value
                });
            }
        });
        await igs.forEach(igsForEach);

        igsForEach.reset();
        entrySetForEach.reset();
        return igArray;
    }

    /**
     * 
     * @returns {string}
     */
    getTxServerUrl() {
        if (this.isDisableTx) {
            return undefined;
        }

        return this.txSeverUrl ? this.txSeverUrl : "http://tx.fhir.org";
    }

    loadAllTgzInIgDir() {
        let files = [];
        if (path.isAbsolute(this.igDir)) {
            files = glob.sync("**/*.tgz", {
                cwd: this.igDir,
                absolute: true
            });
        } else {
            files = glob.sync(this.igDir, {
                cwd: process.cwd(),
                absolute: true
            });
        }

        for (let i = 0; i < files.length; i++) {
            this.hl7Validator.getIgLoaderSync().loadIgSync(
                this.hl7Validator.getIgsSync(),
                this.hl7Validator.getBinariesSync(),
                files[i],
                true
            );
        }

    }

    /**
     * Load a profile into the validator.
     * @param {Buffer} profile the profile to be loaded
     */
    async loadProfile(profile) {
        try {
            let fmt = await FormatUtilities.determineFormat(profile);
            let resource = await (await FormatUtilities.makeParser(fmt)).parse(profile);

            let context = await this.hl7Validator.getContext();
            await context.cacheResource(resource);
        } catch (e) {
            throw e;
        }
    }
    /**
     * Finds any custom package that fits the given id and (possibly null) version.
     *
     * @param {string} id the ID of the custom package
     * @param {string} version the version of the custom package, or null to return the first match
     * @return {Promise<NpmPackage>} a matching custom IG package, or null if no matching package was found
     */
    async findCustomPackage(id, version) {
        let idRegex = new RegExp(`^${id}#${(version ? version : ".*")}$`, "gm");

        const loadedPackagesForEach = java.newProxy("java.util.function.Consumer", {
            accept: async (entry) => {
                let key = await entry.getKey();
                let value = await entry.getValue();
                
                if (idRegex.test(key)) {
                    return value;
                }
            }
        });

        let entrySet = await this.loadedPackages.entrySet();
        let myPackage = await entrySet.forEach(loadedPackagesForEach);

        loadedPackagesForEach.reset();

        return myPackage ? myPackage : undefined;
    }

    /**
     * 
     * @param {string} id 
     * @param {string} version 
     * @return {Promise<Ig>}
     */
    async getIg(id, version) {
        let npm = await this.findCustomPackage(id, version);
        // Fallback to packages from packages.fhir.org if no custom packages match
        if (!npm) {
            npm = await this.packageManager.loadPackage(id, version);
        }

        return await Ig.fromPackage(npm);
    }

    /**
     * Load an IG into the validator.
     *
     * @param {string} id the package ID of the FHIR IG to be loaded
     * @param {string} version the package version of the FHIR IG to be loaded
     * @return {Promise<Ig>} an IgResponse representing the package that was loaded
     */
    async loadIg(id, version) {
        let npm = await this.findCustomPackage(id, version);
        if (!npm) {
            let igLoader = await this.hl7Validator.getIgLoader();
            await igLoader.loadIg(
                await this.hl7Validator.getIgs(),
                await this.hl7Validator.getBinaries(),
                `${id}${(version ? `#${version}` : "")}`,
                true
            );

            npm = await this.packageManager.loadPackage(id, version);
        }
        return await Ig.fromPackage(npm);
    }

    /**
     * 
     * @param {Buffer} content 
     * @returns {Promise<Ig>}
     * @example
     * await fhirValidator.loadPackage(
     *     await fsP.readFile(
     *         path.join(__dirname, "./hl7.fhir.au.base.tgz")
     *     )
     * );
     */
    async loadPackage(content) {
        let tempFile = await JFile.createTempFile(uid(), ".tgz");
        await tempFile.deleteOnExit();
        try {
            await FileUtils.writeByteArrayToFile(tempFile, content);
            let igLoader = await this.hl7Validator.getIgLoader();
            await igLoader.loadIg(
                await this.hl7Validator.getIgs(),
                await this.hl7Validator.getBinaries(),
                await tempFile.getCanonicalPath(),
                true
            );
        } finally {
            await tempFile.delete();
        }
        let npm = await NpmPackage.fromPackage(
            await JByteArrayInputStream.newInstanceAsync(content)
        );
        await this.loadedPackages.put(
            `${await npm.id()}#${await npm.version()}`,
            npm
        );

        return await Ig.fromPackage(npm);
    }

    /**
     * Load a profile from a file.
     *
     * @param {string }src the file path
     */
    async loadProfileFromFile(src) {
        let content = await fsP.readFile(src);
        await this.loadProfile(content);
    }

    async getProfilesByIg() {
        let context = await this.hl7Validator.getContext();
        let igsInValidator = await context.allImplementationGuides();
        let igObj = {};
        const forEachFn = java.newProxy("java.util.function.Consumer", {
            accept: async (value) => {
                let id = await value.getPackageId();
                let version = await value.getVersion();
                if (id === "hl7.terminology") igObj[`${id}.r4#${version}`] = {};
                else igObj[`${id}#${version}`] = {};
            }
        });
        await igsInValidator.forEach(forEachFn);
        forEachFn.reset();

        for(let key in igObj) {
            let [id, version] = key.split("#");
            await this.getIg(id, version);
        }
    }

}

module.exports.FhirValidator = FhirValidator;