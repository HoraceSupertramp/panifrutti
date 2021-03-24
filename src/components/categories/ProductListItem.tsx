import React, {useCallback, useEffect, useState} from 'react';
import {AppState, Product, Section} from "../../app.types";
import {useDispatch, useSelector} from "react-redux";
import {
    productsFetch,
    sectionsFetch,
    selectProduct,
    selectSection
} from "../../store/actions/catalog-actions/catalogActions";
import {NavLink} from "react-router-dom";

/** Returns a React.FC, representing a ProductListItem
 *  passed by the caller
 *
 * STATE: {
 *          product: Product
 *       }
 */


const ProductListItem : React.FC= () => {

    const selectedSection = useSelector<AppState,string>( (state) => state.selectedSection);
    const products = useSelector<AppState,Product[]>( (state) => state.products);
    const selectedProduct = useSelector<AppState,string>( (state) => state.selectedProduct);

    const dispatch = useDispatch();

    const [item,setItem] = useState<Product|undefined>({ id: ""});

    useEffect(()=>{
        dispatch(productsFetch(selectedSection));
    },[]);


    let selectProductHandler = useCallback((id: string, products: Product[]) => (e : React.MouseEvent) => {
        let tmp = products.find(product => product.id === id);
        setItem(tmp);
        dispatch(selectProduct(id));
    }, [])

    return (
        <div className="Content-wrapper" id="productListItem-wrapper">
            <h4>{selectedSection}</h4>
            {
                products &&
                products
                    .map((el : Product ) => {
                        console.log(products);
                        return (
                            <div onClick={selectProductHandler(el.id,products)}
                                 className="Section-item"
                                 key={el.id}
                            >
                                {el.id}
                            </div> )
                        }
                    )
            }
            <div>
                <h2>SELECTED PROD: {selectedProduct}</h2>
                {item
                    ? Object.keys(item).map((el: string) => <p key={(item as any)[el]}>{(item as any)[el]}</p>)
                    : null
                }
            </div>
        </div>
    );
}

export default ProductListItem;