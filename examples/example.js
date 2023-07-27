const {FhirValidator} = require("../src/validator");

const fs = require("fs");
const path = require("path");


(async () => {
    let validator = new FhirValidator({
        igDir: path.join(__dirname, "../igs")
    });
    try {
        

        // validate resource example
        let errorItem = fs.readFileSync(path.join(__dirname, "../test/us-core-patient-example-error.json"), "utf-8");
        let validationOperationOutcome = await validator.validate(errorItem, "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient");
        console.log(JSON.stringify(validationOperationOutcome, null, 4));

        // validate resource with multiple profiles
        // please using comma to concat profile URLs
        let item = fs.readFileSync(path.join(__dirname, "../test/us-core-patient-example.json"), "utf-8");
        let oo = await validator.validate(item, "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient,http://hl7.org/fhir/StructureDefinition/Patient");
        console.log(JSON.stringify(oo, null, 4));
        
    } catch (e) {
        console.error("err", e);
    }
})();
