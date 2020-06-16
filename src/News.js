import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import NewsElement from './NewsElement';
import { Link  } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "./News.css";

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
              loading: false,
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

    //   windowon.scroll = function(ev)  {
    //     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    //         alert("you're at the bottom of the page");
    //     }
    // };

      

      render() {
        return (
          <View style={styles.container}><br/>
            <div className="main1" >
          <div className="icc">
        <Link to='/'><ArrowBackIosIcon className="icc"></ArrowBackIosIcon></Link>
        </div>
        <img src='https://icons-for-free.com/iconfiles/png/512/morning+news+newspaper+icon-1320136429130706490.png' class="imm"></img>
          <p className="too">
              &nbsp;&nbsp;News Flash</p>
              </div>
            {/* <Text style={{ backgroundColor: '#66B2FF', position: "sticky",marginLeft:'31%',justifyContent: "center", fontSize: 30, fontWeight:'bold', paddingVertical:14, width:510, borderLeftWidth:1,borderTopWidth:1,borderBottomWidth:1,borderRightWidth:1 ,borderColor: '#DCDCDC', }}>
            &nbsp;&nbsp;News</Text> */}
            

            <FlatList
              onScrollEndDrag={() =>  this.makeRemoteRequest() }
              data={this.state.data}
              renderItem={({item}) => (
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
                       url={item.url}           
              />    
          )}
                      ItemSeparatorComponent={this.renderSeparator}         
                      onRefresh={this._handleRefresh}
                      refreshing={this.state.refreshing} 
                      onEndReached={this._handleLoadMore}
            />


          </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      overflow: 'scrollbar',
      backgroundColor: '#FFFFFF',
    },
    // item: {
    //   padding: 10,
    //   fontSize: 18,
    //   height: 44,
    // },
})
