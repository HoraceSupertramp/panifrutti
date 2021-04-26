import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "./app.types";
import "./css/appCSS.css";
import "./css/authCSS.css";
import "./css/dashboardCSS.css"
import Home from "./components/Home";
import Categories from "./components/categories/Categories";
import About from "./components/About";
import Summary from "./components/Summary";
import Dashboard from "./components/dasboard/Dashboard";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Sections from "./components/categories/Sections";
import Products from "./components/categories/Products";
import {closeSideMenu, logoutUser, openSideMenu, selectView} from "./store/actions/rootActions";
import SignedOutLinks from "./components/layout/SignedOutLinks";
import SignedInLinks from "./components/layout/SignedInLinks";
import TopBar from "./components/layout/TopBar";
import CartPage from "./components/cart/CartPage";
import {authFB} from "../firebase/configs/firebase.config";
import {setUserToken} from "./store/actions/firebase-actions/firebaseActionsRdx";
import UserProfile from "./components/user_profile/UserProfile";

const App : React.FC = () => {
    const activeView = useSelector<AppState,string>((state : AppState) => state.selectedView)
    const sideMenuAppear = useSelector<AppState,boolean>( (state : AppState) => state.sideMenuAppear)
    const userToken = useSelector<AppState,string>( (state : AppState) => state.userToken);

    let dispatch = useDispatch();

    useEffect(()=>{

    })

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
                if (userToken === "") dispatch(setUserToken(user.uid))
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

                { (sideMenuAppear) && (userToken != "") &&
                    <nav className="TopBar-wrapper" onClick={closeMenuHandler}>
                        <SignedInLinks/>
                    </nav>
                }
                { (sideMenuAppear) && (userToken != "") &&
                    <div className="SideMenuBack" onClick={closeMenuHandler} />
                }

                <div className="Main-wrapper">
                    { //home
                        (activeView === "categories" || (activeView === "" && userToken !== "") || (userToken !== "" && activeView === "login" ) || (activeView === "signup" && userToken !== ""))
                            ? <Categories/>
                            : null
                    }
                    { (userToken === "") ? <Login/> : null }
                    { (activeView === "signup" && userToken === "") ? <SignUp/> : null }
                    { (activeView === "about") ? <About/> : null }
                    { (activeView === "sections") ? <Sections/> : null}
                    { (activeView === "products") ? <Products/> : null}
                    { (activeView === "cart" && userToken !== "") ? <CartPage/> : null }
                    { (activeView === "categories" || activeView === "") ? <div className="Content-wrapper"><h1>{activeView}</h1></div> : null}
                    { (activeView === "profile") ? <UserProfile/> : null}
                    { (activeView === "dashboard") ? <Dashboard/> : null}
                </div>

                <SignedOutLinks/>
                <div className="ButtonsTest">
                    <button  className="ButtonTest" onClick={handleLogout}>LOGOUT</button>
                    <button className="ButtonTest" onClick={()=>console.log(authFB.currentUser)}>USER LOGGED</button>
                    <button className="ButtonTest" onClick={handleView("dashboard")}>DASHB</button>
                </div>
            </div>
    )
}

export default App;