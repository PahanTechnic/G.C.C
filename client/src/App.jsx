// App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigationbar from './components/NavigationBar/Navigationbar'
import Home from './Page/Home'
import HistoryOfTheSchool from './Page/HistoryOfTheSchool'
import Founders from './Page/Founders'
import FormerPrincipals from './Page/FormerPrincipals'
import SchoolProfile from './Page/SchoolProfile'
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
        </Routes>
      </div>

    </div>
  )
}

export default App
