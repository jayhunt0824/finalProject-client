import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RecipeCard = props => {
	const deleteRecipe = (recipe) => {
		fetch(`${APIURL}/recipe/delete/${recipe.id}`, {
			method: 'DELETE',
			headers: new Headers({
				'Content-Type': 'application/json',
				Authorization: props.token,
			}),
		}).then(() => props.fetchRecipes());
	};

    const recipeMapper = () => {
		return props.recipes.map((recipe, index) => {
			return (
                
            );

            return <>{recipeMapper()}</>;





    export default RecipeCard;