import React from "react";
import "../../styles/style.scss";

export default function Header() {
    return (
    <div className='Header'>
        <a href="/#">
            <h1 className="title"><span>Marvel</span>information portal</h1>
        </a>
        <ul>
            <li><a href="https://www.marvel.com/characters">Characters</a></li>
            <span>/</span>
            <li><a href="https://www.marvel.com/comics?&options%5Boffset%5D=0&totalcount=12">Comics</a></li>
        </ul>
    </div>
    )
}
