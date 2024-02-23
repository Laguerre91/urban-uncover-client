import CityCard from "../CityCard/CityCard"
import "bootstrap/dist/css/bootstrap.css";
import "./../CityCard/CityCard.css";
import { useEffect, useState } from "react";
import axios from "axios";

const CitiesList = () => {
    const [cities, setCities] = useState([]);
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => { loadCities() }, []);

    const loadCities = () => {
        axios
            .get("https://urban-uncover-api.fly.dev")
            .then((response) => {
                setCities(response.data);
                setisLoading(false)
            })
            .catch((err) => console.log(err));
    };

    return (
        cities.map(city => {

            return <CityCard key={city.id} cityInfo={city} />


        })
    )

}

export default CitiesList