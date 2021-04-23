import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import RecipeCreate from "./RecipeCreate";
import RecipeTable from "./RecipeTable";
import RecipeEdit from "./RecipeEdit";

const RecipeIndex = (props) => {
  const [Recipes, setRecipes] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [RecipeToUpdate, setRecipeToUpdate] = useState([]);

  const editUpdateRecipe = (Recipe) => {
    setRecipeToUpdate(Recipe);
    console.log(Recipe);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  const fetchRecipes = () => {
    fetch("http://localhost:3000/log", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        setRecipes(logData);
      });
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <Container>
      <Row>
        <Col md="3">
          <RecipeCreate fetchRecipes={fetchRecipes} token={props.token} />
        </Col>
        <Col md="9">
          <RecipeTable
            Recipes={Recipes}
            editUpdateRecipe={editUpdateRecipe}
            updateOn={updateOn}
            fetchRecipes={fetchRecipes}
            token={props.token}
          />
        </Col>
        {updateActive ? (
          <RecipeEdit
            RecipeToUpdate={RecipeToUpdate}
            updateOff={updateOff}
            token={props.token}
            fetchRecipes={fetchRecipes}
          />
        ) : (
          <></>
        )}
      </Row>
    </Container>
  );
};

export default RecipeIndex;
