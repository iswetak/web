import  React  from  'react';
import { Tab, Tabs, TabList,  } from '@feuer/react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import { View,Text, } from 'react-native';
import FlatList from 'flatlist-react';
import BasketElement from './BasketElement';
import { Link  } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "./Basket.css";

export  default class Basket extends  React.Component {
    constructor(props) {
      super(props);
      this.date = props.time;
      this.state = { tabIndex: 0 };
      this.state = {
        loading: false,
        data: [],
        technicalData :[],
        fundamentalData :[],
        marketData :[],
        combinationData :[],
        error: null,
        refreshing: false
      };
    }
  
    componentDidMount = () => {
          this.makeRemoteRequest();
      }
      
      makeRemoteRequest = () => {
        fetch('https://b1ppljae3m.execute-api.ap-south-1.amazonaws.com/lkp/v1/baskets', {
          method: 'GET',
          
              headers: 
              {'x-api-key': 'fyX65yeBWd5RtlunH4ikc7voovP3Nn1Y5iHFx1Gv',
                'Content-Type': 'application/json'}
      })
      .then((response) => response.json())
      .then((responseJson) => {
          let data1 = []
          let data2 = []
          let data3 = []
          let data4 = []
          responseJson.forEach(function(item){
            if(item.basketCategory=="FUNDAMENTAL"){
              
              data2.push(item)
            }
            else if(item.basketCategory=="TECHNICAL"){
            
              data1.push(item)
            }
            else if(item.basketCategory=="MARKET"){
            
              data3.push(item)
            }
            else if(item.basketCategory=="COMBINATION"){
            
              data4.push(item)
            }
          });
          this.setState({fundamentalData:data2,technicalData:data1,marketData:data3,combinationData:data4})
        
        
          console.log(this.state.fundamentalData);
        
      })
      .catch((error) => {
          console.error(error);
      });
      
      }

      renderPerson = (item, key) => {
        console.log("renderPerson")
        return (
          <BasketElement
                basketImageURL={item.basketImageURL}
                title={item.basketName}
                basketID = {item.basketID}
            />
        );
      }

      render() {
        return (
          <div>
          <div className="basket-header">
         <img src={require('./basket-removebg-preview (1).png')} class="basketicon-image" ></img>
          <p className="baskettitle-container" >Stock Screeners</p>
              </div>
              <div className="basketmain-container">
          <Tabs  className="tabs" tabsProps={{
          style: {
            //  display:"flex",
            textAlign: "left",
            justifySelf:4,
            color:"black",
          }
        }}
        activeTab={{
          id: "tab1",
        
        }}> 
          {/* <TabList style={{}}> */}
            {/* <Tab>Fundamental</Tab>
            <Tab  >Technical</Tab>
            <Tab >Market</Tab>
            <Tab >Combination</Tab> */}
          {/* </TabList> */}

        <div>
          <Tabs.Tab id="tab1" className="tabs" title="Fundamental">
          <FlatList
          list = {this.state.fundamentalData}    
          renderItem={this.renderPerson}
          display={{
            grid: 2,
            minColumnWidth: "100px",
            gridGap: "10px"
          }} 

        />  
          
        </Tabs.Tab>


        <Tabs.Tab id="tab2" title="Technical">
        <FlatList
          onScrollEndDrag={() =>  this.makeRemoteRequest() }
          list = {this.state.technicalData}  
          renderItem={this.renderPerson}
          display={{
            grid: 2,
            minColumnWidth: "100px",
            gridGap: "10px"
          }} 
          /> 
          </Tabs.Tab>
          
          <Tabs.Tab id="tab3"    title="Market">
          <FlatList
          onScrollEndDrag={() =>  this.makeRemoteRequest() }
          list = {this.state.marketData}
            renderItem={this.renderPerson}
            display={{
              grid: 2,
              minColumnWidth: "100px",
              gridGap: "10px"
            }}            
               
          /> 
        </Tabs.Tab>

          <Tabs.Tab id="tab4"  title="Combination">
          <FlatList
          onScrollEndDrag={() =>  this.makeRemoteRequest() }
          list = {this.state.combinationData}
          renderItem={this.renderPerson}
          display={{
            grid: 2,
            minColumnWidth: "100px",
            gridGap: "10px"
          }} 
                   
        /> 
        </Tabs.Tab>
        </div>
        </Tabs>
        </div>
        </div>

   );
  }
}