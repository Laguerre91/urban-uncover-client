import axios from "axios"
import { useEffect, useState } from "react"



import ControlledCarousel from "../../components/ControlledCarousel/ControlledCarousel"

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
        <div>

            <ControlledCarousel />

        </div>
    )
}

export default HomePage