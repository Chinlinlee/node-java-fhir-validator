# hapi-node-validator
Use [node-java-bridge](https://github.com/MarkusJx/node-java-bridge) to implement same features as the [fhir-validator-wrapper](https://github.com/inferno-framework/fhir-validator-wrapper) APIs.

# Requirements
- JDK >= 11
## Ubuntu
- java 11
```sh
sudo apt install openjdk-11-jdk-headless openjdk-11-jre-headless
```

# Usage
- Put you IG package (package.tgz file) in any folder, here we use "igs"
- Example:
```js
const path = require("path");
const fs = require("fs");
const { FhirValidator } = require("node-java-fhir-validator");


(async () => {
    let validator = new FhirValidator({
        igDir: path.join(__dirname, "../igs")
    });
    try {
        

        // validate resource example
        let errorItem = fs.readFileSync(path.join(__dirname, "../test/us-core-patient-example-error.json"), "utf-8");
        let validationOperationOutcome = await validator.validateResource(errorItem, "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient");
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
```

# Options
- igDir: The directory contain igs
- isDisableTx: Whether to disable tx server
- txSeverUrl: the url of the tx server (default is http://tx.fhir.org)
