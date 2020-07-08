import React from 'react';
import moment from 'moment';
import style from "../App.module.css";

const CustomRow = ({ symbol,eventDescription, entryPrice, diff, entryMillis  }) => (
    
    <div  className="main-detail-container">

    <div className="detail-top-container">
    <div className="header-left">
    <h2>{symbol}</h2>
    <h2 className={style.header_h2_color}>{moment(entryMillis || moment.now()).format("(DD MMM hh:mm a)")}</h2>
    </div>
    <h3>{(entryPrice || entryPrice).toFixed(2)}</h3>
    </div>

    <div className="detail-bottom-container">
    <h3>{eventDescription}</h3>
    <h3>{(diff || diff).toFixed(2)}</h3>
    </div> 

    </div>

);

export default CustomRow;