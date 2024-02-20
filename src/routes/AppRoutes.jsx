import { Routes, Route } from 'react-router-dom'

import HomePage from './../pages/HomePage/HomePage.jsx'
import CityPage from './../pages/CityPage/CityPage.jsx'
import AllCitiesPage from './../pages/AllCitiesPage/AllCitiesPage.jsx'
import ActivityDetailsPage from './../pages/ActivityDetailsPage/ActivityDetailsPage.jsx'
import AboutPage from '../pages/AboutPage/AboutPage.jsx'
import ErrorPage from '../pages/ErrorPage/ErrorPage.jsx'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cities/:cityId/:activityId" element={<ActivityDetailsPage />} />
            <Route path="/cities/:cityId" element={<CityPage />} />
            <Route path='/cities' element={<AllCitiesPage />} />
            <Route path='/errorPage' element={<ErrorPage />} />

        </Routes>
    )
}

export default AppRoutes