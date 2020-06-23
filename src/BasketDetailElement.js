import React from 'react';
// import { div, h3, StyleSheet} from 'react-native';
import moment from 'moment';


// const styles = StyleSheet.create({
//     container: {
//         // flexDirection: 'row',
//         // padding: 10,
//         // marginLeft: 1,
//         // marginRight:1,
//         // marginBottom: 8,      
//         flexDirection: 'row',
//         padding: 10,
//         marginLeft: 1,
//         marginRight:1,
//         // marginTop: -10,
//         marginBottom: 8,
//         // borderRadius: 90,
//         backgroundColor: 'white', 
//     },
//     title: {
//         fontSize: 14,
//         color: '#006EA6',
//         h3Align: 'left',
//         fontFamily: 'Roboto',
//         flex: 1, 
//         flexDirection: 'row', 
//         fontFamily:'poppins'
//     },
//     container_h3: {
//         flex: 1,
//         flexDirection: 'column',
//         marginLeft: 2,
//         display: 'flex',
//         justifyContent: 'space-around',
//     },
//     eventDescription: {
//         flex: 1,
//         fontSize: 14,
//         color: '#000',
//         h3Align: 'left',
//         marginLeft: 2,
//         fontFamily:'poppins'
//     },
//     entryMillis: {
//         marginLeft: 100,
//         marginRight:'auto',
//         h3Align: 'center',
//         marginTop: -19,
//         fontFamily:'poppins'

//     },
//     container_h31: {
//         marginLeft:10,
        
//     },
//     separator: {
//         flex: 1,
//         borderWidth: 0.10, 
//         borderColor: '#D0D0D0',
//         paddingTop: 10,
//     } ,
//     subtitle2: {
        
//     }   
    
// });


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

    {/* <div className="Basketright-container">
    <p className="eventDescription">
        {eventDescription}
    </p>
    </div>   */}
    </div>

    <div className="rightcontainer">
    {/* <div className="Basketright-container"> */}
    <p className="eventDescription">
        {eventDescription}
    </p>
    {/* </div>   */}
   
    <p className="diff">{(diff || diff).toFixed(2)}</p>
    </div>    
    </div>

);

export default CustomRow;