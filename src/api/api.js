import axios from "axios";

import { parseCookies } from "nookies";

const { ["userToken"]: token } = parseCookies();

export default axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
