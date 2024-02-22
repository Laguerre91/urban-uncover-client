import { useEffect, useState, } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Row, Col, Container, Spinner, Button, Modal } from "react-bootstrap"
import { Form } from 'react-bootstrap';
import axios from 'axios';
import pin from './../../assets/images/pin.png'

import './ActivityDetailsCard.css'

const API_BASE_URL = "http://localhost:5005/activities"

const ActivityDetailsCard = () => {

    const [activity, setActivity] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    const [rating, setRating] = useState(1)
    const [averageRating, setAverageRating] = useState(0)
    const [newReview, setNewReview] = useState("");

    const [showDelete, setShowDelete] = useState(false);
    const [showRate, setShowRate] = useState(false)

    const [showReview, setShowReview] = useState(false)

    const { activityId } = useParams()

    const navigate = useNavigate()

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    const handleCloseRate = () => setShowRate(false);
    const handleShowRate = () => setShowRate(true);

    const handleCloseReview = () => {

        setShowReview(false)
    };

    const handleShowReview = () => setShowReview(true);



    useEffect(() => {
        loadActivity()
    }, [activityId])

    const loadActivity = () => {

        axios
            .get(`${API_BASE_URL}/${activityId}`)
            .then((response) => {
                setActivity(response.data);
                const { rate } = response.data;
                const sum = rate.reduce((total, rating) => total + rating, 0);
                const average = rate.length > 0 ? sum / rate.length : 0;
                setAverageRating(average.toFixed(1));
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


    const submitRating = (e) => {

        const { value } = e.target

        console.log('------', value)

        const updatedActivity = {
            ...activity,
            rate: [...activity.rate, rating],
            review: [...activity.review, newReview]
        }

        axios
            .put(`${API_BASE_URL}/${activityId}`, updatedActivity)
            .then(() => {
                loadActivity()
                handleCloseRate();
                setNewReview("");
            })
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
                        <Col md={6} className='rate-positioning'>
                            <img className='img-activity' src={activity.image} alt="Image from {activity.name}" />
                            {
                                averageRating === '0.0' ? (
                                    <p className='noRate'>This activity hasn't been rated yet</p>
                                ) : (
                                    <div className='average-rating'>
                                        <p className='rate mb-3'>⭐ Average Rating: <strong>{averageRating}</strong> ⭐</p>
                                        <p onClick={handleShowReview} className='btn-review'> <strong>View all reviews</strong></p>
                                    </div>
                                )
                            }
                            <Button className='btn-edit' variant='secondary' onClick={handleShowRate}>Rate this activity</Button>

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

                                <Button className='btn-delete' variant='danger' onClick={handleShowDelete}>X</Button>

                            </div>
                        </Col>
                    </Row>

            }

            {/* DELETE MODAL */}

            <Modal
                show={showDelete}
                onHide={handleCloseDelete}
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
                    <Button variant="secondary" onClick={handleCloseDelete}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={deleteActivity}>Delete Anyway</Button>
                </Modal.Footer>
            </Modal>

            {/* RATE MODAL */}

            <Modal
                show={showRate}
                onHide={handleCloseRate}
                animation={false}>

                <Modal.Header closeButton>
                    <Modal.Title>Let us know your opinion</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-review'>
                    <Form.Label>Rate this activity!</Form.Label>
                    <Form.Control as="select" className='mb-3' value={rating} onChange={(e) => setRating(parseInt(e.target.value))}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </Form.Control>
                    <Form.Label>Did you enjoy this activity?</Form.Label>
                    <Form.Control
                        value={newReview}
                        onChange={(e) => setNewReview(e.target.value)}
                        type="text"
                        placeholder="Write a review"
                        className='mb-4' />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={submitRating}>Save changes</Button>
                </Modal.Footer>

            </Modal>

            {/* REVIEWS MODAL */}

            <Modal show={showReview} onHide={handleCloseReview}>
                <Modal.Header closeButton>
                    <Modal.Title>Reviews</Modal.Title>
                </Modal.Header>

                {
                    activity.review ? (
                        activity.review.map((review, index) => (

                            <Modal.Body key={index} className='modal-comments'>"{review}"</Modal.Body>

                        ))
                    ) : (
                        <Modal.Body>No reviews available.</Modal.Body>
                    )
                }
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseReview}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container >
    )
}

export default ActivityDetailsCard