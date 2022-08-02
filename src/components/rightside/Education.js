import React from "react";

function Education({ education }) {
  return (
    <section className="education">
      <h1>Education</h1>
      {education &&
        education.map((e, index) => (
          <section key={index} className="institution grid-columns-2">
            <div>
              <span className="period">{e.from + "-" + e.to}</span>
            </div>
            <article>
              <h2>{e.location}</h2>
              <p>{e.role}</p>
              {e.description && <p className="description">{e.description}</p>}
            </article>
          </section>
        ))}
    </section>
  );
}

export default Education;
