import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar'
import DefaultHead from '../components/customheader'
import React from 'react'
import Link from 'next/link'
import { Image, ImageFit } from '@fluentui/react';

const description = "I sell a variety of merchandise, mainly acrylic charms, stickers, and prints. \nYou can purchase them on ";
const description2 = " or by emailing me directly. You can also buy them in person when I attend conventions.";

const images = ['detail1','detail2','detail3','detail4','detail5','inazuma','charms','gintama','kaguya','padchibis'];
const merchImages = images.map(v => `/images/merch/${v}.webp`);

const CustomImage = ({...props}) => {
    return <Image {...props} imageFit={ImageFit.contain}/>
}


export default function Home() {
  const [display, setDisplay] = React.useState(0);
  const [sidebar, setSidebar] = React.useState(true);
  
  return (
    <>
    <Sidebar current={"merch"} setShow={setSidebar} show={sidebar}/>
    <div style={{"--sidebar":sidebar ? "25vw" : "50px"}} className={styles.contentComm}>
        <DefaultHead/>
        <main >
        <div className={styles.text}>{description}<a className={styles.customlink} href={"https://www.etsy.com/ca/shop/grapeDraws"} target="_blank" rel="noopener noreferrer">{"Etsy"}</a>{description2}</div>
        <div className={styles.linear}>
            {merchImages.map((v,i) => {
                return(
                    <div key={i} className={styles.imageHolder}>
                        <CustomImage src={v}/>
                    </div>
                    )
            })}
        </div>
      </main>
    </div>
  </>
  )
}
