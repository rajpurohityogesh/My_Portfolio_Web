import React from 'react';
import "./Uper.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

const Uper = ({uperAppearClass}) => {
    return (
        <a href="#forScroll">
            <div className={uperAppearClass+"goUp"}>
                <FontAwesomeIcon className="icons" icon={faCaretUp} />
            </div>
        </a>
    )
}

export default Uper