import React, {useCallback, useState} from 'react';
import {Product} from "../../app.types";

const ProductsCreator : React.FC = () => {

    const [newProduct,setNewProduct] = useState<Product>({
        id: ""
    });

    let createProductHandler = useCallback((e : any) => {
        e.preventDefault();
        console.log(e.target);
    },[]);

    let handleChange = useCallback((e)=>{
        e.preventDefault();
        setNewProduct(
            {
                ...newProduct,
                [e.target.id]: e.target.value
            }
        );
    },[newProduct]);

    return (
        <div className="Creator" id={"products-creator"}>
            <h3>Create new product</h3>
            <form className="CreatorsForm"
                  onSubmit={createProductHandler}
                  id="product-panel-form">
                <label htmlFor="new-product-id">Name</label>
                <input type="text" id="new-product-id" placeholder="Name" onChange={handleChange} required/>
                <label htmlFor="new-product-image">Image</label>
                <input type="text" id="new-product-image" placeholder="Image" onChange={handleChange} required/>
                <label htmlFor="new-product-availability">Availability</label>
                <input type="checkbox" id="new-product-availability" placeholder="Name" required/>
                <label htmlFor="new-product-preorder">Preorder</label>
                <input type="checkbox" id="new-product-preorder" placeholder="Preorder" required/>
                <label htmlFor="new-product-measureKg">Measure</label>
                <input type="text" id="new-product-measureKg" placeholder="kg/box" onChange={handleChange} required/>
                <label htmlFor="new-product-price">Price</label>
                <input type="number" id="new-product-price" placeholder="Price" onChange={handleChange} required/>
                <label htmlFor="new-product-section">Measure</label>
                <input type="text" id="new-product-section" placeholder="Section" onChange={handleChange} required/>
                <label htmlFor="new-product-primizia">Primizia</label>
                <input type="checkbox" id="new-rimizia-preorder" placeholder="Primizia" required/>
                <button type="submit" form="product-panel-form">Add Product</button>
            </form>
        </div>
    );
}

export default ProductsCreator;