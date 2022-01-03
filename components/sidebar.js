import styles from '../styles/Home.module.css'
import React from 'react'
import Link from 'next/link'
import { Image, ImageFit } from '@fluentui/react';
const CustomImage = ({...props}) => {
    return <Image {...props} imageFit={ImageFit.contain}/>
}

const introMessage = "Hi! I'm a software developer who likes to draw from time to time. You can find samples of my work as well as commission prices here."

function Sidebar({current}){
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
            
        </div>
        <div className={styles.profileElement + ' ' + styles.profileText}>
            {""}
        </div>
        <br/>
        <div className={styles.profileElement + ' ' + (current == 'home' ? styles.profileLinkCurrent : styles.profileLink)}>
            <Link href="/">
                <a>HOME</a>
            </Link>
        </div>
        <hr className={styles.profileElement}/>
        <div className={styles.profileElement + ' ' + (current == 'portfolio' ? styles.profileLinkCurrent : styles.profileLink)}>
            <Link href="/portfolio">
                <a>ARTWORK</a>
            </Link>
        </div>
        <hr className={styles.profileElement}/>
        <div className={styles.profileElement + ' ' + (current == 'commissions' ? styles.profileLinkCurrent : styles.profileLink)}>
            <Link href="/commissions">
                <a>COMMISSIONS</a>
            </Link>
        </div>
        <hr className={styles.profileElement}/>
        <div className={styles.profileElement + ' ' + (current == 'about' ? styles.profileLinkCurrent : styles.profileLink)}>
            <Link href="/about">
                <a>ABOUT</a>
            </Link>
        </div>
        
        
        
    </div>)
    ;
}


export default Sidebar;