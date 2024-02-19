import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './ActivityCard.css'

const API_URL_BASE = "http://localhost:5005/cities"

const ActivityCard = () => {
  const { cityId } = useParams();
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities(cityId);
  }, [cityId]);

  const fetchActivities = (cityId) => {
    axios
      .get(`${API_URL_BASE}/${cityId}/activities`)
      .then((response) => {
        setActivities(response.data);
      })
      .catch((err) => {
        console.log('Error fetching activities:', err);
      });
  };

  return (
    <div className='ActivityCard'>
      {activities.map((activity) => (
        <Card key={activity.id} className='activity'>
          <Card.Img variant="top" src={activity.image} className='img' />
          <Card.Body>
            <Card.Title>{activity.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Categories: {activity.categories}</ListGroup.Item>
            <ListGroup.Item>Price: {activity.activitySpecs.price}€</ListGroup.Item>
            <ListGroup.Item>Address: {activity.location.address}</ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
    </div>
  );
};

export default ActivityCard;