import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

import { Button, Form, Row, Col } from "react-bootstrap";

import './AddActivityForm.css'

const API_URL_BASE = "http://localhost:5005"


function AddActivityForm({fetchActivities}) {

    const [cities, setCities] = useState([])

    const [activityData, setActivityData] = useState({
        name: '',
        description: '',
        categories: '',
        image: '',
        cityId:0,
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
        rate: 0
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
        e.preventDefault();
      
        axios
        .post(`${API_URL_BASE}/activities`, activityData)
        .then((response) => {
            const newActivity = response.data;
            setActivityData(newActivity);
            newActivity.Id += 1;
            navigate(`/cities/${activityData.cityId}`);

            fetchActivities(activityData.cityId);
        })
        .catch(err => console.log(err))
    }

    

    const handleInputChange = e => {
        const { name, value } = e.target;
    
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
            setActivityData(prevState => ({ ...prevState, [name]: value }));
        }
    };
    

    const handleCityChange = e => {
        setActivityData({ ...activityData, cityId: e.target.value })
    }


    return (
        <div className="AddActivityForm">

            <Form className="mt-5 form-details" onSubmit={handleFormSubmit}>

                <Row>

                    <Col>
                        <Form.Group className="mb-3" controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Select value={activityData.cityId} onChange={handleCityChange}>
                            <option value= ''>Select a city</option>
                            {cities.map((city) => (
                            <option key={city.id} value={city.id}>
                                {city.name}
                            </option>
                            ))}
                        </Form.Select>
                        </Form.Group>
                    </Col>

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
                                name={'activitySpecs.price'}
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

                        <Form.Group className="mb-3" controlId="address">
                            <Form.Label>What's its address?</Form.Label>
                            <Form.Control
                                type="text"
                                value={activityData.location.address}
                                onChange={handleInputChange}
                                name={'location.address'}
                            />
                        </Form.Group>

                    </Col>

                    <Col>

                        <Form.Group className="mb-3" controlId="seasonal">
                            <Form.Label>Which season is best to go?</Form.Label>
                            <Form.Control
                                type="text"
                                value={activityData.activitySpecs.seasonal}
                                onChange={handleInputChange}
                                name={'activitySpecs.seasonal'}
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