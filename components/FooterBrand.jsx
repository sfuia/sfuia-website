import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import { useState } from "react";

const FooterBrand = ({ href, src, alt }) => {
  const [size, setSize] = useState(25);

  return (
    <Navbar.Brand target="_blank" href={href}

      >
      <Image src={src} alt={alt} width={size} height={size} style={{transition: "all 2s"}}
            onMouseEnter={() => setSize(30)}
            onMouseLeave={() => setSize(25)}/>
    </Navbar.Brand>
  );
};

export default FooterBrand;
