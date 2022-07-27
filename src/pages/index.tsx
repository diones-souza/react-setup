import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '@mui/material/Button'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <h1>Welcome to Next.js!</h1>
        <Button variant="contained"> Olá Mundo</Button>
      </main>
    </div>
  )
}

export default Home
