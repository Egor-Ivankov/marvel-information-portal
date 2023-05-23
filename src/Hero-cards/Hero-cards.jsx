import React from 'react';
import HeroCardsItem from '../Hero-cards-item/Hero-cards-item';
import '../sass/style.scss';

export default function HeroCards() {
    return (
        <div className='hero-cards'>
            <ul className='hero-cards-list'>
                <li className='hero-cards-item'><HeroCardsItem/></li>
                <li className='hero-cards-item selected'><HeroCardsItem/></li>
                <li className='hero-cards-item'><HeroCardsItem/></li>
                <li className='hero-cards-item'><HeroCardsItem/></li>
                <li className='hero-cards-item' ><HeroCardsItem/></li>
                <li className='hero-cards-item'><HeroCardsItem/></li>
                <li className='hero-cards-item'><HeroCardsItem/></li>
                <li className='hero-cards-item'><HeroCardsItem/></li>
                <li className='hero-cards-item'><HeroCardsItem/></li>
            </ul>
            <a href="/#"><div className='button-main'> Homepage</div></a>
        </div>
    )
}
