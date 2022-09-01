import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";

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
            flexDirection: "row",
          }}
        >
          <Navbar.Brand target="_blank" href="https://www.instagram.com/sfuia/">
            <Image
              src="/instagram.svg"
              alt="Instagram Logo"
              width={25}
              height={25}
            />
          </Navbar.Brand>
          <Navbar.Brand target="_blank" href="mailto:sfu.indonesia@gmail.com">
            <Image
              src="/envelope.svg"
              alt="Envelope Logo"
              width={25}
              height={25}
            />
          </Navbar.Brand>
        </div>

        <Navbar.Text>
          Copyright &copy; 2022 SFUIA. All rights Reserved. &emsp;
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Footer;
