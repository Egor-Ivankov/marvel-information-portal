import React from 'react';
import avengers from '../../img/Avengers.png';
import avengersLogo from '../../img/Avengers_logo.png';
import '../../styles/style.scss';


const AppBanner = () => {
    return (
        <div className='app-banner'>
            <div className='app-banner-img'>
                <img src={avengers} alt="avengers" />
                <div className='app-banner-text'>
                    <p>New comics every week!</p>
                    <p>Stay tuned!</p>
                </div>
                <img src={avengersLogo} alt="avengersLogo" />
            </div>
        </div>
    );
}

export default AppBanner;
