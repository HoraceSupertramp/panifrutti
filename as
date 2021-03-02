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
            <AppContainer>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/categories">Categories</Link>
                    </li>
                </ul>
                <HeaderTitle/>
                <Switch>
                    <Route exact={true} path="/" > <Home/> </Route>
                    <Route exact={true} path="/categories" > <Categories/> </Route>
                    <Route path="/summary" component={Summary}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </AppContainer>
        </BrowserRouter>