import React, { Component } from 'react';

function Objective ({objective}) {
    return(
    <div className='section'>
        <h1 className='title'>Objective</h1>
        <div className='content'>
            <p style={{margin: 0}}>{objective}</p>
        </div>
    </div>);
}

export default Objective;