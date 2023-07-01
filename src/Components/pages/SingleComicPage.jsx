import { Link, useParams } from 'react-router-dom';
import React, {useState, useEffect} from "react";
import useMarvelService from "../services/MarvelServise";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../Error-message/Error-message";

const SingleComicPage = () => {
    const {comicId} = useParams();
    const [comic, setComic] = useState(null);
	const {loading, error, clearError, getComics} = useMarvelService();

    useEffect(() => {
		updateComic();
		// eslint-disable-next-line
	}, [comicId]);

	const updateComic = () => {
		clearError();
		getComics(comicId)
			.then(onComicLoaded)
	}

	const onComicLoaded = (comic) => {
        setComic(comic);
    }

    const errorMessage = error ? <ErrorMessage/> : null;
	const spinner = loading ? <Spinner/> : null;
	const content = !(loading || error || !comic) ? <View comic={comic}/> : null;

    return (
        <>
        {errorMessage}
        {spinner}
        {content}
        </>
    );
}

const View = ({comic}) => {
    const {title, description, pageCount, thumbnail, language, price} = comic;

    return (
        <div className="single-comic">
            <img src={thumbnail} alt={title} />
            <div className="single-comic-text">
                <h2>{title}</h2>
                <p className="description">{description}</p>
                <p className="pages">Pages: {pageCount}</p>
                <p className="languages">Languages: {language}</p>
                <div className="price">Price: {price}</div>
            </div>
            <Link to="/comics" className="link">Back to all</Link>
        </div>
    )
}

export default SingleComicPage;