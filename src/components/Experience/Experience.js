import React, { useState, useEffect } from 'react';
import Header from '../1Common/Header';
import Navbar from "../1Common/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Experience.css";
import { faBriefcase, faCalendarAlt, faGraduationCap, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import Footer from '../1Common/Footer';
import Uper from '../1Common/Uper';

const Experience = () => {

    const [eduOn, setEduOn] = useState(true);
    const [workOn, setWorkOn] = useState(false);
    const [volunOn, setVolunOn] = useState(false);
    const [uperLoadChange, setUperLoadChange] = useState("");

    const eduClick = ()=>{
        setEduOn(true);
        setWorkOn(false);
        setVolunOn(false);
    }

    const workClick = ()=>{
        setEduOn(false);
        setWorkOn(true);
        setVolunOn(false);
    }

    const volunClick = ()=>{
        setEduOn(false);
        setWorkOn(false);
        setVolunOn(true);
    }

    const scrollFunctionalitioes =  ()=>{
        var pos = Math.ceil(window.scrollY);

        if(pos===0){
            setUperLoadChange("");
        }
        if(pos>0){
            setUperLoadChange("goUpAppear ");
        }
    }

    useEffect(() => {

        window.addEventListener("scroll", scrollFunctionalitioes);

        return ()=>{
            window.removeEventListener("scroll", scrollFunctionalitioes);
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
                <div className="experienceTabs">
                    <FontAwesomeIcon className={"icons" + ((eduOn)?" clicked":"")} icon={faGraduationCap} onClick={eduClick} />
                    <FontAwesomeIcon className={"icons" + ((workOn)?" clicked":"")} icon={faBriefcase} onClick={workClick} />
                    <FontAwesomeIcon className={"icons" + ((volunOn)?" clicked":"")} icon={faHandsHelping} onClick={volunClick} />
                </div>
                <div className="experienceSections">
                    <div style={(eduOn) ? null : {display:"none"} } className="educationContent">
                        <h2 className = "contentTitle">Education</h2>
                        <div className="experienceData">
                            <div className="experienceDetailsLeft">
                                <h3>SSC</h3>
                                <FontAwesomeIcon className="icons" icon={faCalendarAlt} />
                                <span>2016</span>
                                <h4>Sirvi School</h4>
                                <h5>I cleared My 10th with <br /> 88% .</h5>
                            </div>
                            <div>
                                <div className="rounder"></div>
                                <div className="line"></div>
                            </div>
                        </div>
                        <div className="experienceData">
                            <div></div>
                            <div>
                                <div className="rounder"></div>
                                <div className="line"></div>
                            </div>
                            <div className="experienceDetailsRigth">
                                <h3>HSC</h3>
                                <FontAwesomeIcon className="icons" icon={faCalendarAlt} />
                                <span>2016 - 2018</span>
                                <h4>Gyanjyot School</h4>
                                <h5>I cleared My 12th Science with <br /> 86% .</h5>
                            </div>
                        </div>
                        <div className="experienceData">
                            <div className="experienceDetailsLeft">
                                <h3>Computer Engineering</h3>
                                <FontAwesomeIcon className="icons" icon={faCalendarAlt} />
                                <span>2018 - Present</span>
                                <h4>Vishwakarma Government Engineering College</h4>
                                <h5>I am in My 7th sem with <br /> CPI: 8.56 <br /> CGPA: 8.78 .</h5>
                            </div>
                            <div>
                                <div className="rounder"></div>
                                {/* <div className="line"></div> */}
                            </div>
                        </div>  
                    </div>                
                    <div style={(workOn) ? null : {display:"none"}} className="workContent">
                        <h2 className = "contentTitle">Work</h2>
                        <div className="experienceData">
                            <div className="experienceDetailsLeft">
                                <h3>Web Internship</h3>
                                <FontAwesomeIcon className="icons" icon={faCalendarAlt} />
                                <span>Oct 2020 - Nov 2020</span>
                                <h4>Spark Internship</h4>
                                <h5>During this Internship I created a bank web app a part of my Internship Task.</h5>
                            </div>
                            <div>
                                <div className="rounder"></div>
                                <div className="line"></div>
                            </div>
                        </div>
                        <div className="experienceData">
                            <div></div>
                            <div>
                                <div className="rounder"></div>
                                <div className="line"></div>
                            </div>
                            <div className="experienceDetailsRigth">
                                <h3>Backend Internship</h3>
                                <FontAwesomeIcon className="icons" icon={faCalendarAlt} />
                                <span>Dec 2020 - Feb 2021</span>
                                <h4>PackBagBuddy PVT. LTD.</h4>
                                <h5>In This Internship I work as backend developer and work on PBB's website.</h5>
                            </div>
                        </div>
                        <div className="experienceData">
                            <div className="experienceDetailsLeft">
                                <h3>Campus Ambassador</h3>
                                <FontAwesomeIcon className="icons" icon={faCalendarAlt} />
                                <span>March 2021 - April 2021</span>
                                <h4>BooksLuva</h4>
                                <h5>During this Internship I work toward the grouth of BooksLuva. And organized a quiz under BooksLuva</h5>
                            </div>
                            <div>
                                <div className="rounder"></div>
                                {/* <div className="line"></div> */}
                            </div>
                        </div>
                    </div>
                    <div style={(volunOn) ? null : {display:"none"}} className="volunteeringContent" >
                        <h2 className = "contentTitle">Volunteering</h2>
                        <div className="experienceData">
                            <div className="experienceDetailsLeft">
                                <h3>Garba Team Member</h3>
                                <FontAwesomeIcon className="icons" icon={faCalendarAlt} />
                                <span>20 - 24 Sept 2018</span>
                                <h4>NSS VGEC</h4>
                                <h5>It was NSS State Day - 2018 celebration, And in this I represented GTU as part of Garba team .</h5>
                            </div>
                            <div>
                                <div className="rounder"></div>
                                <div className="line"></div>
                            </div>
                        </div>
                        <div className="experienceData">
                            <div></div>
                            <div>
                                <div className="rounder"></div>
                                <div className="line"></div>
                            </div>
                            <div className="experienceDetailsRigth">
                                <h3>Gujarat Representator</h3>
                                <FontAwesomeIcon className="icons" icon={faCalendarAlt} />
                                <span>25 Nov - 1 Dec 2018</span>
                                <h4>NSS Gujarat</h4>
                                <h5>National Integration Camp - 2018 was a culture exchange program in which I represented Gujarat NSS Unit .</h5>
                            </div>
                        </div>
                        <div className="experienceData">
                            <div className="experienceDetailsLeft">
                                <h3>Volunteer</h3>
                                <FontAwesomeIcon className="icons" icon={faCalendarAlt} />
                                <span>6 - 7 April 2019</span>
                                <h4>NSS VGEC</h4>
                                <h5>It was SSIP Hackathon 2019. In which I volunteered for crowd managment duty .</h5>
                            </div>
                            <div>
                                <div className="rounder"></div>
                                <div className="line"></div>
                            </div>
                        </div>
                        <div className="experienceData">
                            <div></div>
                            <div>
                                <div className="rounder"></div>
                                {/* <div className="line"></div> */}
                            </div>
                            <div className="experienceDetailsRigth">
                                <h3>NSS Member</h3>
                                <FontAwesomeIcon className="icons" icon={faCalendarAlt} />
                                <span>20 - 27 Dec 2019</span>
                                <h4>NSS Gujarat</h4>
                                <h5>Special Camp - 2019 is NSS units yearly camp. In this we went to nearby Village Ranchorpura and soread Awareness regarding different problems .</h5>
                            </div>
                        </div> 
                    </div>
                </div>
                <Footer quote="Nothing is a waste of time if you use the experience wisely!"/>
            </div>
        </div>
    )
}

export default Experience
