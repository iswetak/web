import React from 'react';
// import { div, Text, StyleSheet, Image, TouchableOpacity, Linking,   } from 'react-native';
import { useHistory , Link, useNavigate, Redirect,  } from 'react-router-dom';




const Basket = ({ title, basketImageURL, basketID, testvalue, nav}) => ( 
  <div >
    <div className="basket-card">
      <div >
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
);






export default Basket;

