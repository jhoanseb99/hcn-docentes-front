import React from "react";
import CustomNavbar from "../components/CustomNavbar.jsx";

export function Header({ children }) {
  return (
    <div className="d-flex flex-column">
      <CustomNavbar />
      <div className="page">
        { children }
      </div>
    </div>
  );
}