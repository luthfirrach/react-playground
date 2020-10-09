import React from "react";
import { Navbar } from "react-bootstrap";

export default class NaviBar extends React.Component {
  render() {
    return (
      <Navbar sticky='top' bg='dark' variant='dark'>
        <Navbar.Brand>Rufiru</Navbar.Brand>
      </Navbar>
    );
  }
}
