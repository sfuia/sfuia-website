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
        height="95"
      />
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
      </Container>
      <Container className={styles.about}>
        <div>
          <Slide>
            <h2>Our vision</h2>
            <p>To become cohesive and inclusive community at SFU. </p>
          </Slide>
        </div>
      </Container>
      <Container className={styles.about}>
        <div>
          <Slide>
            <h2>Our Mission</h2>
            <p>
              Unite indonesian students at sfu and provide them with an
              inclusive-fam like community.
            </p>
            <br />
            <p>
              Provide leadership opportunities and networking skills to
              strengthen individual’s potential
            </p>
            <br />
            <p>
              {" "}
              Create a platform for Indonesian community to gain valuable
              experiences for the future
            </p>
          </Slide>
        </div>
      </Container>
      {/* End of About Us */}
    </div>
  );
}
