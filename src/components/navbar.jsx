import { NavLink } from 'react-router-dom';  // Use NavLink for active link styling
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <Navbar bg="success" variant="light">  {/* Use variant="dark" if needed */}
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</Nav.Link>
          <Nav.Link as={NavLink} to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</Nav.Link>
          <Nav.Link as={NavLink} to="/hobbies" className={({ isActive }) => (isActive ? 'active' : '')}>Hobbies</Nav.Link>
          <Nav.Link as={NavLink} to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</Nav.Link>
          <Nav.Link as={NavLink} to="/education" className={({ isActive }) => (isActive ? 'active' : '')}>Education</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;