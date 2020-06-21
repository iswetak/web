import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import Pulse from "./Pulse";
import News from "./News";
import Basket from "./Basket";
import BasketDetail from "./BasketDetail";
import Chatbot from "./Chatbot";
// import { View, Button, Linking } from 'react-native';


import {BrowserRouter as Router,Switch,useLocation,Route,Redirect,Link} from "react-router-dom";

const routing = (
     <Router>
           <Switch >
          <Route>
          <Route path="/" exact component={App} />
          <Route path="/index.html" exact component={Basket} />
          <Route path="/News/" children={<Basket />}  />
          <Route path="/BasketDetail/" component={BasketDetail} />
          {/* <Route href="/https://robotalk-lkp.s3.ap-south-1.amazonaws.com/index.html"  /> */} */}
          {/* <button><img src="https://dictionary.cambridge.org/images/thumb/button_noun_002_05071.jpg?version=5.0.81" onPress={ ()=>{ Linking.openURL('https://robotalk-lkp.s3.ap-south-1.amazonaws.com/index.html')}}/></button> */}

          </Route>
          </Switch>
     
    </Router>
)


ReactDOM.render(routing , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
