import React, {Component} from "react";
import Header from "../Components/Header/Header";
import HeroBlockDescr from "../Components/Hero-block-descr/Hero-block-descr";
import HeroCards from "../Components/Hero-cards/Hero-cards";
import HeroInfo from "../Components/Hero-info/Hero-info";
import vision from "../img/vision.png";

class App extends Component {

    state = {
        selectedHero: null,
    }

    onHeroSelected = (id) => {
        this.setState({
            selectedHero: id,
        })
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <HeroBlockDescr/>
                <div className="hero-content">
                    <HeroCards onHeroSelected={this.onHeroSelected} />
                    <HeroInfo heroId ={this.state.selectedHero}/>
                </div>
                <img src={vision} alt="Vision" className="bg-decoration" />
            </div>
        );
    }
}

export default App;
