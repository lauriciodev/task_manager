import { useEffect } from "react";
import { parseCookies } from "nookies";

function Admin({ children }) {
  const { ["userToken"]: token } = parseCookies();

  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  return children;
}

export default Admin;
