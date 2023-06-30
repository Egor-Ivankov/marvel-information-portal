import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from '../Components/Header/Header';
import { MainPage, ComicsPage } from "../Components/pages";
export default function App () {

    return (
        <Router>
            <div className="App">
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/comics" element={<ComicsPage/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

