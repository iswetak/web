import  React from  'react';
import { Link  } from 'react-router-dom';
import style from "../App.module.css";
import "./Basket.css";
import Tabs from './Tabs';


export  default class Basket extends  React.Component {
    constructor(props) {
      super(props);
      this.date = props.time;
      this.state = { tabIndex: 0 };
      this.state = {
        loading: false,
        data: [],
        basketID : '',
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
          <div>
             <div className={style.light_gray_background }>
             <div className={style.main_banner}>
             <img src={require('../Images/basket-removebg-preview (1).png')} className={style.banner_logo}></img>
             <h1 className={style.banner_title}>Stock Screeners</h1>
             </div>
             </div>  
               
          <Tabs>
          <div  label="Fundamental">
          <div class="collections">
          {this.state.fundamentalData.map((k) => (
          <div className="collection-item">

          <div className="collection-header">
          <Link to={{
          pathname: '/BasketDetail',
          state: {
          basketID : k.basketID
          } 
          }}><img src={k.basketImageURL} className="img-container" /></Link> 
          <h2 className={style.header_h2_color}>{k.basketName}</h2>
          </div>
          </div>
          ))}

          </div>
          </div>

          <div  label="Techmical">
          <div class="collections">
          {this.state.technicalData.map((k) => (
          <div className="collection-item">
          <div className="collection-header">
          <Link to={{
          pathname: '/BasketDetail',
          state: {
          basketID : k.basketID
          } 
          }}><img src={k.basketImageURL} className="img-container" /></Link> 
          <h2 className={style.header_h2_color}>{k.basketName}</h2>
          </div>
          </div>

          ))} 



          </div>
          </div>

          <div label="Combination">
          <div class="collections">
          {this.state.marketData.map((k) => (
          <div className="collection-item">
          <div className="collection-header">
          <Link to={{
          pathname: '/BasketDetail',
          state: {
          basketID : k.basketID
          } 
          }}><img src={k.basketImageURL} className="img-container" /></Link> 
          <h2 className={style.header_h2_color}>{k.basketName}</h2>
          </div>
          </div>

          ))} 



          </div>
          </div>

          <div label="Market">
          <div class="collections">
          {this.state.combinationData.map((k) => (
          <div className="collection-item">
          <div className="collection-header">
          <Link to={{
          pathname: '/BasketDetail',
          state: {
          basketID : k.basketID
          } 
          }}><img src={k.basketImageURL} className="img-container" /></Link> 
          <h2 className={style.header_h2_color}>{k.basketName}</h2>
          </div>
          </div>

          ))} 



          </div>
          </div>

</Tabs>
</div>

   );
  }
}