import React from "react";
import Logo from "../../components/elements/Logo";
import Bugs from "../../components/elements/Bugs";
import ReactPlayer from "react-player";

export default function VideoPages(props) {
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
        <ReactPlayer
          url={props.youtubeurl}
          width={640}
          height={430}
          controls={true}
        />
      </div>
      <Bugs />
    </div>
  );
}
