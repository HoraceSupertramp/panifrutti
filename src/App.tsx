import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import "./appCSS.css";
import HeaderTitle from "./components-pages/utils-component/HeaderTitle";
import NavigationBar from "./components-pages/utils-component/NavigationBar";
import Categories from "./components-pages/Categories";
import Summary from "./components-pages/Summary";
import Showcase from "./components-pages/Showcase";
import Home from "./components-pages/Home";
//const [elofstate,setElofstate] = useState([]);
//const [elofstate1,setElofstate1] = useState(false);
import "../database/firestore/db.config";


const state = {
    openedBox: false,
    selectedProduct: {},
    toOrder: {},
    selectedKingdom: {},
    productToPreorder: {},
    searchInput: {},
}


const App : React.FC = () => {
    return (
        <div className="AppContainer">
            <HeaderTitle/>
            {/* <Browser router> */}
                <Home/>
            {/*<Categories/>
                <Showcase/>
                <Summary/> */}
            {/* </Browser router> */}
            <NavigationBar/>
        </div>
    )
}

export default App;