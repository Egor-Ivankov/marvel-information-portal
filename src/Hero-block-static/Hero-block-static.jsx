import React from 'react';
import '../sass/style.scss';
import Mjolnir from '../img/mjolnir.png';

export default function HeroBlockStatic() {
    return (
        <div className='hero-block-static'>
            <p>
                Random character for today! <br/>
                Do you want to get to know him better?
            </p>
            <p className='hero-block-static-letter'>
                Or choose another one
            </p>
            <a href="/#"><div className='button-main'> Try it</div></a>
            <img src={Mjolnir} alt="Mjolnir"/>
        </div>
    )
}
