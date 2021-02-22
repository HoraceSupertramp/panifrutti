//import NavigationBar from "./components-pages/utils-component/NavigationBar";
//import Categories from "./components-pages/Categories";
//import Summary from "./components-pages/Summary";
//import Showcase from "./components-pages/Showcase";
//import Home from "./components-pages/Home";
//const [state,setstate] = useState([]);
//const [state1,setstate1] = useState(false);
import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import "./appCSS.css";
import Login from "./components-pages/Login";

//TODO: Add router
//TODO: create the state

//<Register children={...props}/>

const App : React.FC = (props : any) => {
    console.log()
    return (
            <Login/>
    )
}

export default App;
