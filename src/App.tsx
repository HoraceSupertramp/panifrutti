import React, {useCallback, useEffect} from 'react';
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
import {closeSideMenu, logoutUser, openSideMenu, selectView} from "./store/actions/global-actions";
import SignedOutLinks from "./components/layout/SignedOutLinks";
import SignedInLinks from "./components/layout/SignedInLinks";
import TopBar from "./components/layout/TopBar";
import CartPage from "./components/cart/CartPage";
import {authFB} from "../firebase/configs/firebase.config";
import {setUserToken} from "./store/actions/firebase-actions";

const App : React.FC = () => {
    const activeView = useSelector<AppState,string>((state : AppState) => state.selectedView)
    const sideMenuAppear = useSelector<AppState,boolean>( (state : AppState) => state.sideMenuAppear)
    const userToken = useSelector<AppState,string>( (state : AppState) => state.userToken);

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

     let setUserTokenHandler = useCallback((str?)=>{
        dispatch(setUserToken(str));
    },[]);

    let handleLogout = useCallback(() => {
        dispatch(logoutUser());
    },[])

    authFB.onAuthStateChanged((user) => {
            if (user) {
                console.log("user sign in");
            }
            else {
                console.log("no user");
            }
        }
    )

    return (
            <div className="App-container">

                <div className="Test">
                    TOKEN: {userToken}
                </div>
                <TopBar/>

                { (sideMenuAppear && (userToken != "")) &&
                    <nav className="TopBar-wrapper" onClick={closeMenuHandler}>
                        <SignedInLinks/>
                    </nav>
                }

                { (sideMenuAppear && (userToken != "")) &&
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

                <button  className="ButtonTest" onClick={handleLogout}>LOGOUT</button>
                <button className="ButtonTest2" onClick={()=>console.log(authFB.currentUser)}>USER LOGGED</button>

            </div>
    )
}

export default App;