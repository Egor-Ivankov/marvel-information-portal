import React, {Component} from "react";
import HeroCardsItem from '../Hero-cards-item/Hero-cards-item';
import "../../styles/style.scss";
import MarvelService from "../services/MarvelServise";

export default class HeroCards extends Component {
    state = {
        data: []
    }

    service = new MarvelService();
    
    getData = async (service) => {
        const resData =  await service.getAllHeroes();
        this.setState({
            data: resData
        })
    }
    
    componentDidMount () {
        this.getData(this.service);
    }

    render() {
        const {data} = this.state;
        const element = data.map(item => {
            return <HeroCardsItem
                name={item.name}
                thumbnail={item.thumbnail}
                key={item.id}
            />
        })

        return (
            <div className='hero-cards'>
                <ul>
                    {element}
                </ul>
                <a href="/#"><div className='button-main'>Homepage</div></a>
            </div>
        )
    }
}
