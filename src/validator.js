const {
    javaInstance
} = require("../src/java-instance");

const javaFhirValidator = javaInstance.newInstanceSync(
    "org.github.chinlinlee.Caller"
);

/**
 * Lists the names of resources defined for this version of validator
 *
 * @return a sorted list of distinct resource names
 */
async function getResources() {
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
}

/**
 * Lists the StructureDefinitions loaded in the validator.
 *
 * @return a sorted list of distinct structure canonicals
 */
async function getStructures() {
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
}

/**
 * Validates the given resource against the given list of profiles.
 *
 * @param {string}  resource a byte array representation of a FHIR resource
 * @param {string} profiles a profile URLs use comma delimiter to validate against
 * @return an OperationOutcome resource representing the result of the validation operation
 */
async function validateResource(resource, profiles) {
    let result = await javaInstance.callMethodPromise(
        javaFhirValidator,
        "validateResource",
        resource,
        profiles
    );
    return result;
}


async function loadProfile(resource) {
    await javaInstance.callMethodPromise(
        javaFhirValidator,
        "loadProfile",
        resource
    );
}


// module.exports.javaFhirValidator = javaFhirValidator;
module.exports.getResources = getResources;
module.exports.getStructures = getStructures;
module.exports.validateResource = validateResource;
module.exports.loadProfile = loadProfile;
