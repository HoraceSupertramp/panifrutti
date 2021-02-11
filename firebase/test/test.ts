import "mocha";
import {expect} from "chai";
import Sinon from "sinon";
import {assertFails, assertSucceeds, initializeTestApp, loadFirestoreRules} from "@firebase/rules-unit-testing";

const MY_PROJECT_ID = "panifrutti-45ea1";

describe("panifrutti app", () => {
        it("Connection to firestore", () => {
            initializeTestApp({
                projectId: MY_PROJECT_ID,
            }).firestore();
        })



})
