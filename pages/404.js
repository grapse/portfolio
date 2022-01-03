import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar'
import DefaultHead from '../components/customheader'
import Link from 'next/link'

const errorMessage = "This page doesn't exist!"

export default function Home() {
  return (
    <>
    <Sidebar/>
    <div className={styles.content}>
      <DefaultHead/>

      <main>
        <div className={styles.centerText}>
            <div style={{fontSize:"1.5rem",marginTop:"30vh"}}>404</div>
            <br/>
            <div>{errorMessage}
                
            </div>
            <br/>
            <Link href="/">
                    <a>Home</a>
                </Link>
        </div>

      
      </main>

  
    </div>
  </>
  )
}
