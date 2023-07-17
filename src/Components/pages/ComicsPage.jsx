import React from 'react';
import AppBanner from "../App-banner/AppBanner";
import ComicsList from "../Comics-list/ComicsList";
import { Helmet } from 'react-helmet';

const ComicsPage = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Page with comics"/>
                <title>Comics page</title>
            </Helmet>
            <AppBanner/>
            <ComicsList/>
        </>
    );
}

export default ComicsPage;
