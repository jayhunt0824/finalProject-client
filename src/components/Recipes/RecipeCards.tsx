import * as React from "react";
import { Component } from "react";
import { Drink } from "./RecipeCardsInterface";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from "reactstrap";

export interface RecipeCardsProps {}

export interface RecipeCardsState {
  character: Drink;
}

class RecipeCards extends React.Component<RecipeCardsProps, RecipeCardsState> {
  constructor(props: RecipeCardsProps) {
    super(props);
    this.state = { drinkinformation: [] };
  }
  render() {
    return (
      <Card>
        <CardImg
          top
          width="200px"
          src={props.character.image}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{props.character.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Card subtitle
          </CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    );
  }
}

export default RecipeCards;