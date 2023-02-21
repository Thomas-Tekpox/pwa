import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline } from "@mui/material";
import Base from "./templates/Base";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import Carte from "./pages/Carte";
import Gallery from "./pages/Gallery";
import Informations from "./pages/Informations";
import Reservations from "./pages/Reservations";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Base>
        {[
          <Carte keyName={"carte"} key={"carte"} />,
          <Informations keyName={"informations"} key={"informations"} />,
          <Gallery keyName={"gallery"} key={"gallery"} />,
          <Reservations keyName={"reservation"} key={"reservation"} />,
        ]}
      </Base>
    </LocalizationProvider>
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
