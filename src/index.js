import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/app/app";
import * as serviceWorker from "./serviceWorker";
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_en from "./translations/en/common.json";
import common_es from "./translations/es/common.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',  // React already does escaping,
  resources: {
    en: {
        common: common_en               // 'common' is our custom namespace
    },
    es: {
        common: common_es
    },
},
});

ReactDOM.render(
  <React.StrictMode>
     <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
