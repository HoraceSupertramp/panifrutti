import "mocha";
import {expect} from "chai";
import Sinon from "sinon";
import {assertFails, assertSucceeds, initializeTestApp, loadFirestoreRules} from "@firebase/rules-unit-testing";

const MY_PROJECT_ID = "panifrutti-45ea1";

describe("panifrutti app", () => {
        it("Connection to firestore", async () => {
            await initializeTestApp({
                projectId: MY_PROJECT_ID,
                auth: { uid: "alice", email: "alice@example.com" }
            }).firestore();
        })
})

describe("Authentication function", () => {
    it("Register with mail", () => {

    })
})