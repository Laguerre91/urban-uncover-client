import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import HomePage from './pages_/HomePage/HomePage.jsx'
import CityDetails from './pages_/CityDetails/CityDetails.jsx'
import Footer from './components/Footer/Footer.jsx'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/cities/:cityId' element={<CityDetails />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
