import './App.css'
import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Madrid from './Pages/Madrid/Madrid.jsx'
import HomePage from './Pages/HomePage/HomePage.jsx'

function App() {
  return (
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/cities/1' element= {<Madrid/>}/>
          <Route path='/' element= {<HomePage/>}/>
        </Routes>
      </div>
  )
}

export default App
