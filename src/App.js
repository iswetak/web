import React, { Component } from 'react';
// import Pulse from "./Pulse";
import "./App.css";
// import Basket from "./Basket";
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
          <View>
          <div  className="mainnav" ><br></br>
          <div className="con">
            <div>
          <div  className="nav1">
          <Link to="/Pulse" style={{fontSize: 20, color:'black',textDecorationLine: 'none',marginLeft:'20%', position:'sticky'}}><img src={require('./markets@3x.png')} style={{height: 90,width:90,marginTop:14, justifyContent:'center'}}></img><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pulse</Link><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div className="nav2">
          <Link to="/News" style={{fontSize: 20, color:'black',textDecorationLine: 'none',marginLeft:'20%',position:'sticky' }}><img src={require('./baskets@3x.png')} style={{height: 90,width:90,marginTop:14,justifyContent:'center'}}></img><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;News</Link><br/><br/>
          </div>
          </div><br/><br/><br></br>
          <div>
          <div className="nav3" >
          <Link to="/Basket" style={{fontSize: 20, color:'black',textDecorationLine: 'none',marginLeft:'20%',position:'sticky' }}><img src={require('./change_pin@3x.png')} style={{height: 90,width:90,marginTop:14,justifyContent:'center'}}></img><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Basket</Link><br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           </div>
           <div className="nav4">
           <TouchableOpacity style={styles.btnContainer} onPress={ ()=>{ Linking.openURL('https://robotalk-lkp.s3.ap-south-1.amazonaws.com/index.html')}}  >
           <img src={require('./robotalk@3x (1).png')} style={{height: 90,width:90,marginTop:14, marginLeft:'20%',justifyContent:'center'}}></img><p style={{fontSize: 20, color:'black',textDecorationLine: 'none',marginTop:-6,marginBottom:28, marginLeft:'20%'}}>&nbsp;&nbsp;Robotalk</p>
         </TouchableOpacity>
         </div>
         </div>
         </div>
        
 </div>
 </View>  
  
          
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
  // navcontainer: {
  //   marginTop:'10%' , marginLeft: '38%', position:'fixed',
  //   // flex: 1,
  //   // backgroundColor: 'gray',
  //   // height:100,
  //   // width:10,
  // },
 
  
});

