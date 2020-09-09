import axios from "axios";

export default axios.create({
  baseURL: "https://developers.zomato.com/api/v2.1",
  headers: {
    Accept: "application/json",
    "user-key": "90f5822669d7f508e9cd5982c412f5a5",
  },
});
