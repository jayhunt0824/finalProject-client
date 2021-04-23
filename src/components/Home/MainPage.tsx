import * as React from "react";
import RecipeCard from "../Recipes/RecipeCard";
import { Drink } from "../Recipes/RecipeCardsInterface";
import { Input } from "reactstrap";

export interface MainPageProps {
  editSearchTerm?: string;
}

export interface MainPageState {
  drinkinformation: Drink[];
  // searchTerm: string;
  drinks: string;
}

class MainPage extends React.Component<MainPageProps, MainPageState> {
  constructor(props: MainPageProps) {
    super(props);
    this.state = { drinkinformation: [], drinks: "" };
  }

  editSearchTerm = (e: any) => {
    let search = this.state.drinks;
    this.setState({ drinks: e.target.value });
    console.log(search);
  };

  fetchDrinks = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(this.state.drinks);
    const drinkURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.drinks}`;
    fetch(drinkURL)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.drinks);
        console.log(json);
        this.setState({ drinkinformation: json.drinks });
      })

      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <form
          onClick={(e) => {
            this.fetchDrinks(e);
          }}
        >
          <Input
            type="text"
            placeholder="Search Here"
            value={this.state.drinks}
            onChange={this.editSearchTerm}
          />
          <button type="submit"> Search</button>
          <h3>Results:</h3>
        </form>
        <RecipeCard
          // url={drinkURL}
          drinkinformation={this.state.drinkinformation}
        />
      </div>
    );
  }
}

export default MainPage;
