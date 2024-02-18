import axios from "axios"
import { useEffect, useState } from "react"
import ControlledCarousel from './../../components/ControlledCarousel/ControlledCarousel'
import CityButton from "../../components/CityButton/CityButton"

import './HomePage.css'


const API_URL_BASE = "http://localhost:5005/cities"

function HomePage() {

    const [cities, setCities] = useState([])

    useEffect(() => getAllCities(), [])

    const getAllCities = () => {

        axios
            .get(`${API_URL_BASE}`)
            .then(({ data }) => setCities(data))
            .catch(err => console.log(err))
    }

    return (
        <div className="HomePage">
            <section className="hero carousel">
                <h1 className="hero-title">Urban Uncover</h1>
                <ControlledCarousel />
                <CityButton />
            </section>
        </div>
    )
}

export default HomePage