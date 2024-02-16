import './App.css'
import "bootstrap/dist/css/bootstrap.css";

import AppRoutes from './routes/AppRoutes.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'


function App() {
  return (
    <div className='App'>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App
