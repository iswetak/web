import React from 'react';
// import { div, Text, StyleSheet, Image, TouchableOpacity, Linking,   } from 'react-native';
import { useHistory , Link, useNavigate, Redirect,  } from 'react-router-dom';




const Basket = ({ title, basketImageURL, basketID, testvalue, nav}) => (
    
    <div >
        {/* <Redirect to='/BasketDetails' /> */}
    <div className="basket-card">
    <div >
    {/* <Link to="/login" /> */}

    <Link to={{
  pathname: '/BasketDetail',
  state: {
    basketID: basketID
  }
}}>  <img src={basketImageURL} style={{height:100,width:90,}}/></Link>
      {/* <TouchableOpacity style={styles.btnContainer} onClick={handleclick}  >
      
      </TouchableOpacity> */}
      {/* </Link> */}
        <div>
            <h3>
                {title}
            </h3>


        </div>
        </div>   
    </div>
     </div>
);






export default Basket;

