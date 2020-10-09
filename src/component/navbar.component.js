import React from "react";
import { Navbar, Form, Button } from "react-bootstrap";

import logo from "../logo.svg";

export default class NaviBar extends React.Component {
  constructor(props) {
    super(props);

    // Ini state saya hardcode aja dulu ya hehe XD

    this.state = {
      navIcons: [
        { Icon: <i class='fa fa-facebook'></i> },
        { Icon: <i class='fa fa-twitter'></i> },
        { Icon: <i class='fa fa-instagram'></i> },
        { Icon: <i class='fa fa-linkedin'></i> },
      ],
    };
  }

  render() {
    return (
      <div className='container'>
        <Navbar className='justify-content-between' sticky='top'>
          <Navbar.Brand>
            <img src={logo} className='App-logo' alt='logo' />
            <a
              className='App-link'
              href='https://reactjs.org'
              target='_blank'
              rel='noopener noreferrer'></a>
          </Navbar.Brand>
          <Form inline>
            {this.state.navIcons.map((navIcon) => (
              <Button className='mr-sm-2' variant='outline-info'>
                <a href='#'>{navIcon.Icon}</a>
              </Button>
            ))}
          </Form>
        </Navbar>
      </div>
    );
  }
}
