import React, { useState, lazy, Suspense, useCallback } from 'react';
import HeroBlockDescr from "../Hero-block-descr/Hero-block-descr";
import HeroCards from '../Hero-cards/Hero-cards';
import Spinner from '../Spinner/Spinner';
import ErrorBoundary from "../Error-boundary/ErrorBoundary";
import vision from "../../img/vision.png";

const HeroInfo = lazy(() => import('../Hero-info/Hero-info'));

const MainPage = () => {
    const [selectedHero, setSelectedHero] = useState(null);

    const onHeroSelected = useCallback((id) => {
        setSelectedHero(id);
        // eslint-disable-next-line
    }, [selectedHero]);

    return (
        <>
            <ErrorBoundary>
                <HeroBlockDescr/>
            </ErrorBoundary>
            <div className="hero-content">
                    <HeroCards onHeroSelected={onHeroSelected} />
                <Suspense fallback={ <Spinner/> }>
                    <ErrorBoundary>
                        <HeroInfo heroId ={selectedHero}/>
                    </ErrorBoundary>
                </Suspense>
            </div>
            <img src={vision} alt="Vision" className="bg-decoration" />
        </>
    );
}

export default MainPage;
