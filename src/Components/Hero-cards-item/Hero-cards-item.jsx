import React from "react";
import "../../styles/style.scss";

export default function HeroCardsItem({name, thumbnail}) {
    return (
        <div className='hero-card-container'>
            <img src={thumbnail} alt="character thumbnail" />
            <p className='hero-card-name'>{name}</p>
        </div>
    )
}