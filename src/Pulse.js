// import React from 'react';
import React, { Component } from 'react'
import {Platform, StyleSheet, TouchableOpacity, Button, Text, View, FlatList,ScrollView} from 'react-native';
import PulseElement from './PulseElement';
import { Link  } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import index from './index';
import "./Pulse.css";

// import Scrollbar from "react-scrollbars-custom";
import InfiniteScroll from "react-infinite-scroll-component";

export default class Chat extends Component {
      constructor(props) {
        super(props);
        this.date = props.time;
        this.state = {
          data: [],
          page: 1,
          loading: true,
          loadingMore: false,
          filtering: false,
          refreshing: false,
          startId: null,
          error: null,
        };
      }

      componentDidMount(){ 
        this.makeRemoteRequest();
      }

        

      makeRemoteRequest = () => {
        
        const { startId } = this.state;
        var url= `https://b1ppljae3m.execute-api.ap-south-1.amazonaws.com/lkp/v1/pulse`;
        if(startId){
        
        url = `https://b1ppljae3m.execute-api.ap-south-1.amazonaws.com/lkp/v1/pulse?startId=${startId}`;
        console.log("lodaing:"+url)
        }
        this.setState(
          { loading: true, 
        });
        fetch(url, 
        
        {
          method: 'GET',
           
            headers: 
            {'x-api-key': 'fyX65yeBWd5RtlunH4ikc7voovP3Nn1Y5iHFx1Gv',
              'Content-Type': 'application/json'}
        })
          .then(
            res => res.json())
          .then(res => {

            
            this.setState({
              data: startId === null ? res : [...this.state.data, ...res],
              loading: false,
              loadingMore: false,
              refreshing: false,
              error: res.error || null,
            });
            
            this.state.startId=res[res.length-1].eventID
          })
          .catch(error => {
            //console.log("error",res);
            this.setState({error, loading: false});
          });
      };

      _handleRefresh = () => {
        this.setState(
          {
            refreshing: true
          },
          () => {
            this.makeRemoteRequest();
          }
        );
      };

      _handleLoadMore = () => {
        this.setState(
          (prevState, nextProps) => ({
            page: prevState.page + 1,
            loadingMore: true
          }),
          () => {
            this.makeRemoteRequest();
          }
        );
      };


      render() {
      return (
        <View style={styles.container}><br/>
        <div className="main">
          <div className="icon">
        <Link to='/'><ArrowBackIosIcon className="icon" ></ArrowBackIosIcon></Link>
        </div>
        <img src='https://www.adroitlogic.com/static/assets/images/icons/as2station-monitoring.png' class="img" style={{}}></img>
          <p className="top">
              &nbsp;&nbsp;Pulse</p>
              </div>
        <FlatList
          onScrollEndDrag={() =>  this.makeRemoteRequest() }
          data={this.state.data}
          renderItem={({item}) => (
          <PulseElement
                    title={item.symbol}
                    subtitle1={item.eventDescription}
                    subtitle2={item.modelClose} 
                    subtitle3={item.eventTimestamp}
           />
           )}
                    onRefresh={this._handleRefresh}
                    refreshing={this.state.refreshing} 
                    onEndReached={this._handleLoadMore}
                    //  keyExtractor={item => item.eventID}
        /> 
      
      </View>

  );
 }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#FFFFFF',
  },

  
});


