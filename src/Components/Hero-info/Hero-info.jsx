import React, {Component} from "react";
import HeroSceleton from '../Hero-skeleton/Hero-sceleton';
import MarvelService from "../services/MarvelServise";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../Error-message/Error-message";
import "../../styles/style.scss";

export default class HeroInfo extends Component {
	
	state = {
		data: null,
		loading: false,
		error: false
	}

	service = new MarvelService();

	componentDidMount() {
		this.updateHero();
	}

	componentDidUpdate(prevProps) {
		if (this.props.heroId !== prevProps.heroId) {
			this.updateHero();
		}
	}

	updateHero = () => {
		const {heroId} = this.props;

		if (!heroId) {
			return;
		}

		this.onDataLoading();

		this.service
			.getHero(heroId)
			.then(this.onDataLoaded)
			.catch(this.onError);
	}

	onDataLoaded = (data) => {
        this.setState({
            data,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

	onDataLoading = () => {
		this.setState({
			loading: true
		})
	}

	render() {
		const {data, loading, error} = this.state;
		const skeleton = data || loading || error ? null : <HeroSceleton/>;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
		const content = !(loading || error || !data) ? <View data={data}/> : null;

		return (
			<div className='hero-info'>
				{skeleton}
				{errorMessage}
				{spinner}
				{content}
            </div>
		)
	}
}

const View = ({data}) => {
	const {name, description, thumbnail, homepage, wiki, comics} = data;

	const checkDescr = (descr) => {
        if (descr === "") {
            return "This character has not a description";
        } else {
            return descr;
        }
    }

	const checkedDescription = checkDescr(description);

	return (
		<>
			<div className="hero-info-basic">
                <img src={thumbnail} alt={name}/>
                <div className="hero-info-name">
                    <p>{name}</p>
                    <a href={homepage}><div className='button-main'> Homepage</div></a>
                    <a href={wiki}><div className='button-secondary'>Wiki</div></a>
                </div>
            </div>
            <p>
				{checkedDescription}
			</p>
			<h3>Comics:</h3>
			<ul className="hero-info-comics">
				{
					comics.map((item, i) => {
						return (
							<li key={i}>
								{item.name}
							</li>
						)
					})
				}
			</ul>
		</>
	)
}