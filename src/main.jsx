//for all important libraries
import React from "react";
import ReactDOM from "react-dom/client";// for rendering app into the react
import { BrowserRouter as Router } from "react-router-dom";// to handle routing in this application

import { StateContextProvider } from "./context";
import App from "./App";
import "./index.css";
import { PrivyProvider } from "@privy-io/react-auth";
// creating root element where app will be mounted
const root = ReactDOM.createRoot(document.getElementById("root"));
// to implement privy-step1 ...main.jsx me root render me privyprovider daalo
//rendering the app to the root element.
root.render(
  <PrivyProvider
    appId="cm308ptgu00hd2g0uggxpwasp"
    config={{// for privy appearance
      appearance: {
        theme: "dark",
      },
      embeddedWallets: {
        createOnLogin: "users-without-wallets",
      },
    }}
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </PrivyProvider>,
);
