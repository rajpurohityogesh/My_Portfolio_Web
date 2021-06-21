import { faFacebookF, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Footer.css";

const Footer = ({homeFooter,quote}) => {

    const styleAdded = homeFooter?{paddingTop:"8em"}:{paddingTop:"2em"}; 

    return (
        <div style={styleAdded} className=" mainFooter">
            <div className="quote">
                <h2>{quote}</h2>
            </div>
            <div className="socialMedia">
                <div><a href="https://www.facebook.com/yogesh.rajpurohit.9889/" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faFacebookF} className="mediaIcons" /></a></div>
                <div><a href="https://www.linkedin.com/in/yogesh-singh-rajpurohit-a09b93192/" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faLinkedinIn} className="mediaIcons" /></a></div>
                <div><a href="https://www.instagram.com/rajpurohit_yogesh__ysrp/" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faInstagram} className="mediaIcons" /></a></div>
                <div><a href="https://github.com/rajpurohityogesh" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faGithub} className="mediaIcons" /></a></div>
            </div>
            <div className="copyRight">
                <h6>@ Copyright All rights are reserved by Rajpurohit Yogesh Singh</h6>
            </div>
        </div>
    )
}

export default Footer
