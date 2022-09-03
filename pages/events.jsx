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
        <Container>
          <h2>Upcoming Events</h2>
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
        </Container>
        <Container>
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
