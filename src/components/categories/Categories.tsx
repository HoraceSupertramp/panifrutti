import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppState, Category} from "../../app.types";
import {categoriesFetch, sectionsFetch, selectCategory} from "../../store/actions/catalog-actions/catalogActions";
import {selectView} from "../../store/actions/global-actions";



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
   const selectedCategory = useSelector<AppState,string>( (state) => state.selectedCategory)

    const [tempCat,setTempCat] = useState<string>("");

    const dispatch = useDispatch();

    useEffect(()=>{
        if (selectedCategory === "") dispatch(categoriesFetch());
    },[]);

    let selectCategoryHandler = useCallback((cat_id : string) => (e : React.MouseEvent) =>{
        if (cat_id !== selectedCategory ){
            dispatch(selectCategory(cat_id));
            dispatch(sectionsFetch(cat_id));
        }
        dispatch(selectView("sections"));
    },[]);

    if (categories) return (
            <div className="Content-wrapper">
                <ul className="Categories-wrapper">
                { categories &&
                  categories
                      .map((el : Category ) => {
                              return ( <li onClick={selectCategoryHandler(el.id)}
                                       className="GroupButton-item"
                                       key={el.id}>
                                  <div className="TEMPimage">{el.id}</div>
                                  </li>)
                          }
                      )
                }
                </ul>
            </div>
            );
    else return null;

}

export default Categories;

