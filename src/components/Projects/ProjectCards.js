import {projectData} from "./projectData";

import React from 'react';
import "./ProjectCards.css";
import Project from "./Project";

const ProjectCards = () => {

    return (
        <div className="projectContainer">
            {projectData.map((project,index)=>{
                return <Project key={index} proImg={project.proImg} proLink={project.proLink} proName={project.proName} proDetail={project.proDetail} proDate={project.proDate} html={project.html} css={project.css} node={project.node} react={project.react} mongo={project.mongo} heroku={project.heroku} />
            })}
        </div>
    )
}

export default ProjectCards

