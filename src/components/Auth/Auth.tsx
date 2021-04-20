import React from "react";

import { Signup } from "./Signup";
import { Login } from "./Login";

export interface AuthProps {}

export interface AuthState {
  sessionToken: string;
}

export class Auth extends React.Component<AuthProps, AuthState> {
  constructor(props: AuthProps) {
    super(props);
    this.state = {
      sessionToken: "",
    };
  }

  updateToken = (sessionToken: string) => {
    localStorage.setItem("token", sessionToken);
    this.setState({ sessionToken: sessionToken });
    console.log(sessionToken);
  };

  render() {
    return (
      <div>
        <Signup updateToken={this.updateToken} />
        <Login updateToken={this.updateToken} />
      </div>
    );
  }
}
