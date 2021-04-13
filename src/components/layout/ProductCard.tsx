import React, {useCallback} from 'react';
import {Product} from "../../app.types";
import {useDispatch} from "react-redux";
import {selectProduct} from "../../store/actions/catalog-actions/catalogActions";

type ProductCardProps = {
    product: Product | undefined
    selectedProduct: string
}

const ProductCard : React.FC<ProductCardProps> = ({product,selectedProduct}) => {

    let dispatch = useDispatch();

    let closeCard = useCallback(() => {
        dispatch(selectProduct(""))
    },[]);

    return (
        <div className="ProductCard">
            <div className="ClosePopupsButton" id="close-card-x" onClick={closeCard}>X</div>
            <h2>{selectedProduct}</h2>
            {product
                ? Object.keys(product).map((el: string) => <p key={(product as any)[el]}>{(product as any)[el]}</p>)
                : null
            }
        </div>
    );
}

export default ProductCard;