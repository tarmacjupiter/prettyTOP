import React from "react";
import Logo from "../../../components/elements/Logo";
import Bugs from "../../../components/elements/Bugs";
import ReactGoogleSlides from "react-google-slides";
import ReactPlayer from "react-player";

export default function SlidesPages(props) {
  return (
    <div>
      <Logo />
      <h1 style={{ textAlign: "center" }}>{props.name}</h1>
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
          slidesLink={props.googleslideurl}
          showControls
          wideMobile
          slideDuration={999999}
        />
        <ReactPlayer
          url={props.youtubeurl}
          style={{ marginRight: 10 }}
          width={640}
          height={430}
          wideMobile
          controls={true}
        />
      </div>
      <Bugs />
    </div>
  );
}
