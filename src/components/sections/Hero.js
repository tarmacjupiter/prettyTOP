import React, { useState } from "react";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
import { Link } from "react-router-dom";
import Logo from "../../components/elements/Logo";
import Bugs from "../../components/elements/Bugs";

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

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
      <div>
        <h1 style={{ textAlign: "center" }}>
          The Orthodox Project
          <br />
          <span className="text-color-primary" style={{ fontSize: 32 }}>
            TOP
          </span>
        </h1>
      </div>

      <div className="container-xs">
        <p style={{ textAlign: "center" }}>
          A collection of all the slides, lectures, and videos from the services
          provided by servants to highschoolers. From St. Mary's Coptic Orthodox
          Church of Chicago. TEST FOR CONNECTION
        </p>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginBottom: 30,
          }}
        >
          <ButtonGroup>
            <Button tag="a" color="primary" wideMobile>
              <Link to="/tableofcontents">To Slides</Link>
            </Button>
            <Button tag="a" color="primary" wideMobile>
              <Link to="/videos">To Videos</Link>
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div>
        <a
          data-video="https://player.vimeo.com/video/174002812"
          href="#0"
          aria-controls="video-modal"
          onClick={openModal}
        >
          <Image
            className="has-shadow"
            src={require("./../../assets/images/topthumbnail.jpeg")}
            alt="Hero"
            width={896}
            height={504}
            style={{ paddingBottom: 30 }}
          />
        </a>
      </div>
      <Modal
        id="video-modal"
        show={videoModalActive}
        handleClose={closeModal}
        video="https://player.vimeo.com/video/433719963"
        videoTag="iframe"
      />
      <Bugs />
    </div>
  );
};

export default Hero;
