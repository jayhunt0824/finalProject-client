import { IRecipe } from "./IRecipe";
import * as React from "react";

const RecipeComponent = (props: { recipe: IRecipe }) => {
  const { recipe } = props;
  return (
    <div className="recipe">
      <div className="title">
        <img
          src={recipe.strDrinkThumb || "http://localhost:3000/placeholder.jpg"}
          alt={recipe.strDrink}
        />
        <p>{recipe.strDrink}</p>
      </div>
      {recipe.strIngredients && (
        <ul>
          {recipe.strIngredients.split(",").map((ingredient) => (
            <li>{ingredient}</li>
          ))}
        </ul>
      )}
      {/* <a href={recipe.} target="_bla">View Recipe</a> */}
    </div>
  );
};

export default RecipeComponent;
