import Image from "next/image";
import { Carousel } from "react-bootstrap";
import {Fade } from "react-awesome-reveal";

const Banner = ({imageSrc, text}) => {
  return (
    <div className="banner">
      <div
        className="image-container"
        style={{ height: "95vh", width: "100%", position: "relative" }}
      >
        <Fade triggerOnce>
          <Image
            style={{opacity: '0.6', backgroundColor: 'black'}}
            src={imageSrc}
            layout="fill"
            objectFit="cover"
            margin="auto"
          ></Image>
        </Fade>
      </div>
      <Carousel.Caption
        style={{ top: "50%", bottom: "50%", color: "white" }}
        className="animated fadeInDown"
      >
        <h1
          className="carousel-title"
          style={{
            zIndex: "100",
            fontSize: "4em",
          }}
        >
          <Fade delay={200} triggerOnce>
            <span >
              {text}
            </span>
          </Fade>
        </h1>
      </Carousel.Caption>
    </div>
  );
};


export default Banner;