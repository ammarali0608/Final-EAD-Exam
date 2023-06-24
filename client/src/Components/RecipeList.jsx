import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes, fetchRecipes }) {
  console.log(recipes);
  return (
    <div>
      <h1>Recipies</h1>

      {recipes.map((recipe) => (
        <>
          <Recipe recipe={recipe} fetchRecipes={fetchRecipes} />
          <hr />
        </>
      ))}
    </div>
  );
}

export default RecipeList;
