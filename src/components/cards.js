import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import Food from "./food";

const Cards = ({ response }) => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    if (response) {
      setFoods(response.data.hits);
    }
  }, [response]);

  return (
    <div>
      {foods !== [] ? (
        foods.map((food) => <Food key={uuidv4()} food={food} />)
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { response: state.response };
};

export default connect(mapStateToProps)(Cards);
