import React from 'react';
import moment from 'moment';
import CSSModules from 'react-css-modules';
import  styles from "./News.module.css";

const CustomRow = ({ eventCategory,title,subtitle1, urlToImage, avatarURL, publishedAt, source, twitterHandle, twitterurl,url, subtitle3,sourceURL}) => (
        <div className={styles.news_main_container}>
                <div className={styles.news_container}>
                <div className={styles.avatar_container}>
                <img className={styles.avatar} src={url= eventCategory=="NEWS"?"https://s3.ap-south-1.amazonaws.com/public.sicrobo/news-logos/"+source+".jpg"  :avatarURL} />        
                <div className={eventCategory!="NEWS"?styles.info_twitterHandle : styles.hidden} >
                <img className={styles.twitter} src ={url= "https://s3.ap-south-1.amazonaws.com/public.sicrobo/news-logos/"+source+".jpg" } />
                </div>
                </div>
                
                <div className={styles.news_description}>
                <div className={styles.top_header_info}>
                <p className={styles.source}>{source}</p>
                <p class={styles.publishedAt}>{moment(publishedAt || moment.now()).format("hh:mm a")}</p>                        
                </div>

                {/* -----------------------news-header-img--------------------- */}
                
                <div className={styles.header_image}>
                <img src={urlToImage} className={urlToImage!=null?styles.image_stretch : styles.hidden} />
                </div>

                <div className={styles.container_text}>
                <h2 className={styles.title_header}>{title}</h2>
                <p className={styles.subtitle}>{subtitle1}</p>
                </div>
               
                <div className={styles.url_container}>
                 <div className={styles.twitterHandle_container}>       
                <p className={twitterHandle!=null?styles.twitterHandleurl : styles.hidden}>@ {twitterHandle}</p>
                </div>
                <div>
                <p className={styles.twitter_url}>
                <a className={styles.link} target="_blank" href={twitterurl}>{eventCategory=="NEWS"?"Read More":"Open In Twitter"}</a>
                </p>
                </div>
                </div>
                </div>

                </div>
               
               
        </div>
)       
export default CustomRow;

