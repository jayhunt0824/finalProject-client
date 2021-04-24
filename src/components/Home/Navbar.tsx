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
        <Navbar className="navBar">
          <NavbarBrand href="/" id="swig" className="mr-auto">
            SWIG
          </NavbarBrand>
          <NavItem className="navItem">
            <Link className="links" to="/user">
              Login
            </Link>
          </NavItem>
          <NavItem>
            {/* <Link className="links" to="/myrecipes">
              Recipes
            </Link> */}
          </NavItem>
          {/* <NavbarToggler onClick={this.toggleSitebar} className="mr-2" />
          <Collapse isOpen={this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link to="/user">Login</Link>
              </NavItem>
              <NavItem>
                <Link to="/myrecipes">Recipes</Link>
              </NavItem>
            </Nav>
          </Collapse> */}
        </Navbar>
      </div>
    );
  }
}

export default Sitebar;
