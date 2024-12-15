import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.css";

import Router from "./router";
import i18n from "./translation";

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <I18nextProvider i18n={i18n}>
      <Router />
    </I18nextProvider>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
