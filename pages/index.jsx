import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import { Container, Carousel } from "react-bootstrap";
import { Fade, Slide } from "react-awesome-reveal";
import Banner from "components/Banner";

export default function Home() {
  return (
    <div>
      {/* Start of Landing Image */}
      <Banner
        imageSrc="https://educationsnapshots.com/wp-content/uploads/sites/4/2021/09/simon-fraser-university-burnaby-plaza-renewal-12.jpg"
        text="Simon Fraser University Indonesian Association"
        height="92"
      />
      {/* End of Landing Image */}

      {/* Start of About Us */}
      <Container className={styles.about}>
        <div>
          <Slide triggerOnce>
            <div className={`card ${styles.homeCards}`}>
              <div className="card-header">
                <h2 className="card-title">About us</h2>
              </div>
              <div className="card-body" >
                <p className="card-text">
                  Our aim is to gather people and create a friendly community to
                  enjoy and connect with. We host events for Indonesian
                  students, ranging from cultural events, sports tournaments to
                  social gatherings. Come and join us, we are here to make your
                  experience memorable.{" "}
                </p>
              </div>
            </div>
          </Slide>
        </div>
        <div className={styles.imageWrapper}>
          <Slide triggerOnce>
            <div>
              <Image
                alt="about-us"
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
      </Container>
      <hr className="divider"></hr>
      <Container className={`${styles.about} ${styles.visMis}`}>
        <div>
          <Slide triggerOnce>
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Our Vision</h2>
              </div>
              <div className="card-body">
                <p className="card-text">
                  To become cohesive and inclusive community at SFU.
                </p>
              </div>
            </div>
          </Slide>
        </div>
        <div>
          <Slide triggerOnce>
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Our Mission</h2>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Unite Indonesian students at SFU and provide them with an
                  inclusive family-like community.
                  <br />
                  Provide leadership opportunities and networking skills to
                  strengthen individual’s potential
                  <br />
                  Create a platform for Indonesian community to gain valuable
                  experiences for the future
                </p>
              </div>
            </div>
          </Slide>
        </div>
      </Container>
      {/* End of About Us */}
    </div>
  );
}
