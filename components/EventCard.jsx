import { Button, Card } from 'react-bootstrap';
import styles from '../styles/eventcard.module.scss'

function EventCard({title, text, imgSrc, date}) {
  return (
    <Card className={`${styles.eventCard}`}>
      <Card.Header>{title}</Card.Header>
      <Card.Img variant="top" src={imgSrc} style={{objectFit: 'cover', height: '10em', width: '100%'}}/>
      <Card.Body>
        {/* <Card.Title>Special title treatment</Card.Title> */}
        <Card.Text>
          {text}
        </Card.Text>
        <hr></hr>
        <Card.Text>
          Date: {date.toDateString()} <br></br>
          Time: {date.toTimeString()}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EventCard;