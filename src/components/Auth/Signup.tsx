import React from "react";

interface SignUpProps {
  updateToken: Function;
}

interface SignUpState {
  username: string;
  password: string;
  errors: {
    username: string;
    password: string;
  };
}

export class Signup extends React.Component<SignUpProps, SignUpState> {
  constructor(props: SignUpProps) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: {
        username: "",
        password: "",
      },
    };
  }

  handleChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "username":
        errors.username =
          value.length < 6
            ? "Username must be at least 6 characters long!"
            : "";
        break;
      case "password":
        errors.password =
          value.length < 6
            ? "Password must be at least 6 characters long!"
            : "";
        break;
      default:
        break;
    }
    this.setState(Object.assign(this.state, { errors, [name]: value }));
    console.log(this.state.errors);
  };

  handleSubmit = (event: any) => {
    event.preventDefault();

    let validity = true;
    Object.values(this.state.errors).forEach(
      (val) => val.length > 0 && (validity = false)
    );
    if (validity === true) {
      fetch("http://localhost:3000/user/signup", {
        method: "POST",
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
        headers: new Headers({
          "content-Type": "application/json",
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.props.updateToken(data.sessionToken); //may be token
          console.log(data);
        });
      console.log("Registering can be done");
    } else {
      console.log("You cannot be registered!!!"); //show error later
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>Sign Up</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="username">
              <label htmlFor="username">Username</label>
              <input
                type="username"
                name="username"
                onChange={this.handleChange}
              />
              {errors.username.length > 0 && (
                <span style={{ color: "red" }}>{errors.username}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
              />
              {errors.password.length > 0 && (
                <span style={{ color: "red" }}>{errors.password}</span>
              )}
            </div>
            <div className="submit">
              <button>Sign Me Up!</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
