import * as React from "react";

export interface RecipeSearchProps {}

export interface RecipeSearchState {}

class RecipeSearch extends React.Component<
  RecipeSearchProps,
  RecipeSearchState
> {
  constructor(props: RecipeSearchProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <div></div>;
  }
}

export default RecipeSearch;
