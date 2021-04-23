import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const RecipeCreate = (props) => {
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [directions, setDirections] = useState("");
    const [categories, setCategories] = useState("");
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch("http://localhost:3000/recipe/", {
        method: "POST",
        body: JSON.stringify({
          create: {
            name: name,
            ingredients: ingredients,
            directions: directions,
            categories: categories,
          },
        }),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: props.token,
        }),
      })
        .then((res) => res.json())
        .then((logData) => {
          console.log(logData);
          setName("");
          setIngredients("");
          setDirections("");
          setCategories("");
          props.fetchRecipes();
        });
    };
  
    return (
      <>
        <h3>Create a Recipe</h3>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name" />
            <Input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="ingredients" />
            <Input
              type="select"
              name="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            >
              <option value="Time">Time</option>
              <option value="Weight">Weight</option>
              <option value="Distance">Distance</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="directions" />
            <Input
              name="directions"
              value={directions}
              onChange={(e) => setDirections(e.target.value)}
            />
          </FormGroup>
          <Button type="submit">Click to Submit</Button>
        </Form>
      </>
    );
  };
  
  export default RecipeCreate;
  