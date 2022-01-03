import styles from '../styles/Home.module.css'
import { FunctionComponent } from 'react';
import {Image, ImageFit} from '@fluentui/react'
import React from 'react';
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';

const CustomImage = ({...props}) => {
    return <Image {...props} imageFit={ImageFit.cover}/>
}
const delay = 5500;

function HomeGallery({imgdata}){
    //num is the current gallery component zoomed in on
    //curExp is for the current expression
    const [num, setNum] = React.useState(0);
    const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    
    timeoutRef.current = setTimeout(
      () =>
        setNum((prevIndex) =>{
            const newIndex = Math.floor(Math.random() * (imgdata.length - 1));
            return newIndex >= prevIndex ? newIndex + 1 : newIndex;
        }
            
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [num]);
    return(
        <div className={styles.contentBg}>
            <div className={styles.dotHolder}>
                <div className={styles.galleryDots}>
                    {imgdata.map((v,i) => {
                        return (
                            <div
                                key={i}
                                className={styles.slideshowDot + ` ${num === i ? styles.active : ""}`}
                                onClick={() => setNum(i)}
                            ></div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.homeTwitterTimeline}>
                <TwitterFollowButton
                    screenName={'grape______'}
                    placeholder="Loading"
                    options={{size:'small'}}
                />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="grape______"
                    options={{height: 250}}
                />
            </div>
            <div className={styles.homeGradient}></div>
            <div>
                {imgdata.map((v,i) => {
                    return (
                        <div key={i+'imghold'}
                            style={{display: num == i ? "block" : "none"}}>
                            <div >
                                <CustomImage className={styles.contentImg} 
                                    src={v}
                                    key={i+'img'}
                                    />
                            </div>
                        </div>    
                    ); 
                
                })
                }
            </div>
            
            
    </div>
    )
    

}

export default HomeGallery;