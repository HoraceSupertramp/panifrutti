import React, {useCallback, useState} from 'react';
import {Section} from "../../app.types";

const SectionsCreator : React.FC = () => {

    const [newSection,setNewSection] = useState<Section>({
        id: "",
        image: "",
        isAvailable: true
    });

    let createSectionHandler = useCallback((e : any) => {
        e.preventDefault();
        console.log(e.target);
    },[]);


    let handleChange = useCallback((e)=>{
        e.preventDefault();
        setNewSection(
            {
                ...newSection,
                [e.target.id]: e.target.value
            }
        );
    },[newSection]);
    return (
        <div className="Creator"  id={"sections-creator"}>
            <h3>Create new section</h3>
            <form className={"CreatorsForm"}
                  onSubmit={createSectionHandler}
                  id="section-panel-form"
            >
                <label htmlFor="new-section-id">Name</label>
                <input type="text" id={"new-section-id"} placeholder={"Name"} required/>
                <label htmlFor="new-section-image">Image</label>
                <input type="text" id={"new-section-image"} placeholder={"Image"} required/>
                <label htmlFor="new-section-availability">Availability</label>
                <input type="checkbox" id={"new-section-availability"} placeholder={"Name"} required/>
                <button type="submit" form="section-panel-form">Add Section</button>
            </form>
        </div>
    );
}

export default SectionsCreator;