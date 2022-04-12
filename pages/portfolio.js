import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar'
import DefaultHead from '../components/customheader'
import ArtGallery from '../components/artgallery'
import PortraitGallery from '../components/portraitgallery'
import React from 'react'
const basicImages = ['kawanakajima','ayaka','ayato','hatsumode',
                     'beidou','commission2','eula','teahouse','semiramis',
                     'crane','cryo','dantes',
                     'guda6','kagetora','mountain','amakusa',
                     'kazuha','kokomi','magia','minaka',
                     'okita','p','comm','bbq',
                     ].map(v => `/images/gallery/${v}.png`);
const portraits = ['nobunaga','motonari','kagetora','hideyoshi','ryuu','naomi','aderes','shin','terpischore',
                   'vindamia','shouko','shingen','mitsunari','ieyasu','naomasa',
                   'clisson','kanetsugu','comm_ffxiv','mei',
                   'kama','kagami','gladiator','librarian','producer2','penth2','okitan',
                  'kameju','kirsch','masakado','matabei','merlin','cassandra',
                  'bonnie','commodus','clyde',
                  'mori','raguel','rockefeller','ishaq',
                  'sakuya','shingen_idol','vohu','yamatohime',
                  'hikotsuruhime','curie','aeneas','earhart'
                  ];
const portraitImages = portraits.map(v => `/images/portraits/${v}.png`);
const portraitThumbs = portraits.map(v => `/images/portraits/${v}_thumb.png`);

const displayNames = ["ILLUSTRATIONS","PORTRAITS","OTHER"];
const displayGalleries= [<ArtGallery imgdata={basicImages}/>,
                         <PortraitGallery imgdata={portraitImages} thumbs={portraitThumbs}/>,
                         <></>];

export default function Home() {
  const [display, setDisplay] = React.useState(0);
  const [sidebar, setSidebar] = React.useState(true);

  return (
    <>
    <Sidebar current={"portfolio"} setShow={setSidebar} show={sidebar}/>
    <div style={{"--sidebar":sidebar ? "25vw" : "50px"}} className={styles.content}>
      <DefaultHead/>

      <main>
        <div className={styles.titles}>
          {displayNames.map((v,i) => {
            return <span key={v} onClick={() => setDisplay(i)} className={styles.title + " " + (display == i ? styles.titleEnabled : styles.titleDisabled)}>{v}</span>
          })}
        </div>
        
        {displayGalleries[display]}
      
      </main>

  
    </div>
  </>
  )
}
