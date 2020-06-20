import React, { Component } from 'react';
  import News from "./News";
  import Pulse from "./Pulse";
import "./App.css";
 import Basket from "./Basket";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { useMediaQuery } from "react-responsive";


export default class App extends Component {
           
      render() {
        return (
          // <Basket/>
      <Pulse/>
      // <News/>
    );
  }
}
