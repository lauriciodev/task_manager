import { useCookies } from "react-cookie";

function GetToken() {
  const [cookie] = useCookies(["user"]);
  return cookie.user.token;
}

export default GetToken;
