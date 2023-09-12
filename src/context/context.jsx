import { createContext, useState } from "react";
import api from "../api/api";
import { toast } from "react-toastify";
import { CookiesProvider, useCookies } from "react-cookie";

const Context = createContext();
/*eslint-disable */
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [cookies, setCookie] = useCookies(["cookieName"]);

  async function handleLogin(event, email, password) {
    event.preventDefault();
    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      if (response) {
        toast.success(`seja bem vindo(a) ${response.data.nome}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("user", JSON.stringify(response.data));

        // setCookie("cookieName", "cookieValue", {
        //   path: "/",
        //   expires: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 4,
        // });

        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  return (
    <Context.Provider value={{ handleLogin, user, setUser }}>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        {children}
      </CookiesProvider>
    </Context.Provider>
  );
}

export { Context, AuthProvider };
