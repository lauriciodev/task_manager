import axios from "axios";

console.log(getCookie("username")); // "John Doe"
export default axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
