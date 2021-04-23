import React, {useCallback, useState} from 'react';
import {Category} from "../../app.types";
import {firestoreFB} from "../../../firebase/configs/firebase.config";

const CategoriesCreator : React.FC = () => {

    const [newCategory,setNewCategory] = useState<Category>({
        id: "",
        image: "",
        isAvailable: false,
    });

    let createCategoryHandler = useCallback((e : any) => {
        e.preventDefault();
        //TODO: Set newCategory to firestore
        let catalogRef = firestoreFB.collection("catalog");
        catalogRef.add(newCategory)
            .then((doc) =>{
                console.log("added to firesotore",doc.id);
            })
            .catch((err) => {
                console.log("CODE: ", err.code);
                console.log("MESSAGE: ", err.message);
            })
        firestoreFB
        console.log(newCategory);
    },[newCategory]);

    let handleChange = useCallback((e)=>{
        e.preventDefault();
        setNewCategory(
            {
                ...newCategory,
                [e.target.name]: e.target.value.toLowerCase()
            }
        );
    },[newCategory]);

    let handleChangeCheckbox = useCallback((e)=>{
        setNewCategory(
            {
                ...newCategory,
                [e.target.name]: e.target.checked
            }
        );
    },[newCategory])

    return (
        <div className="Creator" id={"category-creator"}>
            <h3>Create new category</h3>
            <form className="CreatorsForm"
                  onSubmit={createCategoryHandler}
                  id="category-panel-form"
            >
                <label htmlFor="new-category-id">Name</label>
                <input type="text"
                       id="new-category-id"
                       name="id"
                       onChange={handleChange}
                       placeholder="Name"
                       required/>
                <label htmlFor="new-category-image">Image</label>
                <input type="text"
                       id="new-category-image"
                       name="image"
                       onChange={handleChange}
                       placeholder="Image" required/>
                <label htmlFor="new-category-availability">Availability</label>
                <input type="checkbox"
                       id="new-category-availability"
                       name="isAvailable"
                       onChange={handleChangeCheckbox}
                       placeholder="Availability"/>
                <button type="submit" id="category-panel-form">Add Category</button>
            </form>
        </div>
    );
}

export default CategoriesCreator;