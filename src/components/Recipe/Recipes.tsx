import * as React from "react";
import { useState, useEffect, FormEvent } from "react";
import { IRecipe } from "./iRecipe";
// import { StringifyOptions } from "node:querystring";
// import { queryAllByAltText } from '@testing-library/dom';
import Recipe from "./RecipeComponent";
import RecipeComponent from "./RecipeComponent";

function Recipes() {
  const [recipesFound, setRecipesFound] = useState<IRecipe[]>([]);
  const [recipeSearch, setRecipeSearch] = useState("");

  const searchForRecipes = async (query: String): Promise<IRecipe[]> => {
    const result = await fetch(`http://localhost:3001/?search={this.}`);
    return (await result.json()).results;
  };

  useEffect(() => {
    (async () => {
      const query = encodeURIComponent(recipeSearch);
      const response = await searchForRecipes(query);
      setRecipesFound(response);
    })();
  }, [recipeSearch]);

  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.querySelector("#searchText") as HTMLInputElement;
    setRecipeSearch(input.value);
    input.value = "";
  };

  return (
    <div className="Recipes">
      <h1>Recipe Search App</h1>
      <form className="searchForm" onSubmit={(event) => search(event)}>
        <input id="searchText" type="text" />
        <button>Search</button>
      </form>
      {recipeSearch && <p>Results for {recipeSearch}...</p>}
      <div className="recipes-container">
        {recipesFound.length &&
          recipesFound.map((recipe) => (
            <RecipeComponent
              //   key={recipe.href}
              recipe={recipe}
            ></RecipeComponent>
          ))}
      </div>
    </div>
  );
}

export default Recipes;
