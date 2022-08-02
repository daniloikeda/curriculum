import React from "react";

function Language({language}) {
    return(
        <div className="section">
            <h1 className="title">Languages</h1>
            <div className="section-list column-quantity-1">
                {language.map((_, index) => <span key={index}>{_}</span>)}
            </div>
        </div>
    )
}

export default Language;