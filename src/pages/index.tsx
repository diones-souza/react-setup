import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import authentication from '../assets/images/authentication-animate.svg'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <h1>Welcome to Next.js!</h1>
        <Image src={authentication} />
      </main>
    </div>
  )
}

export default Home
