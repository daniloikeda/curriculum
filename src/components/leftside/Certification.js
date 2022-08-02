import React from "react";

function Certification({certificates}) {    
    return(
        <section className="certification">
            <h1>Certification</h1>
            <article className="grid-column-quantity-1">
                {certificates.map((_, index) => <span key={index}>{_}</span>)}
            </article>
        </section>
    )
}

export default Certification;