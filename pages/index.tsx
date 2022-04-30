import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'

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
        <div className='text-left max-w-[500px] py-4 space-y-4'>
          <h1 className='text-5xl font-semibold text-blue-800'>Hello, How's it going?</h1>
          <p>I'm a programmer and electronics engineer since High School. I've worked on various projects and taken on many roles and experiences over the years but I'm still eager to learn new things :)</p>
        </div>
      </section>
    </Layout>
  )
}

export default Home
