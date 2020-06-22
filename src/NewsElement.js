import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import moment from 'moment';
import CSSModules from 'react-css-modules';
import  styles from "./News.module.css";

const CustomRow = ({ eventCategory,title,subtitle1, urlToImage, avatarURL, publishedAt, source, twitterHandle, url, subtitle3,sourceURL}) => (
        <div className={styles.maincontainer} >
                <div className={styles.separator}>
                        <div style={{marginLeft:10, marginRight:10}}>

                        {/* <div className={styles.avatar}> */}
                        <div className={styles.avatard}>
                        <img style={{height:30, width:40}} src={url= eventCategory=="NEWS"?"https://s3.ap-south-1.amazonaws.com/public.sicrobo/news-logos/"+source+".jpg"  :avatarURL} />        
                        </div>

                        <div className={eventCategory!="NEWS"?styles.twitterHandlei : styles.hidden} >
                        <img style={{height:30, width:40}} src ={url= "https://s3.ap-south-1.amazonaws.com/public.sicrobo/news-logos/"+source+".jpg" } />
                        </div>

                        <div className={styles.topheader}> 
                        <p className={styles.source}>
                        {source}
                        </p>  
                        <div style={styles.cardBody}>
                        <p  class={styles.publishedAt}>
                        { moment(publishedAt || moment.now()).format("hh:mm a")}           
                        </p>
                        </div>
                        </div>

 

        <div className={styles.mainimgheader}>
        {/* <img  className={styles.stretch} src={urlToImage}  /> */}
        <img  src={urlToImage} className={urlToImage!=null?styles.stretch : styles.hidden} />
        </div>

        <div className={styles.containertext}>
        <p className={styles.title} style={{color:'#006EA6'}}>
        {title}
        </p>
        <p>
        {subtitle1 }
        </p><br/>
        </div>


        <div>
        <p className={twitterHandle!=null?styles.twitterHandle : styles.hidden}>@ {twitterHandle}</p>
        <p className={styles.url}>
        <a className={styles.link} target="_blank" href={url}>{eventCategory=="NEWS"?"Read More":"Open In Twitter"}</a>
        </p>
        </div>
        </div>
        </div>

        </div>
)       
export default CustomRow;

