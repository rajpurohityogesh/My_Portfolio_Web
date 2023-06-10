import React, { useState, useEffect, useRef } from "react";
import "./Contact.css";
import Header from "../1Common/Header";
import Navbar from "../1Common/Navbar";
import Footer from "../1Common/Footer";
import emailAvatar from "../SVGs/emailAvatar.svg";
import avatar from "../SVGs/mf-avatar.svg";
import Uper from "../1Common/Uper";

const Contact = () => {
  var windowHeight = window.innerHeight;
  const [uperLoadChange, setUperLoadChange] = useState("");
  const [avatarLoadChange, setAvatarLoadChange] = useState(false);
  const [contactMeLoadChange, setContactMeLoadChange] = useState(false);
  const [emailLoadChange, setEmailLoadChange] = useState(false);
  const [emailSVGLoadChange, setEmailSVGLoadChange] = useState(false);
  var x = 200;

  const avatarElem = useRef();
  const contactMeElem = useRef();
  const emailElem = useRef();
  const emailSVGElem = useRef();

  if (window.innerWidth < 600) {
    x = 100;
  }

  const scrollFunctionalities = () => {
    var pos = Math.ceil(window.scrollY);
    var avatarPos =
      avatarElem.current.getBoundingClientRect().top - windowHeight + 250;
    var contactMePos =
      contactMeElem.current.getBoundingClientRect().top - windowHeight + 150;
    var emailPos =
      emailElem.current.getBoundingClientRect().top - windowHeight + 50 + x;
    var emailSVGPos =
      emailSVGElem.current.getBoundingClientRect().top - windowHeight + x;

    if (avatarPos <= 0) {
      setAvatarLoadChange(true);
    }
    if (contactMePos <= 0) {
      setContactMeLoadChange(true);
    }
    if (emailPos <= 0) {
      setEmailLoadChange(true);
    }
    if (emailSVGPos <= 0) {
      setEmailSVGLoadChange(true);
    }

    if (pos === 0) {
      setUperLoadChange("");
    }
    if (pos > 0) {
      setUperLoadChange("goUpAppear ");
    }
  };

  useEffect(() => {
    avatarElem.current = document.querySelector(".contactMe .avatar");
    contactMeElem.current = document.querySelector(".contactMeContent");
    emailElem.current = document.querySelector(".emailMeContent");
    emailSVGElem.current = document.querySelector(".emailSVG");

    scrollFunctionalities();

    window.addEventListener("scroll", scrollFunctionalities);

    return () => {
      window.removeEventListener("scroll", scrollFunctionalities);
    };
  });

  return (
    <div className="outer-grid">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="body">
        <Header />
        <Uper uperAppearClass={uperLoadChange} />
        <div className="contactMe">
          <img
            className={(avatarLoadChange ? "avatarAppear " : "") + "avatar"}
            src={avatar}
            alt="Avatar"
          />
          <div
            className={
              (contactMeLoadChange ? "contactMeContentAppear " : "") +
              "contactMeContent"
            }
          >
            <h2>Contact Me</h2>
            <p>
              I am available on almost every social media. You can message Me. I
              can help you with Full Stack Web Development.
            </p>
            <a
              href="https://drive.google.com/file/d/1To7MDLVW1rVUdpMqyi9zSP_Hx-bgpPb8/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <div className="button">
                <span>See My Resume</span>
              </div>
            </a>
          </div>
        </div>
        <div className="emailMe">
          <div
            className={
              (emailLoadChange ? "emailMeContentAppear " : "") +
              "emailMeContent"
            }
          >
            <h2>Email</h2>
            <h5>rajpurohityogesh50@gmail.com</h5>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwQhSMVxztKgVTHwnDjqrNcCCqqNMNFfFbKrxdmpzScnrkGrHLmBPjQdHmfQWWxzsVJSGc"
              target="_blank"
              rel="noreferrer"
            >
              <div className="button">
                <span>Email Me</span>
              </div>
            </a>
          </div>
          <img
            className={
              (emailSVGLoadChange ? "emailSVGAppear " : "") + "emailSVG"
            }
            src={emailAvatar}
            alt="Email Avatar"
          />
        </div>

        {/*<div className="form"></div>
                <form action="yogeshrajpurohit07@gmail.com" method="POST" enctype="multipart/form-data" onSubmit={formSubmit} >
                    <div className="nameField field">
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" autoComplete="off" autoFocus="on" value={name} onChange={handleName} placeholder="Enter Your Name"/>
                    </div>
                    <div className="emailField field">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="text" autoComplete="off" value={email} onChange={handleEmail} placeholder="Enter your email" />
                    </div>
                    <div className="messageField field">
                        <label htmlFor="message">Message</label>
                        <textarea id="value" rows="10" cols="40" value={message} onChange={handleMessage} placeholder="Enter the Message Here!" />
                    </div>
                    <div className="submitButton">
                        <button type="submit">Submit</button>
                    </div>
                </form> */}

        <Footer quote="Instead of better glasses, your network gives you better eyes !" />
      </div>
    </div>
  );
};

export default Contact;
