import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import Food from "./food";

const Cards = ({ response }) => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    if (response) {
      setFoods(response.data.hits);
      console.log(foods);
    }
  }, [response, foods]);

  return (
    <Container>
      <Row>
        {foods !== [] ? (
          foods.map((food, index) => (
            <Col key={index} sm={12} md={6} lg={4}>
              <Link to={`/ratings/${index}`}>
                <Food food={food} />
              </Link>
            </Col>
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { response: state.response };
};

export default connect(mapStateToProps)(Cards);
