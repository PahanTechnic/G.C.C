// App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigationbar from './components/NavigationBar/Navigationbar'
import Home from './Page/Home'
import HistoryOfTheSchool from './Page/HistoryOfTheSchool'
import Founders from './Page/Founders'
import FormerPrincipals from './Page/FormerPrincipals'
import SchoolProfile from './Page/SchoolProfile'
import VisionAndMission from './Page/VisionAndMission'
import SchoolSong from './Page/SchoolSong'
import LogoAndMotto from './Page/LogoAndMotto'
import SchoolFlag from './Page/SchoolFlag'
import SchoolColor from './Page/SchoolColor'
import SchoolUniform from './Page/SchoolUniform'
import HouseSystem from './Page/HouseSystem'
import DisciplinaryRules from './Page/DisciplinaryRules'
 // example extra route

function App() {
  return (
    <div >
      <Navigationbar />
      

      {/* Route-dependent content */}
      <div className="mt-20"> {/* padding/margin to push below NavBar if fixed */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studieses" element={<Home />} />
          <Route path="/about-our-school" element={<Home />} />
          <Route path="/history-of-the-school" element={<HistoryOfTheSchool />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/former-principals" element={<FormerPrincipals />} />
          <Route path="/school-profile" element={<SchoolProfile />} />
          <Route path="vision-and-mission" element={<VisionAndMission />} />
          <Route path='/school-song' element={<SchoolSong />} />
          <Route path='/logo-and-motto' element={<LogoAndMotto />} />
          <Route path='/school-flag' element={<SchoolFlag />} />
          <Route path='/official-school-colors' element={<SchoolColor />} />
          <Route path='/school-uniform' element={<SchoolUniform />} />
          <Route path='/school-quarters' element={<HouseSystem />} />
          <Route path='/school-code-of-conduct' element={<DisciplinaryRules />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
