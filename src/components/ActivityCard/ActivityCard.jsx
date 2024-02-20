import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import { Button, Row, Col, Container } from 'react-bootstrap';

import './ActivityCard.css'

const ActivityCard = props => {

  const activity = props.activityInfo
  const deleteActivity = props.deleteActivity
  const editActivity = props.editActivity


  return (
    <Container className='ActivityCard'>

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

                  {
                    activity.activitySpecs.price === 0 ? (
                      <p><strong>Price: </strong>No need to buy tickets to enter</p>
                    ) : (
                      <p><strong>Price: </strong>{activity.activitySpecs.price}€</p>
                    )
                  }

                  <p><strong>Address: </strong>{activity.location.address}</p>

                </Card.Text>
                <Link to={`/cities/activities/${activity.id}`}>
                  <Button variant="dark">See Activity</Button>
                </Link>
              </Card.Body>
            </Card>

          </Col>
        </Row>

      </div>

    </Container>
  );
};

export default ActivityCard;