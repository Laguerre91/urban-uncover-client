import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function BasicExample() {
  return (

    <Navbar fixed='top' className='Navbar'>
      <Navbar.Brand href="/">Urban Uncover</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">

          <NavLink className={'nav-link'} to={'/'}>Inicio</NavLink>
          <NavLink className={'nav-link'} to={'/contact'}>Contact Us</NavLink>
          <NavDropdown title="Cities" id="cities-dropdown">
            <NavDropdown.Item>
              <NavLink className={'nav-link'} to={'/cities/1'}>Madrid</NavLink>
            </NavDropdown.Item>

          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default BasicExample;