import * as React from "react";
import RecipeCard from "../Recipes/RecipeCard";
import { Drink } from "../Recipes/RecipeCardsInterface";
import { Input } from "reactstrap";
import { Jumbotron, Container } from "reactstrap";
import blackberrycocktail from "./assets/blurred.jpg";
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
        <div className="coloredMainDiv"></div>
        {/* <div className="img">
          <img src={blackberrycocktail} alt="" height="270" />
        </div> */}

        <Jumbotron
          className="jumbotron"
          style={{ backgroundColor: "black" }}
          fluid
        >
          <Container>
            <img className="img" src={blackberrycocktail} alt="" height="340" />
            {/* <h1 className="display-3">Fluid jumbotron</h1>

            <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p> */}
          </Container>
        </Jumbotron>
        <form
          onClick={(e) => {
            this.fetchDrinks(e);
          }}
        >
          <div className="searchBar">
            <Input
              type="text"
              placeholder="Search Here"
              value={this.state.drinks}
              onChange={this.editSearchTerm}
            />
            <button className="searchBtn" type="submit">
              {" "}
              Search
            </button>
          </div>
        </form>
        <div className="coloredDiv"></div>

        <RecipeCard
          // url={drinkURL}
          drinkinformation={this.state.drinkinformation}
        />
      </div>
    );
  }
}

export default MainPage;
