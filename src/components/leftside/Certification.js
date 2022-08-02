import React from "react";

function Certification({certificates}) {    
    return(
        <div className="section">
            <h1 className="title">Certification</h1>
            <div className="section-list column-quantity-1">
                {certificates.map((_, index) => <span key={index}>{_}</span>)}
            </div>
        </div>
    )
}

export default Certification;