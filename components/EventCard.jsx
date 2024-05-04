import { Button, Card } from "react-bootstrap";
import styles from "../styles/eventcard.module.scss";
import Container from "react-bootstrap";

function EventCard({
  title,
  text,
  imgSrc,
  place,
  placeLink,
  date,
  registerLink,
  photoLink,
}) {
  return (
    <div className={styles.eventContainer}>
    <Card className={styles.eventCard}>
      <Card.Header>{title}</Card.Header>
      <Card.Img
        variant="top"
        src={imgSrc}
        style={{
          objectFit: "cover",
          height: "10em",
          objectFit: "fill",
          backgroundColor: "black",
           cursor: "pointer"
        }}
      />
      <Card.Body>
        <Card.Text>{text}</Card.Text>
        {/* If event date is upcoming, make button for registration link */}
        {/* if registration link exists, provide button with link to regist. otherwise, just make TBA button with no link */}
        {/* If event is past and photoLink exists, provide button with link to google drive photos */}
        {new Date(date) > new Date() ? (
          registerLink ? (
            <Button
              href={registerLink}
              variant="danger"
              rel="noreferrer"
              target="_blank"
              size="lg"
            >
              Registration Link
            </Button>
          ) : (
            <Button variant="secondary" size="lg" disabled>
              Registration Link TBA
            </Button>
          )
        ) : photoLink ? (
          <Button
            href={photoLink}
            variant="success"
            rel="noreferrer"
            target="_blank"
            size="lg"
          >
            Google Drive Photos
          </Button>
        ) : (
          ""
        )}

        <hr></hr>
        <Card.Text>
          Place: {place}&nbsp; 
            { placeLink ? 
            <a href={placeLink} target="_blank" rel="noreferrer">
              (maps)
            </a>
            :
            <a></a>
            }
          <br />
          Date: {
            date.toDateString()
          } 
          <br />
          Time: {
            date.getHours() != 0 ? date.toTimeString() : "TBD"
          }
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default EventCard;
