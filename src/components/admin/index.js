import { useEffect } from "react";
import { useCookies } from "react-cookie";

function Admin({ children }) {
  const [cookie] = useCookies(["user"]);
  useEffect(() => {
    if (!cookie.user.token) {
      window.location.href = "/login";
    }
  }, []);

  return children;
}

export default Admin;
