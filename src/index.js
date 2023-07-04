import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import "./index.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <BrowserRouter basename="/project-MyErrand08">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
  //  </React.StrictMode>
);
