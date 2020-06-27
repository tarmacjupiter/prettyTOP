import React from "react";
import Logo from "../../assets/images/toplogo.svg";
import { Link } from "react-router-dom";

export default function TopLogo() {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Link to="/">
        <img src={Logo} alt="TOP Logo" width={164} height={164} />
      </Link>
    </div>
  );
}
