import React from "react";
import "../../styles/style.scss";

export default function HeroCardsItem({name, thumbnail, onHeroSelected, id}) {
    return (
        <div className='hero-card-container' onClick={() => onHeroSelected(id)} >
            <img src={thumbnail} alt={name} />
            <p className='hero-card-name'>{name}</p>
        </div>
    )
}   