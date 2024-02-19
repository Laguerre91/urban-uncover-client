import { useEffect, useState, } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ActivityDetailsPage.css'
import { Row, Col, Container, Spinner, Button } from "react-bootstrap"
import axios from 'axios';

const API_BASE_URL = "http://localhost:5005/activities"

const ActivityDetailsPage = () => {
    const [activity, setActivity] = useState({ API_BASE_URL });
    const [isLoading, setIsLoading] = useState(true)
    const { activityId } = useParams()

    useEffect(() => {
        loadActivity()
    }, [])

    const loadActivity = () => {

        axios
            .get(`${API_BASE_URL}/${activityId}`)
            .then((response) => {
                setActivity(response.data);
                setIsLoading(false)
            })
            .catch((err) => console.log(err));
    };


    return (
        <Container className="ActivityCard">
            <h1>Activity details</h1>

            {
                isLoading
                    ?
                    <Spinner animation="border" variant="secondary">Loading...</Spinner>
                    :
                    <Row key={activity.id}>
                        <Col md={6}>
                            <img className='img-activity' src={activity.image} alt="Image from {activity.name}" />
                        </Col>
                        <Col className='text' md={6}>
                            <h2>{activity.name}</h2>
                            <p><strong>Description: </strong>{activity.description}</p>
                            <p><strong>Categories: </strong>{activity.categories.join(", ")}</p>
                            <p><strong>Location: </strong>{activity.location.address}</p>
                            {/* <p><strong>Latitude: </strong>{activity.location.lat}, <strong>Longitude: </strong>{activity.location.lng}</p> */}
                            <h5>Activity Specifications:</h5>
                            <p><strong>Price: </strong>{activity.activitySpecs.price}</p>
                            <p><strong>Pets Allowed: </strong>{activity.activitySpecs.pets}</p>
                            <p><strong>For family: </strong>{activity.activitySpecs.family}</p>
                            <h5>Ambiental conditions:</h5>
                            <p><strong>For family: </strong>{activity.activitySpecs.conditions.outdoor}</p>
                            <p><strong>For family: </strong>{activity.activitySpecs.conditions.indor}</p>
                            <h5>Better season:</h5>
                            <p><strong>Better season: </strong>{activity.activitySpecs.seasonal}</p>
                            <div className="d-grid gap-2">
                                <Button className='btn-back'>Back to....</Button>
                            </div>
                            <div className='btns'>
                                <Button className='btn-edit'>Edit activity</Button>
                                <Button className='X'>X</Button>
                            </div>
                        </Col>
                    </Row>
            }

        </Container >
    )
}

export default ActivityDetailsPage