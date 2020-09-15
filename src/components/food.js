import React from "react";
import Card from "react-bootstrap/Card";

const Food = ({ food }) => {
  const { label, image } = food.recipe;
  return (
    <Card style={{ marginTop: "1rem", marginBottom: "1rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body style={{ minHeight: 124 }}>
        <Card.Title>{label}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Food;
