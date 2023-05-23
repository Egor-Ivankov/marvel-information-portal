import React from 'react'
import '../sass/style.scss';

export default function Header() {
    return (
    <div className='Header'>
        <a href="/#">
            <h1 className="title"><span>Marvel</span>information portal</h1>
        </a>
        <ul>
            <li><a href="/#">Characters</a></li>
            <span>/</span>
            <li><a href="/#">Comics</a></li>
        </ul>
    </div>
    )
}
