import React from 'react';
import moment from 'moment';
import "./Pulse.css";

const PulseElement = ({ title,subtitle1, subtitle2, subtitle3, main }) => (
        <div className="main-container">
            <div class="top-container">
            <p style={{color:'#006EA6'}}>{title}</p>
            <p class="price">{subtitle2} </p>
            </div>

            <div class="bottom-container">
            <p >{subtitle1} </p>
            <p>{ moment( subtitle3 || moment.now()).format("hh:mm a") }</p>
            </div>
            </div>
        
);

export default PulseElement;
