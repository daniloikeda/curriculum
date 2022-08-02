import React from "react";

function WorkExperience({ workExperience }) {
  return (
    <div className="section">
      <h1 className="title">Work Experience</h1>
        {workExperience &&
          workExperience.map((work, index) => (
            <div key={index} className="content grid-columns-2">
              <div className="period">
                <span>
                  {work.from}
                  {work.to && "-" + work.to}
                </span>
              </div>
              <div className="detail">
                <h2>{work.location}</h2>
                <p style={{fontWeight: 500, marginBottom: "6px", color: "#5d5d5d"}}>{work.role}</p>
                <p style={{marginBottom: "5px", whiteSpace: "pre-line"}}>{work.description}</p>
                {work.projects &&
                  work.projects.map((p, index) => (
                    <li key={index}>
                      <span>{p.title}</span>
                      <span>{p.description}</span>
                    </li>
                  ))}
              </div>
            </div>
          ))}
    </div>
  );
}

export default WorkExperience;
