import "bootstrap/dist/css/bootstrap.css";
import "./../CityCard/CityCard.css";
import { useEffect, useState } from "react";
import {
    Card,
    Button,
    Row,
    Col,
    Spinner,
} from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";



const CityCard = () => {
    const [cities, setCities] = useState([]);
    const [activities, setActivities] = useState();
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        loadCity()
        loadActivity()
    }, []);

    const loadCity = () => {
        axios
            .get("http://localhost:5005/cities")
            .then((response) => {
                setCities(response.data);
                setisLoading(false)
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
        <div className="CityCard">
            {
                isLoading
                    ?
                    <Spinner animation="border" variant="secondary">Loading...</Spinner>
                    :
                    cities.map((city) => {
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
                                        <Card key={city.Id} className="cityCard">
                                            <Card.Header as="h5">{city.name}</Card.Header>
                                            <Card.Body>
                                                <Card.Text>{city.description}</Card.Text>
                                                <h4>Activities:</h4>
                                                {activities[city.id] &&
                                                    activities[city.id].map((activity) => (
                                                        <Card.Text>
                                                            {activity.name}.{" "}
                                                            <strong>{activity.categories.join(", ")}</strong>
                                                        </Card.Text>
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
                            </div>
                        );
                    })}
        </div>
    );
};
export default CityCard;
