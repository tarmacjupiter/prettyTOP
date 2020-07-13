import React from "react";
import Logo from "../../assets/images/toplogosquare.svg";
import { Link } from "react-router-dom";

export default function TopLogo() {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="TOP Logo"
          width={200}
          height={200}
          style={{ marginTop: 45, marginBottom: 5 }}
        />
      </Link>
    </div>
  );
}
