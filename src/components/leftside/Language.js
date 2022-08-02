import React from "react";

function Language({language}) {
    return(
        <section className="language">
            <h1>Languages</h1>
            <article className="grid-column-quantity-1">
                {language.map((_, index) => <span key={index}>{_}</span>)}
            </article>
        </section>
    )
}

export default Language;