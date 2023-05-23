import React from "react";
import Header from "../Header/Header";
import HeroBlock from "../Hero-block/Hero-block";
import HeroCards from "../Hero-cards/Hero-cards";
import HeroInfo from "../Hero-info/Hero-info";

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
