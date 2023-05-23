import React from 'react';
import '../sass/style.scss';
import Hero from '../img/abyss.jpg'

export default function HeroCardsItem() {
    return (
        <div className='hero-card-container'>
            <img src={Hero} alt="Abyss" />
            <p className='hero-card-name'>Abyss</p>
        </div>
    )
}