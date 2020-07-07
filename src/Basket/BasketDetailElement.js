import React from 'react';
import moment from 'moment';

const CustomRow = ({ symbol,eventDescription, entryPrice, diff, entryMillis  }) => (
    
    <div  className="main-detail-container">

    <div className="detail-top-container">
    <div className="header-left">
    <h2> {symbol} </h2>
    <p>{moment(entryMillis || moment.now()).format("(DD MMM hh:mm a)")}   </p>
    </div>
    <p>{(entryPrice || entryPrice).toFixed(2)}</p>
    </div>

    <div className="detail-bottom-container">
    <p>{eventDescription}</p>
    <p>{(diff || diff).toFixed(2)}</p>
    </div> 

    </div>

);

export default CustomRow;