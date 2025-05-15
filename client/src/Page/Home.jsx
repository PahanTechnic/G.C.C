import React from 'react'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import VisionMission from '../components/Vision_Mission/Vision_Mission'
import Counter from '../components/counter/Counter'
import NewsSection from '../components/NewsSection/NewsSection'
import MapSection from '../components/MapSection/MapSection'
import Footer from '../components/Footer/Footer'
import BackToTopButton from '../components/BackToTopButton/BackToTopButton'

const Home = () => {
  return (
    <div>
      <BackToTopButton />
      <Hero />
      <About />
      <VisionMission />
      <Counter />
      <NewsSection />
      <MapSection />
      <Footer />
    </div>
  )
}

export default Home
