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

export interface RecipeCardsProps {
  drink: Drink;
}

export interface RecipeCardsState {
  drinkinformation: Drink[];
}

class RecipeCards extends React.Component<RecipeCardsProps, RecipeCardsState> {
  constructor(props: RecipeCardsProps) {
    super(props);
    this.state = { drinkinformation: [] };
  }
  render() {
    return (
      <div>
        <Card className="card">
          <CardImg src={this.props.drink.strDrinkThumb} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">{this.props.drink.strDrink}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {this.props.drink.strCategory}
            </CardSubtitle>
            <CardText>{this.props.drink.strInstructions}</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default RecipeCards;
