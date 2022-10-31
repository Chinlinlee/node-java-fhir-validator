const validator = require("../src/validator");

const fs = require("fs");
const path = require("path");



(async () => {

    try {
        // validate resource example
        let item = fs.readFileSync(path.join(__dirname, "./Patient-pat-example-tw-1-incorrect.json"), "utf-8");
        let validationOperationOutcome = await validator.validateResource(item, "https://twcore.mohw.gov.tw/fhir/StructureDefinition/Patient-twcore");
        console.log(validationOperationOutcome);


        let profileStr = fs.readFileSync(path.join(__dirname, "../igs/StructureDefinition-us-core-careplan.json"), "utf-8");
        await validator.loadProfile(profileStr);

        let incorrectProfile = fs.readFileSync(path.join(__dirname, "../igs/no-content.json"), "utf-8");
        await validator.loadProfile(incorrectProfile);

        let structures = await validator.getStructures();

        if (structures.includes("http://hl7.org/fhir/us/core/StructureDefinition/us-core-careplan")) {
            console.log("load profile \"http://hl7.org/fhir/us/core/StructureDefinition/us-core-careplan\" from file successful");
        }
    } catch (e) {
        console.error("err", e);
    }
})();
