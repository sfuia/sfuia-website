import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import EventCard from "components/EventCard";
import { Container, Carousel } from "react-bootstrap";
import { Fade, Slide } from "react-awesome-reveal";
import Banner from "components/Banner";
import events from "data/events.json";

export default function Home() {
  let upcomingEvents = events
    .filter(({ date }) => {
      return new Date(date) > new Date();
    })
    .sort((eventA, eventB) => {
      return new Date(eventB.date) - new Date(eventA.date);
    });

  return (
    <div>
      {/* Start of Landing Image */}
      <Banner
        imageSrc="/halloscream-photo.jpeg"
        text="Simon Fraser University Indonesian Association"
        height="92"
      />
      {/* End of Landing Image */}

      {upcomingEvents.length > 0 ? (
        <Slide>
          <Container
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              margin: "3em auto",
              border: "0.5em dotted rgb(166, 25, 46)",
              padding: "1em",
            }}
          >
            <h2>Upcoming Events</h2>
            <div>
              {upcomingEvents.map(
                ({
                  id,
                  title,
                  text,
                  imgSrc,
                  place,
                  placeLink,
                  date,
                  registerLink,
                }) => {
                  return (
                    <EventCard
                      key={id}
                      title={title}
                      text={text}
                      imgSrc={imgSrc}
                      place={place}
                      placeLink={placeLink}
                      date={new Date(date)}
                      registerLink={registerLink}
                    />
                  );
                }
              )}
            </div>
          </Container>
        </Slide>
      ) : (
        <></>
      )}

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
