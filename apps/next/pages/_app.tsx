import 'raf/polyfill'
import 'setimmediate'
import '../global.css'

import { Provider } from 'app/provider'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar';
import WebLayout from "../../../packages/app/layout/web";
import type { SolitoAppProps } from 'solito'
import dynamic from 'next/dynamic'

import { Asset } from 'expo-asset';
import React, { useEffect } from 'react';




function MyApp({ Component, pageProps }: SolitoAppProps) {


  return (
    <>
      <Head>
        <title>UPtv - Watch Uplifting Movies and TV Shows</title>
        <meta name="description" content="UPtv is the television home for uplifting entertainment featuring exclusive premiere movies and beloved hit series." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
        <NextNprogress
          color={'#00ff22'}
          startPosition={0.3}
          stopDelayMs={200}
          height={4}
        />
        <WebLayout>
          <Component {...pageProps} />
        </WebLayout>
      </Provider>
    </>
  )
}

export default dynamic(() => Promise.resolve(MyApp), { ssr: false })


