import React, {Component} from "react";
import "../../styles/style.scss";
import MarvelService from "../services/MarvelServise";
import mjolnir from "../../img/mjolnir.png";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../Error-message/Error-message";

export default class HeroBlockDescr extends Component {

    state = {
        hero: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateHero();
    }

    componentWillUnmount () {
        clearInterval(this.timerId);
    }

    marvelService = new MarvelService();

    onHeroLoaded = (hero) => {
        this.setState({
                        hero, 
                        loading: false
                    })
    }
    
    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    updateHero = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.marvelService
            .getHero(id)
            .then(this.onHeroLoaded)
            .catch(this.onError)
    }


    
    render() {
        const {hero, loading, error} = this.state;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View hero={hero}/> : null;

        return (
            <div className='hero-block-container'>
                {errorMessage} 
                {spinner}
                {content}
                <div className='hero-block-static'>
                <p>
                    Random character for today! <br/>
                    Do you want to get to know him better?
                </p>
                <p className='hero-block-static-letter'>
                    Or choose another one
                </p>
                <button onClick={this.updateHero} className='button-main'> Try it</button>
                <img src={mjolnir} alt="Mjolnir"/>
                </div>
            </div>
        )
    }
}

const View = ({hero}) => {

    const checkDescr = (descr) => {
        if (descr === "") {
            return "This character has not a description";
        } else {
            return descr;
        }
    }

    const {name, description, thumbnail, homepage, wiki} = hero;
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
