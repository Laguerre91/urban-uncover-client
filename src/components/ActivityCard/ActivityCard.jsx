import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import { Button, Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';

import './ActivityCard.css'

const API_URL_BASE = "http://localhost:5005/cities"

const ActivityCard = () => {

  const { cityId } = useParams();
  const [activities, setActivities] = useState([]);
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

  // TODO: RENOMINAR A ACTIVITIESLIST
  // TODO: DESACOPLAR ACTIVITY CARD

  return (
    <Container className='ActivityCard'>

      {
        isLoading
          ?
          <h1>cargando...</h1>
          :
          activities.map((activity) => (

            <div key={activity.id} className='activity-container'>

              <Row className='activity-row'>
                <Col md={6}>
                  <Card.Img
                    className='img-activity'
                    src={activity.image}
                    alt="Activity image"
                  />
                </Col>

                <Col md={6}>

                  <Card key={activity.id} className='activity-details'>
                    <Card.Header>{activity.name}</Card.Header>
                    <Card.Body>
                      <Card.Text>
                        <p><strong>Categories: </strong>{activity.categories.join(", ")}</p>
                        <p><strong>Price: </strong>{activity.activitySpecs.price}€</p>
                        <p><strong>Address: </strong>{activity.location.address}</p>

                      </Card.Text>
                      <Link to={`/cities/${activity.id}`}>
                        <Button variant="dark">See Activity</Button>
                      </Link>

                    </Card.Body>
                  </Card>

                </Col>
              </Row>

            </div>

          ))

      }

    </Container>
  );
};

export default ActivityCard;