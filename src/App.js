import React, { Component } from 'react';
import Basket from "./Basket.js"
import BasketDetail from "./BasketDetail.js"
import Pulse from "./Pulse.js"


// import "./App.css";
 import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
 import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import { useHistory , Link, useNavigate, Redirect,  } from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.date = props.time;
    this.state = { tabIndex: 0 };
    this.state = {
      loading: false,
      data: [],
      selected: {},
      technicalData :[],
      fundamentalData :[],
      marketData :[],
      combinationData :[],
      error: null,
      refreshing: false
    };
  }

  componentDidMount = () => {
        this.makeRemoteRequest();
    }
    
    makeRemoteRequest = () => {
      fetch('https://b1ppljae3m.execute-api.ap-south-1.amazonaws.com/lkp/v1/baskets', {
        method: 'GET',
        
            headers: 
            {'x-api-key': 'fyX65yeBWd5RtlunH4ikc7voovP3Nn1Y5iHFx1Gv',
              'Content-Type': 'application/json'}
    })
    .then((response) => response.json())
    .then((responseJson) => {
        let data1 = []
        let data2 = []
        let data3 = []
        let data4 = []
        let myArray = []
        responseJson.forEach(function(item){
          if(item.basketCategory=="FUNDAMENTAL"){
            
            data2.push(item)
          }
          else if(item.basketCategory=="TECHNICAL"){
          
            data1.push(item)
          }
          else if(item.basketCategory=="MARKET"){
          
            data3.push(item)
          }
          else if(item.basketCategory=="COMBINATION"){
          
            data4.push(item)
          }
        });
        this.setState({fundamentalData:data2,technicalData:data1,marketData:data3,combinationData:data4})
        this.loadStoxBox(myArray[0])
      
        console.log(this.state.fundamentalData);
      
    })
    .catch((error) => {
        console.error(error);
    });
    
    }

    loadStoxBox = (element) =>{
      this.setState({selected:element})
      console.log('Clicked'+element.basketID);
    }


           
      render() {
        return (
//           <div>
//           <div className="basket-header">
//          <img src={require('./basket-removebg-preview (1).png')} class="basketicon-image" ></img>
//           <p className="baskettitle-container" >Stock Screeners</p>
//               </div>
//               <div className="basketmain-container">
              
//           <Tabs selected={1}>     
//             <Tab>Fundamental</Tab>
//             <Tab  >Technical</Tab>
//             <Tab >Market</Tab>
//             <Tab >Combination</Tab>

//         <div>
//           <TabPanel>
//           <div>
//   <div class="collections">
//   {this.state.fundamentalData.map((k) => (
//         <div className="collection-item">
          
//           <Link to={{
//           pathname: '/BasketDetail',
//           state: {
//             basketID : this.state.data.basketID
//           }
         
//           }}>
//         <div className="collection-header">
//         <img src={k.basketImageURL} className="img-container" onClick={() => this.loadStoxBox(k)} />
//                   <p>{k.basketName}</p>
//           </div>
//           {/* <p>{this.state.fundamentalData.basketID}</p> */}

//           </Link> 
//         </div>


//               ))} 
 

   
//   </div>
// </div>
//         </TabPanel>
      

//         <TabPanel>
//         <div>
//   <div class="collections">
//   {this.state.technicalData.map((k) => (
//         <div className="collection-item">
//           {/* <Link to={{
//           pathname: '/BasketDetail',
//           state: {
//             basketID: 'basketID'
//           }
//           }}> */}
//         <div className="collection-header">
//         <img src={k.basketImageURL} className="img-container" onClick={() => this.loadStoxBox(k)} />
//                   <p>{k.basketName}</p>
//           </div>

//           {/* </Link>  */}
//         </div>

//               ))} 
//               {/* <p>{this.state.fundamentalData.basketID}</p> */}
 

   
//   </div>
// </div>

//           </TabPanel>
          
//           <TabPanel>
//           <div>
//   <div class="collections">
//   {this.state.marketData.map((k) => (
//         <div className="collection-item">
//           {/* <Link to={{
//           pathname: '/BasketDetail',
//           state: {
//             basketID: 'basketID'
//           }
//           }}> */}
//         <div className="collection-header">
//         <img src={k.basketImageURL} className="img-container" onClick={() => this.loadStoxBox(k)} />
//                   <p>{k.basketName}</p>
//           </div>

//           {/* </Link>  */}
//         </div>

//               ))} 
//               {/* <p>{this.state.fundamentalData.basketID}</p> */}
 

   
//   </div>
// </div>

//         </TabPanel>

//           <TabPanel>
//           <div>
//   <div class="collections">
//   {this.state.combinationData.map((k) => (
//         <div className="collection-item">
//           {/* <Link to={{
//           pathname: '/BasketDetail',
//           state: {
//             basketID: 'basketID'
//           }
//           }}> */}
//         <div className="collection-header">
//         <img src={k.basketImageURL} className="img-container" onClick={() => this.loadStoxBox(k)} />
//                   <p>{k.basketName}</p>
//           </div>

//           {/* </Link>  */}
//         </div>

//               ))} 
//               {/* <p>{this.state.fundamentalData.basketID}</p> */}
 

   
//   </div>
// </div>

//         </TabPanel>
//         </div>
//         </Tabs>
//         </div>


//         </div>
         <div>
          <Basket/>
      <Pulse/>
      </div>
      // <Pulse/>
    );
  }
}
  