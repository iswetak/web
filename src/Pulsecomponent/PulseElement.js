import React from 'react';
import moment from 'moment';
import "./Pulse.css";

const PulseElement = ({ title,subtitle1, subtitle2, subtitle3 }) => (
        <div className="main-container">
            <div className="header-container">
            <h2>{title}</h2>
            <p className="price">{subtitle2} </p>
            </div>

            <div className="description-container">
            <p>{subtitle1} </p>
            <p>{ moment( subtitle3 || moment.now()).format("hh:mm a") }</p>
            </div>
            </div>
        
);

export default PulseElement;
