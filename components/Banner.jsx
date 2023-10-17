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
            style={{opacity: '0.3', backgroundColor: 'black', position: 'absolute', bottom: '0'}}
            alt="banner"
            src={imageSrc}
            layout="fill"
            max-height="500"
            objectFit="cover"
            margin="auto"
          ></Image>
        </Fade>
      </div>
      <Carousel.Caption
        style={{ top: 0.5 * height + "%", color: "white", height:0 }}
      >
        <h1
          className={styles.carouselTitle}
        >
          <Fade delay={350} triggerOnce>
            <span>
              {text}
            </span>
          </Fade>
        </h1>
      </Carousel.Caption>
    </div>
  );
};


export default Banner;