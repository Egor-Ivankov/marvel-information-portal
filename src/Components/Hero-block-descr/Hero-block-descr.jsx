import React, {useState, useEffect} from "react";
import "../../styles/style.scss";
import useMarvelService from "../services/MarvelServise";
import {setContent} from "../../utils/setContent";
import mjolnir from "../../img/mjolnir.png";

function HeroBlockDescr () {
    const [hero, setHero] = useState({});

    const {process, setProcess, getHero, clearError} = useMarvelService();

    useEffect(() => {
        updateHero();

        const timerId = setInterval(updateHero, 60000);

        return () => {
            clearInterval(timerId);
        }
        // eslint-disable-next-line
    }, [])

    const onHeroLoaded = (hero) => {
        setHero(hero);
    }

    const updateHero = () => {
        clearError();
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        getHero(id)
            .then(onHeroLoaded)
            .then(() => setProcess('complete'))
    }


    return (
        <div className='hero-block-container'>
            {setContent(process, View, hero)}
            <div className='hero-block-static'>
            <p>
                Random character for today! <br/>
                Do you want to get to know him better?
            </p>
            <p className='hero-block-static-letter'>
                Or choose another one
            </p>
            <button onClick={updateHero} className='button-main'> Try it</button>
            <img src={mjolnir} alt="Mjolnir"/>
            </div>
        </div>
    )
}

const View = ({data}) => {

    const checkDescr = (descr) => {
        if (descr === "") {
            return "This character has not a description";
        } else {
            return descr;
        }
    }

    const {name, description, thumbnail, homepage, wiki} = data;
    const checkedDescription = checkDescr(description);

    return (
        <div className="hero-block-container">
            <div>
                <img src={thumbnail} alt="Heroes" className="thumbnail"/>
                <div className="hero-block-info">
                    <p className='hero-block-name'>{name}</p>
                    <p className='hero-block-descr'>{checkedDescription}</p>
                    <div className="hero-block-btns">
                        <a href={homepage}><div className='button-main'> Homepage</div></a>
                        <a href={wiki}><div className='button-secondary'>Wiki</div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBlockDescr;