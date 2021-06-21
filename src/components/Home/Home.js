import React,{useState,useEffect, useRef} from 'react';
import Header from '../1Common/Header';
import Navbar from "../1Common/Navbar";
import Footer from "../1Common/Footer";
import Uper from "../1Common/Uper";
import avatar from "../SVGs/mf-avatar.svg";
import Facts from "./Facts";
import Invite from './Invite';
import "./Home.css";
import Skills from './Skills';


const Home = () => {

    
    var windowHeight = window.innerHeight;
    const [frontPageContentLoadChange, setFrontPageContentLoadChange] = useState(false);
    const [avatarLoadChange, setAvatarLoadChange] = useState(false);
    const [typingLoadChange, setTypingLoadChange] = useState(false);
    const [factLoadChange, setFactLoadChange] = useState(false);
    const [inviteLoadChange, setInviteLoadChange] = useState("");
    const [uperLoadChange, setUperLoadChange] = useState("");
    const [skillLoadChange, setSkillLoadChange] = useState(false);
    
    const frontPageContentElem = useRef();
    const avatarElem = useRef();
    const typingElem = useRef();
    const factElem = useRef();
    const skillElem = useRef();
    const inviteElem = useRef();

    const scrollFunctionalitioes =  ()=>{
        var pos = Math.ceil(window.scrollY);
        var contentPos = (frontPageContentElem.current.getBoundingClientRect().top)-windowHeight+250;
        var avatarPos = (avatarElem.current.getBoundingClientRect().top)-windowHeight+250;
        var typingPos = (typingElem.current.getBoundingClientRect().top)-windowHeight;
        var factPos = (factElem.current.getBoundingClientRect().top)-windowHeight+250;
        var skillPos = (skillElem.current.getBoundingClientRect().top)-windowHeight+250;
        var invitePos = (inviteElem.current.getBoundingClientRect().top)-windowHeight+150;

        if(pos===0){
            setUperLoadChange("");
        }

        if(pos>0){
            setUperLoadChange("goUpAppear ");
        }

        if(contentPos<=0){
            setFrontPageContentLoadChange(true);
        }
        if(avatarPos<=0){
            setAvatarLoadChange(true);
        }
        if(typingPos<=0){
            setTypingLoadChange(true);
        }
        if(factPos<=0){
            setFactLoadChange(true);
        }
        if(skillPos<=0){
            setSkillLoadChange(true);
        }
        if(invitePos<=0){
            setInviteLoadChange("inviteAppear ");
        }
    }

    useEffect(() => {
        frontPageContentElem.current=document.querySelector(".front-page-content");
        avatarElem.current=document.querySelector(".front-page .avatar");
        typingElem.current=document.querySelector(".typing");
        factElem.current=document.querySelector(".facts");
        skillElem.current=document.querySelector(".skills");
        inviteElem.current=document.querySelector(".inviteContainer");
        
        scrollFunctionalitioes();
        
        window.addEventListener("scroll", scrollFunctionalitioes);

        return ()=>{
            window.removeEventListener("scroll", scrollFunctionalitioes);
        }
    });

    return (
        <div className="outer-grid" >
            <div className="navbar">
                <Navbar />
            </div>
            
            <div className="body" >
                <Header />
                <Uper uperAppearClass={uperLoadChange} />
                <div className="front-page" >
                    <div className={(frontPageContentLoadChange?"contentAppear ":"")+"front-page-content"}>
                        <h1 className="namaste" >नमस्ते</h1>
                        <div className="myself">
                            <h2 >MySelf </h2>
                            <h1> Rajpurohit Yogesh Singh</h1>
                        </div>
                    </div>
                    <img className={(avatarLoadChange?"avatarAppear ":"")+"avatar"} src={avatar} alt="Avatar" />
                </div>
                <div className={(typingLoadChange?"typingAppear ":"")+"typing"}>
                    <div className="staticTxt">I'm a</div>
                    <div className="dynamicTxt">
                        <li><span>FrontEnd Developer</span></li>
                        <li><span>BackendEnd Developer</span></li>
                        <li><span>Full Stack Developer</span></li>
                    </div>
                    <div className="altText">
                        <span>Full Stack Developer</span>
                    </div>
                </div>
                <Facts appearClass={factLoadChange} />
                <Skills skillLoad={skillLoadChange} />    
                <Invite appearClass={inviteLoadChange} />
                <Footer homeFooter={true} quote="Living, Learning and Leveling up one day at a time !" />
            </div>
        </div>
    )
}

export default Home
