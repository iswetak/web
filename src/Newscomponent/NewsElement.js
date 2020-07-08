import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import moment from 'moment';
import CSSModules from 'react-css-modules';
import  styles from "./News.module.css";

const CustomRow = ({ eventCategory,title,subtitle1, urlToImage, avatarURL, publishedAt, source, twitterHandle, twitterurl,url, subtitle3,sourceURL}) => (
        <div className={styles.news_main_container} >
               
                <div className={styles.top_header}>
                <div className={styles.info_avatar}>
                <img  className={styles.avatar} src={url= eventCategory=="NEWS"?"https://s3.ap-south-1.amazonaws.com/public.sicrobo/news-logos/"+source+".jpg"  :avatarURL} />        
                <p className={styles.source}>{source}</p> 
                </div>
 
                <p  class={styles.publishedAt}>
                { moment(publishedAt || moment.now()).format("hh:mm a")}           
                </p>                       
                </div>


                <div className={styles.description}>
                <div className={eventCategory!="NEWS"?styles.twitterHandlei : styles.hidden} >
                <img style={{height:30, width:40}} src ={url= "https://s3.ap-south-1.amazonaws.com/public.sicrobo/news-logos/"+source+".jpg" } />
                </div> 
                <div className={styles.rightcontainer}>
                <div className={styles.mainimgheader}>
                <img  src={urlToImage} className={urlToImage!=null?styles.stretch : styles.hidden} />
                </div>

                <div className={styles.containertext}>
                <p className={styles.title} style={{color:'#006EA6'}}>
                {title}
                </p>
                <p className={styles.subtitle}>
                {subtitle1 }
                </p>
                </div>
                </div>
                </div>

                <div className={styles.footer}>
                <p className={twitterHandle!=null?styles.twitterHandle : styles.hidden}>@ {twitterHandle}</p>
                <p className={styles.url}>
                <a className={styles.link} target="_blank" href={twitterurl}>{eventCategory=="NEWS"?"Read More":"Open In Twitter"}</a>
                </p>
                </div>
        </div>
)       
export default CustomRow;

