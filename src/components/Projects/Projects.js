import React, {useState, useEffect} from 'react'
import Footer from '../1Common/Footer';
import Header from '../1Common/Header';
import Navbar from "../1Common/Navbar";
import Uper from '../1Common/Uper';
import projectSVG from "../SVGs/hero.svg";
import {projectData} from "./projectData";
import Project from "./Project";
import "./Projects.css";


const Projects = () => {

    const [uperLoadChange, setUperLoadChange] = useState("");

    const scrollFunctionalities =  ()=>{
        var pos = Math.ceil(window.scrollY);
        // console.log(pos);
        if(pos===0){
            setUperLoadChange("");
        }
        if(pos>0){
            setUperLoadChange("goUpAppear ");
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollFunctionalities);

        return ()=>{
            window.removeEventListener("scroll", scrollFunctionalities);
        }
    });

    return (
        <div className="outer-grid">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="body" >
                <Header />
                <Uper uperAppearClass={uperLoadChange} />
                <div className="projectSVG">
                    <img src={projectSVG} alt="Project SVG" />
                </div>
                
                <div className="projectContainer">
                    {projectData.map((project,index)=>{
                        return <Project key={index} proImg={project.proImg} proLink={project.proLink} proName={project.proName} proDetail={project.proDetail} proDate={project.proDate} html={project.html} css={project.css} node={project.node} react={project.react} mongo={project.mongo} heroku={project.heroku} />
                    })}
                </div>

                <Footer quote="I code and create simple things and I love what I do!" />
            </div>
        </div>
    )
}

export default Projects
