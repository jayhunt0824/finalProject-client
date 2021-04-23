import React from "react";
import "./App.css";
import { Auth } from "./components/Auth/Auth";
import { SiteBar } from "./components/Home/Navbar";
import { Footer } from "./components/Home/Footer";
import MainPage, { MainPageProps } from "./components/Home/MainPage";
import { Route } from "react-router-dom";

export interface AppProps {
  editSearchTerm?: MainPageProps;
}

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
        <Route path="/user" component={Auth} />
        {/* <Auth /> */}
        <Route path="/">
          <MainPage />
        </Route>
        {/* <MainPage /> */}

        <Footer />
      </div>
    );
  }
}

export default App;
