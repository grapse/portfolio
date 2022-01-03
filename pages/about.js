import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar'
import DefaultHead from '../components/customheader'
import React from 'react'

const description = "Hi! I'm a software developer who likes to draw sometimes."

const displayGalleries= [<div className={styles.about}>{description}</div>,];

export default function Home() {
  const [display, setDisplay] = React.useState(0);
  return (
    <>
        <Sidebar current={"about"}/>
        <div className={styles.contentComm}>
        <DefaultHead/>
        <main >
            {displayGalleries[display]}
        </main>
        </div>
    </>
  )
}
