import axios, { Axios } from "axios"
import { useEffect, useState } from "react"

const API_URL_BASE = "http://localhost:5005/cities"

const CitiesList = () => {

    const [cities, setCities] = useState([])

    useEffect(() => loadAllCities(), [])

    const loadAllCities = () => {

        axios
            .get(`${API_URL_BASE}`)
            .then(({ data }) => setCities(data))
            .catch(err => console.log(err))
    }

    return (
        <section className="CitiesList">
            <h2>Discover all Cities</h2>

            {
                cities.map(elm => {
                    return (
                        <div key={elm.id}>
                            <h1>{elm.name}</h1>
                        </div>
                    )
                })
            }

        </section>
    )
}

export default CitiesList