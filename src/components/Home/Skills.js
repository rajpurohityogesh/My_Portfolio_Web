import React from 'react';
import "./Skills.css";
import htmlSVG from "../SVGs/icons/icons8-html.svg";
import cssSVG from "../SVGs/icons/icons8-css.svg";
import jsSVG from "../SVGs/icons/icons8-javascript.svg";
import reactSVG from "../SVGs/icons/icons8-react-native.svg";
import nodeJsSVG from "../SVGs/icons/icons8-node-js.svg";
import mongoDbSVG from "../SVGs/icons/icons8-mongodb.svg";
import herokuSVG from "../SVGs/icons/icons8-heroku.svg";

const Skills = ({skillLoad}) => {
    return (
        <div className={(skillLoad?"skillApper ":"")+"skills"}>
            <div className="skillTops">
                <h1 className="heading">Skills</h1>
                <span className="subHeading">My Technical Levels</span>
            </div>
            <div className="skillDataContainer">
                <div className="skillDataItem">
                    <img src={htmlSVG} alt="HTML" />
                    <div className="skillPercentage">
                        <div className={"inner"+(skillLoad?" htmlSkill":"")}></div>
                    </div>
                    <span>70%</span>
                </div>
                <div className="skillDataItem">
                    <img src={cssSVG} alt="CSS" />
                    <div className="skillPercentage">
                        <div className={"inner"+(skillLoad?" cssSkill":"")}></div>
                    </div>
                    <span>60%</span>
                </div>
                <div className="skillDataItem">
                    <img src={jsSVG} alt="JavaScript" />
                    <div className="skillPercentage">
                        <div className={"inner"+(skillLoad?" jsSkill":"")}></div>
                    </div>
                    <span>75%</span>
                </div>
                <div className="skillDataItem">
                    <img src={reactSVG} alt="React JS" />
                    <div className="skillPercentage">
                        <div className={"inner"+(skillLoad?" reactSkill":"")}></div>
                    </div>
                    <span>70%</span>
                </div>
                <div className="skillDataItem">
                    <img src={nodeJsSVG} alt="Node JS" />
                    <div className="skillPercentage">
                        <div className={"inner"+(skillLoad?" nodeSkill":"")}></div>
                    </div>
                    <span>65%</span>
                </div>
                <div className="skillDataItem">
                    <img src={mongoDbSVG} alt="MongoDB" />
                    <div className="skillPercentage">
                        <div className={"inner"+(skillLoad?" mongoSkill":"")}></div>
                    </div>
                    <span>60%</span>
                </div>
                <div className="skillDataItem">
                    <img src={herokuSVG} alt="Heroku" />
                    <div className="skillPercentage">
                        <div className={"inner"+(skillLoad?" herokuSkill":"")}></div>
                    </div>
                    <span>50%</span>
                </div>
            </div>
        </div>
    )
}

export default Skills
