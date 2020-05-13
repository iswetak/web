import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import moment from 'moment';
import "./News.css";

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'column',
        // padding: 10,
        // marginLeft: 1,
        // marginRight:1,
        // marginTop: -5,
        // marginBottom: 5,
        // backgroundColor: 'white',
        // borderRadius: 1,
        flexDirection: 'column',
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
        justifyContent: 'center',
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginRight:5,
        paddingRight: 7,
        marginRight: 1,
        padding: 3,

    },
    container_text: {
        flex: 1,
        marginRight: 1 ,
        display: 'flex',
        justifyContent: 'center',
        borderColor: '#D0D0D0',
        borderWidth: 1,
        borderTopLeftRadius: 2, 
        borderTopRightRadius: 2,
        borderRadius: 3,
        paddingLeft : 4,
        marginHorizontal: 55,
        justifyContent: 'space-around',
    },
    imgg: {
        flex: 1,
        marginRight: 1 ,
        display: 'flex',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1,
        borderTopLeftRadius: 2, 
        borderTopRightRadius: 2,
        borderRadius: 3,
        paddingLeft : 4,
        marginHorizontal: 55,
        justifyContent: 'space-around',

    },
    subtitle1: {
        justifyContent: 'space-between',
        padding: 2,
    }, 
    hidden:{
        display: "none",
    },
    stretch: {
        display: 'flex',
        flex: 1,
         height: 160,
         width: '100%',
         marginHorizontal: -2,
         marginTop: 5,
     },
    avatard: {
        textAlign: 'left',
        position: 'absolute',
        top: 10,
        flex: 1,
        flexDirection: 'row',
         paddingLeft: 10 ,
         marginLeft: -5,
    },
    twitterHandlei: {
        position:'absolute',
        top:30,
        paddingTop: 32 , 
        marginHorizontal: 3,
     },
    source: {
        flex: 1,
        flexDirection: 'row',
        paddingRight: 10 ,
        marginTop: -20,
        marginHorizontal: 55,
        justifyContent: 'center'
    },
    publishedAt:{
        textAlign: 'right',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10 , 
       
    },
    twitterHandle: {
        marginHorizontal: 19,
        padding: 5,
        marginTop: -2,
    },
    url: {
        color: '#1569C7',
        textAlign: 'right',
        flex: 1,
        flexDirection: 'row',
        paddingRight: 16,
        marginTop: -25, 
        justifyContent: 'flex-end',
        justifyContent: 'space-between',
        marginRight: -30,
    },
    separator: {
        flex: 1, 
        borderWidth: 0.1, 
        borderColor: '#D0D0D0',
        paddingTop: 10,
        // marginBottom:2,

    }        
});


const CustomRow = ({ eventCategory,title,subtitle1, urlToImage, avatarURL, publishedAt, source, twitterHandle, url, subtitle3,sourceURL}) => (
    <div className="maincontainer" >

        <View style={styles.separator}>
        <View style={styles.container}>

        <View> 
        <Text style={styles.publishedAt}>
        { moment(publishedAt || moment.now()).format("hh:mm a")}
                    {/* {publishedAt} */}
        </Text>
        </View>

        <View style={styles.avatard}>
        <Image  style={{height:30, width:40}}source={{ uri:  eventCategory=="NEWS"?"https://s3.ap-south-1.amazonaws.com/public.sicrobo/news-logos/"+source+".jpg"  :avatarURL}} />        
        </View>

        <View style={eventCategory!="NEWS"?styles.twitterHandlei:styles.hidden}>
        <Image style={{height:30, width:40}} source ={{ uri: "https://s3.ap-south-1.amazonaws.com/public.sicrobo/news-logos/"+source+".jpg" }} />
         </View>
         <View >
         <Text style={styles.source}>
                {source}
          </Text>
          </View>
          <View style={styles.imgg}>
         <Image  source={{ uri: urlToImage }} style={urlToImage!=null?styles.stretch:styles.hidden} />
         </View>


        <View style={styles.container_text}>

        <Text style={styles.title}>
            {title}
        </Text>
            <View style={styles.cardBody}>

        <Text style={styles.subtitle1}>
            {subtitle1 }
        </Text><br/>
        </View> 
        </View>

        <View style={styles.twitterHandle}>
        <Text  style={twitterHandle!=null?styles.twitterHandle:styles.hidden}>@ {twitterHandle}</Text>
        <TouchableOpacity >
        <Text style={styles.url}  onPress={()=>{Linking.openURL(url)}}>
        {eventCategory=="NEWS"?"Read More":"Open In Twitter"}
        </Text>
        </TouchableOpacity>
        </View>

        </View>
        </View>
        </div>
);

export default CustomRow;

