import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../src/components/elements/Logo";
import Button from "../components/elements/Button";
import Bugs from "../../src/components/elements/Bugs";

function refreshPage() {
  window.location.reload(false);
}

export default function TableOfContents() {
  return (
    <div>
      <Logo />
      <h1 style={{ textAlign: "center" }}>Below Are Some of the Videos</h1>
      <Bugs />
    </div>
  );
}
