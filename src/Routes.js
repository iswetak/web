// // import React, { Component } from 'react';
// // import { Link } from "react-router-dom";

// // // import Pulse from "./Pulse";
// // // import News from "./News";
// // // import Basket from "./Basket";
// // // import BasketDetail from "./BasketDetail";



// //   class Routes extends Component {
           
// //       render() {
// //         return (
// //            <nav>import {createStackNavigator} from 'react-navigation-stack';
// import {createAppContainer,createStackNavigator} from 'react-navigation';
// import {createBrowserApp} from '@react-navigation/web';
 
// import News from "./News";
// // import Profile from "../screens/Profile";
// import {Platform} from "react-native";
 
// const isWeb = Platform.OS === 'web';
 
 
// const Routes = createStackNavigator(
//     {
//         News: News,
//     },
//     {
//         navigationOptions: {
//             headerTintColor: '#fff',
//             headerStyle: {
//                 backgroundColor: '#000',
//             },
//         },
//     }
// );
 
// const container = isWeb ? createBrowserApp(Routes): createAppContainer(Routes);
 
// export default container;
// //                <div>
// //                    <ul>
// //                        <li><Link to={"/Pulse"}>Pulse</Link></li>
// //                        <li><Link to={"/News"}>News</Link></li>
// //                        <li><Link to={"/ Basket"}>Basket</Link></li>
// //                    </ul>
// //                </div>
// //            </nav>
// //           // <Pulse/>
// //           // <News/>
// //         //   <Basket/>
// //           // <BasketDetail/>


// //         );
// //       }
// // }

// // export default Routes;