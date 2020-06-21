import React, {Component} from 'react';
// import { StyleSheet,  Text, div, Image} from 'react-native';
import FlatList from 'flatlist-react';
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

      renderPerson = (item, key) => {
        return (
          <BasketDetailElement
          symbol={item.symbol}
          eventDescription={item.eventDescription}
          entryMillis={item.entryMillis}
          entryPrice={item.entryPrice}
          diff={item.lastTradedPrice-item.entryPrice}
    />
        );
      }

   
    render() {
        return (

          <div>
        <div className="header-container">      	
        <Link to='/Basket'><ArrowBackIosIcon style={{ marginTop: 9, color:'#2196F3', marginLeft: 10}}></ArrowBackIosIcon></Link>
              <p className="header">
           {this.state.basketName}</p>
            </div>
          <div className="vv">
            <div className="vmcc">
            <div>
            <img src={this.state.passportPhoto} style={{width: 65, height: 70, marginTop: -10, marginLeft: 10}} />
            </div>
            <div className="to">
            <p class="tto" style={{}}>{this.state.basketDescription}</p>
            </div>
            </div>
            </div>
            
            <FlatList
            onScrollEndDrag={() =>  this.makeRemoteRequest() }
            list={this.state.data}  
            renderItem={this.renderPerson}
  
           
            />
          
          </div>
          
    );
  }

}

