import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking,   } from 'react-native';
import { useHistory , Link, useNavigate, Redirect,  } from 'react-router-dom';
// import { withNavigation } from 'react-navigation'; 
// import BasketDetail from "./BasketDetail";

// import { Redirect } from 'react-router';
// import { Link, } from "react-scroll";
// import ReadMore from 'react-native-read-more-text';
// import { Avatar, Divider } from 'react-native-elements';

// import moment from 'moment';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height: 120,
        margin: 5,
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
        flex:1,

    },
    container_text: {
        flex:1,
        alignItems: 'center',
        margin: 5,
    },
    stretch: {
        alignItems: 'center',
        height: 70,
        width: 70,
        marginHorizontal: 60,
        // marginTop: 5,
    },
    
     
   
});




const Basket = ({ title, basketImageURL, basketID, testvalue, nav}) => (
    
    <View >
        {/* <Redirect to='/BasketDetails' /> */}
    <div className="cc" style={{  }}>
    <View style={styles.container} >
    {/* <Link to="/login" /> */}

    <Link to={{
  pathname: '/BasketDetail',
  state: {
    basketID: basketID
  }
}}>  <Image source={{ uri: basketImageURL }} style={styles.stretch} /></Link>
      {/* <TouchableOpacity style={styles.btnContainer} onClick={handleclick}  >
      
      </TouchableOpacity> */}
      {/* </Link> */}
        <View style={styles.container_text}>
            <Text style={styles.title}>
                {title}
            </Text>


        </View>
        </View>   
    </div>
     </View>
);






export default Basket;

