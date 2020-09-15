import axios from "axios";
const APP_ID = "ae411322";
const APP_KEY = "940d4dcade280413f11e4b1a2439788a";

export const submitLocation = (location) => {
  return {
    type: "SUBMIT_LOCATION",
    payload: location,
  };
};

export const fetchFood = (query) => async (dispatch) => {
  const response = await axios.get(
    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10`
  );

  dispatch({ type: "FETCH_FOOD", payload: response });
};

export const submitRating = (id, rating) => async (dispatch) => {
  dispatch({ type: "SUBMIT_RATING", payload: rating });
};
