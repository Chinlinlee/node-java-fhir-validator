const path = require("path");
const glob = require("glob");
const { appendClasspath, ensureJvm } = require("java-bridge");
const { TypescriptBulkDefinitionGenerator } = require("java-ts-definition-generator");
const { execSync } = require("child_process");
const fsP = require("fs/promises");

let depJarFiles = glob.sync("**/*.jar", {
    cwd: path.join(__dirname)
});

ensureJvm();
for (let i = 0; i < depJarFiles.length; i++) {
    appendClasspath(depJarFiles);
}

const generator = new TypescriptBulkDefinitionGenerator();

( async ()=> {
    // Generate definitions for the provided modules
    await generator.generate([
        "org.hl7.fhir.r5.formats.JsonParser",
        "org.hl7.fhir.r5.formats.FormatUtilities",
        "org.hl7.fhir.r5.model.ImplementationGuide",
        "org.hl7.fhir.utilities.FhirPublication",
        "org.hl7.fhir.utilities.VersionUtilities",
        "org.hl7.fhir.utilities.npm.FilesystemPackageCacheManager",
        "org.hl7.fhir.utilities.npm.PackageClient",
        "org.hl7.fhir.utilities.validation.ValidationMessage",
        "org.hl7.fhir.utilities.TextFile",
        "org.hl7.fhir.validation.BaseValidator",
        "org.hl7.fhir.validation.BaseValidator$ValidationControl",
        "org.hl7.fhir.validation.ValidationEngine",
        "org.hl7.fhir.validation.ValidationEngine$ValidationEngineBuilder",
        "org.hl7.fhir.validation.cli.utils.VersionUtil",
        "org.apache.commons.io.FileUtils",
        "org.apache.commons.io.IOUtils",
    ]);

    // Save the definitions to a directory
    await generator.save(path.join(__dirname, "./src/java-wrapper"));
    await fixOkioTsFile();
    await fixResultSeverityEnum();

    try {
        let buildTs = execSync("tsc --build");
        console.log(buildTs.toString());
    } catch(e) {
        console.error(e.message);
        console.error(e.stdout.toString());
        console.error(e.stderr.toString());
        process.exit(1);
    }
})();

async function fixOkioTsFile() {
    let filenames = [
        "src/java-wrapper/okio/ByteString.ts",
        "src/java-wrapper/okio/ByteString$Companion.ts",
        "src/java-wrapper/okio/Buffer.ts"
    ];

    for(let i = 0 ; i < filenames.length ; i++) {
        let filename = filenames[i];
        let absFilename = path.join(__dirname, filename);
        let fileStr = await fsP.readFile(absFilename, 'utf8');
        fileStr = fileStr.replace(/.*-deprecated.*$/gm, "");
        await fsP.writeFile(absFilename, fileStr);
    }
}

async function fixResultSeverityEnum() {
    let filenames = [
        "src/java-wrapper/ca/uhn/fhir/validation/ResultSeverityEnum.ts"
    ];

    for(let i = 0 ; i<filenames.length ; i++) {
        let filename = filenames[i];
        let absFilename = path.join(__dirname, filename);
        let fileStr = await fsP.readFile(absFilename, 'utf8');
        fileStr = fileStr.replace(/.*public static readonly values:.*$/gm, "//$&");
        await fsP.writeFile(absFilename, fileStr);
    }
}
