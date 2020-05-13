import  React  from  'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { View,Text,FlatList } from 'react-native';
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
      render() {
        return (
          <Tabs >     

          <div className="ss">
          <div className="nn" ><br/>
            <div className="ic">
        <Link to='/' className="ic"><ArrowBackIosIcon ></ArrowBackIosIcon></Link>
        </div>
        <img src={require('./basket-removebg-preview (1).png')} class="ii" ></img>
          <p className="tt" >
              &nbsp;&nbsp;Basket</p>
              </div>
          {/* <View style={{ backgroundColor: '#66B2FF', marginLeft: -2,marginTop:-20, width:510, height:70  }}>
            <Text style={{fontWeight:'bold',fontSize:30, marginTop: 14 }}> &nbsp;&nbsp;Baskets<hr style={{marginLeft: -0, marginRight: 0, marginTop: 20}}/></Text>
            </View> */}
          <TabList style={{ width:  510, height:  33, marginLeft: -2.5, marginTop: -1, }}>
            <Tab  style={{ textAlign: 'center', color: '#622ECA',fontWeight: 'bold' }}>Fundamental</Tab>
            <Tab style={{ width:  100,  textAlign: 'center', color: '#622ECA',fontWeight: 'bold'  }}>Technical</Tab>
            <Tab style={{ width:  100,  textAlign: 'center',color: '#622ECA',fontWeight: 'bold' }}>Market</Tab>
            <Tab style={{ width:  100,  textAlign: 'center',color: '#622ECA',fontWeight: 'bold' }}>Combination</Tab>
          </TabList>

        <View style={{}}>
          <TabPanel>
          <FlatList
          data = {this.state.fundamentalData}    
          onScrollEndDrag={() =>  this.makeRemoteRequest() }
            renderItem={({item}) => (
            <BasketElement
                basketImageURL={item.basketImageURL}
                title={item.basketName}
                basketID = {item.basketID}
            />

            )}            
              numColumns={2}
        />  
          
        </TabPanel>


        <TabPanel>
        <FlatList
          onScrollEndDrag={() =>  this.makeRemoteRequest() }
          data = {this.state.technicalData}  
            renderItem={({item}) => (
            <BasketElement
                basketImageURL={item.basketImageURL}
                title={item.basketName}
                basketID = {item.basketID}
            />
            )}            
              numColumns={2}
          /> 
          </TabPanel>
          
          <TabPanel>
          <FlatList
          onScrollEndDrag={() =>  this.makeRemoteRequest() }
            data = {this.state.marketData}
            renderItem={({item}) => (
            <BasketElement
                basketImageURL={item.basketImageURL}
                title={item.basketName}
                basketID = {item.basketID}
          />
            )}            
                numColumns={2}
          /> 
        </TabPanel>

          <TabPanel>
          <FlatList
          onScrollEndDrag={() =>  this.makeRemoteRequest() }
          data = {this.state.combinationData}
            renderItem={({item}) => (
            <BasketElement
                basketImageURL={item.basketImageURL}
                title={item.basketName}
                basketID = {item.basketID}
          />
        )}            
            numColumns={2}
        /> 
        </TabPanel>
        </View>
        </div>
        </Tabs>
   );
  }}