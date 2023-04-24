import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store";
import App from "./App";
import "./App.css"
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
// persistStore to persist states in store
let persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // provider store provides state to components
  <Provider store={store}>
    {/* PersistGate will integrate persistored states in components */}
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
