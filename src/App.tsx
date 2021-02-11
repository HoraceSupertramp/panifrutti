import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import "./appCSS.css";
import HeaderTitle from "./components-pages/utils-component/HeaderTitle";
import NavigationBar from "./components-pages/utils-component/NavigationBar";
import Categories from "./components-pages/Categories";
import Summary from "./components-pages/Summary";
import Showcase from "./components-pages/Showcase";
import Home from "./components-pages/Home";
//const [state,setstate] = useState([]);
//const [state1,setstate1] = useState(false);
import Login from "./components-pages/Login";

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

            <Login/>

            {/* <Browser router> */}
            {/*<HeaderTitle/>
                <Home/>
            <NavigationBar/> */}
            {/*<Categories/>
                <Showcase/>
                <Summary/> */}

            {/* </Browser router> */}

        </div>
    )
}

export default App;