import React, {useCallback, useState} from 'react';
import {Product} from "../../app.types";

const ProductsCreator : React.FC = () => {

    const [newProduct,setNewProduct] = useState<Product>({
        id: "",
        isAvailable: false,
        description: "",
        preorder: false,
        measureKg: "",
        price: 0,
        section: "",
        primizia: "",
        image: "",
    });

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

        //
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
    },[newProduct])


    return (
        <div className="Creator" id={"products-creator"}>
            <h3>Create new product</h3>
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
                />
                <label htmlFor="new-product-preorder">Preorder</label>
                <input type="checkbox"
                       id="new-product-preorder"
                       name="preorder"
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
                <label htmlFor="new-section-product">Section</label>
                <input type="text"
                       id="new-section-product"
                       placeholder="Product"
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