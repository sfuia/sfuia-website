import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import FooterBrand from "./FooterBrand";

function Footer() {
  return (
    <Navbar className="navbar" expand="lg">
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
            src="/icons/instagram.svg"
            alt="Instagram Logo"
          />
          <FooterBrand
            href="mailto:sfu.indonesia@gmail.com"
            src="/icons/envelope.svg"
            alt="Envelope Logo"
          />
          <FooterBrand
            href="https://discord.gg/qapgS8x2MC"
            src="/icons/discord.svg"
            alt="Envelope Logo"
          />
        </div>

        <Navbar.Text>
          Copyright &copy; 2022 SFUIA. All Rights Reserved.
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Footer;
