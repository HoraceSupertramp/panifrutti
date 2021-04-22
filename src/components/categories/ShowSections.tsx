import React, {useCallback, useEffect} from "react";
import ProductCard from "./ProductList";
import ProductList from "./ProductList";
import {AppState, Category, Product, Section} from "../../app.types";
import {useDispatch, useSelector} from "react-redux";
import {
    productsFetch,
    sectionsFetch,
    selectCategory,
    selectSection
} from "../../store/actions/catalog-actions/catalogActions";

import {selectView} from "../../store/actions/rootActions";
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


const ShowSections : React.FC = () => {

    const sections = useSelector<AppState,Section[]>( (state) => state.sections);
    const selectedSection = useSelector<AppState,string>( (state) => state.selectedSection)

    const dispatch = useDispatch();

    let selectSectionHandler = useCallback((sec_id: string) => (e : React.MouseEvent) => {
        if (sec_id !== selectedSection) {
            dispatch(selectSection(sec_id))
            dispatch(productsFetch(sec_id));
        }
        dispatch(selectView("products"));
    }, [])

    let handle = useCallback((str : string) => (e : any)=>{
        dispatch(selectView(str));
    },[])

    return (
        <div className="Content-wrapper" id="sections-wrapper">
            <div className="NavHistory">
                <h5 onClick={handle("categories")} className="NavLinksSmall">Categories </h5>
            </div>
            <ul className="Categories-wrapper">
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

export default ShowSections;