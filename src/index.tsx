import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.css";

import Router from "./router";
import i18n from "./translation";

const App = () => (
  <HashRouter>
    <I18nextProvider i18n={i18n}>
      <Router />
    </I18nextProvider>
  </HashRouter>
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
