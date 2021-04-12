import React, {useCallback, useEffect} from "react";
import ProductCard from "./ProductListItem";
import ProductListItem from "./ProductListItem";
import {AppState, Category, Product, Section} from "../../app.types";
import {useDispatch, useSelector} from "react-redux";
import {
    productsFetch,
    sectionsFetch,
    selectCategory,
    selectSection
} from "../../store/actions/catalog-actions/catalogActions";
import {selectView} from "../../store/actions/views-actions";
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

    const dispatch = useDispatch();

    let selectSectionHandler = useCallback((id: string) => (e : React.MouseEvent) => {
        dispatch(selectSection(id))
        dispatch(productsFetch(id));
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
                .map((el : Section ) => {
                    return (
                        <li onClick={selectSectionHandler(el.id)}
                             className="GroupButton-item"
                             key={el.id}
                        >
                            {el.id}
                        </li>
                         )
                    })
           }
           </ul>
        </div>
    )
}

export default ShowSections;