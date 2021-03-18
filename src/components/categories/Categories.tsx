import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useStore} from "react-redux";
import {AppState, Section} from "../../app.types";
import {categoriesFetchEnd} from "../../store/actions/categories-actions/categoriesActions";
import {firestoreApp} from "../../../firebase/firebase.config";
import {Link} from "react-router-dom";
import firebase from "firebase";
import DocumentData = firebase.firestore.DocumentData;

/** Returns a React.FC containing a wrapper for the icons links tho the showcases,
 * categories viewer
 *
 *
 *
 *
 * @constructor
 */
/*
let nameSettHelper = () => {
    for (let i = 0; i < categories.length; i++) names.push(categories[i].name);
}

nameSettHelper();


*/

type  CategoriesProps = AppState;


const Categories : React.FC<CategoriesProps> = (props) => {

   const { categories } = useStore<AppState>().getState();

   const dispatch = useDispatch<any>()




    const [data,setData] = useState<DocumentData>([]);


    useEffect(()  => {

    const catalogRef = firestoreApp
                       .collection("catalog");
    catalogRef
    .get()
    .then((snapshot ) => {
        const result = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setData(result);
    })

    },[]);


    return (
            <div className="Categories-wrapper">
                <h2>CATEGORIE</h2>
                {data.map((el : any ) => <Link key={el.id} to={"/categories/"+el.id}>{el.id}</Link>)}
            </div>
            )

}

export default Categories;

