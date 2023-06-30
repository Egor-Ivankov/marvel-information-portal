import React, { useState } from 'react';
import HeroBlockDescr from "../Hero-block-descr/Hero-block-descr";
import HeroCards from "../Hero-cards/Hero-cards";
import HeroInfo from "../Hero-info/Hero-info";
import ErrorBoundary from "../Error-boundary/ErrorBoundary";
import vision from "../../img/vision.png";

const MainPage = () => {
    const [selectedHero, setSelectedHero] = useState(null);

    const onHeroSelected = (id) => {
        setSelectedHero(id);
    }

    return (
        <>
            <ErrorBoundary>
                <HeroBlockDescr/>
            </ErrorBoundary>
            <div className="hero-content">
                <HeroCards onHeroSelected={onHeroSelected} />
                <ErrorBoundary>
                    <HeroInfo heroId ={selectedHero}/>
                </ErrorBoundary>
            </div>
            <img src={vision} alt="Vision" className="bg-decoration" />
        </>
    );
}

export default MainPage;
