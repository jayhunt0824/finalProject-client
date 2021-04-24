import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
export interface NavbarProps {}

export interface NavbarState {
  collapsed: boolean;
}

class Sitebar extends React.Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);
    this.state = { collapsed: true };
  }

  toggleSitebar = () => this.setState({ collapsed: !this.state.collapsed });

  render() {
    return (
      <div>
        <Navbar>
          <NavbarBrand href="/" className="mr-auto">
            reactstrap
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleSitebar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link to="/user">Login</Link>
              </NavItem>
              <NavItem>
                <Link to="/myrecipe">Recipes</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Sitebar;
