import React from 'react'
import "./Loader.css";

const LoaderComp = () => {
    return (
        <div className="loader">
            <span>{</span>
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
            <div className="four"></div>
            <span>}</span>
        </div>
    )
}

export default LoaderComp
