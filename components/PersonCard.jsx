import { Card } from "react-bootstrap";
import { useState } from "react";

const PersonCard = ({ key, name, description }) => {
  const [isHovered, setHover] = useState(false);

  return (
    <Card
      style={{
        width: "15rem",
        display: "inline-block",
        margin: "1.5em",
        flexShrink: "0",
        boxShadow: '5px 3px 10px black'
      }}
      key={key}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Card.Img
        variant="top"
        src={
          isHovered
            ? "/sfuia-logo.jpeg"
            : "/sfuia-about.jpeg"
        }
        height="350"
        style={{
          objectFit: "cover"
        }}
      />
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PersonCard;
