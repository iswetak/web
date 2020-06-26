import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import FlatList from 'flatlist-react';
import NewsElement from './NewsElement';
import { Link  } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import  styles from "./News.module.css";

export default class FlatListBasics extends Component {
      constructor(props) {
        super(props);
        // this.date = props.time;
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
        var url= `https://b1ppljae3m.execute-api.ap-south-1.amazonaws.com/lkp/v1/feed`;
        if(startId){
        url = `https://b1ppljae3m.execute-api.ap-south-1.amazonaws.com/lkp/v1/feed?startId=${startId}`;
        }
        this.setState(
          { loading: true, 
        });
        fetch(url, 
        
        {
          method: 'GET',
            // withCredentials: true,
            // credentials: 'include', 
            headers: 
            {'x-api-key': 'fyX65yeBWd5RtlunH4ikc7voovP3Nn1Y5iHFx1Gv',
              'Content-Type': 'application/json'}
        })
          .then(
            res => res.json())
          .then(res => {

            
            this.setState({
              data: startId === null ? res : [...this.state.data, ...res],
              loading: this.state.data.length<1000,
              loadingMore: false,
              refreshing: false,
              error: res.error || null,
            });
            this.state.startId=res[res.length-1].eventID
          })
          .catch(error => {
            //console.log("error",res);
            this.setState({ error, loading: false });
          });
      };

      _handleRefresh = () => {
        this.setState(
          {
            // page: 1,
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
            page: nextProps.page + 1,

            loadingMore: true
          }),
          () => {
            this.makeRemoteRequest();
          }
        );
      };

      renderPerson = (item, key) => {
        return (
          <NewsElement
                      sourceURL={item.sourceURL}
                      eventCategory ={item.eventCategory}
                        publishedAt={item.publishedAt}
                        avatarURL={item.avatarURL}
                        source={item.source}
                        urlToImage={item.urlToImage}
                        title={item.title}
                        subtitle1={item.description }
                        twitterHandle={item.twitterHandle}
                        twitterurl={item.url}           
              />   
        );
      }
      

      render() {
        return (
          <div>
          <div className={styles.Newsmaincontainer} >
          <img src='https://icons-for-free.com/iconfiles/png/512/morning+news+newspaper+icon-1320136429130706490.png' className={styles.headerimg}></img>
          <p className={styles.headertitle}>News Flash</p>
          </div>

            <FlatList
               loadMoreItems={this._handleLoadMore}
               list={this.state.data}
              renderItem={this.renderPerson}
              hasMoreItems={this.state.loading}  

            />


          </div>
    );
  }
}

