import {ThunkAction} from "redux-thunk";
import {firestoreApp} from "../../../../firebase/firebase.config";
import {Category, Product} from "../../../app.types";
import {Action} from "redux";
import firebase from "firebase";
import FirestoreError = firebase.firestore.FirestoreError;
const CATEGORIES_FETCH_END = "CATEGORIES_FETCH_END";


export interface CategoriesFetchEnd {
    type : typeof CATEGORIES_FETCH_END;
    categories : Category[];
}

export const categoriesFetch = () => {
    return (dispatch: any, getState: any) => {
        firestoreApp.collection("catalog")
                    .get()
                    .then((snapshot) => {
                        const result = snapshot.docs.map((doc): Category => ({
                            id: doc.id,
                            ...doc.data(),
                        }));
                        dispatch(categoriesFetchEnd(result));
                        console.log(result);
                    })
    }
}




export const categoriesFetchEnd = (categories : Category[]) => {
    return {
        type : CATEGORIES_FETCH_END,
        categories,
    }
}





export type MyActions =  CategoriesFetchEnd;

