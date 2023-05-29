import React from "react";
import HeroCardsItem from '../Hero-cards-item/Hero-cards-item';
import "../../styles/style.scss";

export default function HeroCards() {
    return (
        <div className='hero-cards'>
            <ul>
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
