import React from "react";

const IngredientList = ({ ingredients }) => {
  return (
    <ul className="ingredient-list">
      {ingredients.map((ingredient, i) => (
        <li key={i}>{ingredient}</li>
      ))}
    </ul>
  );
};

export default IngredientList;
