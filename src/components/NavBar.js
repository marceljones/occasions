  
//NavBar.js is a PRESENTATION COMPONENT that only contains other componenets that
//are responsible for the presentation and behavior of the application.



import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/occasion">Occasions</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/animals">Attending</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/customers">Reviews</Link>
            </li>
            
        </ul>
    )
    }