import React from 'react';
import moment from 'moment';
import "./Pulse.css";

const PulseElement = ({ title,subtitle1, subtitle2, subtitle3, main }) => (
        <div className="main-container" >
        
        <div className="pulseleft-container">
        <p style={{color:'#006EA6'}}>
            {title}
        </p>
        <div className="leftSubtitle1">
        <p >
            {subtitle1}
        </p>
        </div>
        </div>

        <div className="pulseright-container">
        <p>
        {subtitle2}
        </p>
        <p>
        { moment( subtitle3 || moment.now()).format("hh:mm a") }
        </p>
        </div>

        </div>
);


export default PulseElement;
