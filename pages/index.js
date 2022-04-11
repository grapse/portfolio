import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar'
import React from 'react';
import DefaultHead from '../components/customheader'
import {Image, ImageFit} from '@fluentui/react/lib-commonjs'
import HomeGallery from '../components/homegallery'

const backgroundImages = ['eee.webp', 'cryo.png', 'hatsumode.webp', 'bg.webp', 'guda6.png','p.png'].map((v) => `/images/home/${v}`);
// /images/home/${}.webp


export default function Home() {
  const [sidebar, setSidebar] = React.useState(true);


  return (
    <>
    <Sidebar current={"home"} setShow={setSidebar} show={sidebar}/>
    <div>
      <DefaultHead/>
      <HomeGallery imgdata={backgroundImages}/>
      <main>

      </main>

  
    </div>
  </>
  )
}
