import React, {useState} from "react";
import Header from "../Components/Header/Header";
import HeroBlockDescr from "../Components/Hero-block-descr/Hero-block-descr";
import HeroCards from "../Components/Hero-cards/Hero-cards";
import HeroInfo from "../Components/Hero-info/Hero-info";
import ErrorBoundary from "../Components/Error-boundary/ErrorBoundary";
import vision from "../img/vision.png";

export default function App () {

    const [selectedHero, setSelectedHero] = useState(null);

    const onHeroSelected = (id) => {
        setSelectedHero(id);
    }

    return (
        <div className="App">
            <Header/>
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
        </div>
    );
}

