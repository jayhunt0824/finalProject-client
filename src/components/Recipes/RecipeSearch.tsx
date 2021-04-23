import * as React from "react";
import {Input} from "reactstrap";
// import {DrinkResponse, Drink} from "./RecipeCardsInterface";
// import RecipeCards from "./RecipeCards";


export interface RecipeSearchProps {
    drinks: string;
}

export interface RecipeSearchState {
    editSearchTerm: string;
    drinksURL: string;
    drinkinformation: Drink[];
}

class RecipeSearch extends React.Component<
  RecipeSearchProps,
  RecipeSearchState
> {
  constructor(props: RecipeSearchProps) {
    super(props);
    this.state = { drinkinformation: [], drinks: ""

    };
  }

fetchRecipes=(e: React.SyntheticEvent )=>{
    const drinksURL: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.drinks}`;
    
    fetch(drinksURL)
    .then((res)=> res.json())
    .then((json: DrinkResponse)=>{
        console.log(json);
        this.setState({drinkinformation: json.results})
    })
}

editSearchTerm = (e: React.SyntheticEvent) => {
    let search = this.state.drinks;
    this.setState({ drinks: e.target.value });
    console.log(search);
  };


  render() {
    return (
      <div>
        <form>
          <Input
            type="text"
            placeholder="Search Here"
            value={this.state.drinks}
            onChange={this.editSearchTerm}
          />
          <button type="submit" onSubmit={this.}> Search</button>
          <h3>Results:</h3>
        </form>
      </div>
    );
  }
}

export default RecipeSearch;
