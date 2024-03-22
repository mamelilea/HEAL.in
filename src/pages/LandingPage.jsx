import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import Home from '../components/landingPage/Home'
import About from '../components/landingPage/About'
import Journaling from '../components/landingPage/Journaling'
import Breath from '../components/landingPage/Breath'
import VideoPodcast from '../components/landingPage/VideoPodcast'
import Event from '../components/landingPage/Event'
import Article from '../components/landingPage/Article'
import Testimoni from '../components/landingPage/Testimoni'


const LandingPage = () => {
  return (
    <>
      <div className='flex flex-col items-center w-[97.9vw] ml-1'>
        <Navbar />
        <Home />
        <About id="about" />
        <Journaling />
        <Breath />
        <VideoPodcast />
        <Event />
        <Article />
        <Testimoni />
        <Footer />
      </div>
    </>
  )
}

export default LandingPage
