import React, {useCallback, useEffect, useState} from 'react';
import {AppState, CartProduct, Product, Section} from "../../app.types";
import {useDispatch, useSelector} from "react-redux";
import {
    productsFetch,
    sectionsFetch,
    selectProduct,
    selectSection
} from "../../store/actions/catalog-actions/catalogActions";
import {selectView} from "../../store/actions/views-actions";
import {addProduct} from "../../store/actions/cart-actions/cartActions";
import CartButtonsPanel from "../cart/CartButtonsPanel";

/** Returns a React.FC, representing a ProductListItem
 *  passed by the caller
 *
 * STATE: {
 *          product: Product
 *       }
 */


const ProductListItem : React.FC= () => {

    const products = useSelector<AppState,Product[]>( (state) => state.products);
    const selectedProduct = useSelector<AppState,string>( (state) => state.selectedProduct);

    const dispatch = useDispatch();

    const [item,setItem] = useState<Product|undefined>({ id: ""});

    let selectProductHandler = useCallback((id: string, products: Product[]) => (e : React.MouseEvent) => {
        let tmp = products.find(product => product.id === id);
        setItem(tmp);
        dispatch(selectProduct(id));
    }, [])

    let handle = useCallback((str : string) => (e : any)=>{
        dispatch(selectView(str));
    },[])

    let cart = useSelector<AppState,CartProduct[]>((state: AppState) => state.cartProducts)



    return (
        <div className="Content-wrapper" id="productListItem-wrapper">
            <div className="NavHistory">
                <h5 onClick={handle("sections")} className="NavLinksSmall">Sections </h5>
                <h5> &gt; </h5>
                <h5 onClick={handle("products")} className="NavLinksSmall">Products </h5>
            </div>
            <ul className="ProductListItems">
            {
                products &&
                products
                    .map((el : Product ) => {
                        return (
                            <li className="Section-item"
                                 key={el.id}
                            >
                                <div className="ProductListItemDetails">

                                    <div className="ItemInfo">
                                        <h5>{el.id}</h5>
                                        <h5>{el.price}</h5>
                                    </div>
                                    <div className="ItemImage">
                                        <div className="TEMPimage" onClick={selectProductHandler(el.id,products)}>{el.image}</div>
                                    </div>

                                    <CartButtonsPanel product={el}/>

                                </div>

                            </li> )
                        }
                    )
            }
            </ul>
            <div className="MoreDetailsProduct">
                <h2>{selectedProduct}</h2>
                {item
                    ? Object.keys(item).map((el: string) => <p key={(item as any)[el]}>{(item as any)[el]}</p>)
                    : null
                }
            </div>
        </div>
    );
}

export default ProductListItem;