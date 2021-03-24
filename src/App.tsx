import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from "react-router-dom";
import {useSelector} from "react-redux";
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
import {selectProduct} from "./store/actions/catalog-actions/catalogActions";
import ProductListItem from "./components/categories/ProductListItem";



const App : React.FC = () => {
    const selectedCategory = useSelector<AppState,string>( (state) => state.selectedCategory);
    const selectedSection = useSelector<AppState,string>( (state) => state.selectedSection);
    const selectedProduct = useSelector<AppState,string>( (state) => state.selectedProduct);

    return (
        <BrowserRouter>
            <div className="App-container">
                <div className="App-wrapper">
                    <NavigationBar/>
                    <Switch>
                        <Route exact={true} path="/" component={Home}/>
                        <Route exact={true} path="/dashboard" component={Dashboard}/>
                        <Route exact={true} path="/login" component={Login}/>
                        <Route exact={true} path="/signup" component={SignUp}/>
                        <Route exact={true} path="/about" component={About}/>
                        <Route exact={true} path="/summary" component={Summary}/>
                        <Route exact={true} path="/categories" component={Categories} />
                        {/*<Route exact={true} path={"/categories/:selectedCategory"} component={ShowSections}/>*/}
                        <Route exact={true} path={"/categories/"+selectedCategory+"/"+selectedSection} component={ProductListItem}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;