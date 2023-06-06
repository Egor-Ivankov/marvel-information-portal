import React, {Component} from "react";
import HeroCardsItem from '../Hero-cards-item/Hero-cards-item';
import "../../styles/style.scss";
import MarvelService from "../services/MarvelServise";
import ErrorMessage from "../Error-message/Error-message";
import Spinner from "../Spinner/Spinner";

export default class HeroCards extends Component {
        state = {
            data: [],
            loading: true,
            error: false
        }

    service = new MarvelService();
    
    getData = async (service) => {
        const resData =  await service.getAllHeroes()
        this.setState({
            data: resData
        })
    }
    
    componentDidMount () {
        this.getData(this.service)
        .then(this.onDataLoaded)
        .catch(this.onError)
    }

    onDataLoaded = (charList) => {
        this.setState({
            charList,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    render() {
        const {data, loading, error} = this.state;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;

        const elements = data.map(item => {
            return <HeroCardsItem
            name={item.name}
            thumbnail={item.thumbnail}
            key={item.id}
            onHeroSelected={this.props.onHeroSelected}
            id={item.id}
            />
        })
        
        const content = !(loading || error) ? elements : null;
        
        return (
                    <div className='hero-cards'>
                            {spinner}
                            {errorMessage}
                        <ul>
                            {content}
                        </ul>
                        <a href="/#"><div className='button-main'>Load more</div></a>
                    </div>
        )
    }
}
