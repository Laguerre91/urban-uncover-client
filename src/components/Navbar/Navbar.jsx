import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form, FormControl } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import './Navbar.css';
import magnifyingGlass from './../../assets/images/MagnifyingGlass.png'
import letteringLogo from './../../assets/images/letteringLogo.png';

const API_URL_BASE = "http://localhost:5005";

const NavBar = () => {
  const [budget, setBudget] = useState('');
  const [cities, setCities] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = () => {
    axios
      .get(`${API_URL_BASE}/cities`)
      .then(response => {
        setCities(response.data);
      }).catch(err => {
        console.log(err);
      });
  };

  const handleBudgetChange = (e) => {
    e.preventDefault()
    const value = e.target.value;
    setBudget(value);
    if (value) {
      axios
        .get(`${API_URL_BASE}/activities?activitySpecs.price_lte=${value}`)
        .then(response => {
          setSearchResults(response.data);
        }).catch(err => {
          console.log(err);
        });
    } else {
      setSearchResults([]);
    }
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
  }

  const handleResultClick = () => {
    setBudget('');
    setSearchResults([]);
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
                </NavLink>
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Nav>
        <Form className="d-flex position-relative">
          <FormControl
            type="search"
            placeholder="Enter maximum price"
            className="searchBar"
            value={budget}
            onChange={handleBudgetChange}
            onKeyDown={handleKeyDown}
          />
          <img className='glass' src={magnifyingGlass} alt="Magnifying Glass" />
        </Form>
        {searchResults.length > 0 && (
          <ListGroup className='searchResults'>
            {searchResults.map(result => (
              <Link key={result.id} to={`/cities/activities/${result.id}`} style={{ textDecoration: 'none' }} onClick={handleResultClick}>
                {
                  result.activitySpecs.price === 0 ? (

                    <ListGroup.Item><div>{result.name} - Free </div></ListGroup.Item>
                  ) : (
                    <ListGroup.Item>
                      <div>
                        <img src={result.image} alt="activity image" className='searchBarImage' /> {result.name} - {result.activitySpecs.price}€
                      </div>
                    </ListGroup.Item>
                  )
                }

              </Link>
            ))}
          </ListGroup>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
