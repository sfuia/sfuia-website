import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import { Container, Carousel } from "react-bootstrap";
import {Fade, Slide } from "react-awesome-reveal";

export default function Home() {
  return (
    <div>
      {/* Start of Landing Image */}
      <div className="navbar-overlay">
        <div
          className="image-container"
          style={{ height: "100vh", width: "100%", position: "relative" }}
        >
          <Fade triggerOnce>
            <Image
              src="https://educationsnapshots.com/wp-content/uploads/sites/4/2021/09/simon-fraser-university-burnaby-plaza-renewal-12.jpg"
              layout="fill"
              objectFit="cover"
              margin="auto"
            ></Image>
          </Fade>
        </div>
        <Carousel.Caption
          style={{ top: "50%", bottom: "50%", color: "black" }}
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
              <span style={{ background: "rgba(204, 204, 204, 0.8)" }}>
                Simon Fraser University Indonesian Association
              </span>
            </Fade>
          </h1>
        </Carousel.Caption>
      </div>
      {/* End of Landing Image */}

      {/* Start of About Us */}
      <Container className={styles.about}>
        <div>
          <Slide>
            <h2>About Us</h2>
            <p>
              Our aim is to gather people and create a friendly community to
              enjoy and connect with. We host events for Indonesian students,
              ranging from cultural events, sports tournaments to social
              gathering. Come and join us, we are here to make your experience
              memorable.{" "}
            </p>
          </Slide>
        </div>
        <div className={styles.imageWrapper}>
          <Slide>
            <div>
              <Image
                src="/sfuia-about.jpeg"
                // layout="intrinsic"
                // width="510w"
                // height="384w"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="cover"
              ></Image>
            </div>
          </Slide>
        </div>
      </Container >
      {/* End of About Us */}
    </div>
  );
}
