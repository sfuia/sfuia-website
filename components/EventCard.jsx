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
        {new Date(date) > new Date() ? (
          registerLink ? (
            <Button
              href={registerLink}
              variant="danger"
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
        ) : (
          ""
        )}
        <hr></hr>
        {console.log(placeLink)}
        <Card.Text>
          Place: {place}&nbsp; (
          <a href={placeLink} target="_blank">
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
