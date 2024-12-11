import { NavLink } from 'react-router-dom';  // Use NavLink for active link styling
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <Navbar bg="success" variant="light">  {/* Use variant="dark" if needed */}
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/" end activeClassName="active">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/about" activeClassName="active">About</Nav.Link>
          <Nav.Link as={NavLink} to="/hobbies" activeClassName="active">Hobbies</Nav.Link>
          <Nav.Link as={NavLink} to="/contact" activeClassName="active">Contact</Nav.Link>
          <Nav.Link as={NavLink} to="/education" activeClassName="active">Education</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;