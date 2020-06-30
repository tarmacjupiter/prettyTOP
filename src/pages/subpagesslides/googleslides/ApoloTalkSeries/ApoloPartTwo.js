import React from "react";
import Logo from "../../../../components/elements/Logo";
import Bugs from "../../../../components/elements/Bugs";
import ReactGoogleSlides from "react-google-slides";

export default function ApoloPartTwo() {
  return (
    <div>
      <Logo />
      <h1 style={{ textAlign: "center" }}>Apolo Part 2</h1>
      <div
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          marginBottom: 10,
        }}
      >
        <h1>#4</h1>
        <ReactGoogleSlides
          width={640}
          height={430}
          slidesLink="https://docs.google.com/presentation/d/1vvZU2yI2JePhml1fCB2jcLviOR-RS46jOyIDnBEYdP8/edit#slide=id.g8946636279_0_0"
          showControls
          slideDuration={999999}
        />
        <h1>#5</h1>
        <ReactGoogleSlides
          width={640}
          height={430}
          slidesLink="https://docs.google.com/presentation/d/1U6tsdn9Zmcd1-jTrycgSffKrDxzUEDM7ukvL_RF1yyk/edit"
          showControls
          slideDuration={999999}
        />
        <h1>#6</h1>
        <ReactGoogleSlides
          width={640}
          height={430}
          slidesLink="https://docs.google.com/presentation/d/1t3BV_wFcJYxeuYXZwdd9oF-Lj3dccoT1kp_2UfaKnhk/edit"
          showControls
          slideDuration={999999}
        />
      </div>
      <Bugs />
    </div>
  );
}
