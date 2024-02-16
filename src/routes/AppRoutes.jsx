import { Routes, Route } from 'react-router-dom'

import HomePage from './../pages_/HomePage/HomePage.jsx'
import CityDetails from './../pages_/CityDetails/CityDetails.jsx'
import CitiesList from './../pages_/CitiesList/CitiesList.jsx'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/cities/:cityId' element={<CityDetails />} />
            <Route path='/cities' element={<CitiesList />} />
            <Route path='/' element={<HomePage />} />
        </Routes>
    )
}

export default AppRoutes