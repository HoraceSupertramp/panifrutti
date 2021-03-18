import {ThunkAction} from "redux-thunk";
import {firestoreApp} from "../../../../firebase/firebase.config";
import {Category, Product} from "../../../app.types";

const CATEGORIES_FETCH_START = "CATEGORIES_FETCH_START";
const CATEGORIES_FETCH_END = "CATEGORIES_FETCH_END";
const CATEGORIES_FETCH_ERR = "CATEGORIES_FETCH_ERR"

const SET_CATEGORIES = "SET_CATEGORIES";
const SELECT_CATEGORY = "SELECT_ITEM";

const ITEMS_FETCH_START = "ITEMS_FETCH_START";
const ITEMS_FETCH_END = "ITEMS_FETCH_END";
const ITEMS_FETCH_ERR = "ITEMS_FETCH_ERR";

const SET_ITEMS = "SET_ITEMS"
const SELECT_ITEM = "SELECT_ITEM";


export interface CategoriesFetchStart {
    type : typeof CATEGORIES_FETCH_START
}

export interface CategoriesFetchErr {
    type : typeof CATEGORIES_FETCH_ERR;
}

export interface CategoriesFetchEnd {
    type : typeof CATEGORIES_FETCH_END;
    collection : Category[]
}

export interface SelectCategory {
    type : typeof SET_CATEGORIES
}


export interface ItemsFetchStart {
    type : typeof ITEMS_FETCH_START
}

export interface ItemsFetchErr {
    type : typeof ITEMS_FETCH_ERR;
}

export interface ItemsFetchEnd {
    type : typeof ITEMS_FETCH_END;
    collection : Product[]
}

export interface SelectItem {
    type : typeof SELECT_ITEM
}



export const setCategories = () => {
    return (dispatch : any ,getState : any ) => {
        dispatch(
            {type : "SET_CATEGORIES"}
        )
    }
}

export const selectCategory = (category : any ) => {
    return (dispatch : any ,getState : any ) => {
        dispatch(
            {type : "SELECT_CATEGORY"}
            )
    }
}

export const setItems = () => {
    return (dispatch : any ,getState : any ) => {
        dispatch(
            {type : "SET_ITEMS"}
            )
    }
}

export const selectItem = (category : any) => {
    return (dispatch : any ,getState : any ) => {
        dispatch({type : "SELECT_ITEM"})
    }
}


export const categoriesFetchStart = () => {
    return (dispatch : any ,getState : any ) => {
        dispatch({type : "CATEGORIES_FETCH_START"});
        return firestoreApp.collection("catalog").get()
            .then((collection) => {
                dispatch(categoriesFetchEnd(collection.docs))
            } )
    }
}

export const categoriesFetchEnd = (categories : Category[]) =>{
    return {
        type : CATEGORIES_FETCH_END,
        categories,
    }
}

export const categoriesFetchErr = () =>{
    return {
        type : CATEGORIES_FETCH_ERR
    }
}

export const itemsFetchStart = () => {
    return (dispatch : any ,getState : any ) => {
        dispatch({type : "ITEMS_FETCH_START"});
        return
    }
}

export const itemsFetchEnd = (categories : Category[]) =>{
    return {
        type : CATEGORIES_FETCH_END,
        categories,
    }
}

export const itemsFetchErr = () =>{
    return {
        type : CATEGORIES_FETCH_ERR
    }
}



export type MyActions = SelectCategory |
                        SelectItem |
                        CategoriesFetchStart |
                        CategoriesFetchEnd |
                        CategoriesFetchErr |
                        ItemsFetchStart |
                        ItemsFetchEnd |
                        ItemsFetchErr;
