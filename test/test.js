const validator = require("../src/validator");
const fs = require("fs");
const path = require("path");

const { expect } = require("chai");

describe("Test validator", () => {
    it("Expect All OK in validation result", async () => {
        let item = fs.readFileSync(
            path.join(__dirname, "../examples/Patient-pat-example-tw-1.json"),
            "utf-8"
        );
        let validationOperationOutcomeStr = await validator.validateResource(
            item,
            "https://twcore.mohw.gov.tw/fhir/StructureDefinition/Patient-twcore"
        );
        let ooJson = JSON.parse(validationOperationOutcomeStr);

        expect(ooJson).have.property("issue").to.be.an("array");
        let issueList = ooJson.issue;

        expect(issueList.map((v) => v.severity)).does.not.equal("error");
    });

    it("Expect get error that identifier required", async () => {
        let item = fs.readFileSync(
            path.join(__dirname, "../examples/Patient-pat-example-tw-1-incorrect.json"),
            "utf-8"
        );
        let validationOperationOutcomeStr = await validator.validateResource(
            item,
            "https://twcore.mohw.gov.tw/fhir/StructureDefinition/Patient-twcore"
        );
        let ooJson = JSON.parse(validationOperationOutcomeStr);

        expect(ooJson).have.property("issue").to.be.an("array");
        let issueList = ooJson.issue;

        expect(issueList).lengthOf(1);

        expect(issueList[0].severity).to.equal("error");
        expect(issueList[0].details.text).to.have.string("identifier");
        expect(issueList[0].details.text).to.have.string("required");
    });
});
