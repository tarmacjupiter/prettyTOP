import React from "react";
import { Link } from "react-router-dom";

function refreshPage() {
  window.location.reload(false);
}

export default function TableOfContents() {
  return (
    <div>
      <Link to="/" refresh="true">
        <h1>Hello</h1>
      </Link>
    </div>
  );
}
