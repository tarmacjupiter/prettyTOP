import React from "react";
import Logo from "../components/elements/Logo";
import { Link } from "react-router-dom";

export default function pageNotFound() {
  return (
    <div>
      <Logo />
      <h1 style={{ textAlign: "center" }}>Error 404</h1>
      <h2 style={{ textAlign: "center" }}>Page Not Found</h2>
      <h6
        style={{
          textAlign: "center",
          margin: 25,
        }}
      >
        Ahhh! This page wasnt found! <br />
        Please click the Logo to return Home
      </h6>
    </div>
  );
}
