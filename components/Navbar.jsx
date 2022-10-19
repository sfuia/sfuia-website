import Image from "next/image";
import { Container, Nav, Navbar } from "react-bootstrap";
import FooterBrand from "./FooterBrand";

function NavbarComponent() {
  return (
    <Navbar
      className="navbar"
      // bg="light"
      expand="lg"
    >
      <Container style={{ fontSize: "1.1em", fontWeight: "bold" }}>
        <Navbar.Brand href="/">
          <Image src="/sfuia-logo-white.jpg" width="100%" height="50%"></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/team">Team</Nav.Link>
            {/* <Nav.Link href="/blog">Blog</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link href="/contact">Contact Us</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
