import React, {useCallback, useState} from 'react';
import {Category} from "../../../app.types";
import {firestoreFB} from "../../../../firebase/configs/firebase.config";
import {useDispatch} from "react-redux";
import {categoriesFetch} from "../../../store/actions/catalog-actions/catalogActions";

type CategoriesCreatorProps  = {
    setAppearance: any;
}

const CategoriesCreator : React.FC<CategoriesCreatorProps> = ({setAppearance}) => {


    const [newCategory,setNewCategory] = useState({
        id: "",
        el: {
            image: "",
            isAvailable: false
        }
    });

    const dispatch = useDispatch();

    let createCategoryHandler = useCallback((e : any) => {
        e.preventDefault();
        //TODO: Set newCategory to firestore
        let catalogRef = firestoreFB.collection("catalog");
        catalogRef.doc(newCategory.id).set(newCategory.el)
            .then((doc) =>{
                console.log("added to firestore");
                dispatch(categoriesFetch())
            })
            .catch((err) => {
                console.log("CODE: ", err.code);
                console.log("MESSAGE: ", err.message);
            })
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
            <div className="ClosePopupsButton"
                 id="close-addCat-popup-button"
                 onClick={setAppearance}>X</div>
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