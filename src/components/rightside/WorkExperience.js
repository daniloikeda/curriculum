import React from "react";

function WorkExperience({ workExperience }) {
  return (
    <section className="work-experience">
      <h1>Work Experience</h1>
      {workExperience &&
        workExperience.map((work, index) => (
          <section key={index} className="work-place grid-columns-2">
            <div className="period">
              <span>
                {work.from}
                {work.to && "-" + work.to}
              </span>
            </div>
            <article className="detail">
              <h2>{work.location}</h2>
                <p
                  style={{
                    fontWeight: 500,
                    marginBottom: "6px",
                    color: "#5d5d5d",
                  }}
                >
                  {work.role}
                </p>
                <p style={{ marginBottom: "5px", whiteSpace: "pre-line" }}>
                  {work.description}
                </p>
                {work.projects && (
                  <ul>
                    {work.projects.map((p, index) => (
                      <li key={index}>
                        <span>{p.title}</span>
                        <span>{p.description}</span>
                      </li>
                    ))}
                  </ul>
                )}
            </article>
          </section>
        ))}
    </section>
  );
}

export default WorkExperience;
