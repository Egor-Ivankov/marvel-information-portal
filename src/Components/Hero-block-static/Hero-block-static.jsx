import React, {Component} from "react";
import "../../styles/style.scss";
import mjolnir from "../../img/mjolnir.png";

export default class HeroBlockStatic extends Component {

    render() {
        return (
            <div className='hero-block-static'>
                <p>
                    Random character for today! <br/>
                    Do you want to get to know him better?
                </p>
                <p className='hero-block-static-letter'>
                    Or choose another one
                </p>
                <a href="#/"><div className='button-main'> Try it</div></a>
                <img src={mjolnir} alt="Mjolnir"/>
            </div>
        )
    }
}
