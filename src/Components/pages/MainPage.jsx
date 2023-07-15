import React, { useState, lazy, Suspense, useCallback, useEffect } from 'react';
import HeroBlockDescr from "../Hero-block-descr/Hero-block-descr";
import HeroCards from '../Hero-cards/Hero-cards';
import SearchHero from '../Search-hero/SearchHero';
import Spinner from '../Spinner/Spinner';
import ErrorBoundary from "../Error-boundary/ErrorBoundary";
import vision from "../../img/vision.png";

const HeroInfo = lazy(() => import('../Hero-info/Hero-info'));

const MainPage = ({getHeroApp}) => {
    const [selectedHero, setSelectedHero] = useState(null);
    const [hero, setHero] = useState(null);

    const onHeroSelected = useCallback((id) => {
        setSelectedHero(id);
        // eslint-disable-next-line
    }, [selectedHero]);

    const getHero = useCallback((hero) => {
        setHero(hero);
        // eslint-disable-next-line
    }, [hero]);

    useEffect(() => {
        getHeroApp(hero)
        // eslint-disable-next-line
    }, [hero])

    return (
        <>
            <ErrorBoundary>
                <HeroBlockDescr/>
            </ErrorBoundary>
            <div className="hero-content">
                    <HeroCards onHeroSelected={onHeroSelected} />
                <Suspense fallback={ <Spinner/> }>
                    <div>
                        <ErrorBoundary>
                            <HeroInfo heroId={selectedHero}/>
                        </ErrorBoundary>
                        <ErrorBoundary>
                            <SearchHero getHero={getHero}/>
                        </ErrorBoundary>
                    </div>
                </Suspense>
            </div>
            <img src={vision} alt="Vision" className="bg-decoration" />
        </>
    );
}

export default MainPage;
