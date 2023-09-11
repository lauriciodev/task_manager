import { useEffect } from "react";

const token = localStorage.getItem("token");

function Admin({ children }) {
  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  return children;
}

export default Admin;
