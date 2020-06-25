import React from 'react';
import moment from 'moment';

const CustomRow = ({ symbol,eventDescription, entryPrice, diff, entryMillis  }) => (
    
    <div  className="ccc">

    <div className="leftcontainer">
    <p className="symbol"> {symbol} </p>
    <div className="entryMillis">
    <p>
    {moment(entryMillis || moment.now()).format("(DD MMM hh:mm a)")}   
    </p>
    </div>
    <p className="price">
        {(entryPrice || entryPrice).toFixed(2)}
    </p>

    </div>

    <div className="rightcontainer">
    <p className="eventDescription">
        {eventDescription}
    </p>
   
    <p className="diff">{(diff || diff).toFixed(2)}</p>
    </div>    
    </div>

);

export default CustomRow;