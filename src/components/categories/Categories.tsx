import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppState, Category} from "../../app.types";
import {NavLink} from "react-router-dom";
import {categoriesFetch, selectCategory} from "../../store/actions/catalog-actions/catalogActions";



/** Returns a React.FC containing a wrapper for the icons links tho the showcases,
 * categories viewer
 *
 *
 *
 *
 * @constructor
 */


const Categories : React.FC = () => {

   const categories = useSelector<AppState,Category[]>((state) => state.categories );
   const selectedCategory = useSelector<AppState,string>( (state) => state.selectedCategory);

   const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(categoriesFetch());
    },[])

    let selectCategoryHandler = useCallback((id : string) => (e : React.MouseEvent) =>{
        dispatch(selectCategory(id));
    },[])

    if (categories) return (
            <div className="Content-wrapper" id="categories-wrapper">
                { categories && <h2>CATEGORIE</h2> }
                { categories &&
                  categories
                      .map((el : Category ) => {
                              return ( <NavLink onClick={selectCategoryHandler(el.id)}
                                       className="Category-item"
                                       key={el.id} to={"/categories/" + el.id}>
                                  {el.id}
                              </NavLink> )
                          }
                      )
                }
                { (selectedCategory !== "") ? <div>{selectedCategory}</div> : null }
            </div>
            )
    else return null;

}

export default Categories;

