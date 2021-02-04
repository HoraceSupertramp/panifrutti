import app from "../firebase";


app.firestore().collection("prodotti").get().then(
    (snapshot)  => {
        console.log(snapshot.docs);
    }
)




