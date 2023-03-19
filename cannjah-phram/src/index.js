import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./common/Style.css";
import "./common/responsive.css";
import { store } from "./services/app/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import pro_routers from "./common/Router_pro";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <RouterProvider router={pro_routers} />
    {/* </React.StrictMode> */}
  </Provider>
);
