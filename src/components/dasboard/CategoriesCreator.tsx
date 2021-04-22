import React, {useCallback, useState} from 'react';
import {Category} from "../../app.types";

const CategoriesCreator : React.FC = () => {

    const [newCategory,setNewCategory] = useState<Category>({
        id: "",
        image: "",
        isAvailable: true,
    });


    let createCategoryHandler = useCallback((e : any) => {
        e.preventDefault();

        console.log(e.target);
    },[]);

    let handleChange = useCallback((e)=>{
        e.preventDefault();
        setNewCategory(
            {
                ...newCategory,
                [e.target.id]: e.target.value
            }
        );
    },[newCategory]);

    return (
        <div className="Creator" id={"category-creator"}>
            <h3>Create new category</h3>
            <form className="CreatorsForm"
                  onSubmit={createCategoryHandler}
                  id="category-panel-form"
            >
                <label htmlFor="new-category-id">Name</label>
                <input type="text" id="new-category-id" onChange={handleChange} placeholder="Name" required/>
                <label htmlFor="new-category-image">Image</label>
                <input type="text" id="new-category-image" onChange={handleChange} placeholder="Image" required/>
                <label htmlFor="new-category-availability">Availability</label>
                <input type="checkbox" id="new-category-availability" onChange={()=>{}} placeholder="Availability" required/>
                <button type="submit" id="category-panel-form">Add Category</button>
            </form>
        </div>
    );
}

export default CategoriesCreator;