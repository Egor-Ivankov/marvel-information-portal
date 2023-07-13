import React from 'react';
import {Formik, Form, Field} from 'formik'

const SearchHero = () => {
    return (
        <>
            <Formik>
                <Form className="search-hero">
                    <label className="search-hero-label" htmlFor="heroName">Or find a character body name:</label>
                    <div className="container">
                        <Field
                            className="search-hero-input"
                            placeholder="Enter name"
                        />
                        <button className="search-hero-btn">find</button>
                    </div>
                </Form>
            </Formik>
        </>
    );
}

export default SearchHero;
