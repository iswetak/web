import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import moment from 'moment';


const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        // padding: 10,
        // marginLeft: 1,
        // marginRight:1,
        // marginBottom: 8,      
        flexDirection: 'row',
        padding: 10,
        marginLeft: 1,
        marginRight:1,
        // marginTop: -10,
        marginBottom: 8,
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
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 2,
        display: 'flex',
        justifyContent: 'space-around',
    },
    eventDescription: {
        flex: 1,
        fontSize: 14,
        color: '#000',
        textAlign: 'left',
        marginLeft: 2,
    },
    entryMillis: {
        marginLeft: 100,
        marginRight:'auto',
        textAlign: 'center',
        marginTop: -19,
    },
    container_text1: {
        marginLeft:10,
    },
    separator: {
        flex: 1,
        borderWidth: 0.10, 
        borderColor: '#D0D0D0',
        paddingTop: 10,
    }     
    
});


const CustomRow = ({ symbol,eventDescription, entryPrice, diff, entryMillis  }) => (
    
    <div  className="ccc" >
   <View style={styles.container}>
    <View style={styles.container_text}>
    <Text style={styles.title}> {symbol} </Text>

    <View>
    <Text style={styles.entryMillis }>
    {moment( entryMillis || moment.now()).format("(DD MMM hh:mm a)")}   
    </Text>
    </View>

    <Text style={styles.eventDescription}>
        {eventDescription}
    </Text>
    </View>

    <View style={styles.container_text1}>
    <Text style={styles.subtitle2}>
        {(entryPrice || entryPrice).toFixed(2) }
    </Text>

    <Text style={styles.diff }> {diff} </Text>
    </View>    
    </View>

    </div>
);

export default CustomRow;