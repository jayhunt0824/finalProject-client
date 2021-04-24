import React from "react";
import "./App.css";
import { Auth } from "./components/Auth/Auth";
import Sitebar from "./components/Home/Navbar";
import { Footer } from "./components/Home/Footer";
import MainPage, { MainPageProps } from "./components/Home/MainPage";
import { Route, Switch } from "react-router-dom";
import UserRecipeCreate from "./components/User/UserRecipeCreate";

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
<<<<<<< HEAD
        <SiteBar />

        <Auth />
=======
        <Sitebar />
        {/* <MainPage /> */}
        <Switch>
          {/* <Route path="/recipe" component={UserRecipeCreate} /> */}
          <Route exact path="/user" component={Auth} />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/myrecipes">
            <UserRecipeCreate />
          </Route>
        </Switch>
>>>>>>> 6bbf4c59b1ab75946c4090781ebcadcb11899680
        <Footer />
      </div>
    );
  }
}

export default App;
