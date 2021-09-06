import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from "axios";
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
let token = localStorage.getItem("token");
axios.defaults.baseURL = "http://localhost:3001/api";
axios.defaults.headers.common["Authorization"] = token;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500; // default
};
axios.interceptors.request.use(
  (request) => {
    console.log(request);
    // Edit request config
    return request;
  },
  (error) => {
    console.log("error from root", error);
    return error;
    //  Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    // Edit response config
    return response;
  },
  (error) => {
    console.log(error);
    return error;
    // Promise.reject(error);
  }
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
