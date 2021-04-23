import React, {useCallback, useState} from 'react';
import {Section} from "../../app.types";

const SectionsCreator : React.FC = () => {

    const [newSection,setNewSection] = useState<Section>({
        id: "",
        image: "",
        isAvailable: false,
        category: ""
    });

    /**
     * TODO: Set newSection to firestore
     *      if newSection.category isn't set throw exception
     *      maybe create a newCategory to collect all the products without
     *      sections field set.
     *      if newSection.category doesn't exists in the collection "category"
     *      provide to create a new one with newCategory.id = newSection.category .
     *
     */
    let createSectionHandler = useCallback((e : any) => {
        e.preventDefault();
        //TODO: Set newSection to firestore
        console.log(newSection);
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
    },[newSection])

    return (
        <div className="Creator" id={"category-creator"}>
            <h3>Create new section</h3>
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
                <label htmlFor="new-section-category">Category</label>
                <input type="text"
                       id="new-section-category"
                       name="category"
                       onChange={handleChange}
                       placeholder="Category" required/>
                <button type="submit" id="section-panel-form">Add Section</button>
            </form>
        </div>
    );
}

export default SectionsCreator;