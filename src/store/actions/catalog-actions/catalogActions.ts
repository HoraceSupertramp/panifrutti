import {firestoreApp} from "../../../../firebase/firebase.config";
import {Category, Product, Section} from "../../../app.types";

const CATEGORIES_FETCH_END = "CATEGORIES_FETCH_END";
const SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY";
const SECTIONS_FETCH_END = "SECTIONS_FETCH_END";
const SET_SELECTED_SECTION = "SET_SELECTED_SECTION";
const PRODUCTS_FETCH_END = "PRODUCTS_FETCH_END";
const SET_SELECTED_PRODUCT = "SET_SELECTED_PRODUCT";


export interface CategoriesFetchEnd {
    type : typeof CATEGORIES_FETCH_END;
    categories : Category[];
}

export interface SelectCategory {
    type : typeof SET_SELECTED_CATEGORY;
    id: string;
}``

export interface SectionsFetchEnd {
    type : typeof SECTIONS_FETCH_END;
    sections : Section[];
}

export interface SelectSection {
    type : typeof SET_SELECTED_SECTION;
    id: string;
}

export interface ProductsFetchEnd {
    type : typeof PRODUCTS_FETCH_END;
    products : Product[];
}

export interface SelectProduct {
    type : typeof SET_SELECTED_PRODUCT;
    id: string;
}


export const categoriesFetch = () => {
    return (dispatch: any) => {
        firestoreApp.collection("catalog")
            .get()
            .then((snapshot) => {
                const result = snapshot.docs.map((doc): Category => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                dispatch(categoriesFetchEnd(result));
            })
    }
}

export const categoriesFetchEnd = (categories : Category[]) => {
    return {
        type : CATEGORIES_FETCH_END,
        categories,
    }
}

export const selectCategory = (id : string) => {
    return {
        type: SET_SELECTED_CATEGORY,
        id
    }
}


export const sectionsFetch = (sect_id : string) => {
    return (dispatch: any) => {
        if (sect_id !== "") {
            firestoreApp.collection(sect_id)
                .get()
                .then((snapshot) => {
                    const result = snapshot.docs.map((doc) : Section => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    dispatch(sectionsFetchEnd(result));
                })
        }
    }
}

export const sectionsFetchEnd = (sections : Section[]) => {
    return {
        type : SECTIONS_FETCH_END,
        sections,
    }
}

export const selectSection = (section_id : string) => {
    return {
        type: SET_SELECTED_SECTION,
        id: section_id
    }
}


export const productsFetch = (prod_id : string) => {
    return (dispatch: any) => {
        if (prod_id !== "") {
            firestoreApp.collection(prod_id)
                .get()
                .then((snapshot) => {
                    const result = snapshot.docs.map((doc) : Product => {
                        return {
                            id: doc.id,
                            ...doc.data(),
                        }
                    });
                    dispatch(productsFetchEnd(result));
                })
        }
    }
}

export const productsFetchEnd = (products : Product[]) => {
    return {
        type : PRODUCTS_FETCH_END,
        products,
    }
}

export const selectProduct = (product_id : string) => {
    return {
        type: SET_SELECTED_PRODUCT,
        id: product_id
    }
}


export type CatalogActions = CategoriesFetchEnd |
                             SelectCategory |
                             SectionsFetchEnd |
                             SelectSection |
                             ProductsFetchEnd |
                             SelectProduct;

