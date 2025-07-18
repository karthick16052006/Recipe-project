import React from "react";
import recipes from "../data/recipes";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
