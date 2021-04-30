import * as React from "react";
import { Component } from "react";
import { DrinkResponse, Drink } from "./RecipeCardsInterface";
import { CardColumns } from "reactstrap";
import RecipeCards from "./RecipeCards";

export interface RecipeCardProps {
  drinkinformation: Drink[];

}

export interface RecipeCardState {
  //   drinkinformation: Drink[];
}

class RecipeCard extends React.Component<RecipeCardProps, RecipeCardState> {
  constructor(props: RecipeCardProps) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.drinkinformation);
    return (
      <div>
        <CardColumns>
          {this.props.drinkinformation !== undefined
            ? this.props.drinkinformation.map((drink: Drink, index: number) => (
                <RecipeCards drink={drink}  key={index}  />
              ))
            : ""}
        </CardColumns>
      </div>
    );
  }
}

export default RecipeCard;
