        <div className="AppContainer" id={"container"}>

            <HeaderTitle />
            {/* <Browser router> */}
            {/*<HeaderTitle/>
                <Home/>
            <NavigationBar/> */}
            {/*<Categories/>
                <Showcase/>
                <Summary/> */}
            {/* </Browser router> */}

        </div>




                    basename={optionalString}
                    forceRefresh={optionalBool}
                    getUserConfirmation={optionalFunc}
                    keyLength={optionalNumber}







        <BrowserRouter
            getUserConfirmation={(message, callback) => {
                const allowTransition = window.confirm(message);
                callback(allowTransition);
            }}
            forceRefresh={true}
        >