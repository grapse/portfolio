import styles from '../styles/Home.module.css'
import React from 'react'
import {Image, ImageFit } from '@fluentui/react';
const CustomImage = ({...props}) => {
    return <Image {...props} imageFit={ImageFit.contain}/>
}

function ExpressionSheet({imgdata,thumbs,bonus}){
    const [curImag, setCurImag] = React.useState(0);
    return (     
    <div className={styles.portraitGallery}> 
        <div className={styles.galleryHolder}>
            {imgdata.map((v,i) => {
                return(
                    <>
                    <div style={{display: (i == curImag) ? "block" : "none"}} key={v+i} >
                        <img style={{width:"100%"}} src={imgdata[curImag]}/>
                    </div>
                    </>
                    
                )
            })}
            
        </div>
        <div class={styles.portraitGalleryAlignExp}>
            <div className={styles.portraitGalleryThumbsExp}>
            {thumbs.map((v,i) => {
                return( 
                    <div key={i} onClick={() => setCurImag(i)}>
                        <CustomImage className={styles.portraitThumb + ' ' + (curImag == i ? styles.portraitThumbSelected : '')} width={54} height={40} src={v} />
                    </div>
                    )
            })}
            </div>
        </div>
        <div class={styles.portraitText}>
            {bonus}
        </div>
    </div>)
    ;
}


export default ExpressionSheet;