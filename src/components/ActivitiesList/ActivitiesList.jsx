import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

import ActivityCard from "../ActivityCard/ActivityCard";
import AddActivityForm from "../AddActivityForm/AddActivityForm";

const API_URL_BASE = "https://urban-uncover-api.fly.dev";

const ActivitiesList = () => {
    const { cityId } = useParams();
    const [activities, setActivities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchActivities = (cityId) => {
        axios
            .get(`${API_URL_BASE}/cities/${cityId}/activities`)
            .then(({ data }) => {
                setActivities(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log('Error fetching activities:', err);
            });
    };

    useEffect(() => {
        fetchActivities(cityId);
    }, [cityId]);

    const handleAddActivity = (newActivityData) => {
        setActivities([newActivityData, ...activities]);
    };

    return (
        <div>
            {activities.map(activity => (
                <ActivityCard
                    key={activity.id}
                    activityInfo={activity}
                    handleAddActivity={handleAddActivity}
                />
            ))}
            <AddActivityForm
                cityId={cityId}
                fetchActivities={fetchActivities}
            />
        </div>
    );
};

export default ActivitiesList;