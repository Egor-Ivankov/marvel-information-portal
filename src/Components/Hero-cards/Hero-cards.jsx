import React, { useState, useEffect, useRef } from "react";
import useMarvelService from "../services/MarvelServise";
import {setContentList} from "../../utils/setContent";
import PropTypes from 'prop-types';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import "../../styles/style.scss";

function HeroCards (props) {
    
    const [data, setData] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [heroEnded, setHeroEnded] = useState(false);
    const {process, setProcess, getAllHeroes} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
        // eslint-disable-next-line
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllHeroes(offset)
            .then(onDataLoaded)
            .then(() => setProcess('complete'))
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

    const renderItems = (arr) => {
        const items = arr.map((item, i) => {
            return (
                <CSSTransition timeout={500} key={item.id} classNames="hero-transition" >
                    <li
                        className='hero-card-container'
                        ref={el => itemRefs.current[i] = el}
                        onClick={() => {
                                        props.onHeroSelected(item.id);
                                        focusOnItem(i);
                                        }}>
                        <img src={item.thumbnail} alt={item.name} />
                        <p className='hero-card-name'>{item.name}</p>
                    </li>
                </CSSTransition>
            )
        })
        return (
            <ul>
                <TransitionGroup component={null}>
                    {items}
                </TransitionGroup>
            </ul>
        )
    } 
    
    return (
                <div className='hero-cards'>
                        {setContentList(process, () => renderItems(data), newItemLoading)}
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