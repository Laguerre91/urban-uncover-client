import "bootstrap/dist/css/bootstrap.css";
import "./../CityCard/CityCard.css";
import { Card, Button, Row, Col, Spinner, } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";



const CityCard = props => {
    const [activities, setActivities] = useState([]);
    useEffect(() => { loadActivities() }, []);

    const city = props.cityInfo

    const loadActivities = () => {
        axios
            .get("http://localhost:5005/activities")
            .then((response) => {
                const activitiesByCity = {};
                response.data.forEach((activity) => {
                    if (!activitiesByCity[activity.cityId]) {
                        activitiesByCity[activity.cityId] = [];
                    }
                    activitiesByCity[activity.cityId].push(activity);
                });
                setActivities(activitiesByCity);
            })
            .catch((err) => console.log(err));
    };


    return (
        <div key={city.id}>

            <Row className="rowCard">
                <Col md={6} className="imgCol">
                    <Card.Img className="img-city"
                        src={city.cover}
                        alt="Image from {city.name}"
                    ></Card.Img>
                </Col>
                <Col md={6}>
                    <Card className="cityCard">
                        <Card.Header as="h5" className="cityHeader">{city.name}</Card.Header>
                        <Card.Body>
                            <Card.Text>{city.description}</Card.Text>
                            <h4>Activities:</h4>
                            {activities[city.id] &&
                                activities[city.id].map((activity) => (
                                    <Link className="activity-link" to={`/cities/activities/${activity.id}`}>
                                        <Card.Text className="card-link" >
                                            {activity.name}.{" "}
                                            <strong>{activity.categories.join(", ")}</strong>
                                        </Card.Text>
                                    </Link>
                                ))}
                            <Link className="link-btn" to={`/cities/${city.id}`}>
                                <div className="d-grid gap-2">
                                    <Button className="btn-goTo" variant="primary">
                                        Go to {city.name}
                                    </Button>
                                </div>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div >
    );
}

export default CityCard;
