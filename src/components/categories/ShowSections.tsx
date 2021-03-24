import React, {useCallback, useEffect} from "react";
import ProductCard from "./ProductListItem";
import ProductListItem from "./ProductListItem";
import {AppState, Category, Product, Section} from "../../app.types";
import {useDispatch, useSelector} from "react-redux";
import {sectionsFetch, selectCategory, selectSection} from "../../store/actions/catalog-actions/catalogActions";
import {NavLink} from "react-router-dom";
import {Route, Switch} from "react-router";
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

    const selectedCategory = useSelector<AppState,string>( (state) => state.selectedCategory);
    const sections = useSelector<AppState,Section[]>( (state) => state.sections);
    const selectedSection = useSelector<AppState,string>( (state) => state.selectedSection);

    const dispatch = useDispatch();

    useEffect(()=>{
            dispatch(sectionsFetch(selectedCategory));
    },[]);

    let selectSectionHandler = useCallback((id: string) => (e : React.MouseEvent) => {
        dispatch(selectSection(id));
    }, [])

    return (
        <div className="Content-wrapper">
            <h4>{selectedCategory}</h4>
            {
            sections &&
            sections
                .map((el : Section ) => {
                    let str = "/categories/"+selectedCategory+"/"+el.id
                    return (
                        <NavLink onClick={selectSectionHandler(el.id)}
                             className="Section-item"
                             key={el.id}
                             to={str}
                        >
                            {el.id}
                        </NavLink> )
                    })
            }
            {(selectedSection !== "") ? <div>{selectedSection}</div> : null}

        </div>
    )
}

export default ShowSections;