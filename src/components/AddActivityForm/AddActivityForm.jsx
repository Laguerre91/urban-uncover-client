import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Modal } from "react-bootstrap";

import { Button, Form, Row, Col, Dropdown } from "react-bootstrap";

import './AddActivityForm.css'

const API_URL_BASE = "https://urban-uncover-api.fly.dev"


function AddActivityForm({ fetchActivities }) {

    const [cities, setCities] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([])
    const [show, setShow] = useState(false);
    const categories = ['Art', 'Culture', 'Food', 'Music', 'Night Life', 'Sport']


    const toggleCategory = (option) => {
        if (selectedCategories.includes(option)) {
            setSelectedCategories(
                selectedCategories.filter((item) => item !== option)
            );
        } else {
            setSelectedCategories([...selectedCategories, option]);
        }
    }

    const [activityData, setActivityData] = useState({
        name: '',
        description: '',
        categories: [],
        image: '',
        cityId: 0,
        location: {
            address: ''
        },
        activitySpecs: {
            price: 0,
            pets: false,
            family: false,
            conditions: {
                outdoor: false,
                indoor: false
            },
            seasonal: ''
        },
        rate: []
    })

    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(`${API_URL_BASE}/cities`)
            .then((response) => {
                setCities(response.data)
            })
            .catch(err => console.log(err))
    }, [])


    const handleFormSubmit = e => {
        e.preventDefault()


        const updatedActivityData = {
            ...activityData,
            categories: selectedCategories
        }

        axios
            .post(`${API_URL_BASE}/activities`, updatedActivityData)
            .then((response) => {
                const newActivity = response.data
                setActivityData(newActivity)
                newActivity.Id += 1
                navigate(`/cities/${activityData.cityId}`)

                fetchActivities(activityData.cityId)
            })
            .catch(err => console.log(err))

        setShow(false)
    }



    const handleInputChange = e => {
        const { name, value } = e.target

        if (name.includes('.')) {
            const [fieldName, nestedFieldName] = name.split('.')
            setActivityData(prevState => ({
                ...prevState,
                [fieldName]: {
                    ...prevState[fieldName],
                    [nestedFieldName]: value
                }
            }));
        } else {
            setActivityData(prevState => ({ ...prevState, [name]: value }))
        }
    }

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target
        setActivityData(prevState => ({
            ...prevState,
            activitySpecs: {
                ...prevState.activitySpecs,
                [name]: checked
            }
        }))
    }


    const handleCityChange = e => {
        setActivityData({ ...activityData, cityId: e.target.value })
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className="AddActivityForm">

            <Button className="modal-form-button" onClick={handleShow}>
                Wanna add an activity?
            </Button>

            <Modal
                centered
                show={show}
                onHide={handleClose}>

                <Modal.Body className="modal-form" >
                    <Form className="form-details" onSubmit={handleFormSubmit}>

                        <Row>

                            <Col md={6}>
                                <Form.Group className="mb-4" controlId="city">
                                    <Form.Label>City</Form.Label>
                                    <Form.Select value={activityData.cityId} onChange={handleCityChange}>
                                        <option value=''>Select a city</option>
                                        {cities.map((city) => (
                                            <option key={city.id} value={city.id}>
                                                {city.name}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group controlId="name">
                                    <Form.Label>Name of the Activity</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={activityData.name}
                                        onChange={handleInputChange}
                                        name={'name'}
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="mb-4" controlId="categories">
                                    <Form.Label>Categories</Form.Label>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-categories">
                                            Select Categories
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {categories.map((option, index) => (
                                                <Dropdown.Item
                                                    key={index}
                                                    onClick={() => toggleCategory(option)}
                                                    active={selectedCategories.includes(option)}
                                                >
                                                    {option}
                                                </Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Form.Group>
                                {
                                    selectedCategories && selectedCategories.length > 0 && (
                                        <div>
                                            <strong>Selected Categories:</strong>{' '}
                                            <p>{selectedCategories.join(', ')}</p>
                                        </div>
                                    )
                                }

                            </Col>

                            <Col md={6}>

                                <Form.Group controlId="price">
                                    <Form.Label>What's the price?</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={activityData.activitySpecs.price}
                                        onChange={handleInputChange}
                                        name={'activitySpecs.price'}
                                    />
                                </Form.Group>

                            </Col>

                        </Row>

                        <Row className="mb-4">

                            <Col md={6}>
                                <Form.Group controlId="image">
                                    <Form.Label>Image URL</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={activityData.image}
                                        onChange={handleInputChange}
                                        name={'image'}
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6}>

                                <Form.Group controlId="address">
                                    <Form.Label>What's its address?</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={activityData.location.address}
                                        onChange={handleInputChange}
                                        name={'location.address'}
                                    />
                                </Form.Group>

                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col md={6}>

                                <Form.Group controlId="seasonal">
                                    <Form.Label>Which season is best to go?</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={activityData.activitySpecs.seasonal}
                                        onChange={handleInputChange}
                                        name={'activitySpecs.seasonal'}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="description">
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


                        <Row className="mb-4">
                            <Col >
                                <Form.Check
                                    type="checkbox"
                                    label="Family Friendly"
                                    name="family"
                                    checked={activityData.activitySpecs.family}
                                    onChange={handleCheckboxChange}
                                />
                            </Col>
                            <Col>
                                <Form.Check
                                    type="checkbox"
                                    label="Allows Pets"
                                    name="pets"
                                    checked={activityData.activitySpecs.pets}
                                    onChange={handleCheckboxChange}
                                />
                            </Col>
                            <Col>
                                <Form.Group controlId="conditions">

                                    <Form.Select
                                        value={activityData.activitySpecs.conditions.indoor ? "indoor" : "outdoor"}
                                        onChange={e => {
                                            const value = e.target.value;
                                            setActivityData(prevState => ({
                                                ...prevState,
                                                activitySpecs: {
                                                    ...prevState.activitySpecs,
                                                    conditions: {
                                                        indoor: value === "indoor",
                                                        outdoor: value === "outdoor"
                                                    }
                                                }
                                            }));
                                        }}
                                    >
                                        <option value="indoor">Indoor</option>
                                        <option value="outdoor">Outdoor</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="d-grid">
                            <Button variant="dark" type="submit">Add your activity!</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>


    )
}

export default AddActivityForm