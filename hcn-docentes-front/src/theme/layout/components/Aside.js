import React from "react";
import {NavLink}  from "react-router-dom";

export default function Aside() {
  return (
    /* begin::aside-manu */
    <div id="kt_aside" className="sidebar d-flex flex-column flex-row-auto fixed-top">
      <div id="kt_aside_menu" className="my-4 scroll ps ps--active-y" data-menu-vertical="1" data-menu-scroll="1" data-menu-dropdown-timeout="500">
        <ul>
          <li aria-haspopup="true">
            <NavLink to="/anuncios">
              <span className="menu-text">Anuncios</span>
            </NavLink>
          </li>
          <li aria-haspopup="true">
            <NavLink to="/actividades">
              <span className="menu-text">Actividades</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}