import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar'
import DefaultHead from '../components/customheader'

export default function Home() {
  return (
    <>
    <Sidebar/>
    <div className={styles.content}>
      <DefaultHead/>

      <main>
        <h1 className="title">
          Artwork
        </h1>

      
      </main>

  
    </div>
  </>
  )
}
