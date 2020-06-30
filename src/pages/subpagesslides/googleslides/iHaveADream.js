import React from "react";
import Logo from "../../../components/elements/Logo";
import Bugs from "../../../components/elements/Bugs";
import ReactGoogleSlides from "react-google-slides";
import ReactPlayer from "react-player";

export default function IHaveADream() {
  return (
    <div>
      <Logo />
      <h1 style={{ textAlign: "center" }}>I Have A Dream</h1>
      <div
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
          display: "flex",
        }}
      >
        <ReactGoogleSlides
          width={640}
          height={430}
          slidesLink="https://docs.google.com/presentation/d/1Dtwu8FxQCYbR6V1yYDXBsbDS4M9wx8pVaNnh06GWs7U/edit?usp=sharing"
          showControls
          slideDuration={999999}
        />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=kCYPV8xlT2M"
          style={{ marginRight: 10 }}
          width={640}
          height={430}
          controls={true}
        />
      </div>
      <Bugs />
    </div>
  );
}
