import React from 'react';
// import { div, h3, StyleSheet } from 'react-native';
import moment from 'moment';
import "./Pulse.css";


// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         padding: 10,
//         marginLeft: 1,
//         marginRight:1,
//         marginTop: -10,
//         marginBottom: 5,
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
//         paddingLeft: 10,
//         marginLeft: 0,
//         fontFamily:'poppins',
//     },
//     container_h3: {
//         flex: 1,
//         flexDirection: 'column',
//         marginLeft: 10,
//         display: 'flex',
//         justifyContent: 'space-around',
//         marginLeft: 1,
//     },
//     subtitle1: {
//         flex: 1,
//         fontSize: 14,
//         color: '#000',
//         h3Align: 'left',
//        marginHorizontal: 10,
//        fontFamily:'poppins',

//     },
//     subtitle2:{
//         fontFamily:'poppins',

//     },
//     publishedAt: {
//         fontFamily:'poppins',  
//     },
//     separator: {
//         flex: 1, 
//         borderWidth: 0.1, 
//         borderColor: '#D0D0D0',
//         paddingTop: 10,


// }

// // media Quries


        
// });

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
        <p >
        {subtitle2}
        </p>
        <p>
        { moment( subtitle3 || moment.now()).format("hh:mm a") }
        </p>
        </div>

        </div>
);


export default PulseElement;
