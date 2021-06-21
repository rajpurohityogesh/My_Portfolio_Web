import React from 'react';
import "./Project.css";
import htmlSVG from "../SVGs/icons/icons8-html.svg";
import cssSVG from "../SVGs/icons/icons8-css.svg";
import nodeJsSVG from "../SVGs/icons/icons8-node-js.svg";
import mongoDbSVG from "../SVGs/icons/icons8-mongodb.svg";
import herokuSVG from "../SVGs/icons/icons8-heroku.svg";
import reactSVG from "../SVGs/icons/icons8-react-native.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';

const Project = ({proImg,proLink,proName,proDetail,proDate,html,css,node,react,mongo,heroku}) => {
    return (
        <div className="projectItems">
            <div className="imgContainer">
                <img className="projectImg" src={proImg} alt={proName} />
                <a href={proLink} target="_blank" rel="noreferrer">
                    <div className="overlay">
                        <h2>{proName}</h2>
                    </div>
                </a>
            </div>
            <div className="projectContent">
                <div className="projectTitle">
                    <FontAwesomeIcon className="projectIcon" icon={faFileCode}/>
                    <h1 className="projectHead" >{proName}</h1>
                </div>
                <p className="projectDesc" >{proDetail}</p>
                <div className="techUsed">
                    <p>Created on {proDate}</p>
                    <div>
                        {html?<img src={htmlSVG} alt="HTML5" />:null}
                        {css?<img src={cssSVG} alt="CSS3" />:null}
                        {node?<img src={nodeJsSVG} alt="Node JS" />:null}
                        <br />
                        {react?<img src={reactSVG} alt="React JS" />:null}
                        {mongo?<img src={mongoDbSVG} alt="MongoDB" />:null}
                        {heroku?<img src={herokuSVG} alt="Heroku" />:null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
