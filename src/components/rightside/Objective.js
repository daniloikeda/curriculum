import React from 'react';

function Objective ({objective}) {
    return(
    <section className="objective">
        <h1>Objective</h1>
        <p style={{margin: 0}}>{objective}</p>
    </section>);
}

export default Objective;