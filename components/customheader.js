import React from 'react'
import Head from 'next/head'

const DefaultHead = ({title,description,image}) => {
    return (
        <Head>
            <title>grapeDraws</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
      )
    ;
}


export default DefaultHead;