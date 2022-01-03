import React from 'react'
import Head from 'next/head'

const DefaultHead = ({title,description,image}) => {
    return (
        <Head>
            <title>grapeDraws</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap" rel="stylesheet"></link>
        </Head>
      )
    ;
}


export default DefaultHead;