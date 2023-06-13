import React, {Component} from "react";
import MarvelService from "../services/MarvelServise";
import ErrorMessage from "../Error-message/Error-message";
import Spinner from "../Spinner/Spinner";
import PropTypes from 'prop-types';
import "../../styles/style.scss";

export default class HeroCards extends Component {

        state = {
            data: [],
            loading: true,
            error: false,
            newItemLoading: false,
            offset: 210,
            heroEnded: false
        }

    service = new MarvelService();
    
    componentDidMount() {
        this.onRequest();
    }

    onRequest = (offset) => {
        this.onHeroListLoading();
        this.service.getAllHeroes(offset)
        .then(this.onDataLoaded)
        .catch(this.onError)
    }

    onHeroListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    onDataLoaded = (newData) => {

        let ended = false;

        if(newData.length < 9) {
            ended = true;
            alert('All characters is end')
        }

        this.setState(({data, offset}) => ({
            data: [...data, ...newData],
            loading: false,
            newItemLoading: false,
            offset: offset + 9,
            heroEnded: ended
        }))
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    itemRefs = []; 

    setRef = (ref) => {
        this.itemRefs.push(ref)
    }

    focusOnItem = (id) => {
        this.itemRefs.forEach(item => item.classList.remove('hero-card-container-selected'));
        this.itemRefs[id].classList.add('hero-card-container-selected');
    }

    render() {
        const {data, loading, error, newItemLoading, offset, heroEnded} = this.state;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;

        const elements = data.map((item, i) => {
            return (
                <div 
                    className='hero-card-container' 
                    onClick={() => {
                                    this.props.onHeroSelected(item.id)
                                    this.focusOnItem(i)
                                    }}
                    key={item.id}
                    ref={this.setRef}
                >
                    <img src={item.thumbnail} alt={item.name} />
                    <p className='hero-card-name'>{item.name}</p>
                </div>
            )
        })
        
        const content = !(loading || error) ? elements : null;
        
        return (
                    <div className='hero-cards'>
                            {spinner}
                            {errorMessage}
                        <ul>
                            {content}
                        </ul>
                        <button
                            onClick={() => this.onRequest(offset)}
                            disabled={newItemLoading}
                            style={{'display': heroEnded ? 'none' : 'block'}}
                            className='button-main'
                        >Load new heroes</button>
                    </div>
        )
    }
}

HeroCards.propTypes = {
    onHeroSelected: PropTypes.func
}