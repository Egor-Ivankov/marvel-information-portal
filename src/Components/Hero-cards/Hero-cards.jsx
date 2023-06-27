import React, { useState, useEffect, useRef } from "react";
import MarvelService from "../services/MarvelServise";
import ErrorMessage from "../Error-message/Error-message";
import Spinner from "../Spinner/Spinner";
import PropTypes from 'prop-types';
import "../../styles/style.scss";

function HeroCards (props) {
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [heroEnded, setHeroEnded] = useState(false);

    const service = new MarvelService();

    useEffect(() => {
        onRequest();
        // eslint-disable-next-line
    }, [])

    const onRequest = (offset) => {
        onHeroListLoading();
        service.getAllHeroes(offset)
        .then(onDataLoaded)
        .catch(onError)
    }

    const onHeroListLoading = () => {
        setNewItemLoading(true);
    }

    const onDataLoaded = (newData) => {

        let ended = false;

        if(newData.length < 9) {
            ended = true;
            alert('All characters is end')
        }

        setData(() => [...data, ...newData]);
        setLoading(false);
        setNewItemLoading(false);
        setOffset(offset => offset + 9);
        setHeroEnded(ended);
    }

    const onError = () => {
        setError(true);
        setLoading(false);
    }

    const itemRefs = useRef([]); 

    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('hero-card-container-selected'));
        itemRefs.current[id].classList.add('hero-card-container-selected');
        itemRefs.current[id].focus();
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;

    const elements = data.map((item, i) => {
        return (
            <div 
                className='hero-card-container' 
                onClick={() => {
                                props.onHeroSelected(item.id);
                                focusOnItem(i);
                                }}
                key={item.id}
                ref={el => itemRefs.current[i] = el}>
                <img src={item.thumbnail} alt={item.name} />
                <p className='hero-card-name'>{item.name}</p>
            </div>
        )
    })
    
    const content = !(loading || error) ? elements : null;
    
    return (
                <div className='hero-cards'>
                        {spinner}
                        {errorMessage}
                    <ul>
                        {content}
                    </ul>
                    <button
                        onClick={() => onRequest(offset)}
                        disabled={newItemLoading}
                        style={{'display': heroEnded ? 'none' : 'block'}}
                        className='button-main'
                    >Load new heroes</button>
                </div>
    )
}

HeroCards.propTypes = {
    onHeroSelected: PropTypes.func
}

export default HeroCards;