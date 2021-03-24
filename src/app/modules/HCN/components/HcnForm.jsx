import React from "react";
import Nav from 'react-bootstrap/Nav';

function HcnForm() {
  return (
    <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default HcnForm;