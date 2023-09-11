import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./global/styles";

import "react-toastify/dist/ReactToastify.css";

import MyRoutes from "./routes";
import { AuthProvider } from "./context/context";
MyRoutes;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={MyRoutes} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <GlobalStyle />
    </AuthProvider>
  </React.StrictMode>
);
