import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import { useState, useEffect } from 'react';

const API_URL_BASE = "http://localhost:5005/cities"

function ActivityCard({cityId}) {

    const [activities, setActivities] = useState([])

    useEffect(() => {
        fetchActivities(cityId)
    },[])

    const fetchActivities = (cityId) => {
        axios
            .get(`${API_URL_BASE}/${cityId}/activities`)
            .then(response => {
                setActivities(response.data)
            }).catch(err => console.log(err))
        console.log(activities)
    }


  return (
    <div> 
        {activities.map(activity => (
            <Card key= {activity.id} style={{ width: '20rem'}}>
            <Card.Img variant="top" src= {activity.image} />
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
}

export default ActivityCard;