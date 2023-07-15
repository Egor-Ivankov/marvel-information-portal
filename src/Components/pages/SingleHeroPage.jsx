import React from 'react';
import SingleHero from '../Single-hero/SingleHero';
import AppBanner from '../App-banner/AppBanner';

const SingleHeroPage = ({hero}) => {
    return (
        <>
            <AppBanner/>
            <SingleHero hero={hero}/>
        </>
    );
}

export default SingleHeroPage;
