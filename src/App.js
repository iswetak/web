import React, { Component } from 'react';
  import News from "./News";

import "./App.css";
 import Basket from "./Basket";
// import BasketDetail from "./BasketDetail";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { View, Button,Text,Platform, Linking, StyleSheet,TouchableOpacity } from 'react-native';
import { useMediaQuery } from "react-responsive";
// import styles from './App.css';

// function div({ style, ...props } = {}) {
//   return (
//     <Text
//       accessibilityLabel="header"
//       style={[
//         {
//           fontWeight: "bold",
//           marginBottom: 24,
//           fontSize: Platform.select({ web: "2.25rem", default: 2.25 * 16 })
//         },
//         style
//       ]}
//       {...props}
//     />
//   );
// }

export default class App extends Component {

  //  isDesktopOrLaptop = useMediaQuery({
  //   query: "(min-device-width: 1224px)"
  // });
  //  isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
  //  isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  //  isTabletOrMobileDevice = useMediaQuery({
  //   query: "(max-device-width: 1224px)"
  // });
  //  isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  //  isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
           
      render() {
        return (
          <Basket/>
//           <div  className="mainnav"><br></br>
//           <div  className="nav1">
//           <Link to="/Pulse" style={{fontSize: 20, color:'black',textDecoration: 'none', position:'sticky'}}>
//             <img src={require('./markets@3x.png')} style={{height: 90,width:90,marginTop:16,marginLeft:'26%', justifyContent:'center'}}></img>
//             &nbsp;&nbsp;<p style={{fontSize: 20, color:'black',textDecoration: 'none',marginTop:-6,marginBottom:-9.3, marginLeft:'38%'}}>Pulse</p></Link><br></br>
//           </div><br></br>
//           <div className="nav2">
//           <Link to="/News" style={{fontSize: 20, color:'black',textDecoration: 'none',position:'sticky' }}>
//             <img src={require('./baskets@3x.png')} style={{height: 90,width:90,marginTop:14,marginLeft:'26%',justifyContent:'center'}}></img>
//             &nbsp;&nbsp;<p style={{fontSize: 20, color:'black',textDecoration: 'none',marginTop:-6,marginBottom:-25, marginLeft:'38%'}}>News</p> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
//             </Link><br/><br/>
//           </div><br/><br/>
//           <div className="nav3" >
//           <Link to="/Basket" style={{fontSize: 20, color:'black',textDecoration: 'none',position:'sticky' }}>
//             <img src={require('./change_pin@3x.png')} style={{height: 90,width:90,marginTop:14,marginLeft:'26%',justifyContent:'center'}}></img>
//             &nbsp;&nbsp;<p style={{fontSize: 20, color:'black',textDecoration: 'none',marginTop:-4,marginBottom: -7, marginLeft:'38%'}}>Basket</p> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;            
//             </Link><br/> 
//            </div><br></br>
//            <div className="nav4">
//            <TouchableOpacity style={styles.btnContainer} onPress={ ()=>{ Linking.openURL('https://robotalk-lkp.s3.ap-south-1.amazonaws.com/index.html')}} >
//            <img src={require('./robotalk@3x (1).png')} style={{height: 90,width:90,marginTop:14, marginLeft:'26%',justifyContent:'center'}}></img>
//            <p style={{fontSize: 20, color:'black',textDecoration: 'none',marginTop:-6,marginBottom:20, marginLeft:'23%'}}>&nbsp;&nbsp;Robotalk</p>
//          </TouchableOpacity>
//          </div><br></br>  
//          <div></div>  
//  </div>
          
    );
  }
}
// const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 })
// const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 })
// const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
// const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
// const isPortrait = useMediaQuery({ orientation: 'portrait' })
// const isRetina = useMediaQuery({ minResolution: '2dppx' })



const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative"
    // backgroundColor: '#FFFFFF',
  },

  
});
