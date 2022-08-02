import React from "react";

function Others({others}) {
    return(
        <section className="others">
            <h1>Others</h1>
            <article className="grid-column-quantity-2">
                {others.map((_, index) => <span key={index}>{_}</span>)}        
            </article>
        </section>
    )
}

export default Others;