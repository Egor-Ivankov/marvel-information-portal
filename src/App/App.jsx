import React from "react";
import Header from "../Components/Header/Header";
import HeroBlock from "../Components/Hero-block/Hero-block";
import HeroCards from "../Components/Hero-cards/Hero-cards";
import HeroInfo from "../Components/Hero-info/Hero-info";

function App() {
    return (
        <div className="App">
            <Header/>
            <HeroBlock/>
            <div className="hero-content">
                <HeroCards/>
                <HeroInfo/>
            </div>
        </div>
    );
}

export default App;
