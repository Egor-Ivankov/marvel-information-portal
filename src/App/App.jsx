import React, { lazy, Suspense} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from '../Components/Header/Header';
import Spinner from "../Components/Spinner/Spinner";

const MainPage = lazy(() => import('../Components/pages/MainPage')); 
const ComicsPage = lazy(() => import('../Components/pages/ComicsPage')); 
const SingleComicPage = lazy(() => import('../Components/pages/SingleComicPage'));
const Page404 = lazy(() => import('../Components/pages/404')); 

export default function App () {    

    return (
        <Router>
            <div className="App">
            <Header/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path="/" element={<MainPage />}/>
                            <Route path="/comics" element={<ComicsPage />}/>
                            <Route path="/comics/:comicId" element={<SingleComicPage/> }/>
                            <Route path="*" element={<Page404 />}/>
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    );
}
