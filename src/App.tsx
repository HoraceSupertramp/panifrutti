import React from 'react';
import ReactDOM from 'react-dom'
import "./appCSS.css";
import {BrowserRouter, NavLink} from "react-router-dom";
import Home from "./components-pages/Home";
import Categories from "./components-pages/Categories";
import About from "../About";
import {Route, Switch, useHistory} from "react-router";
import Summary from "./components-pages/Summary";

//TODO: Add router
//TODO: create the state


const App : React.FC = (props : any) => {
    return (
        <BrowserRouter>
                <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users">Users</NavLink>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path="/about" component={About}/>
                <Route path="/categories" component={Categories}/>
                <Route path="/summary" component={Summary}/>
                <Route exact={true} path="/" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;