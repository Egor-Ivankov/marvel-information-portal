import React, { lazy, Suspense, useState, useCallback} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from '../Components/Header/Header';
import Spinner from "../Components/Spinner/Spinner";

const MainPage = lazy(() => import('../Components/pages/MainPage')); 
const ComicsPage = lazy(() => import('../Components/pages/ComicsPage')); 
const SingleComicPage = lazy(() => import('../Components/pages/SingleComicPage'));
const SingleHeroPage = lazy(() => import('../Components/pages/SingleHeroPage'));
const Page404 = lazy(() => import('../Components/pages/404')); 

export default function App () {    
    const [hero, setHero] = useState(null);

    const getHeroApp = useCallback((hero) => {
        setHero(hero);
        // eslint-disable-next-line
    }, [hero]);

    return (
        <Router>
            <div className="App">
            <Header/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path="/" element={<MainPage getHeroApp={getHeroApp} />}/>
                            <Route path="/comics" element={<ComicsPage />}/>
                            <Route path="/comics/:comicId" element={<SingleComicPage/> }/>
                            <Route path="/characters/:id" element={<SingleHeroPage hero={hero}/>}/>
                            <Route path="*" element={<Page404 />}/>
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    );
}
