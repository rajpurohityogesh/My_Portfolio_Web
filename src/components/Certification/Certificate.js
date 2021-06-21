import React from 'react';
import "./Certificate.css";

const Certificate = ({index,srcImg,certiName,certiLink,provider}) => {

    return (
        <div className="certificateItem">
            <div className="certiImage">
                <img src={srcImg} alt={certiName} />
                <a href={certiLink} target="_blank" rel="noreferrer">
                    <div className="overlay">
                        <h2>{certiName}</h2>
                    </div>
                </a>
            </div>
            <div className="certificateDetail">
                <h1 className="certificateTitle">{certiName}</h1>
                <h2 className="ProvidedBy">-{provider}</h2>
            </div>
        </div>
    )
}

export default Certificate
