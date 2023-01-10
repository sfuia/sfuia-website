import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import { Container, Carousel } from "react-bootstrap";
import { Fade, Slide } from "react-awesome-reveal";
import Banner from "components/Banner";
import { images } from "next.config";

export default function Home({ feed }) {
  const images = feed.data;
  return (
    <div>
      {/* Start of Landing Image */}
      <Banner
        imageSrc="/halloscream-photo.jpeg"
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
              <div className="card-body">
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
      {/* End of About Us */}
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

      <Slide triggerOnce>
        {/* if(true) {<p>Hello</p>} */}
        {images &&
          images.map((image, index) => (
            // {(() => {
            //   if (index % 3 == 0) {
            //     return (<div className="row">);
            //   }
            // })()}
            // if(true) {
            <div key={image.id}>
              <img
                width={"25vw"}
                height={"25vw"}
                src={image.media_url}
                alt={image.caption}
              />
            </div>
            // }
          ))}
      </Slide>
    </div>
  );
}

export const getStaticProps = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption, media_url, timestamp, media_type, permalink&access_token=${process.env.INSTAGRAM_KEY}`;
  const data = await fetch(url);
  const feed = await data.json();

  return {
    props: {
      feed
    }
  };
};
