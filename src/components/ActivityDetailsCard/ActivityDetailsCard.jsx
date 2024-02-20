import { useEffect, useState, } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Row, Col, Container, Spinner, Button, Modal } from "react-bootstrap"
import axios from 'axios';
import pin from './../../assets/images/pin.png'


import './ActivityDetailsCard.css'

const API_BASE_URL = "http://localhost:5005/activities"

const ActivityDetailsCard = () => {

    const [activity, setActivity] = useState({ API_BASE_URL });
    const [isLoading, setIsLoading] = useState(true)
    const [show, setShow] = useState(false);

    const { activityId } = useParams()

    const navigate = useNavigate()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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

    const deleteActivity = () => {

        axios
            .delete(`${API_BASE_URL}/${activityId}`)
            .then(() => navigate(`/cities`))
            .catch(err => console.log(err))
    }


    return (
        <Container className="ActivityDetailsCard">
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
                            <p className='act-description'>{activity.description}</p>

                            <div className='positioning'>

                                {
                                    activity.activitySpecs.price === 0 ? (
                                        <p className='free-act'><strong>No need to buy tickets to enter</strong></p>
                                    ) : (
                                        <p><strong>Price: </strong>{activity.activitySpecs.price}€</p>
                                    )
                                }

                                <p className='act-category'><strong>{activity.categories.join(", ")}</strong></p>

                            </div>

                            {
                                activity.activitySpecs.pets === true ? (
                                    <p><strong>Pets Allowed: </strong>✅</p>
                                ) : (
                                    <p><strong>Pets Allowed: </strong>❌</p>
                                )
                            }

                            {
                                activity.activitySpecs.family === true ? (
                                    <p><strong>Families: </strong>Great to spend some time with your family</p>
                                ) : (
                                    <p><strong>Families: </strong>Not recommended</p>
                                )
                            }

                            {
                                activity.activitySpecs.conditions.outdoor === true ? (
                                    <p><strong>This is an outdoor activity 🌳</strong></p>
                                ) : (
                                    <p><strong>This is an indoor activity 🏢</strong></p>
                                )
                            }

                            <p><strong>Season to visit: </strong>{activity.activitySpecs.seasonal}</p>

                            <p>
                                <img className='location-pin' src={pin} alt="Location pin" />
                                {activity.location.address}
                            </p>

                            <Link to={`/cities/${activity.cityId}`} className='link-btn'>
                                <div className="d-grid gap-2">
                                    <Button className='btn-back'>Back to all activities</Button>
                                </div>
                            </Link>

                            <div className='btns'>
                                <Button className='btn-edit' variant='secondary'>Edit activity</Button>
                                <Button className='btn-delete' variant='danger' onClick={handleShow}>X</Button>
                            </div>
                        </Col>
                    </Row>
            }

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>You're deleting an activity</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    This action cannot be reversed. Are you sure you want to continue?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={deleteActivity}>Delete Anyway</Button>
                </Modal.Footer>
            </Modal>

        </Container >
    )
}

export default ActivityDetailsCard