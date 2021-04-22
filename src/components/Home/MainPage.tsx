import * as React from "react";
import RecipeCard from "../Recipes/RecipeCard";
import { Drink } from "../Recipes/RecipeCardsInterface";
import { Input } from "reactstrap";

export interface MainPageProps {}

export interface MainPageState {
  drinkinformation: Drink[];
  searchTerm: string;
}

const drinkURL =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

class MainPage extends React.Component<MainPageProps, MainPageState> {
  constructor(props: MainPageProps) {
    super(props);
    this.state = { drinkinformation: [], searchTerm: "" };
  }

  editSearchTerm = (e: any) => {
    let search = this.state.searchTerm;
    this.setState({ searchTerm: e.target.value });
    console.log(search);
  };

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
        <form>
          <Input
            type="text"
            placeholder="Search Here"
            value={this.state.searchTerm}
            onChange={this.editSearchTerm}
          />
          <button type="submit"> Search</button>
          <h3>Results:</h3>
        </form>
        <RecipeCard
          url={drinkURL}
          drinkinformation={this.state.drinkinformation}
        />
      </div>
    );
  }
}

export default MainPage;
