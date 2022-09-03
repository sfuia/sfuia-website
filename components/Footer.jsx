import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import FooterBrand from "./FooterBrand";

function Footer() {
  return (
    <Navbar className="navbar" bg="light" expand="lg">
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            height:"30px"
          }}
        >
          <FooterBrand
            href="https://www.instagram.com/sfuia/"
            src="/instagram.svg"
            alt="Instagram Logo"
          />
          <FooterBrand
            href="mailto:sfu.indonesia@gmail.com"
            src="/envelope.svg"
            alt="Envelope Logo"
          />
        </div>

        <Navbar.Text>
          Copyright &copy; 2022 SFUIA. All rights Reserved. &emsp;
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Footer;
