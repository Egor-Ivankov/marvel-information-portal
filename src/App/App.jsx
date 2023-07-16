import React, { lazy, Suspense} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from '../Components/Header/Header';
import Spinner from "../Components/Spinner/Spinner";

const MainPage = lazy(() => import('../Components/pages/MainPage')); 
const ComicsPage = lazy(() => import('../Components/pages/ComicsPage')); 
const Page404 = lazy(() => import('../Components/pages/404')); 
const SinglePage = lazy(() => import('../Components/pages/SinglePage'));
const SingleComicLayout = lazy(() => import('../Components/pages/layout/SingleComicLayout'));
const SingleHeroLayout = lazy(() => import('../Components/pages/layout/SingleHeroLayout'));

export default function App () {    

    return (
        <Router>
            <div className="App">
            <Header/>
                <main>
                    <Suspense fallback={<Spinner />}>
                        <Routes>
                            <Route path="/" element={<MainPage />}/>
                            <Route path="/comics" element={<ComicsPage />}/>
                            <Route path="comics/:id" element={<SinglePage Component={SingleComicLayout} dataType={'comics'} />}/>
                            <Route path="hero/:id" element={<SinglePage Component={SingleHeroLayout} dataType={'hero'} />}/>
                            <Route path="*" element={<Page404 />}/>
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    );
}
