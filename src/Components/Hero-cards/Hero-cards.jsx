import React, { useState, useEffect, useRef } from "react";
import useMarvelService from "../services/MarvelServise";
import ErrorMessage from "../Error-message/Error-message";
import Spinner from "../Spinner/Spinner";
import PropTypes from 'prop-types';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import "../../styles/style.scss";

function HeroCards (props) {
    
    const [data, setData] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [heroEnded, setHeroEnded] = useState(false);
    const {loading, error, getAllHeroes} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
        // eslint-disable-next-line
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllHeroes(offset)
            .then(onDataLoaded)
    }

    const onDataLoaded = (newData) => {

        let ended = false;

        if(newData.length < 9) {
            ended = true;
            alert('All characters is end')
        }

        setData(() => [...data, ...newData]);
        setNewItemLoading(false);
        setOffset(offset => offset + 9);
        setHeroEnded(ended);
    }

    const itemRefs = useRef([]); 

    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('hero-card-container-selected'));
        itemRefs.current[id].classList.add('hero-card-container-selected');
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;

    const elements = data.map((item, i) => {
        return (
            <CSSTransition timeout={500} key={item.id} classNames="hero-transition" >
                <li
                    className='hero-card-container'
                    onClick={() => {
                                    props.onHeroSelected(item.id);
                                    focusOnItem(i);
                                    }}
                    ref={el => itemRefs.current[i] = el}>
                    <img src={item.thumbnail} alt={item.name} />
                    <p className='hero-card-name'>{item.name}</p>
                </li>
            </CSSTransition>
        )
    })
    
    return (
                <div className='hero-cards'>
                        {spinner}
                        {errorMessage}
                    <ul>
                        <TransitionGroup component={null}>
                            {elements}
                        </TransitionGroup>
                    </ul>
                    <button
                        onClick={() => onRequest(offset)}
                        disabled={newItemLoading}
                        style={{'display': heroEnded ? 'none' : 'block'}}
                        className='button-main'
                    >Load more</button>
                </div>
    )
}

HeroCards.propTypes = {
    onHeroSelected: PropTypes.func
}

export default HeroCards;