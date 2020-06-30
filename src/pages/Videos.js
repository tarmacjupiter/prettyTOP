import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../src/components/elements/Logo";
import Button from "../components/elements/Button";
import Bugs from "../../src/components/elements/Bugs";

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
      <h1 style={{ textAlign: "center" }}>Below Are Some of the Videos</h1>
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
          <Link to="/videos/whyorthodox">Why Orthodox?</Link>
        </Button>
        <Button
          tag="a"
          color="primary"
          wideMobile
          style={{ width: "200%", margin: 10 }}
        >
          <Link to="/videos/8criticaldoctrines">8 Critical Doctrines</Link>
        </Button>
        <Button
          tag="a"
          color="primary"
          wideMobile
          style={{ width: "200%", margin: 10 }}
        >
          <Link to="/videos/fallennature">Fallen Nature</Link>
        </Button>
      </div>

      <Bugs />
    </div>
  );
}
