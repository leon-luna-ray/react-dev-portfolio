import React from 'react';
import { Card, Button } from "react-bootstrap";

const ProjectCard = props => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.imgSrc} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button href={props.appLink} target="_blank" variant="primary">
          Launch App
        </Button>

        <Button href={props.repoLink} target="_blank" variant="primary">
          Github Repo
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;