import { Routes, Route } from 'react-router-dom'

import HomePage from './../pages_/HomePage/HomePage.jsx'
import CityPage from './../pages_/CityPage/CityPage.jsx'
import AllCitiesPage from './../pages_/AllCitiesPage/AllCitiesPage.jsx'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/cities/:cityId" element={<CityPage />} />
            <Route path='/cities' element={<AllCitiesPage />} />
            <Route path='/' element={<HomePage />} />
        </Routes>
    )
}

export default AppRoutes