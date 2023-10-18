import EventCard from "components/EventCard";
import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import events from "data/events.json";
import Banner from "components/Banner";

export default function Team() {
  let pastEvents = events
    .filter(({ date }) => {
      return new Date(date) <= new Date();
    })
    .sort((eventA, eventB) => {
      return new Date(eventB.date) - new Date(eventA.date);
    });

  let upcomingEvents = events
    .filter(({ date }) => {
      return new Date(date) > new Date();
    })
    .sort((eventA, eventB) => {
      return new Date(eventB.date) - new Date(eventA.date);
    });

  return (
    <div>
      <Fade triggerOnce>
        <Banner
          imageSrc="/sfuia-welcomeparty-all.jpeg"
          text="Events"
          height="50"
        />

        {upcomingEvents.length > 0 ? (
          <Container
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              margin: "3em auto",
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
        ) : (
          <div></div>
        )}

        <Container
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: "3em auto",
          }}
        >
          <h2>Past Events</h2>

          {pastEvents.map(
            ({ id, title, text, imgSrc, place, placeLink, date, photoLink}) => {
              return (
                <EventCard
                  key={id}
                  title={title}
                  text={text}
                  imgSrc={imgSrc}
                  place={place}
                  placeLink={placeLink}
                  date={new Date(date)}
                  photoLink={photoLink}
                />
              );
            }
          )}
        </Container>
      </Fade>
    </div>
  );
}
