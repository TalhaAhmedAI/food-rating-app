import { combineReducers } from "redux";

const submitLocationReducer = (location = null, action) => {
  if (action.type === "SUBMIT_LOCATION") {
    return action.payload;
  }
  return location;
};

const fetchFoodReducer = (response = null, action) => {
  if (action.type === "FETCH_FOOD") {
    return action.payload;
  }
  return response;
};

export default combineReducers({
  location: submitLocationReducer,
  response: fetchFoodReducer,
});
