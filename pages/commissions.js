import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar'
import DefaultHead from '../components/customheader'
import React from 'react'
import Link from 'next/link'
import { Image, ImageFit } from '@fluentui/react';
import ExpressionSheet from '../components/expressionsheet'

const displayNames = ["PRICES","TERMS","STATUS"];

const portraits = ['cbase','c1','c2','c3','c4'];
const portraitImages = portraits.map(v => `/images/${v}.png`);
const portraitThumbs = portraits.map(v => `/images/${v}_thumb.png`);
const bonus = "Expression Sheet - \n$5 / Expression\n\nCostumes, Poses, Removable Parts - \nDepends on complexity"

const comm3 = "I will complete the commission within an arranged time (~1 month) depending on the complexity of the request"
const status = "Commissions are currently closed, but I may be taking certain requests. Feel free to send any inquiries via email."
const chibi1 = "Chibi Style 1 -\n$100 / Character"
const chibi2 = "Chibi Style 2 -\n$50 / Character"
const final = "Feel free to ask about other styles of commissions, such as backgrounds, manga, or whatever you need!"

const commExtras = "* All prices are in USD\n* These are only base prices, and may go up or down depending on complexity, etc. of the request\n* There will be an additional fee for commercial/exclusive use"

const commissionTerms = <div className={styles.commissionBox + ' ' + styles.commissionBullet}>Terms and Conditions
                          <ul>
                            <li className={styles.commissionBullet}>I reserve the right to reject a commission request for any reason</li>
                            <li className={styles.commissionBullet}>Unless alternative arrangements are made, payment will be made in full after the initial sketch </li>
                            <li className={styles.commissionBullet}>{comm3}</li>
                            <li className={styles.commissionBullet}>There is a fee for major revivions after the initial sketch is approved</li>
                          </ul>
                        </div>
const displayGalleries= [<div className={styles.commissionTerms} >
                          <div className={styles.commissionExtra}>{commExtras}</div>
                          <CommSheet/>
                          <div className={styles.commLink}>I can work in a variety of styles. Some more samples can be found&nbsp;
                          <Link  href={'/portfolio?tab=1'}><a>here</a></Link>.
                          
                          </div>
                          <div className={styles.chibi}>
                              <div className={styles.chibiCard}>
                                  <div>{chibi1}</div>
                                  <Image imageFit={ImageFit.contain} src={'/images/chibi1.png'}/>
                                  
                              </div>
                              <div className={styles.chibiCard}>
                                <div>{chibi2}</div>
                                  <Image imageFit={ImageFit.contain} src={'/images/chibi2.png'}/>
                                  
                              </div>
                          </div>
                          <div className={styles.commText}>{final}</div>
                        </div>,
                        <div className={styles.commissionTerms}>{commissionTerms}</div>,
                        <div className={styles.commissionTerms}><div className={styles.commissionBoxStatus + ' ' + styles.commissionBullet}>{status}</div></div>];
function CommSheet(){
  const [comm1, setComm1] = React.useState(0);
  const [comm2, setComm2] = React.useState(0);
  return(
    <div className={styles.imageHolder} >
                                <div className={styles.commDisplay2}>
                                    <Image imageFit={ImageFit.contain}  src={'/images/COMM_price.png'}/>
                                </div>
                                <div  className={styles.commDisplay}>
                                    <Image onMouseEnter={() => setComm1(1)} onMouseLeave={() => setComm1(0)} imageFit={ImageFit.contain}  src={'/images/COMM1.png'}/>
                                </div>
                                <div className={comm1 == 1 ? styles.transparentComm : styles.commDisplay}>
                                    <Image onMouseEnter={() => setComm2(1)} onMouseLeave={() => setComm2(0)} imageFit={ImageFit.contain}  src={'/images/COMM2.png'}/>
                                </div>
                                <div className={comm1 + comm2 > 0 ? styles.transparentComm : styles.commDisplay}>
                                    <Image  imageFit={ImageFit.contain}  src={'/images/COMM3.png'}/>
                                </div>
                             </div>
  )
}


export default function Home() {
  const [display, setDisplay] = React.useState(0);
  const [sidebar, setSidebar] = React.useState(true);
  React.useEffect(() => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let currentTab = params.get('tab');
    if(currentTab){
      setDisplay(parseInt(currentTab));
    }
  },[])
  
  return (
    <div className={styles.pageHolder}>
      <Sidebar current={"commissions"} setShow={setSidebar} show={sidebar}/>
      <div style={{"--sidebar":sidebar ? "25vw" : "50px"}} className={styles.contentComm}>
        <DefaultHead/>
        <main >
        <div className={styles.titles}>
            {displayNames.map((v,i) => {
              return <span key={v} onClick={() => setDisplay(i)} className={styles.title + " " + (display == i ? styles.titleEnabled : styles.titleDisabled)}>{v}</span>
            })}
          </div>

          {displayGalleries[display]}
        </main>

  
    </div>
  </div>
  )
}
