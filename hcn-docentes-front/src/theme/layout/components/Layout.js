import React from "react";
import { useSelector } from "react-redux";
import Aside from "./Aside";
import Topbar from "./Topbar";

export function Layout({ children }) {
  const { layoutProps } = useSelector(
    ({ layout }) => ({
      layoutProps: layout.config,
    })
  );

  return (
    <div className="d-flex flex-column">
      <Topbar />
      <div className="d-flex flex-row">
        { layoutProps.aside && <Aside /> }
        <div className="content">
          { children }
        </div>
      </div>
    </div>
  );
}