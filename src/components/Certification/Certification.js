import React,{useState, useEffect} from 'react'
import Footer from '../1Common/Footer';
import Header from '../1Common/Header';
import Navbar from "../1Common/Navbar";
import "./Certification.css";
import Uper from '../1Common/Uper';
import Certificate from './Certificate';
import {courseCertificate,internshipCertificate,otherCertificate} from "./certiData";


const Certification = () => {


    const [courseOn,setCourseOn] = useState(true);
    const [internOn,setInternOn] = useState(false);
    const [cultureOn,setCultureOn] = useState(false);
    const [uperLoadChange, setUperLoadChange] = useState("");

    const courseSelect = ()=>{
        setCourseOn(true);
        setInternOn(false);
        setCultureOn(false);   
    }

    const internSelect = ()=>{
        setCourseOn(false);
        setInternOn(true);
        setCultureOn(false);   
    }

    const cultureSelect = ()=>{
        setCourseOn(false);
        setInternOn(false);
        setCultureOn(true);   
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
                <div className="certiNavbar">
                    <div className={(courseOn?"clicked ":"")+"certiNavbarItem"} onClick={courseSelect}>
                        <h1>Courses</h1>
                        <div className="underLine"></div>
                    </div>
                    <div className={(internOn?"clicked ":"")+"certiNavbarItem"} onClick={internSelect}>
                        <h1>Internship</h1>
                        <div className="underLine"></div>
                    </div>
                    <div className={(cultureOn?"clicked ":"")+"certiNavbarItem"} onClick={cultureSelect}>
                        <h1>Cultural</h1>
                        <div className="underLine"></div>
                    </div>
                </div>
                <div className="certificateContainer">
                    <div style={courseOn?{}:{display:"none"}} className="certificateData courseCertiData">
                        {courseCertificate.map((certi,i)=>{
                            return <Certificate key={i} index={i} srcImg={certi.srcImg} certiName={certi.certiName} certiLink={certi.certiLink} provider={certi.provider} />
                        })}
                    </div>
                    <div style={internOn?{}:{display:"none"}} className="certificateData internshipCertiData">
                        {internshipCertificate.map((certi,i)=>{
                            return <Certificate key={i} index={i} srcImg={certi.srcImg} certiName={certi.certiName} certiLink={certi.certiLink} provider={certi.provider} />
                        })}
                    </div>
                    <div style={cultureOn?{}:{display:"none"}} className="certificateData cultureCertiData">
                        {otherCertificate.map((certi,i)=>{
                            return <Certificate key={i} index={i} srcImg={certi.srcImg} certiName={certi.certiName} certiLink={certi.certiLink} provider={certi.provider} />
                        })}
                    </div>
                </div>
                <Footer quote="Don't find your certificate in the worth, find your worth in the certificate!" />
            </div>
        </div>
    )
}

export default Certification

