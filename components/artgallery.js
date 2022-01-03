import styles from '../styles/Home.module.css'
import React from 'react'
import Link from 'next/link'
import { Modal, Image, ImageFit } from '@fluentui/react';
const CustomImage = ({...props}) => {
    return <Image {...props} imageFit={ImageFit.contain}/>
}

function ArtGallery({imgdata}){
    const [curImage, setCurImage] = React.useState(-1);
    return (     
    <> 
    <div className={styles.artGallery}>
        {imgdata.map((v,i) => {
            return( 
                <div key={i} className={styles.artGalleryItem} onClick={() => setCurImage(i)}>
                    <CustomImage src={v} height={200}/>
                </div>
                  )
        })}
    </div>
    <Modal
        isOpen={curImage >= 0}
        onDismiss={() => setCurImage(-1)}
        isBlocking={false}
        allowTouchBodyScroll={true}

    >   
        <div class={styles.imgFit}>
            <Image src={curImage >= 0 ? imgdata[curImage] : ''} alt={"Expanded Image"} height={"95vh"}/>
        </div>
    </Modal>
    </>)
    ;
}


export default ArtGallery;