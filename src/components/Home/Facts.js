import { faBriefcase, faCertificate, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef} from 'react';
import "./Facts.css";

const Facts = ({appearClass}) => {

    const factItemElems = useRef();

    const incrementFacts = ()=>{
        factItemElems.current = document.querySelectorAll(".facts-item h1");
        factItemElems.current.forEach(factItem=>{
            const updateFact = ()=>{
                const target = +factItem.getAttribute("data-target");
                const count = +factItem.innerText;
                const inc = target/5;

                if(count<target)
                {
                    factItem.innerText = Math.ceil(count+inc);
                    setTimeout(updateFact,200);
                }
                else {
                    factItem.innerText = target;
                }
            }

            updateFact();
        })    
    }

    useEffect(() => {
        if(appearClass){
            setTimeout(incrementFacts,500);
        }
    })

    return (
        <div className={(appearClass?"factsAppear ":"")+"facts"}>
            <h1 className="heading">Facts</h1>
            <div className="underLine" ></div>
            <div className="facts-container">
                <div className="facts-item">
                    <FontAwesomeIcon className="icons" icon={faCode} />
                    <h1 data-target="5">0</h1>
                    <h2>Project</h2>
                </div>
                <div className="facts-item">
                    <FontAwesomeIcon className="icons" icon={faBriefcase} />
                    <h1 data-target="3">0</h1>
                    <h2>Internship</h2>
                </div>
                <div className="facts-item">
                    <FontAwesomeIcon className="icons" icon={faCertificate} />
                    <h1 data-target="15">0</h1>
                    <h2>Certificate</h2>
                </div>
            </div>
        </div>
    )
}

export default Facts
