import React, { Component } from 'react'
import FlatList from 'flatlist-react';
import PulseElement from './PulseElement';
import { Link  } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import index from './index';
import "./Pulse.css";
// import "./Mainstyle.css";


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
        console.log("Component mounted")
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

            console.log("APi response recieved")
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
        console.log("Loa dmore called")
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

      renderPerson = (item, key) => {
        return (
          <PulseElement
                    title={item.symbol}
                    subtitle1={item.eventDescription}
                    subtitle2={item.modelClose} 
                    subtitle3={item.eventTimestamp}
           />
        );
      }

      render() {
      return (
        <div>
        <div  className="header-container">
          {/* <div className="icon">
        <Link to='/'><ArrowBackIosIcon className="icon" ></ArrowBackIosIcon></Link>
        </div> */}
        <img src='https://www.adroitlogic.com/static/assets/images/icons/as2station-monitoring.png' class="icon-image" ></img>
          <p className="header">Market Vibes</p>
              </div>
        <FlatList
          loadMoreItems={this._handleLoadMore}
          list={this.state.data}
          // renderWhenEmpty={() => <div>List is empty!</div>}
          renderItem={this.renderPerson}
          hasMoreItems={this.state.loading}  
                    //  keyExtractor={item => item.eventID}
        /> 
      
      </div>

  );
 }
}


