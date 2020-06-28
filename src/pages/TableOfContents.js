import React from "react";
import Logo from "../../src/components/elements/Logo";
import Bugs from "../../src/components/elements/Bugs";
import { Link } from "react-router-dom";
import Button from "../components/elements/Button";

export default function TableOfContents() {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Logo />
      <h1 style={{ textAlign: "center" }}> Some Basics to Review </h1>
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          tag="a"
          color="primary"
          wideMobile
          style={{ width: "200%", margin: 10 }}
        >
          <Link to="/tableofcontents/orthodoxy">Orthodoxy</Link>
        </Button>
        <Button
          tag="a"
          color="primary"
          wideMobile
          style={{ width: "200%", margin: 10 }}
        >
          <Link to="/tableofcontents/orthodoxy">Theology</Link>
        </Button>
        <Button
          tag="a"
          color="primary"
          wideMobile
          style={{ width: "200%", margin: 10 }}
        >
          <Link to="/tableofcontents/orthodoxy">Apologetics</Link>
        </Button>
      </div>
      <h1 style={{ textAlign: "center" }}> Google Slide Presentations </h1>
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          tag="a"
          color="secondary"
          wideMobile
          style={{ width: "200%", margin: 10 }}
        >
          <Link
            to="/tableofcontents/evidenceofchrist"
            style={{ color: "black" }}
          >
            Evidence of Christ
          </Link>
        </Button>
        <Button
          tag="a"
          color="secondary"
          wideMobile
          style={{ width: "200%", margin: 10 }}
        >
          <Link
            to="/tableofcontents/evidenceofchrist"
            style={{ color: "black" }}
          >
            I Have a Dream
          </Link>
        </Button>
        <Button
          tag="a"
          color="secondary"
          wideMobile
          style={{ width: "200%", margin: 10 }}
        >
          <Link
            to="/tableofcontents/evidenceofchrist"
            style={{ color: "black" }}
          >
            Apolo Talk Series
          </Link>
        </Button>
      </div>
      <Bugs />
    </div>
  );
}
