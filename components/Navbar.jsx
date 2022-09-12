
import Image from "next/image";
import { Container, Nav, Navbar} from 'react-bootstrap'

function NavbarComponent() {
  return (
    <Navbar
      className="navbar"
      // bg="light"
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="/">
          <Image
      
            src="/sfuia-logo-white.jpg"
            width="100%"
            height="50%"
          ></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/team">Team</Nav.Link>

            {/* <NavDropdown title="Posts" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      
        
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
