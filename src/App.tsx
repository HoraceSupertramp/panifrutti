import React from 'react';
import ReactDOM from 'react-dom'
import "./appCSS.css";
import Home from "./components/Home";
import Categories from "./components/categories/Categories";
import About from "./components/About";
import Summary from "./components/Summary";
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import NavigationBar from "./components/layout/NavigationBar";
import Dashboard from "./components/dasboard/Dashboard";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Showcase from "./components/categories/Showcase";



const App : React.FC = (props : any) => {

    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <NavigationBar/>
                    <Route exact={true} path="/" component={Home}/>
                    <Route exact={true} path="/dashboard" component={Dashboard}/>
                    <Route exact={true} path="/login" component={Login}/>
                    <Route exact={true} path="/signup" component={SignUp}/>
                    <Route exact={true} path="/about" component={About}/>
                    <Route exact={true} path="/summary" component={Summary}/>
                    <Route exact={true} path="/categories" component={Categories} />
            </div>
        </BrowserRouter>
    )
}

export default App;