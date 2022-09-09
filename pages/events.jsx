import Head from "next/head";
import Image from "next/image";
import EventCard from "components/EventCard";
import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import pastEvents from "data/pastEvents.json";
import upcomingEvents from "data/upcomingEvents.json";
import Banner from "components/Banner";

export default function Team() {
  return (
    <div>
      <Fade triggerOnce>
        <Banner
          imageSrc="/sfuia-olympics.jpeg"
          text="Events"
          height="50"
        />
        <Container style={{textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '3em auto'}}>
          <h2>Upcoming Events</h2>
          <div>
            {upcomingEvents.map(({ id, title, text, imgSrc, date }) => {
            return (
              <EventCard
                key={id}
                title={title}
                text={text}
                imgSrc={imgSrc}
                date={new Date(date)}
              />
            );
          })}
          </div>
        </Container>
        <Container style={{textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '3em auto'}}>
          <h2>Past Events</h2>
          {pastEvents.map(({ id, title, text, imgSrc, date }) => {
            return (
              <EventCard
                key={id}
                title={title}
                text={text}
                imgSrc={imgSrc}
                date={new Date(date)}
              />
            );
          })}
        </Container>
      </Fade>
    </div>
  );
}
