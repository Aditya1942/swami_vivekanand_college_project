import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router";
import Dashboard from "./screens/Dashboard";
import "./index.css";
const BASE_URL = process.env.REACT_APP_API_URL;

const AdminIndex = () => {
  let { path, url } = useRouteMatch();

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.text())
      .then((res) => {
        console.log("Output: ", res);
      });
  }, []);
  const test = async () => {
    await fetch(BASE_URL)
      .then((res) => res.text())
      .then((res) => {
        console.log("Output: ", res);
      });
  };
  return (
    <>
      <Dashboard />
    </>
  );
};

export default AdminIndex;
