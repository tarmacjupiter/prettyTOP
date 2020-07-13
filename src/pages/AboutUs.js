import React from "react";
import Logo from "../components/elements/Logo";
import Bugs from "../components/elements/Bugs";
import Michael from "../assets/images/profiles/michael.jpg";
import Anthony from "../assets/images/profiles/anthony.png";
import David from "../assets/images/profiles/david.jpg";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export default function AboutUs() {
  return (
    <div>
      <Logo />
      <h1 style={{ textAlign: "center" }}>About Us</h1>>
      <Carousel slidesPerPage={1} centered dots arrows>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src={Michael} width={"100%"} height={"100%"} />
          <h2 style={{ textAlign: "center", textDecoration: "underline" }}>
            Michael
          </h2>
          <h3 style={{ textAlign: "center" }}>Content Provider</h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src={Anthony} width={"100%"} height={"100%"} />
          <h2 style={{ textAlign: "center", textDecoration: "underline" }}>
            Anthony
          </h2>
          <h3 style={{ textAlign: "center" }}>Developer</h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src={David} width={400} height={400} />
          <h2 style={{ textAlign: "center", textDecoration: "underline" }}>
            David
          </h2>
          <h3 style={{ textAlign: "center" }}>Brand Design</h3>
        </div>
      </Carousel>
      <h6 style={{ color: "#5658DD", textAlign: "center" }}>
        Design by{" "}
        <a
          style={{ textDecoration: "underline", color: "#5658DD" }}
          target="_blank"
          href="https://github.com/cruip/open-react-template"
          rel="noopener noreferrer"
        >
          Open
        </a>
      </h6>
      <Bugs />
    </div>
  );
}
