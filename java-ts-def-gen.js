const path = require("path");
const glob = require("glob");
const { appendClasspath, ensureJvm } = require("java-bridge");
const { TypescriptBulkDefinitionGenerator } = require("java-ts-definition-generator");

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
        "org.mitre.inferno.Validator",
        "org.mitre.inferno.JsonParser",
        "org.mitre.inferno.rest.IgResponse",
        "org.hl7.fhir.r5.formats.JsonParser",
        "org.hl7.fhir.utilities.npm.PackageClient"
    ]);

    // Save the definitions to a directory
    await generator.save(path.join(__dirname, "./src/java-wrapper"));
})();
