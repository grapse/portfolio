import styles from '../styles/Home.module.css'
import React from 'react'
import Link from 'next/link'
import { DefaultButton, Image, ImageFit } from '@fluentui/react';
import { TwitterFollowButton } from 'react-twitter-embed';
const CustomImage = ({...props}) => {
    return <Image {...props} imageFit={ImageFit.contain}/>
}

const introMessage = "Hi! I'm a software developer who likes to draw from time to time. You can find samples of my work as well as commission prices here."

class Sidebar extends React.Component {
  render() {
    return (      
    <div className={styles.sidebar}>
        <br/>
        <div >
        <CustomImage
            className={styles.profileImage}
            src="/images/grape.png"
            alt="grape"
        />
        </div>
        <div className={styles.profileElement + ' ' + styles.profileTitle}>
            grape
        </div>
        <div className={styles.profileElement + ' ' + styles.profileTwitter}>
            <TwitterFollowButton
            screenName={'grape______'}
            placeholder="Loading"
            options={{size:'small', showScreenName:'false'}}
        />
        </div>
        <div className={styles.profileElement + ' ' + styles.profileText}>
            {introMessage}
        </div>
        <div className={styles.profileElement + ' ' + styles.profileLink}>
            <Link href="/">
                <a>Home</a>
            </Link>
        </div>
        <hr className={styles.profileElement}/>
        <div className={styles.profileElement + ' ' + styles.profileLink}>
            <Link href="/portfolio">
                <a>Artwork</a>
            </Link>
        </div>
        <hr className={styles.profileElement}/>
        <div className={styles.profileElement + ' ' + styles.profileLink}>
            <Link href="/commissions">
                <a>Commissions</a>
            </Link>
        </div>
        <hr className={styles.profileElement}/>
        <div className={styles.profileElement + ' ' + styles.profileLink}>
            <Link href="/merchandise">
                <a>Merchandise</a>
            </Link>
        </div>
        
        
        
    </div>)
    ;
  }
}


export default Sidebar;