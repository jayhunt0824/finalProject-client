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



export interface NavbarProps {
 
  
}

export interface NavbarState {
  collapsed: boolean;
  sessionToken: string;
  id: string;
}

class Sitebar extends React.Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);
    this.state = { collapsed: true, sessionToken: '', id: '' };
  }

  toggleSitebar = () => this.setState({ collapsed: !this.state.collapsed });

  clearToken = () => {
    localStorage.clear();
    this.setState({sessionToken:''});
    this.setState({id: ''});
    console.log("Logged out");
};

  render() {
    return (
      <div>

      <Nav className="navbar" vertical>
       
      <NavItem>
        <NavLink to="/"  href="/" className="links" >  <i className="fas fa-home"></i>Home</NavLink>
       
        <NavLink to="/user"  href="/user" className="links" >  <i className="fas fa-sign-in-alt"></i>Login</NavLink> 
        
        <NavLink to="/recipe"  href="/recipe" className="links" > <i className="far fa-user"></i>Recipes </NavLink>
        <NavLink to="/comments"  href="/comments" className="links" > <i className="far fa-comments"></i> Chat </NavLink>

        <NavLink  href="https://www.facebook.com" className="links" > <i className="fab fa-facebook-square"></i>Facebook </NavLink> 
        <NavLink  href="https://www.instagram.com" className="links" > <i className="fab fa-instagram"></i>Instagram </NavLink> 
        <NavLink  href="https://www.tiktok.com" className="links" > <i className="fab fa-tiktok"></i>TikTok </NavLink> 
        <NavLink to="/"  href="/" onClick={this.clearToken} className="links" >  <i className="fas fa-sign-out-alt"></i>Logout</NavLink> 
     

        </NavItem>
        
     
   
      
       
      </Nav>










{/* 



        <Navbar className="navBar">
          <div className="coloredNavDiv"></div>
          <NavbarBrand href="/" id="swig" className="mr-auto">
            SWIG
          </NavbarBrand>
          <NavItem className="navItem">
            <Link className="links" to="/user">
              <i className="fas fa-sign-in-alt"></i>
              Login
            </Link>
          </NavItem>
          <NavItem>
            
          </NavItem>
          <NavbarToggler onClick={this.toggleSitebar} className="mr-2" />
          <Collapse isOpen={this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link to="/user">Login</Link>
              </NavItem>
              <NavItem>
                <Link to="/myrecipes">Recipes</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar> */}
      </div>
    );
  }
}

export default Sitebar;
