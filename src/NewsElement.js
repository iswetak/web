import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import moment from 'moment';
import CSSModules from 'react-css-modules';
import  styles from "./News.css";

const CustomRow = ({ eventCategory,title,subtitle1, urlToImage, avatarURL, publishedAt, source, twitterHandle, url, subtitle3,sourceURL}) => (
        <div className="maincontainer" >
        <div className="separator">
        <div style={{marginLeft:10, marginRight:10}}>

        <div className="top-header"> 
        <p className="source">
        {source}
        </p>
        <p  class="publishedAt">
        { moment(publishedAt || moment.now()).format("hh:mm a")}           
        </p>
        </div>

        <div className="avatar">
        {/* <div className={styles.avatard}> */}
        <img style={{height:30, width:40}}  src={url= eventCategory=="NEWS"?"https://s3.ap-south-1.amazonaws.com/public.sicrobo/news-logos/"+source+".jpg"  :avatarURL} />        
        {/* </div> */}

        <div style={{display: eventCategory!="NEWS"?styles.twitterHandlei : 'none'}} >
        <img style={{height:30, width:40}} src ={url= "https://s3.ap-south-1.amazonaws.com/public.sicrobo/news-logos/"+source+".jpg" } />
        </div>
        </div>

        <div className="main-img-header">
        <img  src={urlToImage}  style={{display: urlToImage!=null?styles.stretch : 'none'}}/>
        </div>
        <div className="container-text">
        <p style={{color:'#006EA6'}}>
        {title}
        </p>
        <p>
        {subtitle1 }
        </p><br/>
        </div>


        <div>
        <p style={{display: twitterHandle!=null?styles.twitterHandle : 'none'}}>@ {twitterHandle}</p>
        <p className="url">
        <a class="link" target="_blank" href={url}>{eventCategory=="NEWS"?"Read More":"Open In Twitter"}</a>
        </p>

        </div>

        </div>

        </div>
        </div>
);

export default CustomRow;

