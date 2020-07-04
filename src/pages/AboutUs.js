import React from "react";
import Logo from "../components/elements/Logo";
import Bugs from "../components/elements/Bugs";
import Michael from "../assets/images/profiles/michael.jpg";
import Anthony from "../assets/images/profiles/anthony.png";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div>
      <Logo />
      <h1 style={{ textAlign: "center" }}>About Us</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: 50,
        }}
      >
        <img src={Michael} alt="Michael" width={200} height={200} />
        <h2 style={{ textAlign: "center", textDecoration: "underline" }}>
          Michael
        </h2>
        <h3 style={{ textAlign: "center", margin: 20 }}>
          Provided all the content videos and slides
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img src={Anthony} alt="Anthony" width={200} height={200} />
        <h2 style={{ textAlign: "center", textDecoration: "underline" }}>
          Anthony
        </h2>
        <h3 style={{ textAlign: "center", margin: 20 }}>Developer</h3>
        <h6 style={{ color: "#5658DD" }}>
          Design by{" "}
          <a
            style={{ textDecoration: "underline", color: "#5658DD" }}
            target="_blank"
            href="https://github.com/cruip/open-react-template"
          >
            Open
          </a>
        </h6>
      </div>
      <Bugs />
    </div>
  );
}
