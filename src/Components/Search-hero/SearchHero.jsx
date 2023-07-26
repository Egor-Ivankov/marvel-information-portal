import React, { useState } from 'react';
import {Formik, Form, Field, ErrorMessage as FormikErrorMessage} from 'formik';
import useMarvelService from '../services/MarvelServise';
import {setContentSearch} from "../../utils/setContent";
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const SearchHero = () => {
    const [hero, setHero] = useState(null);
    const {process, setProcess, clearError, getHeroByName} = useMarvelService();

    const onHeroLoaded = (hero) => {
        setHero(hero);
    }

    const updateHero = (name) => {

        clearError();

        getHeroByName(name.trim())
            .then(onHeroLoaded)
            .then(() => setProcess('complete'))
    }

    const renderItem = () => {
        return (
            !hero 
                        ? null
                        : hero.length > 0 
                            ?  
                                <div className="search-hero-wrapper">
                                <div className="search-hero-success">There is! Visit {hero[0].name} page?</div>
                                <Link 
                                    to={`/hero/${hero[0].id}`} 
                                    className="button-secondary"
                                    >
                                    <div>To page</div>
                                </Link>
                                </div> 
                            : 
                                <div className="search-hero-error">
                                    The character was not found. Check the name and try again
                                </div>
        )
    }

    return (
        <>
            <Formik
                initialValues = {{
                    heroName: ''
                }}

                validationSchema = {Yup.object({
                    heroName: Yup.string()
                                    .required('This field is required')
                                    .max(35, 'No more than 35 characters')
                                    .min(2, 'At least two characters')
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
                            
                        />
                        <button className="search-hero-btn" 
                                type="submit" 
                                disabled={process === 'loading' ? true : false}
                                >find</button> 
                    </div>
                        {setContentSearch(process,() => renderItem())}
                    <FormikErrorMessage 
                        component="div" 
                        className="search-hero-error" 
                        name="heroName" 
                        />
                </Form>
            </Formik>
        </>
    );
}

export default SearchHero;
