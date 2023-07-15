import React from 'react';
import useMarvelService from '../services/MarvelServise';
import Spinner from '../Spinner/Spinner';

const SingleHero = ({hero}) => {

    const {name, description, thumbnail} = hero[0];
    const {loading} = useMarvelService();

    const spinner = loading 
    ? <Spinner/> 
    : null;
    
    return (
        <>
            <div className='single-hero'>
            <img src={thumbnail} alt={name} />
            <div className="text">
                <h2>{name}</h2>
                <p>{description ? description : 'There is character has not a description'}</p>
            </div>
            </div>
            {spinner}
        </>
    );
}

export default SingleHero;
