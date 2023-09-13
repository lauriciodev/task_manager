import { createContext, useState } from "react";
import api from "../api/api";
import { toast } from "react-toastify";
import { CookiesProvider, useCookies } from "react-cookie";

const Context = createContext();
/*eslint-disable */
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

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
        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

        setCookie("user", response.data, {
          path: "/",
        });

        console.log("logado");
        console.log(response.data.token);

        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
      toast.error("Email ou senha incorretos", {
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
