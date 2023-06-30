import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Header from '../Components/Header/Header';
import { MainPage, ComicsPage } from "../Components/pages";
export default function App () {

    return (
        <Router>
            <div className="App">
                <Header/>
                <main>
                    <Switch>
                        <Route exact path="/">
                            <MainPage/>
                        </Route>
                        <Route exact path="/comics">
                            <ComicsPage/>
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

