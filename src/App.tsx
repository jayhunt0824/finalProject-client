import React from "react";
import "./App.css";
import { Auth } from "./components/Auth/Auth";
import Sitebar from "./components/Home/Navbar";
import { Footer } from "./components/Home/Footer";
import MainPage, { MainPageProps } from "./components/Home/MainPage";
import { Route, Switch, Redirect } from "react-router-dom";
import UserRecipeIndex from "./components/User/UserRecipeIndex";


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

  // updateUsername = (newUsername) => {
  //   localStorage.setItem("Username", newUsername);
  //   setUsername(newUsername);
  // };

  render() {
    return (
      <div className="entireApp">
         
            {/* <div className="vDiv"></div> */}
        
        <Sitebar />
        {/* <MainPage /> */}
        <Switch>
          {/* <Route path="/recipe" component={UserRecipeCreate} /> */}
          <Route exact path="/user">
            {this.state.sessionToken ? (
              <Redirect to="/recipe" />
            ) : (
              <Auth
                updateToken={this.updateToken}
                // updateUsername={this.updateUsername}
              />
            )}
            {/* </Route> component={Auth} /> */}{" "}
          </Route>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/recipe" component={UserRecipeIndex}></Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
