import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "./app.types";
import "./appCSS.css";
import Home from "./components/Home";
import Categories from "./components/categories/Categories";
import About from "./components/About";
import Summary from "./components/Summary";
import Dashboard from "./components/dasboard/Dashboard";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import ShowSections from "./components/categories/ShowSections";
import ProductList from "./components/categories/ProductList";
import {closeSideMenu, openSideMenu, selectView} from "./store/actions/utils-actions";
import SignedOutLinks from "./components/layout/SignedOutLinks";
import SignedInLinks from "./components/layout/SignedInLinks";
import TopBar from "./components/layout/TopBar";
import CartPage from "./components/cart/CartPage";

const App : React.FC = () => {
    const activeView = useSelector<AppState,string>(state => state.selectedView)
    const selectedCategory = useSelector<AppState,string>( (state) => state.selectedCategory);
    const sideMenuAppear = useSelector<AppState,boolean>( (state) => state.sideMenuAppear)


    let dispatch = useDispatch();


    let handleView = useCallback((str : string) => (e : any)=>{
        e.preventDefault();
        dispatch(selectView(str));
    },[])

    let openMenuHandler = useCallback((e : any)=>{
        e.preventDefault();
        dispatch(openSideMenu());
    },[]);

    let closeMenuHandler = useCallback((e : any)=>{
        e.preventDefault();
        dispatch(closeSideMenu());
    },[]);

    return (
            <div className="App-container">

                <TopBar/>

                { sideMenuAppear &&
                    <nav className="TopBar-wrapper" onClick={closeMenuHandler}>
                        <SignedInLinks/>
                    </nav>
                }

                { sideMenuAppear &&
                    <div className="SideMenuBack" onClick={closeMenuHandler} />
                }

                <div className="Main-wrapper">
                    { (activeView === "login") ? <Login/> : null }
                    { (activeView === "signup") ? <SignUp/> : null }
                    { (activeView === "about") ? <About/> : null }
                    { (activeView === "" || activeView ==="categories") ? <Categories/> : null}
                    { (activeView === "sections") ? <ShowSections/> : null}
                    { (activeView === "products") ? <ProductList/> : null}
                    { (activeView === "cart") ? <CartPage/> : null }
                    {(activeView === "categories" || activeView === "") ? <div className="Content-wrapper"><h1>{activeView}</h1></div> : null}
                </div>
                <SignedOutLinks/>
            </div>
    )
}

export default App;