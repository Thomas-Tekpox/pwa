import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline } from "@mui/material";
import Base from "./templates/Base";

import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import Informations from "./pages/Informations";
import Reservations from "./pages/Reservations";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <Base>
      {[
        <Index key={"index"} />,
        <Informations key={"informations"} />,
        <Gallery key={"gallery"} />,
        <Reservations key={"reservations"} />,
      ]}
    </Base>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
