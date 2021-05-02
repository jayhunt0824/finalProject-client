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
  role: string
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      sessionToken: "", role: '',
    };
  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    let role = localStorage.getItem('role')
    if (token){
      this.setState({
        sessionToken: token
      })
      if (role){
        this.setState({
          role: role
        })
  }
  }}




  updateToken = (token: string, role: string) => {
    localStorage.setItem("token", token);
    this.setState({ sessionToken: token });
    console.log(token);
    this.updateRole(role);
  };

  updateRole =(role: string) => {
    localStorage.setItem('role', role);
    this.setState({
      role: role
    })
  }
  
  
  //   clearToken =() => {
  //   localStorage.clear();
  //   setSessionToken('');
  // }

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
