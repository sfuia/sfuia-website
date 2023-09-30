import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import FooterBrand from "./FooterBrand";
import NewsletterSubscribe from "./newsletter/NewsletterSubscribe";

function Footer() {
  return (
    <Navbar className="navbar" expand="lg">
      <Container className="flex justify-content-center flex-col">
        <NewsletterSubscribe/>
        <div className="mt-2 flex justify-content-center flex-row">
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
          Copyright &copy; {new Date().getUTCFullYear() } SFUIA. All Rights Reserved.
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Footer;
