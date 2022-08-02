import React from "react";

function Others({others}) {
    return(
        <div className="section">
            <h1 className="title">Others</h1>
            <div className="section-list column-quantity-2">
                {others.map((_, index) => <span key={index}>{_}</span>)}        
            </div>
        </div>
    )
}

export default Others;