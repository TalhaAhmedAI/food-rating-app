import React, { useState } from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";

const Cards = ({ response }) => {
  const [results, setResults] = useState([]);
  if (response) {
    setResults(response.data.hits);
  }
  return (
    <div>
      {results ? (
        results.map((result) => <h1>{result.recipe.label}</h1>)
      ) : (
        <h1>No results</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { response: state.response };
};

export default connect(mapStateToProps)(Cards);
