import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

import { Button, Form, Row, Col } from "react-bootstrap";

import './AddActivityForm.css'

const API_URL_BASE = "http://localhost:5005/activities"


function AddActivityForm() {

    const [cities, setCities] = useState([])

    const [activityData, setActivityData] = useState({
        name: '',
        description: '',
        category: '',
        image: '',
        location: {
            addres: ''
        },
        activitySpecs: {
            price: 0,
        },
        seasonal: ''
    })

    const navigate = useNavigate()

    const handleFormSubmit = (e) => {

        e.preventDefault()

        axios
            .post(`${API_URL_BASE}`, activityData)
            .then(() => navigate('/activities'))
            .catch(err => console.log(err))

    }

    const handleInputChange = e => {
        const { value, name } = e.target
        setActivityData({ ...activityData, [name]: value })
    }


    return (
        <div className="AddActivityForm">

            <Form className="mt-5 form-details" onSubmit={handleFormSubmit}>

                <Row>

                    <Col>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name of the Activity</Form.Label>
                            <Form.Control
                                type="text"
                                value={activityData.name}
                                onChange={handleInputChange}
                                name={'name'}
                            />
                        </Form.Group>
                    </Col>

                    <Col>

                        <Form.Group className="mb-3" controlId="category">
                            <Form.Label>Category of the Activity</Form.Label>
                            <Form.Control
                                type="text"
                                value={activityData.category}
                                onChange={handleInputChange}
                                name={'category'}
                            />
                        </Form.Group>

                    </Col>

                    <Col>

                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label>What's the price?</Form.Label>
                            <Form.Control
                                type="text"
                                value={activityData.activitySpecs.price}
                                onChange={handleInputChange}
                                name={'price'}
                            />
                        </Form.Group>

                    </Col>

                </Row>

                <Row>

                    <Col>
                        <Form.Group className="mb-3" controlId="image">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control
                                type="text"
                                value={activityData.image}
                                onChange={handleInputChange}
                                name={'image'}
                            />
                        </Form.Group>
                    </Col>

                    <Col>

                        <Form.Group className="mb-3" controlId="location">
                            <Form.Label>What's its address?</Form.Label>
                            <Form.Control
                                type="text"
                                value={activityData.location.addres}
                                onChange={handleInputChange}
                                name={'location'}
                            />
                        </Form.Group>

                    </Col>

                    <Col>

                        <Form.Group className="mb-3" controlId="seasonal">
                            <Form.Label>Which season is best to go?</Form.Label>
                            <Form.Control
                                type="text"
                                value={activityData.seasonal}
                                onChange={handleInputChange}
                                name={'seasonal'}
                            />
                        </Form.Group>

                    </Col>

                </Row>

                <Row>
                    <Col>

                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Describe the activity</Form.Label>
                            <Form.Control
                                type="text"
                                value={activityData.description}
                                onChange={handleInputChange}
                                name={'description'}
                            />
                        </Form.Group>

                    </Col>
                </Row>


                <div className="d-grid">
                    <Button variant="dark" type="submit">Add your activity!</Button>
                </div>
            </Form>

        </div>
    )
}

export default AddActivityForm