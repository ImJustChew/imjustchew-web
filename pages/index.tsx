import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const experiences = [
    {
      date: '2022 Jan - Present',
      title: 'Internship',
      company: 'Elliance Systems Sdn Bhd',
      location: 'Penang',
      description: 'Worked for 6 Months, Written a SECS/GEM Host Library using Typescript, Created a web dashboard for Object Detection AI Development. Helped train multiple Malaysian companies on the usage of Object Detection AI.'
    },
    {
      date: '2019 Jan - 2021 Dec',
      title: 'President & Student Advisor',
      company: "Creative Electronics Club",
      location: 'Chung Ling Private High School',
      description: 'Managed a club of 100+ members with 24 committees for 2 Years, Introduced new priorities such as the addition of more club social activties. Reorganized and Improved our Club’s Makerspace'
    }
  ]

  return (
    <Layout title="Home">
      <Head>
        <title>Chew Tzi Hwee</title>
      </Head>
      <section className="w-screen py-28 grid place-items-center">
        <div className='text-left'>
          <h1 className='text-5xl font-bold text-blue-800'>Chew Tzi Hwee</h1>
          <p>@imjustchew</p>
          <ul className='list-none'>
            <li>{"React & NextJS"}</li>
            <li>{"Firebase"}</li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default Home
