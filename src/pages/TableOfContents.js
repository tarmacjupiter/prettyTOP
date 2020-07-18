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
        <Link
          to="/tableofcontents/orthodoxy"
          style={{
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
            width: "210%",
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
        </Link>

        <Link
          to="/tableofcontents/theology"
          style={{
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
            width: "210%",
          }}
        >
          <Button
            tag="a"
            color="primary"
            wideMobile
            style={{ width: "200%", margin: 10 }}
          >
            <Link to="/tableofcontents/theology">Theology</Link>
          </Button>
        </Link>
        <Link
          to="/tableofcontents/apologetics"
          style={{
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
            width: "210%",
          }}
        >
          <Button
            tag="a"
            color="primary"
            wideMobile
            style={{ width: "200%", margin: 10 }}
          >
            <Link to="/tableofcontents/apologetics">Apologetics</Link>
          </Button>
        </Link>
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
        <Link
          to="/tableofcontents/evidenceofchrist"
          style={{
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
            width: "210%",
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
        </Link>

        <Link
          to="/tableofcontents/ihaveadream"
          style={{
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
            width: "210%",
          }}
        >
          <Button
            tag="a"
            color="secondary"
            wideMobile
            style={{ width: "200%", margin: 10 }}
          >
            <Link to="/tableofcontents/ihaveadream" style={{ color: "black" }}>
              I Have a Dream
            </Link>
          </Button>
        </Link>
      </div>
      <Bugs />
    </div>
  );
}
