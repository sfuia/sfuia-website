import Image from "next/image";
import { Carousel } from "react-bootstrap";
import {Fade } from "react-awesome-reveal";
import styles from '../styles/banner.module.scss'

const Banner = ({ imageSrc, text, height}) => {

  return (
    <div className="banner">
      <div
        className={styles.imageContainer}
        style={{ height: height + "vh", width: "100%"}}
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
        style={{ top: 0.5 * height + "%", color: "white" }}
      >
        <h1
          className={styles.carouselTitle}
        >
          <Fade delay={350} triggerOnce>
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