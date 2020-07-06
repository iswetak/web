import React from 'react';
// import { div, Text, StyleSheet, Image, TouchableOpacity, Linking,   } from 'react-native';
import { useHistory , Link, useNavigate, Redirect,  } from 'react-router-dom';
// import "./App.css";





const Basket = ({ title, basketImageURL, basketID, testvalue, nav}) => ( 
  <div>
    <div className="collections">
      <div className="collection-item">
      <div className="collection-header" >
        <Link to={{
          pathname: '/BasketDetail',
          state: {
            basketID: basketID
          }
          }}>
          <div className="imgc">
            <img src={basketImageURL} className="img-container" />
          </div>
        </Link>
        <div>
          <p className="title">
            {title}
          </p>
        </div>
        </div>
    </div>   
    </div>
  </div>

);






export default Basket;

