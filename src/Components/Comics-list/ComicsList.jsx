import React, {useEffect, useState} from 'react';
import useMarvelService from '../services/MarvelServise';
import {setContentList} from "../../utils/setContent";
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import { Link } from 'react-router-dom';
import '../../styles/style.scss';


const ComicsList = () => {
    const {process, setProcess, getAllComics} = useMarvelService();
    const [data, setData] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(1);
    const [comicsEnded, setComicsEnded] = useState(false);

    useEffect(() => {
        onRequest(offset, true)
        // eslint-disable-next-line
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset)
            .then(onDataLoaded)
            .then(() => setProcess('complete'))
    }

    const onDataLoaded = (newData) => {

        let ended = false;

        if(newData.length < 8) {
            ended = true;
            alert('All comics is end')
        }

        setData(() => [...data, ...newData]);
        setNewItemLoading(false);
        setOffset(offset => offset + 8);
        setComicsEnded(ended);
    }

    const renderItems = (arr) => {
        const items = arr.map((comics, i) => {
            return (
                /*The key attribute is deliberately made 
                as an element index so that there are no errors in the console 
                with a repeated key. Marvel API has a large number of recurring comics*/
                <CSSTransition timeout={500} classNames='comics-transition' key={i}>
                    <li className="comics-list-item" >
                        <Link to={`/comics/${comics.id}`} element='#/'>
                            <img src={comics.thumbnail} alt={comics.title} />
                            <div className="comics-list-item-text">
                                <h2>{comics.title}</h2>
                                <p>{comics.price}</p>
                            </div>
                        </Link>
                    </li>
                </CSSTransition>
            )
        })
        return(
            <ul className='comics-list'>
                <TransitionGroup component={null}>
                    {items}
                </TransitionGroup>
            </ul>
        )
    }

    return (
        <>
            {setContentList(process, () => renderItems(data), newItemLoading)}
            <button className='button-main button-main-long'
                    style={{'display': comicsEnded ? 'none' : 'block'}}
                    disabled={newItemLoading}
                    onClick={() => onRequest(offset)}
                    >Load more
            </button>
        </>
    );
}

export default ComicsList;
