import React, {useCallback, useState} from 'react';
import {AppState, Product, Section} from "../../../app.types";
import {useDispatch, useSelector} from "react-redux";
import {firestoreFB} from "../../../../firebase/configs/firebase.config";
import {productsFetch, sectionsFetch} from "../../../store/actions/catalog-actions/catalogActions";

type ProductsCreatorProps  = {
    setAppearance: any;
}

const ProductsCreator : React.FC<ProductsCreatorProps> = ({setAppearance}) => {

    const sections = useSelector<AppState,Section[]>( (state: AppState) => state.sections);
    const selectedSection = useSelector<AppState,string>((state) => state.selectedSection);

    const [newProduct,setNewProduct] = useState({
        id: "",
        el : {
            isAvailable: false,
            description: "",
            preorder: false,
            measureKg: "",
            price: 0,
            section: selectedSection,
            primizia: "",
            image: "",
        }
    });

    let dispatch = useDispatch();

    let createProductHandler = useCallback((e : any) => {
        e.preventDefault();
        /**
         * TODO: Set newProduct to firestore
         *      if newProduct.section isn't set throw exception
         *      maybe create a newSections to collect all the products without
         *      sections field set.
         *      if newProduct.section doesn't exists in the collection "sections"
         *      provide to create a new one with newSection.id = newProduct.section .
         *
         */
        let catalogRef = firestoreFB.collection(newProduct.el.section);

        catalogRef.doc(newProduct.id)
            .set(newProduct.el)
            .then(() => {
                console.log("NEW SECTION ADDED");
                dispatch(productsFetch(newProduct.el.section));
            })
            .catch((err) => {
                console.log("CODE", err.code);
                console.log("MESSAGE", err.message);
            });

        console.log(newProduct);
    },[newProduct]);

    let handleChange = useCallback((e)=>{
        e.preventDefault();
        setNewProduct(
            {
                ...newProduct,
                [e.target.name]: e.target.value
            }
        );
    },[newProduct]);

    let handleChangeCheckbox = useCallback((e)=>{
        setNewProduct(
            {
                ...newProduct,
                [e.target.name]: e.target.checked
            }
        );
    },[newProduct]);

    return (
        <div className="Creator" id={"products-creator"}>
            <h3>Create new product</h3>
            <div className="ClosePopupsButton"
                 id="close-addSect-popup-button"
                 onClick={setAppearance}>X</div>
            <form className="CreatorsForm"
                  onSubmit={createProductHandler}
                  id="product-panel-form">
                <label htmlFor="new-product-id">Name</label>
                <input type="text"
                       id="new-product-id"
                       name="id"
                       placeholder="Name"
                       onChange={handleChange}
                       required
                />
                <label htmlFor="new-product-image">Image</label>
                <input type="text"
                       id="new-product-image"
                       name="image"
                       placeholder="Image"
                       onChange={handleChange}
                       required
                />
                <label htmlFor="new-product-availability">Availability</label>
                <input type="checkbox"
                       id="new-product-availability"
                       name="isAvailable"
                       onChange={handleChangeCheckbox}
                />
                <label htmlFor="new-product-preorder">Preorder</label>
                <input type="checkbox"
                       id="new-product-preorder"
                       name="preorder"
                       onChange={handleChangeCheckbox}
                       placeholder="Preorder"
                />
                <label htmlFor="new-product-measureKg">Measure</label>
                <input type="text"
                       id="new-product-measureKg"
                       name="measureKg"
                       placeholder="kg/box"
                       onChange={handleChange}
                       required
                />
                <label htmlFor="new-product-price">Price</label>
                <input type="number"
                       id="new-product-price"
                       name="price"
                       placeholder="Price"
                       onChange={handleChange}
                       required
                />
                <label htmlFor="new-product-primizia">Primizia</label>
                <input type="checkbox"
                       id="new-rimizia-preorder"
                       name="primizia"
                />
                <label htmlFor="new-product-description">Description</label>
                <textarea id="new-product-description"
                          name="description"
                          onChange={handleChange}
                />
                <button type="submit" form="product-panel-form">Add Product</button>
            </form>
        </div>
    );
}

export default ProductsCreator;