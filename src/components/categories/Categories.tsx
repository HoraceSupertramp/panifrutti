import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppState, Category} from "../../app.types";
import {categoriesFetch, sectionsFetch, selectCategory} from "../../store/actions/catalog-actions/catalogActions";
import {selectView} from "../../store/actions/global-actions";
import CategoriesCreator from "../dasboard/catalog-creators/CategoriesCreator";



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
    const userToken = useSelector<AppState,string>( (state) => state.userToken);

    const [popAddAppear,setPopAddAppear] = useState<boolean>(false);

    const dispatch = useDispatch();

    useEffect(()=>{
        if (selectedCategory === "") dispatch(categoriesFetch());
    },[]);

    let selectCategoryHandler = useCallback((cat_id : string) => (e : React.MouseEvent) =>{
        if (cat_id !== selectedCategory ){
            dispatch(sectionsFetch(cat_id));
            dispatch(selectCategory(cat_id));
        }
        dispatch(selectView("sections"));
    },[]);

    let popAddAppearOpen = useCallback((e : any) => {
        e.preventDefault();
        if (!popAddAppear) setPopAddAppear(true)
    },[popAddAppear]);

    let popAddAppearClose = useCallback((e : any) => {
        e.preventDefault();
        if (popAddAppear) setPopAddAppear(false);
    },[popAddAppear]);


    if (categories) return (
        <div className="Content-wrapper">
            {(popAddAppear) &&
                <div className="PopupCreator">
                    <div className="PopupCreatorBack" onClick={popAddAppearClose}/>
                    <div className="PopupCreatorComponent">
                        <CategoriesCreator setAppearance={popAddAppearClose}/>
                    </div>
                </div>
            }
            <ul className="Categories-wrapper">
                {
                    userToken &&
                    <li className="GroupButton-item">
                        <div className="TEMPimage" onClick={popAddAppearOpen}>ADD</div>
                    </li>
                }
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

