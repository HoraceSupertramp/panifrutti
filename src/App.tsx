import React, {useCallback, useEffect} from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "./app.types";
import "./appCSS.css";
import Home from "./components/Home";
import Categories from "./components/categories/Categories";
import About from "./components/About";
import Summary from "./components/Summary";
import NavigationBar from "./components/layout/NavigationBar";
import Dashboard from "./components/dasboard/Dashboard";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import ShowSections from "./components/categories/ShowSections";
import {Switch} from "react-router";
import {categoriesFetch, selectProduct} from "./store/actions/catalog-actions/catalogActions";
import ProductListItem from "./components/categories/ProductListItem";
import {selectView} from "./store/actions/views-actions";

const App : React.FC = () => {
    const activeView = useSelector<AppState,string>(state => state.selectedView)
    const selectedCategory = useSelector<AppState,string>( (state) => state.selectedCategory);
    const selectedSection = useSelector<AppState,string>( (state) => state.selectedSection);
    const selectedProduct = useSelector<AppState,string>( (state) => state.selectedProduct);

    let dispatch = useDispatch();


    let handle = useCallback((str : string) => (e : any)=>{
        e.preventDefault();
        dispatch(selectView(str));
    },[])


    return (
        <BrowserRouter>
            <div className="App-container">
                <div className="App-wrapper">
                    <NavigationBar/>
                    { (activeView === "categories" || activeView === "") && <Categories/>}
                    { (activeView === "login") ? <Login/> : null }
                    { (activeView === "signup") ? <SignUp/> : null }
                    { (activeView === "about") ? <About/> : null }
                    { (activeView === "categories" && selectedSection !== "") ? <ShowSections/> : null}


                    <h1>ACTIVE: {activeView}</h1>

                    {/*<Summary/>*/}
                    {/*<ProductListItem/>*/}

                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;