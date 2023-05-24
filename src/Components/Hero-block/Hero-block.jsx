import React from "react";
import HeroBlockStatic from "../Hero-block-static/Hero-block-static";
import HeroBlockDescr from "../Hero-block-descr/Hero-block-descr";

export default function HeroBlock () {
    return (
        <div className='hero-block-container'>
            <HeroBlockDescr/>
            <HeroBlockStatic/>
        </div>
    )
}
