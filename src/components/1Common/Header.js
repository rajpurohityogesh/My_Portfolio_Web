import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    const logo = "{...Yogesh}";
    return (
        <div id="forScroll" className="header-container">
            <div className="logo" >
                <Link className="logo-font" to="/" ><h3>{logo}</h3></Link>
            </div>
            <Link to="/contact">
                <div className="hello" >
                    <h3> Say Hello </h3>
                </div>
            </Link>
        </div>
    )
}

export default Header
