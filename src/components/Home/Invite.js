import React from 'react';
import { Link } from 'react-router-dom';
import "./Invite.css";

const Invite = ({appearClass}) => {
    return (
        <div>
            <div className={appearClass+"inviteContainer"}>
                <div className="first">
                    <h3>Start a project</h3>
                </div>
                <div className="second">
                    <h4>Interested in working together? We should queue up a chat. I’ll buy the coffee.</h4>
                </div>
                <div className="inviteButton">
                    <Link to="/contact">
                        <h3>Let's do this</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Invite
