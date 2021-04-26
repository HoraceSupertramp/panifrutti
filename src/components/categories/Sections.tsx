import React, {useCallback, useEffect, useState} from "react";
import ProductCard from "./Products";
import Products from "./Products";
import {AppState, Category, Product, Section} from "../../app.types";
import {useDispatch, useSelector} from "react-redux";
import {
    productsFetch,
    sectionsFetch,
    selectCategory,
    selectSection
} from "../../store/actions/catalog-actions/catalogActions";

import {selectView} from "../../store/actions/rootActions";
import CategoriesCreator from "../dasboard/catalog-creators/CategoriesCreator";
import SectionsCreator from "../dasboard/catalog-creators/SectionsCreator";
//import {sectionsFetch} from "../../store/actions/catalog-actions/catalogActions";

/** Creates and renders a Products[] having the same "section" KEY
 *      used :
 *          selectItemsBySection(section);
 *
 *
 *      STATE : {
 *          sectionName: string,    //USED TO GET ELEMENTS BY SESSION IF SESSION COUNT > 5
 *          products: Product[]
 *      }
 *
 */



const Sections : React.FC = () => {

    const sections = useSelector<AppState,Section[]>( (state) => state.sections);
    const selectedSection = useSelector<AppState,string>( (state) => state.selectedSection);
    const userToken = useSelector<AppState,string>( (state) => state.userToken);

    const [popAddAppear,setPopAddAppear] = useState<boolean>(false);



    const dispatch = useDispatch();

    let selectSectionHandler = useCallback((sec_id: string) => (e : React.MouseEvent) => {
        if (sec_id !== selectedSection) {
            dispatch(selectSection(sec_id))
            dispatch(productsFetch(sec_id));
        }
        dispatch(selectView("products"));
    }, [])

    let handleView = useCallback((str : string) => (e : any)=>{
        dispatch(selectView(str));
    },[])

    let popAddAppearOpen = useCallback((e : any) => {
        e.preventDefault();
        if (!popAddAppear) setPopAddAppear(true)
    },[popAddAppear]);

    let popAddAppearClose = useCallback((e : any) => {
        e.preventDefault();
        if (popAddAppear) setPopAddAppear(false);
    },[popAddAppear]);

    return (
        <div className="Content-wrapper" id="sections-wrapper">
            <div className="NavHistory">
                <h5 onClick={handleView("categories")} className="NavLinksSmall">Categories </h5>
            </div>
            {(popAddAppear) &&
            <div className="PopupCreator">
                <div className="PopupCreatorBack" onClick={popAddAppearClose}/>
                <div className="PopupCreatorComponent">
                    <SectionsCreator setAppearance={popAddAppearClose}/>
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
            {
            sections &&
            sections
                .map((sec : Section ) => {
                    return (
                        <li onClick={selectSectionHandler(sec.id)}
                             className="GroupButton-item"
                             key={sec.id}
                        >
                            <div className="TEMPimage">{sec.id}</div>
                        </li>
                         )
                    })
           }
           </ul>
        </div>
    )
}

export default Sections;