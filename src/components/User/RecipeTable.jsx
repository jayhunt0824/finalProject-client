import React from "react";
import { Table, Button } from "reactstrap";

const RecipeTable = (props) => {
  const deleteRecipe = (Recipe) => {
    fetch(`http://localhost:3000/recipe/${Recipe.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => props.fetchRecipes());
  };

  const RecipeMapper = () => {
    return props.Recipes.map((Recipe, index) => {
      return (
        <tr key={index}>
          <th scope="row">{Recipe.id}</th>
          <td>{Recipe.result}</td>
          <td>{Recipe.description}</td>
          <td>{Recipe.definiton}</td>
          <td>
            <Button
              color="warning"
              onClick={() => {
                props.editUpdateRecipe(Recipe);
                props.updateOn();
              }}
            >
              Update
            </Button>
            <Button
              color="danger"
              onClick={() => {
                deleteRecipe(Recipe);
              }}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <h3>Recipe History</h3>
      <hr />
      <Table Striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Ingredients</th>
            <th>Directions</th>
            <th>Categories</th>
          </tr>
        </thead>
        <tbody>{RecipeMapper()}</tbody>
      </Table>
    </>
  );
};

export default RecipeTable;
