import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import EventCard from "components/EventCard";
import { Container, Card } from "react-bootstrap";
import { Fade, Slide } from "react-awesome-reveal";
import Banner from "components/Banner";
import events from "data/events.json";
import { EmbedSocialWidget } from "components/EmbedSocialWidget";
import EventCarousel from "components/EventCarousel";

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
            <Card style={{ width:'24rem',height:"20rem" , backgroundColor:"ghostwhite"}}>
              <Card.Body>
                <Card.Title style={{fontSize:"2rem"}}>About Us</Card.Title>
                <Card.Text>
                Our aim is to gather people and create a friendly community to
                  enjoy and connect with. We host events for Indonesian
                  students, ranging from cultural events, sports tournaments to
                  social gatherings. Come and join us, we are here to make your
                  experience memorable.
                </Card.Text>
                <Card.Link href="/">Our Team</Card.Link>
              </Card.Body>
            </Card>
          </Slide>
        </div>
        <div className={styles.imageWrapper}>
          <Slide triggerOnce>
            <div max-width="16rem" max-height="16rem">
              <Image
                alt="about-us"
                src="/sfuia-about.jpeg"
                width={368}
                height={368}
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
            <Card style={{ width: '24rem',height:"20rem" , backgroundColor:"ghostwhite"}}>
              <Card.Body>
                <Card.Title style={{fontSize:"2rem"}}>Vision</Card.Title>
                  <Card.Text>
                    To create a more active and engaging environment for Indonesian students,
                    fostering their success at SFU.
                  </Card.Text>
              </Card.Body>
            </Card>
          </Slide>
        </div>
        <div>
          <Slide triggerOnce>
            <Card style={{ width: '24rem',height:"20rem" , backgroundColor:"ghostwhite"}}>
              <Card.Body >
                <Card.Title style={{fontSize:"2rem"}}>Mision</Card.Title>
                  <Card.Text>
                    To empower students by providing them valuable organizational experience,
                    fostering personal growth, and honing their working skills
                    <br /><br />
                    Inspire students to cultivate stronger bonds within the community through the
                    creation of breathtaking and engaging activities
                  </Card.Text>
              </Card.Body>
            </Card>
          </Slide>
        </div>
      </Container>
      {/* End of About Us */}

      <Container>
        <h2>Current events</h2>
        <EventCarousel/>
      </Container>

      
      
      <Container>
        <EmbedSocialWidget/>
      </Container>
    </div>
  );
}
