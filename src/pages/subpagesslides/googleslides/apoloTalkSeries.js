import React from "react";
import Logo from "../../../../src/components/elements/Logo";
import Bugs from "../../../../src/components/elements/Bugs";
import { Link } from "react-router-dom";
import Button from "../../../components/elements/Button";

export default function ApoloTalkSeries() {
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
      <h1 style={{ textAlign: "center" }}>Apolo Talk Series</h1>
      <h3 style={{ textAlign: "center" }}>
        This series is composed of many slide shows
      </h3>
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          to="/tableofcontents/apolotalkseries/apolotalkpart1"
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
              to="/tableofcontents/apolotalkseries/apolotalkpart1"
              style={{ color: "black" }}
            >
              Apolo Talk Part 1
            </Link>
          </Button>
        </Link>

        <Link
          to="/tableofcontents/apolotalkseries/apolotalkpart2"
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
              to="/tableofcontents/apolotalkseries/apolotalkpart2"
              style={{ color: "black" }}
            >
              Apolo Talk Part 2
            </Link>
          </Button>
        </Link>

        <Link
          to="/tableofcontents/apolotalkseries/apolotalkpart3"
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
              to="/tableofcontents/apolotalkseries/apolotalkpart3"
              style={{ color: "black" }}
            >
              Apolo Talk Part 3
            </Link>
          </Button>
        </Link>
      </div>
      <Bugs />
    </div>
  );
}
