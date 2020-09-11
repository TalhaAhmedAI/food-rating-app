import React from "react";
import Card from "react-bootstrap/Card";

const Food = ({ food }) => {
  const { label, image } = food.recipe;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{label}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Food;
