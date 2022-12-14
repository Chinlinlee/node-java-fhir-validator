const { javaInstance } = require("../src/java-instance");

module.exports = function (igDir = "") {
    let javaFhirValidator;
    if (igDir) {
        javaFhirValidator = javaInstance.newInstanceSync(
            "org.github.chinlinlee.Caller",
            igDir
        );
    } else {
        javaFhirValidator = javaInstance.newInstanceSync(
            "org.github.chinlinlee.Caller"
        );
    }

    /**
     * Lists the names of resources defined for this version of validator
     *
     * @return a sorted list of distinct resource names
     */
    this.getResources = async () => {
        try {
            let list = [];
            supportResources = await javaInstance.callMethodPromise(
                this.javaFhirCaller,
                "getResources"
            );

            let size = supportResources.sizeSync();
            for (let i = 0; i < size; i++) {
                let resource = supportResources.getSync(i);
                list.push(resource);
            }
            return list;
        } catch (e) {
            console.error(e);
            return undefined;
        }
    };

    /**
     * Lists the StructureDefinitions loaded in the validator.
     *
     * @return a sorted list of distinct structure canonicals
     */
    this.getStructures = async () => {
        try {
            let list = [];
            let loadedStructures = await javaInstance.callMethodPromise(
                javaFhirValidator,
                "getStructures"
            );
            let size = loadedStructures.sizeSync();
            for (let i = 0; i < size; i++) {
                let structure = loadedStructures.getSync(i);
                list.push(structure);
            }
            return list;
        } catch (e) {
            console.error(e);
            return undefined;
        }
    };

    /**
     * Validates the given resource against the given list of profiles.
     *
     * @param {string}  resource a byte array representation of a FHIR resource
     * @param {string} profiles a profile URLs use comma delimiter to validate against
     * @return an OperationOutcome resource representing the result of the validation operation
     */
    this.validateResource = async (resource, profiles) => {
        let result = await javaInstance.callMethodPromise(
            javaFhirValidator,
            "validateResource",
            resource,
            profiles
        );
        return result;
    }

    this.loadProfile = async (resource) => {
        await javaInstance.callMethodPromise(
            javaFhirValidator,
            "loadProfile",
            resource
        );
    };

    /**
     * Load an IG in user's local cache into the validator.
     * Download IG's package when  IG not exist in local
     * @param {*} igPackageId 
     * @param {*} version 
     */
    this.loadIg = async (igPackageId, version) => {
        await javaInstance.callMethodPromise(
            javaFhirValidator,
            "loadIg",
            igPackageId,
            version
        );
    }

    this.getKnownIGs = async () => {
        let knownIGs = await javaInstance.callMethodPromise(
            javaFhirValidator,
            "getKnownIGs"
        );
        let knownIGsJson = JSON.parse(knownIGs);
        return knownIGsJson;
    }

    return this;
};
