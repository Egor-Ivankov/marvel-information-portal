import React, {Component} from "react";
import "../../sass/style.scss";
import MarvelService from "../services/MarvelServise";

export default class HeroBlockDescr extends Component {
    constructor(props) {
        super(props)
        this.updateHero();
    }
    state = {
        hero: {}
    }

    marvelService = new MarvelService();

    onHeroLoaded = (hero) => {
        this.setState({hero})
    }

    updateHero = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.marvelService
            .getHero(id)
            .then(this.onHeroLoaded)
    }

    checkDescr = (descr) => {
        if (descr === "") {
            return "This character has not a description";
        } else {
            return descr;
            }
    }

    render() {
        const {hero: {name, description, thumbnail, homepage, wiki}} = this.state;
        const checkedDescription = this.checkDescr(description)
        return (
            <div className='hero-block'>
                <img src={thumbnail} alt="Thor"/>
                <div className="hero-block-info">
                    <p className='hero-block-name'>{name}</p>
                    <p className='hero-block-descr'>{checkedDescription}</p>
                    <div className="hero-block-btns">
                        <a href={homepage}><div className='button-main'> Homepage</div></a>
                        <a href={wiki}><div className='button-secondary'>Wiki</div></a>
                    </div>
                </div>
            </div>
        )
    }
}
