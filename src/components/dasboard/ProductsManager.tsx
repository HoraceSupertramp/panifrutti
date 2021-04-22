import React, {useCallback, useState} from 'react';
import {Category, Product, Section} from "../../app.types";
import {firestoreFB} from "../../../firebase/configs/firebase.config";
import CategoriesCreator from "./CategoriesCreator";
import SectionsCreator from "./SectionsCreator";
import ProductsCreator from "./ProductsCreator";

const ProductsManager : React.FC = () => {

    return (
        <div className="ProductManager">
            <h2>Manage Products</h2>
            <CategoriesCreator/>
            <SectionsCreator/>
            <ProductsCreator/>
        </div>
    );
}

export default ProductsManager;