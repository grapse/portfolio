import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar'
import DefaultHead from '../components/customheader'

export default function Home() {
  return (
    <>
    <Sidebar current={"merchandise"}/>
    <div className={styles.content}>
      <DefaultHead/>

      <main>
        <h1 className="title">
          Merchandise
        </h1>

      
      </main>

  
    </div>
  </>
  )
}
