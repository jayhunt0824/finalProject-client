import * as React from "react";
import RecipeCard from "../Recipes/RecipeCard";
import { Drink } from "../Recipes/RecipeCardsInterface";

export interface MainPageProps {}

export interface MainPageState {
  drinkinformation: Drink[];
}

const drinkURL =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

class MainPage extends React.Component<MainPageProps, MainPageState> {
  constructor(props: MainPageProps) {
    super(props);
    this.state = { drinkinformation: [] };
  }

  componentDidMount() {
    // console.log("RecipeCard", this.props.url);
    fetch(drinkURL)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.drinks);
        this.setState({ drinkinformation: json.drinks });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <RecipeCard
          url={drinkURL}
          drinkinformation={this.state.drinkinformation}
        />
      </div>
    );
  }
}

export default MainPage;
