import React, {useCallback, useState} from 'react';
import {AppState, Category, Section} from "../../../app.types";
import {firestoreFB} from "../../../../firebase/configs/firebase.config";
import {useDispatch, useSelector} from "react-redux";
import {categoriesFetch, sectionsFetch} from "../../../store/actions/catalog-actions/catalogActions";

type SectionsCreatorProps  = {
    setAppearance: any;
}

const SectionsCreator : React.FC<SectionsCreatorProps> = ({setAppearance}) => {

    const categories = useSelector<AppState,Category[]>( (state) => state.categories);
    const selectedCategory = useSelector<AppState,string>((state) => state.selectedCategory);

    const [newSection,setNewSection] = useState({
        id: "",
        el: {
            image: "",
            isAvailable: false,
            category: selectedCategory
        }
    });

    const dispatch = useDispatch();

    /**
     * TODO: Set newSection to firestore
     *      if newSection.category isn't set throw exception
     *      maybe create a newCategory to collect all the products without
     *      sections field set.
     *      if newSection.category doesn't exists in the collection "category"
     *      provide to create a new one with newCategory.id = newSection.category
     *
     */
    let createSectionHandler = useCallback((e : any) => {
        e.preventDefault();
        /**
         * TODO: Set newSection to firestore
         *  add a cascade menu to choose the category where assign the new doc
         *  or permit to create a new one:
         *  0) ok, choose category from available
         *  1) extends the panel adding the categories creator component
         *  2) add a new system that use the categories creator
         */
        console.log(newSection)

        //INSERT
        let catalogRef = firestoreFB.collection(newSection.el.category);

        catalogRef.doc(newSection.id)
            .set(newSection.el)
            .then(() => {
                console.log("NEW SECTION ADDED");
                dispatch(sectionsFetch(newSection.el.category))
            })
            .catch((err) => {
                console.log("CODE", err.code);
                console.log("MESSAGE", err.message);
            });

    },[newSection]);

    let handleChange = useCallback((e)=>{
        e.preventDefault();
        setNewSection(
            {
                ...newSection,
                [e.target.name]: e.target.value
            }
        );
    },[newSection]);

    let handleChangeCheckbox = useCallback((e)=>{
        setNewSection(
            {
                ...newSection,
                [e.target.name]: e.target.checked
            }
        );
    },[newSection]);

    return (
        <div className="Creator" id={"category-creator"}>
            <h3>Create new section</h3>
            <div className="ClosePopupsButton"
                 id="close-addSect-popup-button"
                 onClick={setAppearance}>X</div>
            <form className="CreatorsForm"
                  onSubmit={createSectionHandler}
                  id="category-panel-form"
            >
                <label htmlFor="new-section-id">Name</label>
                <input type="text"
                       id="new-section-id"
                       name="id"
                       onChange={handleChange}
                       placeholder="Name"
                       required/>
                <label htmlFor="new-section-image">Image</label>
                <input type="text"
                       id="new-section-image"
                       name="image"
                       onChange={handleChange}
                       placeholder="Image" required/>
                <label htmlFor="new-section-availability">Availability</label>
                <input type="checkbox"
                       id="new-section-availability"
                       name="isAvailable"
                       onChange={handleChangeCheckbox}
                       placeholder="Availability"/>
                <button type="submit" id="section-panel-form">Add Section</button>
            </form>
        </div>
    );
}

export default SectionsCreator;