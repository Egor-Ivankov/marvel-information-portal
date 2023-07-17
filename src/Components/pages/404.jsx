import React from 'react';
import background from '../../img/backgroundNoMatch.png';
import { Helmet } from 'react-helmet';
const Page404 = () => {
    return (
        <div>
            <Helmet>
                <meta name="description" content="Breakdown page"/>
                <title>Page 404</title>
            </Helmet>
            <img className='background' src={background} alt="background" />
            <div className='no-match-text'>
                <h2>404 PAGE NOT FOUND</h2>
                <strong>Protocol mising... Exiting program...</strong>
                <p>
                    Check that you typed the address correctly,
                    <br/> go back to your previous page or try using our site 
                    <br/>search to find something specific.
                </p>
            </div>
        </div>
    );
}

export default Page404;
