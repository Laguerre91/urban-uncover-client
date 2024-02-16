import axios from 'axios';
import { useEffect, useState } from 'react';

import './CityButton.css'
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const API_URL_BASE = "http://localhost:5005/cities"


const CityButton = () => {

    const [cities, setCities] = useState([])

    useEffect(() => getCities(), [])

    const getCities = () => {

        axios
            .get(`${API_URL_BASE}`)
            .then(({ data }) => setCities(data))
            .catch(err => console.log(err))
    }

    return (

        <div className="CityButton">

            {
                cities.map(elm => {
                    return (
                        <Link to={`/cities/${elm.id}`}>
                            <Button variant="dark" className='btn-city'>{elm.name}</Button>
                        </Link>
                    )
                })
            }

            <Button variant="dark" className='btn-city btn-allCities'>Discover All</Button>

        </div>
    )
}

export default CityButton;