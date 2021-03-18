import React from 'react';
import {Product} from "../../app.types";

/** Returns a React.FC, representing a ProductListItem
 *  passed by the caller
 *
 * STATE: {
 *          product: Product
 *       }
 */

interface ProductListItemProps {
    product : Product
}


const ProductListItem : React.FC<ProductListItemProps> = ({product} ) => {
  return (
           <li className="ProductListItem-wrapper">
               <h3>{product.name}</h3>
               <div>
                   {product.image}
               </div>
               <p>{product.description}</p>
               <p>{product.price}</p>
               <p>{product.measureKg}</p>
           </li>
  );
}

export default ProductListItem;