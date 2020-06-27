import React from "react";
import Button from "../elements/Button";

function openForm() {
  window.open(
    "https://docs.google.com/forms/d/1YryjWjCkPayihzjy3uBoX6Q1JG7TZVQ9-2PnX7HxWqc/prefill"
  );
}

export default function BugsButton() {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h6>Any Bugs? Contact Me Here:</h6>
      <Button
        tag="a"
        color="secondary"
        wideMobile
        onClick={openForm}
        style={{ marginBottom: 30, color: "black" }}
      >
        Bugs
      </Button>
    </div>
  );
}
