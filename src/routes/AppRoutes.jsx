import { Routes, Route } from 'react-router-dom'

import HomePage from './../pages/HomePage/HomePage.jsx'
import CityPage from './../pages/CityPage/CityPage.jsx'
import AllCitiesPage from './../pages/AllCitiesPage/AllCitiesPage.jsx'
import ActivityDetailsPage from './../pages/ActivityDetailsPage/ActivityDetailsPage.jsx'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/cities/:cityId/:activityId" element={<ActivityDetailsPage />} />
            <Route path="/cities/:cityId" element={<CityPage />} />
            <Route path='/cities' element={<AllCitiesPage />} />
            <Route path='/' element={<HomePage />} />
        </Routes>
    )
}

export default AppRoutes