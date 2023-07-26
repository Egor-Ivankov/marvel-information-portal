import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import useMarvelService from '../services/MarvelServise';
import {setContent} from "../../utils/setContent";

import AppBanner from '../App-banner/AppBanner';

const SinglePage = ({Component, dataType}) => {
    const {id} = useParams();
    const [data, setData] = useState(null);
    const {process, setProcess, clearError, getComics, getHero} = useMarvelService();

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
                    .then(() => setProcess('complete'))
                break;
            case 'hero':
                getHero(id)
                    .then(onDataLoaded)
                    .then(() => setProcess('complete'))
                    break;
            default:
                throw new Error('App is broken')
        }
    }

    const onDataLoaded = (data) => {
        setData(data);
    }

    return (
        <>
            <AppBanner/>
            {setContent(process, Component, data)}
        </>
    );
}

export default SinglePage;
