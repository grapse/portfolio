import styles from '../styles/Home.module.css'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "bootstrap-icons/font/bootstrap-icons.css";

function Sidebar({current, show, setShow}){

    return (   
        <>
    <div style={{"--marginleft":show ? 0 : "-100%"}} className={styles.sidebar}>
        <div className={styles.svgHolder} onClick={() => setShow(!show)}>
            <svg height="100%" viewBox="0 0 100 100" className={styles.closeButton}>
                <line x1="0" y1="0" x2="100" y2="100" />
                <line x1="100" y1="0" x2="0" y2="100" />
            </svg>
        </div>
        <img
            className={styles.profileImage}
            src="/images/grape.png"
            alt="grape"
        />
        <div className={styles.profileElement + ' ' + styles.profileText}>
            {""}
        </div>
        <div className={styles.profileElement + ' ' + styles.iconHolder}>
            <a className={`${styles.iconholderitem} bi bi-cart`} href={"https://www.etsy.com/ca/shop/grapeDraws"} target="_blank" rel="noopener noreferrer"></a>
            <a className={`${styles.iconholderitem} bi bi-twitter`} href={"https://twitter.com/grape______"} target="_blank" rel="noopener noreferrer"></a>
            <a className={`${styles.iconholderitem} bi bi-envelope-fill`} href="mailto:grape0art@gmail.com"></a>
        </div>
        <div className={styles.profileElement + ' ' + (current == 'home' ? styles.profileLinkCurrent : styles.profileLink)}>
            <Link href="/">
                <a>HOME</a>
            </Link>
        </div>
        <div className={styles.profileElement + ' ' + (current == 'portfolio' ? styles.profileLinkCurrent : styles.profileLink)}>
            <Link href="/portfolio">
                <a>ARTWORK</a>
            </Link>
        </div>
        <div className={styles.profileElement + ' ' + (current == 'commissions' ? styles.profileLinkCurrent : styles.profileLink)}>
            <Link href="/commissions">
                <a>COMMISSIONS</a>
            </Link>
        </div>
        <div className={styles.profileElement + ' ' + (current == 'merch' ? styles.profileLinkCurrent : styles.profileLink)}>
            <Link href="/merch">
                <a>MERCHANDISE</a>
            </Link>
        </div>
        <div className={styles.profileElement + ' ' + (current == 'about' ? styles.profileLinkCurrent : styles.profileLink)}>
            <Link href="/about">
                <a>ABOUT</a>
            </Link>
        </div>
    </div>
    <div className={`${styles.iconHolder} ${styles.iconHoldercol}`}>
        <div style={{ "--offset": show ? "-300%" : 0}} className={styles.svgHolder2 + " " + styles.iconitem} onClick={() => setShow(!show)}>
            <svg height="100%" viewBox="0 0 100 100" className={styles.openButton}>
                <line x1="0" y1="25" x2="100" y2="25" />
                <line x1="0" y1="50" x2="100" y2="50" />
                <line x1="0" y1="75" x2="100" y2="75" />
            </svg>
        </div>
        <a style={{ "--offset": show ? "-400%" : 0}} className={`${styles.iconitem} bi bi-cart`} href={"https://www.etsy.com/ca/shop/grapeDraws"} target="_blank" rel="noopener noreferrer"></a>
        <a style={{ "--offset": show ? "-500%" : 0}} className={`${styles.iconitem} bi bi-twitter`} href={"https://twitter.com/grape______"} target="_blank" rel="noopener noreferrer"></a>
        <a style={{ "--offset": show ? "-600%" : 0}} className={`${styles.iconitem} bi bi-envelope-fill`} href="mailto:grape0art@gmail.com"></a>
    </div>
    </>
    );
}


export default Sidebar;