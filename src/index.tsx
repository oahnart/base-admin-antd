import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider as StoreProvider } from "react-redux";

import Loading from "containers/Loading";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "redux/store";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { getLocalStorage } from "utils/localStorage";
import { LANG } from "utils/localStorage/type";
import en from "./locales/en/index.json";
import kr from "./locales/kr/index.json";

const langMultiple = getLocalStorage(LANG, 0);

function getLoading() {
  setInterval(() => {}, 2000);
  return <Loading />;
}

i18next.init({
  interpolation: { escapeValue: false },
  lng: langMultiple,
  resources: {
    kr: { translation: kr },
    en: { translation: en },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Suspense fallback={getLoading()}>
          <I18nextProvider i18n={i18next}>
            <App />
          </I18nextProvider>
        </Suspense>
      </PersistGate>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
