import React from 'react'
import Head from 'next/head'

import VibeLogo from '../assets/logo-white.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <VibeLogo />
      <h1>NextJS Structure</h1>
      <p>Uma estrutura em ReactJS + Next.js criada para projetos da Vibe.</p>
    </Container>
  )
}

export default Home
