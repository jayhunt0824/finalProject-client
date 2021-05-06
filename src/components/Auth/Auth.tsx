import React from "react";
import { Container, Row, Col, Label } from "reactstrap";
import { Signup } from "./Signup";
import { Login } from "./Login";
// import mojitoeffect from "../Home/assets/mojitoeffect.jpg";
import background from "../Home/assets/background.jpg";
import backgroundflip from "../Home/assets/backgroundflip.jpg";
import drinklogo from "../Home/assets/nobackground.png";

export interface AuthProps {
  updateToken: Function;
  // updateUsername: Function;
}

export interface AuthState {
  displayLogin: boolean;
}

export class Auth extends React.Component<AuthProps, AuthState> {
  constructor(props: AuthProps) {
    super(props);
    this.state = {
      displayLogin: true,
    };
  }

  toggle = () => this.setState({ displayLogin: !this.state.displayLogin });

  render() {
    return (
      <div className="auth">
        <div className="authPicDiv">
          <img className="authPic" src={background} alt="" />
          {/* <img className="drinklogo" src={drinklogo} alt="" /> */}
          {/* <img className="authPic2" src={backgroundflip} alt="" /> */}
          {/* <img className="mojito" src={mojitoeffect} alt="" /> */}
        </div>

        <Row className="justify-content-md-center" style={{ width: "auto" }}>
          {this.state.displayLogin ? (
            <Login
              updateToken={this.props.updateToken}
              // updateUsername={this.props.updateUsername}
            />
          ) : (
            <Signup
              updateToken={this.props.updateToken}
              // updateUsername={this.props.updateUsername}
            />
          )}
        </Row>
        <Row
          className="justify-content-md-center"
          style={{
            position: "relative",
            color: "rgb(234, 238, 8)",
            fontFamily: "Orbitron",
            bottom: 590,
            left: -30,
          
          }}
        >
          {this.state.displayLogin ? (
            <a
              style={{ cursor: "pointer", fontSize: 16 }}
              onClick={this.toggle}
            >
              New here? Register.
            </a>
          ) : (
            <a
              style={{ cursor: "pointer", fontSize: 16 }}
              onClick={this.toggle}
            >
              Already have an account? Log in.
            </a>
          )}
        </Row>
        {/* <Signup updateToken={this.props.updateToken} />
        <Login updateToken={this.props.updateToken} /> */}
      </div>
    );
  }
}
