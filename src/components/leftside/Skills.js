import React from "react";

function Skills({skills}) {
    return(
        <div className="section">
            <h1 className="title">Skills</h1>
            <div className="section-list column-quantity-2">
                {skills.map((skill, index) => <span key={index}>{skill}</span>)}
            </div>
        </div>
    )
}

export default Skills;