import { Button, Card } from "react-bootstrap";
import styles from "../styles/eventcard.module.scss";

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
              Registration Form
            </Button>
          ) : (
            <Button variant="secondary" size="lg" disabled>
              Registration Form TBA
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
          Place: {place}&nbsp; (
          <a href={placeLink} target="_blank" rel="noreferrer">
            maps
          </a>
          ) <br />
          Date: {date.toDateString()} <br />
          Time: {date.toTimeString()}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EventCard;
