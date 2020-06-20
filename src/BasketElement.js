import React from 'react';
// import { div, Text, StyleSheet, Image, TouchableOpacity, Linking,   } from 'react-native';
import { useHistory , Link, useNavigate, Redirect,  } from 'react-router-dom';

// const styles = StyleSheet.create({
//     container: {
//         justifyContent: 'center',
//         height: 120,
//         margin: 5,
//         paddingTop: 20,
//         // backgroundColor: '#F5FCFF',
//         flex:1,

//     },
//     container_text: {
//         flex:1,
//         alignItems: 'center',
//         margin: 5,
//     },
//     stretch: {
//         alignItems: 'center',
//         height: 60,
//         width: 60,
//         marginHorizontal: 60,
//         // marginTop: 5,
//     },
    
     
   
// });




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
}}>  <img src={'url=basketImageURL'}/></Link>
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

