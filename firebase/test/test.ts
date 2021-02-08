import "mocha";
import assert from "assert";
import {initializeTestApp, assertSucceeds} from "@firebase/testing";

const MY_PROJECT_ID = "panifrutti-45ea1"

describe("panifrutti app", () => {
    it("Connessione all'app", () => {
        const db = initializeTestApp({projectId: MY_PROJECT_ID}).firestore();
        const testDoc = db.collection("readonly").doc("testDoc");
        return assertSucceeds(
                testDoc.get()
                    .then(snapshot => {
                        console.log(snapshot);
                        return snapshot;
                    })
                    .catch(err => {
                        console.log(err);
                    })
            )
    })
})
