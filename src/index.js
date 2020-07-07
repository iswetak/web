import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import Pulse from "./Pulsecomponent/Pulse";
import News from "./Newscomponent/News";
import Basket from "./Basket/Basket";
import BasketDetail from "./Basket/BasketDetail";


import {BrowserRouter as Router,Switch,useLocation,Route,Redirect,Link} from "react-router-dom";

const routing = (
     <Router>
           <Switch>
          <Route>
          <Route path="/" exact component={App} />
          <Route path="/index.html" exact component={Basket} />
          <Route path="/Basket/" children={<Basket />}  />
          <Route path="/BasketDetail/" component={BasketDetail} />

          </Route>
          </Switch>
     
    </Router>
)


ReactDOM.render(routing , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
