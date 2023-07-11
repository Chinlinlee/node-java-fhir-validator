# hapi-node-validator
Use [node-java-bridge](https://github.com/MarkusJx/node-java-bridge) that we can use [fhir-validator-wrapper](https://github.com/inferno-framework/fhir-validator-wrapper) APIs.

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
    try {
        let validator = new FhirValidator(
            path.normalize(path.join(__dirname, "./igs"))
        );
        await validator.init();
        // validate resource example
        let item = fs.readFileSync(path.join(__dirname, "./Patient-pat-example-tw-1-incorrect.json"), "utf-8");
        let validationResult = await validator.validate(item, "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/Patient-twcore");

        console.log(validationResult);

        await validator.validator.loadProfile(
            fs.readFileSync(
                path.join(__dirname, "./StructureDefinition-us-core-careplan.json")
            )
        );
        let structures = await validator.validator.getStructures();
        console.log(await structures.contains("http://hl7.org/fhir/us/core/StructureDefinition/us-core-careplan"));

    } catch (e) {
        console.error("err", e);
    }
})();
```


