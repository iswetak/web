import React, {Component} from 'react';
import { StyleSheet,  Text, View, Image} from 'react-native';
import { FlatList } from 'react-native';
import { Link  } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import BasketDetailElement from './BasketDetailElement';
import "./Basketdetail.css";


export default class Combinations1 extends Component {
  constructor(props) {
    super(props);
    this.date = props.time;
    this.state = {
      loading: false,
      data: [],
      
      basketName:String,
      basketDescription: String,
      basketImageURL: String,
      error: null,
      refreshing: false
    };
  }

      componentDidMount(){ 
        this.makeRemoteRequest();
      }  

      makeRemoteRequest = () => {
        console.log(this.props)
      let url = 'https://b1ppljae3m.execute-api.ap-south-1.amazonaws.com/lkp/v1/baskets?basketID='+this.props.location.state.basketID;
      console.log(url)
        fetch(url, {
          method: 'GET',
          // withCredentials: true,
          // credentials: 'include', 
          headers: 
          {'x-api-key': 'fyX65yeBWd5RtlunH4ikc7voovP3Nn1Y5iHFx1Gv',
            'Content-Type': 'application/json'}
      })
      .then((response) => response.json())
      .then((responseJson) => {
      
        console.log(responseJson)
        let item = responseJson[0];
        let listObject =  item.items;
      let itemArray = []
        for(var j in listObject){
        var sub_val = listObject[j];
          console.log(sub_val);
          itemArray.push(sub_val)
      }
          this.setState({
            data: itemArray,
            basketName : item.basketName,
            basketDescription : item.basketDescription,
            passportPhoto: {uri: item.basketImageURL, isStatic: true}
          
          })
              
      })
      .catch((error) => {
          console.error(error);
      });
      };

   
    render() {
        return (

          <View style={styles.container}>
        <div class="mm">      	
        <Link to='/Basket'><ArrowBackIosIcon style={{ marginTop: 9, color:'#2196F3', marginLeft: 10}}></ArrowBackIosIcon></Link>
              <p style={{ backgroundColor: 'light', marginLeft: 40, fontSize: 23,marginBottom:'2.5%', marginTop: -28}}>
           {this.state.basketName}</p>
            </div>
          <div className="vv">
            <div className="vmcc">
            <View>
            <Image source={this.state.passportPhoto} style={{width: 65, height: 70, marginTop: -10, marginLeft: 10}} />
            </View>
            <div className="to">
            <p class="tto" style={{}}>{this.state.basketDescription}</p>
            </div>
            </div>
            </div>
            
            <FlatList
            onScrollEndDrag={() =>  this.makeRemoteRequest() }
            data={this.state.data}    
            renderItem={({item}) => (  
              <BasketDetailElement
                  symbol={item.symbol}
                  eventDescription={item.eventDescription}
                  entryMillis={item.entryMillis}
                  entryPrice={item.entryPrice}
                  diff={item.lastTradedPrice-item.entryPrice}
            />
            
          )}
            />
          
          </View>
          
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
     paddingTop: 20,
     paddingBottom: 210  

  },
 
 
});

