import styles from '../styles/Home.module.css'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const introMessage = "Hi! I'm a software developer who likes to draw from time to time. You can find samples of my work as well as commission prices here."

function Sidebar({current}){
    return (      
    <div className={styles.sidebar}>
        <br/>
        <div className={styles.profileHolder}>
        <Image
            className={styles.profileImage}
            src="/images/grape.png"
            width={300}
            height={300}
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
        <div className={styles.profileElement + ' ' + (current == 'merch' ? styles.profileLinkCurrent : styles.profileLink)}>
            <Link href="/merch">
                <a>MERCHANDISE</a>
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