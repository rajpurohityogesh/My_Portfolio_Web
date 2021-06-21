import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faLaptopCode, faEnvelope, faBars, faTimes, faUser, faChartLine } from '@fortawesome/free-solid-svg-icons';
// import experienceIcon from "../SVGs/icons/experiences.svg";

var path;

const Navbar = () => {

    path = useLocation();

    const [barClick,setBarClick] = useState(false);
    const [navContain, setNavContain] = useState({});

    const changeBars = ()=>{
        setBarClick(initial=>!initial);
        if(!barClick){
            setNavContain({bottom:"0px"});
        }
        else {
            setNavContain({});
        }
    }
    
    return (
        <div>
            <div className="navbar-container" style={navContain}>
                <div className="options-logo" onClick={changeBars}>
                    <FontAwesomeIcon className="icons" icon={barClick?faTimes:faBars} />
                </div>
                <div className="forBack">
                    <div className="options-container">
                        <div style={path.pathname==="/"?{backgroundColor:"rgb(155, 24, 231)"}:null}>
                            <Link style={path.pathname==="/"?{color:"white"}:null}  className="icons" to="/">
                                <FontAwesomeIcon icon={faUser} />
                            </Link>
                        </div>
                        <div style={path.pathname==="/experience"?{backgroundColor:"rgb(155, 24, 231)"}:null}>
                            <Link style={path.pathname==="/experience"?{color:"white"}:null} className="icons" to="/experience">
                                <FontAwesomeIcon icon={faChartLine} />
                            </Link>
                        </div>
                        <div style={path.pathname==="/projects"?{backgroundColor:"rgb(155, 24, 231)"}:null}>
                            <Link style={path.pathname==="/projects"?{color:"white"}:null} className="icons" to="/projects">
                                <FontAwesomeIcon icon={faLaptopCode} />
                            </Link>
                        </div>
                        <div style={path.pathname==="/certification"?{backgroundColor:"rgb(155, 24, 231)"}:null}>
                            <Link style={path.pathname==="/certification"?{color:"white"}:null} className="icons" to="/certification">
                                <FontAwesomeIcon icon={faCertificate} />
                            </Link>
                        </div>
                        <div style={path.pathname==="/contact"?{backgroundColor:"rgb(155, 24, 231)"}:null}>
                            <Link style={path.pathname==="/contact"?{color:"white"}:null} className="icons" to="/contact">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <div className="social-media-container">
                    <div>
                        <FontAwesomeIcon className="icons" icon={faFacebookF} />
                    </div>
                    <div>
                        <FontAwesomeIcon className="icons" icon={faLinkedinIn} />
                    </div>
                    <div>
                        <FontAwesomeIcon className="icons" icon={faGithub} />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Navbar

