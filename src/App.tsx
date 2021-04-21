import React from "react";
import "./App.css";
// import { Navbar } from "./components/Home/Navbar";
// import { MainPage } from "./components/Home/MainPage";
import { Auth } from "./components/Auth/Auth";
import { Route } from "react-router-dom";
import { SiteBar } from "./components/Home/Navbar";
import { Footer } from "./components/Home/Footer";
import MainPage from "./components/Home/MainPage";

export interface AppProps {}

export interface AppState {
  // sessionToken: string;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      sessionToken: "",
    };
  }

  // updateToken = (sessionToken: string) => {
  //   localStorage.setItem("token", sessionToken);
  //   this.setState({ sessionToken: sessionToken });
  //   console.log(sessionToken);
  // };

  render() {
    return (
      <div>
        <SiteBar />
        <Route path="/" component={MainPage} />
        <Route path="/auth" component={Auth} />
        <Footer />
      </div>
    );
  }
}

export default App;
