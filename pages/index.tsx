import type { NextPage } from 'next'
import Head from 'next/head'

import { Landing } from '../components/landing'
import { AboutUs } from '../components/about-us'
import { Skills } from '../components/skills'
import { Projects } from '../components/projects'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>AimanCorp.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      <AboutUs />
      <Skills />
      <Projects />
    </div>
  )
}

export default Home
