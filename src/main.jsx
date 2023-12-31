import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Global } from "@emotion/react";
import { reset, global } from "./styles/global.js";
import { AuthProvider } from "./context/auth-context.jsx";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Global styles={reset} />
        <Global styles={global} />
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
