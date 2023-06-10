import React from "react";
import "../../styles/style.scss";
import PropTypes from 'prop-types';

export default function HeroCardsItem({name, thumbnail, onHeroSelected, id}) {
    return (
        <div className='hero-card-container' onClick={() => onHeroSelected(id)} >
            <img src={thumbnail} alt={name} />
            <p className='hero-card-name'>{name}</p>
        </div>
    )
}   

HeroCardsItem.propTypes = {
    name: PropTypes.string,
    thumbnail: PropTypes.string,
    onHeroSelected: PropTypes.func,
    id: PropTypes.number
}   