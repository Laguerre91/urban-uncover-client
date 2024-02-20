import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

import ActivityCard from "../ActivityCard/ActivityCard";

const API_URL_BASE = "http://localhost:5005/cities"


const ActivitiesList = () => {

    const { cityId } = useParams();

    const [activities, setActivities] = useState([])
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetchActivities(cityId);
    }, [cityId]);

    const fetchActivities = (cityId) => {

        axios
            .get(`${API_URL_BASE}/${cityId}/activities`)
            .then((response) => {
                setActivities(response.data);
                setIsLoading(false)
            })
            .catch((err) => {
                console.log('Error fetching activities:', err);
            });
    };



    return (

        activities.map(activity => {

            return <ActivityCard key={activity.id} activityInfo={activity} />
        })

    )
}

export default ActivitiesList;