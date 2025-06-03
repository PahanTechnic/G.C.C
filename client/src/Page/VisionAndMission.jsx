import React from 'react'
import BackToTopButton from '../Components/BackToTopButton/BackToTopButton'
import SidebarBannerSlider from '../Components/Sidebar/SidebarBannerSlider'
import Footer from '../Components/Footer/Footer'
import VisionMission from '../Components/Vision_Mission/Vision_Mission'

const VisionAndMission = () => {
  return (
    <div>
      <BackToTopButton />
      <SidebarBannerSlider />
      <VisionMission />
      <Footer />
    </div>
  )
}

export default VisionAndMission
