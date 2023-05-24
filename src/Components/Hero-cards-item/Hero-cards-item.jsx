import React from "react";
import "../../sass/style.scss";
import hero from "../../img/abyss.jpg";

export default function HeroCardsItem() {
    return (
        <div className='hero-card-container'>
            <img src={hero} alt="Abyss" />
            <p className='hero-card-name'>Abyss</p>
        </div>
    )
}