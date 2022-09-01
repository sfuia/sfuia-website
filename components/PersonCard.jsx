import { Card } from 'react-bootstrap';

function PersonCard({key, name, description}) {
  const image = require('public/brian-rahadi.jpeg')
  return (
    <Card style={{ width: '18rem', display:'inline-block', margin:'1.5em', flexShrink: '0'}} key={key}>
      <Card.Img variant="top" src="https://brianrahadi.github.io/brian-rahadi.jpg" />
      <Card.Body style={{textAlign: 'center'}}>
        <Card.Title>{ name }</Card.Title>
        <Card.Text>
          { description }
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PersonCard;