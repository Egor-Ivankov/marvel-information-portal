import React from 'react';
import Thor from '../img/thor.jpeg'
import '../sass/style.scss';

export default function HeroBlockDescr() {
    return (
        <div className='hero-block'>
            <img src={Thor} alt="Thor"/>
            <div className="hero-block-info">
                <p className='hero-block-name'>THOR</p>
                <p className='hero-block-descr'>
                    As the Norse God of thunder and lightning,
                    Thor wields one of the greatest weapons ever made,
                    the enchanted hammer Mjolnir. While others have described
                    Thor as an over-muscled, oafish imbecile,
                    he's quite smart and compassionate...
                </p>
                <div className="hero-block-btns">
                    <a href="/#"><div className='button-main'> Homepage</div></a>
                    <a href="/#"><div className='button-secondary'>Wiki</div></a>
                </div>
            </div>
        </div>
    )
}
