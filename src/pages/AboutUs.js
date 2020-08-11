import React from "react";
import Logo from "../components/elements/Logo";
import Bugs from "../components/elements/Bugs";
import Michael from "../assets/images/profiles/michael.jpg";
import Anthony from "../assets/images/profiles/anthony.png";
import David from "../assets/images/profiles/david.jpg";
import Theo from "../assets/images/profiles/theo.JPG";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export default function AboutUs() {
  return (
    <div>
      <Logo />
      <h1 style={{ textAlign: "center" }}>About Us</h1>
      <Carousel slidesPerPage={1} centered dots arrows infinite>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src={Michael} width={"100%"} height={"100%"} alt="Michael" />
          <h2
            style={{
              textAlign: "center",
              textDecoration: "underline",
              color: "#67CEAC",
            }}
          >
            Michael
          </h2>
          <h3 style={{ textAlign: "center" }}>Content Provider</h3>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <a href="https://www.facebook.com/michaelelky">
              <FacebookIcon style={{ fontSize: 36 }} />
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src={Anthony} width={"100%"} height={"100%"} alt="Anthony" />
          <h2
            style={{
              textAlign: "center",
              textDecoration: "underline",
              color: "#67CEAC",
            }}
          >
            Anthony
          </h2>
          <h3 style={{ textAlign: "center" }}>Developer</h3>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <a href="https://github.com/tarmacjupiter">
              <GitHubIcon style={{ fontSize: 36 }} />
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src={David} width={400} height={400} alt="David" />
          <h2
            style={{
              textAlign: "center",
              textDecoration: "underline",
              color: "#67CEAC",
            }}
          >
            David
          </h2>
          <h3 style={{ textAlign: "center" }}>Brand Designer</h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src={Theo} width={400} height={400} alt="Theo" />
          <h2
            style={{
              textAlign: "center",
              textDecoration: "underline",
              color: "#67CEAC",
            }}
          >
            Theo
          </h2>
          <h3 style={{ textAlign: "center" }}>Coordinator/Developer</h3>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <a href="https://github.com/TMIK1">
              <GitHubIcon style={{ fontSize: 36 }} />
            </a>
          </div>
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
