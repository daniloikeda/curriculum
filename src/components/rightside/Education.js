import React, { Component } from 'react';

function Education ({education}) {
    return(
    <div className='section'>
        <h1 className='title'>Education</h1>        
        {education && education.map((e, index) => 
            <div key={index} className="content grid-columns-2">
                <div className="period">{e.from + "-" + e.to}</div>
                <div className="detail">
                    <h2>{e.location}</h2>
                    <p>{e.role}</p>
                    {e.description && <p className='sub-detail'>{e.description}</p>}
                </div>
            </div>)}
    </div>);
}

export default Education;