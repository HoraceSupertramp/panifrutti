import * as React from "react";
import {render} from "react-dom";
import App from "./App";
import "./indexCSS.css";
import {createStore , applyMiddleware, compose} from "redux";
import rootReducer from "./store/reducers/rootReducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import "../firebase/firebase.config";


const store = createStore(rootReducer, applyMiddleware(thunk));

render(
    <Provider store = {store}>
        <App/>
    </Provider>,

    document.getElementById("root"));
