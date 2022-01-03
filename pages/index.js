import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar'
import DefaultHead from '../components/customheader'
import {Image, ImageFit} from '@fluentui/react/lib-commonjs'
import HomeGallery from '../components/homegallery'

const backgroundImages = ['eee.webp', 'cryo.png', 'bbq.png', 'bg.webp', 'guda6.png','p.png'].map((v) => `/images/home/${v}`);
// /images/home/${}.webp


export default function Home() {
  return (
    <>
    <Sidebar current={"home"}/>
    <div>
      <DefaultHead/>
      <HomeGallery imgdata={backgroundImages}/>
      <main>

      </main>

  
    </div>
  </>
  )
}
