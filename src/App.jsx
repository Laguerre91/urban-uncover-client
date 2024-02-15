import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import HomePage from './Pages/HomePage/HomePage.jsx'
import CityCard from './Pages/CityCard/CityCard.jsx'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/cities/:cityId' element={<CityCard />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
