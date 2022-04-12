import styles from '../styles/Home.module.css'
import React from 'react'
import {Image, ImageFit } from '@fluentui/react';
const CustomImage = ({...props}) => {
    return <Image {...props} imageFit={ImageFit.contain}/>
}

function PortraitGallery({imgdata,thumbs}){
    const [curImage, setCurImage] = React.useState(0);
    return (     
    <div className={styles.portraitGallery}> 
        <div className={styles.portraitGalleryFull}>
            <CustomImage height={"95vh"} src={imgdata[curImage]}/>
        </div>
        <div class={styles.portraitGalleryAlign}>
            <div className={styles.portraitGalleryThumbs}>
            {thumbs.map((v,i) => {
                return( 
                    <div key={i} onClick={() => setCurImage(i)} className={styles.portraitThumbs}>
                        <CustomImage className={styles.portraitThumb + ' ' + (curImage == i ? styles.portraitThumbSelected : '')} src={v} />
                    </div>
                    )
            })}
        </div>
        </div>
        
        
    </div>)
    ;
}


export default PortraitGallery;