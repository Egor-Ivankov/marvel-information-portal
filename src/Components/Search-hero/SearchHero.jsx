import React, { useState } from 'react';
import {Formik, Form, Field, ErrorMessage as FormikErrorMessage} from 'formik';
import useMarvelService from '../services/MarvelServise';
import ErrorMessage from '../Error-message/Error-message';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const SearchHero = ({getHero}) => {
    const [hero, setHero] = useState(null);
    const {loading, error, clearError, getHeroByName} = useMarvelService();

    const onHeroLoaded = (hero) => {
        setHero(hero);
        getHero(hero);
    }

    const updateHero = (name) => {

        clearError();

        getHeroByName(name)
            .then(onHeroLoaded)
    }

    const errorMessage = error 
    ? 
    <div className='search-hero-critical-error'>
        <ErrorMessage/>
    </div> 
    : null;

    const results = !hero 
                        ? null
                        : hero.length > 0 
                            ?  
                                <div className="search-hero-wrapper">
                                <div className="search-hero-success">There is! Visit {hero[0].name} page?</div>
                                <Link 
                                    to={`/characters/${hero[0].id}`} 
                                    className="button-secondary"
                                    >
                                    <div>To page</div>
                                </Link>
                                </div> 
                            : 
                                <div className="search-hero-error">
                                    The character was not found. Check the name and try again
                                </div>;

    return (
        <>
            <Formik
                initialValues = {{
                    heroName: ''
                }}

                validationSchema = {Yup.object({
                    heroName: Yup.string()
                                    .required('This field is required')
                                    .max(30, 'No more than 30 characters')
                })}

                onSubmit = { ({heroName}) => {
                    updateHero(heroName);
                }}
                >

                <Form className="search-hero">
                    <label className="search-hero-label" htmlFor="heroName">Or find a character body name:</label>
                    <div className="container">
                        <Field
                            id='heroName' 
                            name='heroName' 
                            type='text'
                            className="search-hero-input"
                            placeholder="Enter name"
                            disabled={loading}
                        />
                        <button className="search-hero-btn" type="submit">find</button> 
                    </div>
                        {results}
                        {errorMessage}
                    <FormikErrorMessage component="div" className="search-hero-error" name="heroName" />
                </Form>
            </Formik>
        </>
    );
}

export default SearchHero;
