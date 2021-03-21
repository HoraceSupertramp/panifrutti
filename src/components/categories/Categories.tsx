import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector, useStore} from "react-redux";
import {AppState, Category, Section} from "../../app.types";
import {firestoreApp} from "../../../firebase/firebase.config";
import {Link} from "react-router-dom";
import firebase from "firebase";
import DocumentData = firebase.firestore.DocumentData;
import {
    categoriesFetch,
} from "../../store/actions/categories-actions/categoriesActions";

/** Returns a React.FC containing a wrapper for the icons links tho the showcases,
 * categories viewer
 *
 *
 *
 *
 * @constructor
 */

type  CategoriesProps = AppState;


const Categories : React.FC<CategoriesProps> = (props) => {

   const state = useSelector<AppState,Category[]>((state) => state.categories );

   const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(categoriesFetch());
    },[])

    return (
            <div className="Categories-wrapper">
                <h2>CATEGORIE</h2>
                { state && state.map((el : Category ) => <Link key={el.id} to={"/categories/"+el.id}>{el.id}</Link>) }
            </div>
            )

}

export default Categories;

