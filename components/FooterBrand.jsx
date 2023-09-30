import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import { useState } from "react";

const FooterBrand = ({ href, src, alt }) => {
  const [size, setSize] = useState(25);

  return (
    <Navbar.Brand target="_blank" href={href} className="hover:scale-125 transform w-8 h-8 transition duration-200">
      <Image src={src} alt={alt} width={size} height={size}/>
    </Navbar.Brand>
  );
};

export default FooterBrand;
