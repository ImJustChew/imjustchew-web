import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const experiences = [
    
  ]

  return (
    <Layout title="Home">
      <Head>
        <title>Chew Tzi Hwee</title>
      </Head>
      <h1>Chew Tzi Hwee</h1>
      <p>@imjustchew</p>
      <ul className='list-none'>
        <li>{"React & NextJS"}</li>
      </ul>
    </Layout>
  )
}

export default Home
