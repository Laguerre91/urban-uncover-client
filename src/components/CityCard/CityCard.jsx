import "bootstrap/dist/css/bootstrap.css";
import "./../CityCard/CityCard.css";
import { useEffect, useState } from "react";
import {
    Container,
    Card,
    Button,
    Row,
    Col,
    NavLink,
    TabContainer,
} from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const CityCard = () => {
    const [cities, setCities] = useState([]);
    const [activities, setActivities] = useState();

    useEffect(() => loadCity(), []);
    useEffect(() => loadActivity(), []);

    const loadCity = () => {
        axios
            .get("http://localhost:5005/cities")
            .then((response) => {
                setCities(response.data);
            })
            .catch((err) => console.log(err));
    };

    const loadActivity = () => {
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
        <div className="divCard">
            {cities.map((city) => {
                return (
                    <div>
                        <Row className="rowCard">
                            <Col md={6} className="imgCol">
                                <Card.Img
                                    src={city.cover}
                                    alt="Image from {city.name}"
                                ></Card.Img>
                            </Col>
                            <Col md={6}>
                                <Card key={city.Id} className="cityCard">
                                    <Card.Header as="h5">{city.name}</Card.Header>
                                    <Card.Body>
                                        <Card.Text>{city.description}</Card.Text>
                                        {activities[city.id] &&
                                            activities[city.id].map((activity) => (
                                                <Card.Text>
                                                    {activity.name}.{" "}
                                                    <strong>{activity.categories.join(", ")}</strong>
                                                </Card.Text>
                                            ))}
                                        <Link to={`/cities/${city.id}`}>
                                            <div className="d-grid gap-2">
                                                <Button className="CityButton" variant="primary">
                                                    Go to {city.name}
                                                </Button>
                                            </div>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                );
            })}
        </div>
    );
};
export default CityCard;
