import * as React from "react";
import { Component } from "react";
import { Container } from "reactstrap";

export interface MainPageProps {}

export interface MainPageState {}

export class MainPage extends React.Component<MainPageProps, MainPageState> {
  constructor(props: MainPageProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <h1>This is the Main Page</h1>
      </Container>
    );
  }
}

export default MainPage;
