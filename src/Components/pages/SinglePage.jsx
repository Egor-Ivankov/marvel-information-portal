import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import useMarvelService from '../services/MarvelServise';

import AppBanner from '../App-banner/AppBanner';
import ErrorMessage from '../Error-message/Error-message';
import Spinner from '../Spinner/Spinner';

const SinglePage = ({Component, dataType}) => {
    const {id} = useParams();
    const [data, setData] = useState(null);
    const {loading, error, clearError, getComics, getHero} = useMarvelService();

    useEffect(() => {
        updateData();
        // eslint-disable-next-line
    }, [id])

    const updateData = () => {
        clearError()

        switch(dataType) {
            case 'comics': 
                getComics(id)
                    .then(onDataLoaded)
                break;
            case 'hero':
                getHero(id)
                    .then(onDataLoaded)
                    break;
            default:
                throw new Error('App is broken')
        }
    }

    const onDataLoaded = (data) => {
        setData(data);
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !data) ? <Component data={data}/> : null;

    return (
        <>
            <AppBanner/>
            {errorMessage}
            {spinner}
            {content}
        </>
    );
}

export default SinglePage;
