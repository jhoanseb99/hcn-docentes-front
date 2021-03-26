import React from "react";
import { Content } from "./Content";
import { Header } from "./Header.jsx";

export function Layout({ children }) {
  return (
    <Header>
      <Content>
      { children }
      </Content>
    </Header>
  );
}
