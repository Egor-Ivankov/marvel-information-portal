import React, {useState, useEffect} from "react";
import useMarvelService from "../services/MarvelServise";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../Error-message/Error-message";
import PropTypes from 'prop-types';
import HeroSceleton from '../Hero-skeleton/Hero-sceleton';
import { Link } from "react-router-dom";
import "../../styles/style.scss";

function HeroInfo (props) {
	const [data, setData] = useState(null);
	const {loading, error, clearError,getHero} = useMarvelService();

	useEffect(() => {
		updateHero();
		// eslint-disable-next-line
	}, [props.heroId]);

	const updateHero = () => {
		const {heroId} = props;

		if (!heroId) {
			return;
		}

		clearError();

		getHero(heroId)
			.then(onDataLoaded)
	}

	const onDataLoaded = (data) => {
        setData(data);
    }

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
                <div>
                    <p>{name}</p>
                    <div className="hero-info-buttons">
						<a href={homepage}><div className='button-main'> Homepage</div></a>
						<a href={wiki}><div className='button-secondary'>Wiki</div></a>
					</div>
                </div>
            </div>
            <p>
				{checkedDescription}
			</p>
			<h3>Comics:</h3>
			<ul className="hero-info-comics">
				{comics.length > 0 ? null : <div style={{'fontSize': '14px', 'paddingTop': '10px'}}>There is no comics with this character</div>}
				{

					comics.map((item, i) => {
						return (
							<Link to={`comics/${item.resourceURI.replace(/[^0-9]/g,"").slice(1)}`} 
								className="comics-item"
								key={item.name} >
								{item.name}
							</Link>
						)
					})

				}
			</ul>
		</>
	)
}

HeroInfo.propTypes = {
	heroId: PropTypes.number
}

export default HeroInfo;