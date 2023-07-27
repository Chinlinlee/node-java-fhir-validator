const { TextFile } = require("./java-wrapper-js/org/hl7/fhir/utilities/TextFile");

class Ig {
    /**
     * 
     * @param {string} id 
     * @param {string} version 
     * @param {string[]} profiles 
     */
    constructor(id, version, profiles) {
        this.id = id;
        this.version = version;
        this.profiles = profiles;
    }

    /**
     * @param {import("./java-wrapper-js/org/hl7/fhir/utilities/npm/NpmPackage").NpmPackage} npm
     */
    static async fromPackage(npm) {
        let inputStream = await npm.load(".index.json");
        let jsonStr = await TextFile.streamToString(inputStream);

        let indexedResources = JSON.parse(jsonStr);
        /** @type {Object[]} */
        let files = indexedResources.files;
        let structureDefinitions = files.filter(v=> v.resourceType === "StructureDefinition");
        
        let profileUrls = structureDefinitions.map(v => v.url).sort();

        return new Ig(
            await npm.id(),
            await npm.version(),
            profileUrls
        );
    }
}


module.exports.Ig = Ig;