const { java, JString, JArrays } = require("./java-instance");
const { Validator } = require("./java-wrapper-js/org/mitre/inferno/Validator");
const { JsonParser } = require("./java-wrapper-js/org/hl7/fhir/r5/formats/JsonParser");

class FhirValidator {
    /**
     * 
     * @param {string} igDir 
     */
    constructor(igDir) {

        if (!igDir) {
            throw new Error("Invalid IG Directory");
        }

        this.igDir = igDir;
        /** @type {Validator} */
        this.validator = {};
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
     * @param {string} resource
     * @param {string} profile
     */
    async validate(resource, profile = "") {
        let resourceJavaString = new JString(resource);

        let profiles = []
        if (profile) {
            profiles = profile.split(",").map(v => new JString(v));
        } else {
            profiles = [];
        }

        let operationOutcome = await this.validator.validate(
            await resourceJavaString.getBytes(),
            await JArrays.asList([...profiles])
        );

        let javaJsonParser = await JsonParser.newInstanceAsync();

        return await javaJsonParser.composeString(operationOutcome);
    }
}

module.exports.FhirValidator = FhirValidator;