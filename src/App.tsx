import React from "react";
import "./App.css";
import { Auth } from "./components/Auth/Auth";
import Sitebar from "./components/Home/Navbar";
import { Footer } from "./components/Home/Footer";
import MainPage, { MainPageProps } from "./components/Home/MainPage";
import { Route, Switch, Redirect } from "react-router-dom";
import UserRecipeCreate from "./components/User/UserRecipeCreate";

export interface AppProps {}

export interface AppState {
  sessionToken: string;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
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
        <Sitebar />
        {/* <MainPage /> */}
        <Switch>
          {/* <Route path="/recipe" component={UserRecipeCreate} /> */}
          <Route exact path="/user">
            {this.state.sessionToken ? (
              <Redirect to="/myrecipes" />
            ) : (
              <Auth updateToken={this.updateToken} />
            )}
            {/* </Route> component={Auth} /> */}{" "}
          </Route>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/myrecipes">
            <UserRecipeCreate />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
