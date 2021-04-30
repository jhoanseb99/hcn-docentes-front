import React from "react";
import AsideNavbar from "../components/AsideNavbar";

export function Content({ children, aside = true }) {
  return (
    <div className="d-flex flex-row">
      {aside && <AsideNavbar />}
      <div className={`content ${aside ? "with-aside" : ""}`}>{children}</div>
    </div>
  );
}
