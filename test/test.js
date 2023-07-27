const { java, JString, JArrays } = require("../src/java-instance");
const JCollectors = java.importClass("java.util.stream.Collectors");
const { FhirValidator } = require("../src/validator");
const path = require("path");
const fsP = require("fs/promises");

const { expect } = require("chai");

const fhirValidator = new FhirValidator({
    igDir: path.join(__dirname, "../igs")
});

describe("Test FHIR Validator", () => {
    it("should get resource name loaded in validator", async () => {
        let resources = await fhirValidator.getResources();

        expect(resources).to.be.an("array").to.have.lengthOf.least(1);
        expect(resources).contain.oneOf(["Patient"]);
    });

    it("should get structure definitions loaded in validator", async () => {
        let structureDefinitions = await fhirValidator.getStructures();

        expect(structureDefinitions).to.be.an("array").to.have.lengthOf.least(1);
        expect(structureDefinitions).contain.oneOf(["http://hl7.org/fhir/StructureDefinition/Patient"]);
    });

    it("should run getKnownIgs properly and have id, descriptionurl", async () => {
        let knownIgs = await fhirValidator.getKnownIgs();
        expect(knownIgs).to.be.an("array");
        expect(knownIgs).to.deep.nested.property("[0].id");
        expect(knownIgs).to.deep.nested.property("[0].url");
    })

    it("should load profile", async () => {
        let fakeProfile = {
            "resourceType": "StructureDefinition",
            "name": "blah",
            "url": "http://hl7.org/fhir/StructureDefinition/blah",
            "version": "4.0.1",
            "status": "draft"
        };
        expect(await isProfileLoaded(fakeProfile.url)).to.be.false;
        await fhirValidator.loadProfile(Buffer.from(JSON.stringify(fakeProfile), "utf8"));
        expect(await isProfileLoaded(fakeProfile.url)).to.be.true;

    });

    it("should get igs loaded in validator, and contain hl7.fhir.r4.core, hl7.fhir.us.core", async () => {
        let knownIgs = await fhirValidator.getKnownIgs();
        expect(knownIgs.some(v => v.id === "hl7.fhir.r4.core")).to.be.true;
        expect(knownIgs.some(v => v.id === "hl7.fhir.us.core")).to.be.true;
    });

    it("should getIg('hl7.fhir.r4.core', '4.0.1')", async () => {
        let ig = await fhirValidator.getIg("hl7.fhir.r4.core", "4.0.1");

        expect(ig).haveOwnProperty("id");
        expect(ig).haveOwnProperty("version");
        expect(ig).haveOwnProperty("profiles");
        expect(ig.profiles).lengthOf.at.least(1);
    });

    it("should do loadIg()", async () => {
        const profilesToLoad = [
            "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-comorbidities-parent",
            "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-disease-status",
            "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-patient",
            "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-related-medication-request",
            "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-related-surgical-procedure",
            "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-stage-group"
        ];

        expect(profilesToLoad.every(async v => !await isProfileLoaded(v))).to.be.true;

        let ig = await fhirValidator.loadIg("hl7.fhir.us.mcode", "2.1.0");
        expect(ig).haveOwnProperty("id");
        expect(ig.id).to.equal("hl7.fhir.us.mcode");

        expect(profilesToLoad.every(v => ig.profiles.includes(v))).to.be.true;
        expect(profilesToLoad.every(async v => await isProfileLoaded(v))).to.be.true;

    });

    it("should load ig with version hl7.fhir.us.qicore#3.3.0", async () => {
        const oldVersionProfilesToLoad = [
            "http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-medication",
            "http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-medicationadministration",
            "http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-medicationdispense",
            "http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-medicationrequest",
            "http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-medicationstatement",
            "http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-military-service",
            "http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-nutritionorder",
            "http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-observation",
            "http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-organization",
            "http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-patient",
            "http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-practitioner",
            "http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-practitionerrole",
            "http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-procedure"
        ];

        expect(oldVersionProfilesToLoad.every(async v => !await isProfileLoaded(v))).to.be.true;

        let ig = await fhirValidator.loadIg("hl7.fhir.us.qicore", "3.3.0");
        expect(ig).haveOwnProperty("id");
        expect(ig.id).equals("hl7.fhir.us.qicore");
        expect(ig).haveOwnProperty("version");
        expect(ig.version).equals("3.3.0");
        expect(ig).haveOwnProperty("profiles");
        expect(ig.profiles).lengthOf(45);

        // All old profiles to load have been loaded and are returned in the resulting list
        expect(oldVersionProfilesToLoad.every(v => ig.profiles.includes(v))).to.be.true;
        expect(oldVersionProfilesToLoad.every(async v => await isProfileLoaded(v))).to.be.true;
    });

    it("should loadPackage with 'hl7.fhir.au.base.tgz' file", async () => {

        const profilesToLoad = [
            "http://hl7.org.au/fhir/StructureDefinition/au-address",
            "http://hl7.org.au/fhir/StructureDefinition/au-assigningauthority",
            "http://hl7.org.au/fhir/StructureDefinition/au-healthcareservice",
            "http://hl7.org.au/fhir/StructureDefinition/au-location",
            "http://hl7.org.au/fhir/StructureDefinition/au-organization",
            "http://hl7.org.au/fhir/StructureDefinition/au-practitioner",
            "http://hl7.org.au/fhir/StructureDefinition/au-practitionerrole",
            "http://hl7.org.au/fhir/StructureDefinition/au-receivingapplication",
            "http://hl7.org.au/fhir/StructureDefinition/au-receivingfacility",
            "http://hl7.org.au/fhir/StructureDefinition/encryption-certificate-pem-x509",
            "http://hl7.org.au/fhir/StructureDefinition/no-fixed-address"
        ];

        expect(profilesToLoad.every(async v => !await isProfileLoaded(v))).to.be.true;

        let ig = await fhirValidator.loadPackage(
            await fsP.readFile(
                path.join(__dirname, "./hl7.fhir.au.base.tgz")
            )
        );

        expect(ig.id).to.equal("hl7.fhir.au.base");
        expect(profilesToLoad.every(v => ig.profiles.includes(v))).to.be.true;
        expect(profilesToLoad.every(async v => await isProfileLoaded(v))).to.be.true;
    });

    it("should run getProfilesByIg properly", async () => {
        await fhirValidator.getProfilesByIg();
    });

    it("should validate FHIR resource", async () => {
        let fhirPatient = await fsP.readFile(
            path.join(__dirname, "./us-core-patient-example.json"),
            "utf8"
        );

        let oo = await fhirValidator.validate(fhirPatient, "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient");
        expect(oo).haveOwnProperty("resourceType");
        expect(oo.resourceType).equal("OperationOutcome");
        expect(oo.issue).lengthOf(1);
        expect(oo.issue[0].details.text).equal("All OK");
    });

    it("should validate FHIR resource with multiple profiles", async () => {
        let fhirPatient = await fsP.readFile(
            path.join(__dirname, "./us-core-patient-example.json"),
            "utf8"
        );

        let oo = await fhirValidator.validate(fhirPatient, "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient,http://hl7.org/fhir/StructureDefinition/Patient");
        expect(oo).haveOwnProperty("resourceType");
        expect(oo.resourceType).equal("OperationOutcome");
        expect(oo.issue).lengthOf(1);
        expect(oo.issue[0].details.text).equal("All OK");
    });

    it("should validate FHIR Patient resource and has missing identifier message", async () => {
        let fhirPatient = await fsP.readFile(
            path.join(__dirname, "./us-core-patient-example-error.json"),
            "utf8"
        );

        let oo = await fhirValidator.validate(fhirPatient, "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient");
        expect(oo).haveOwnProperty("resourceType");
        expect(oo.resourceType).equal("OperationOutcome");
        expect(oo.issue).lengthOf.at.least(1);
        expect(oo.issue.some(v => {
            if (Object.prototype.hasOwnProperty.call(v, "details")) {
                if (Object.prototype.hasOwnProperty.call(v, "text")) {
                    return v.details.text.includes("Patient.identifier: minimum required = 1");
                }
            }
            return false;
        }));
    });

    after(() => {
        java.clearDaemonProxies();
    });
})

async function isProfileLoaded(url) {
    return (await fhirValidator.getStructures()).includes(url);
}