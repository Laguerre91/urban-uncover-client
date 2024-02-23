import axios from 'axios';
import { useEffect, useState } from 'react';

import './CityButtons.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const API_URL_BASE = "https://urban-uncover-api.fly.dev/cities"


const CityButtons = () => {

    const [cities, setCities] = useState([])

    useEffect(() => getCities(), [])

    const getCities = () => {

        axios
            .get(`${API_URL_BASE}`)
            .then(({ data }) => setCities(data))
            .catch(err => console.log(err))
    }


    return (

        <div className="CityButtons">

            {
                cities.map(elm => {
                    return (
                        <Link to={`/cities/${elm.id}`}>
                            <Button variant="dark" className='btn-city'>{elm.name}</Button>
                        </Link>
                    )
                })
            }
            <Link to={`/cities`}>
                <Button variant="dark" className='btn-city btn-allCities'>Discover All</Button>
            </Link>

        </div>
    )
}

export default CityButtons;