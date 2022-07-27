import React from 'react'
import { AppProps } from 'next/app'
import ThemeContainer from '../contexts/theme/ThemeContainer'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '../../config/createEmotionCache'
import Head from 'next/head'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeContainer>
        <Component {...pageProps} />
      </ThemeContainer>
    </CacheProvider>
  )
}

export default MyApp
