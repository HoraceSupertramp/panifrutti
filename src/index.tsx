import * as React from "react";
import {render} from "react-dom";
import App from "./App";
import "./css/indexCSS.css";
import {createStore , applyMiddleware, compose} from "redux";
import rootReducer from "./store/reducers/rootReducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import  "../firebase/configs/firebase.config";
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25,
})

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

render(
    <Provider store = {store}>
        <App/>
    </Provider>,

    document.getElementById("root"));
