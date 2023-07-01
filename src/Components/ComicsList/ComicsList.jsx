import React, {useEffect, useState} from 'react';
import '../../styles/style.scss';
import ErrorMessage from '../Error-message/Error-message';
import Spinner from '../Spinner/Spinner';
import useMarvelService from '../services/MarvelServise';
import { Link } from 'react-router-dom';


const ComicsList = () => {
    const {loading, error, getAllComics} = useMarvelService();
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

    const elements = data.map((comics, i) => {
        return (
            /*The key attribute is deliberately made 
            as an element index so that there are no errors in the console 
            with a repeated key. Marvel API has a large number of recurring comics
            */
            <li className="comics-list-item"  key={i}>
                <Link to={`/comics/${comics.id}`} element='#/'>
                    <img src={comics.thumbnail} alt={comics.title} />
                    <div className="comics-list-item-text">
                        <h2>{comics.title}</h2>
                        <p>{comics.price}</p>
                    </div>
                </Link>
            </li>
        )
    })

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;

    return (
        <>
                {spinner}
                {errorMessage}
            <ul className='comics-list'>
                {elements}
            </ul>
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
