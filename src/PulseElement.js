import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        marginLeft: 1,
        marginRight:1,
        marginTop: -10,
        marginBottom: 5,
        // borderRadius: 90,
        backgroundColor: 'white',
       
    },
    title: {
        fontSize: 14,
        color: '#006EA6',
        textAlign: 'left',
        fontFamily: 'Roboto',
        flex: 1, 
        flexDirection: 'row', 
        paddingLeft: 10,
        marginLeft: 0,
        fontFamily:'poppins',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10,
        display: 'flex',
        justifyContent: 'space-around',
        marginLeft: 1,
    },
    subtitle1: {
        flex: 1,
        fontSize: 14,
        color: '#000',
        textAlign: 'left',
       marginHorizontal: 10,
       fontFamily:'poppins',

    },
    subtitle2:{
        fontFamily:'poppins',

    },
    publishedAt: {
        fontFamily:'poppins',  
    },
    separator: {
        flex: 1, 
        borderWidth: 0.1, 
        borderColor: '#D0D0D0',
        paddingTop: 10,


}

// media Quries


        
});

const PulseElement = ({ title,subtitle1, subtitle2, subtitle3, main }) => (
        <div className="maincontainer" style={{  }}>
        
        <View style={styles.separator}>
        <View style={styles.container}>

        <View style={styles.container_text}>
        <Text style={styles.title}>
            {title}
        </Text>
        <Text style={styles.subtitle1}>
            {subtitle1}
        </Text>
        </View>

        <View style={styles.container_text1}>
        <Text style={styles.subtitle2}>
        {subtitle2}
        </Text>
        <Text style={styles.publishedAt }>
        { moment( subtitle3 || moment.now()).format("hh:mm a") }
        </Text>
        </View>

        </View>
        </View>
        </div>
);


export default PulseElement;
