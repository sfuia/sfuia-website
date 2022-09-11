import { Card } from "react-bootstrap";
import { useState } from "react";

const PersonCard = ({ key, name, description }) => {
  const [isHovered, setHover] = useState(false);

  const image = require("public/brian-rahadi.jpeg");
  return (
    <Card
      style={{
        width: "18rem",
        display: "inline-block",
        margin: "1.5em",
        flexShrink: "0",
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
