import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Navbar.css'
import letteringLogo from './../../assets/images/letteringLogo.png'

const API_URL_BASE = "http://localhost:5005/cities"



const NavBar = () => {

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
    <Navbar expand='md' fixed='top' className='Navbar NavbarSpacing justify-content-between'>
      <NavLink to="/" className='navbar-brand'>
        <img src={letteringLogo} alt="Urban Uncover logo" className='urbanLettLogo' />
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">

          <NavLink className='nav-link' to={'/about'}>About Us</NavLink>
          <NavDropdown title="Cities" id="cities-dropdown">

            {cities.map(city => (
              <NavDropdown.Item key={city.id} as={'div'} className='dropdown-items'>
                <NavLink className="cities-link" to={`/cities/${city.id}`} cityid={city.id}>
                  {city.name}
                  <hr />
                </NavLink>
              </NavDropdown.Item>
            ))}

          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;