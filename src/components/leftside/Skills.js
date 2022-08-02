import React from "react";

function Skills({skills}) {
    return(
        <section className="skills">
            <h1>Skills</h1>
            <article className="grid-column-quantity-2">
                {skills.map((skill, index) => <span key={index}>{skill}</span>)}
            </article>
        </section>
    )
}

export default Skills;