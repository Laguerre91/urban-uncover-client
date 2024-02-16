import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL_BASE = "http://localhost:5005/cities"



function UrbanNavbar() {

  const [cities, setCities] = useState([])

  useEffect(() => {
    fetchCities()
  }, [])


  const fetchCities = () => {
    axios
      .get(API_URL_BASE)
      .then(response => {
        setCities(response.data)
      }).catch(err => {
        console.log(err)
      })
  }


  return (
    <Navbar expand='lg' fixed = 'top' className='Navbar NavbarSpacing justify-content-between'>
      <NavLink to="/" className='navbar-brand'>Urban Uncover</NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">

          <NavLink className={'nav-link'} to={'/'}>Inicio</NavLink>
          <NavLink className={'nav-link'} to={'/contact'}>Contact Us</NavLink>
          <NavDropdown title="Cities" id="cities-dropdown">
            <NavDropdown.Item>
              {cities.map (city => (
                <NavLink key={city.id} className={'nav-link'} to = {`/cities/${city.id}`}>
                {city.name}
              </NavLink>
              ))} 
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default UrbanNavbar;