import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/style.scss";

export default function Header() {
    return (
    <div className='Header'>
        <Link to="/">
            <h1 className="title"><span>Marvel</span>information portal</h1>
        </Link>
        <ul>
            <li>
                <NavLink 
                end 
                style={({isActive}) => ({color: isActive ? '#9F0013' : 'inherit'})} 
                to="/">
                    Characters
                </NavLink>
            </li>

            <span>/</span>

            <li>
                <NavLink 
                style={({isActive}) => ({color: isActive ? '#9F0013' : 'inherit'})} 
                to="/comics">
                    Comics
                </NavLink>
            </li>
        </ul>
    </div>
    )
}
