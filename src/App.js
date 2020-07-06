import React, { Component } from 'react';
import Basket from "./Basket/Basket.js"
import BasketDetail from "./Basket/BasketDetail.js"
import Pulse from "./Pulsecomponent/Pulse.js"
import News from "./Newscomponent/News.js"


export default class App extends Component {           
      render() {
        return (
      <div>
         {/* <Basket/> */}
       <Pulse/>
      </div>
    );
  }
}
  