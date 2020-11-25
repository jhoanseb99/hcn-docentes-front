import React, {useMemo} from "react";
import Aside from "./Aside";
import Topbar from "./Topbar";

export function Layout({ children }) {
  return (
    <div className="d-flex flex-column flex-row-fluid">
      <Topbar />      
      <div className="d-flex flex-column-fluid">
        <Aside />
        <div className="p-2">
          {children}
        </div>
      </div>
    </div>
  );
}