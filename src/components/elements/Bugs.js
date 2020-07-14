import React from "react";
import Button from "../elements/Button";

function openForm() {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSdcgnC878u0Um6eFqtKPIEh2vDde4kuXlQgFEmJjeh2n2ah9w/viewform?usp=sf_link"
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
      <h6>Any Bugs? Contact Us Here:</h6>
      <Button
        tag="a"
        color="dark"
        wideMobile
        onClick={openForm}
        style={{ marginBottom: 30 }}
      >
        Bugs
      </Button>
    </div>
  );
}
