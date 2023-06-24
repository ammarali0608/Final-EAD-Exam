import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes }) {
  console.log(recipes);
  return (
    <div>
      <h1>Recipies</h1>

      {recipes.map((recipe) => (
        <>
          <Recipe recipe={recipe} />
          <hr />
        </>
      ))}
    </div>
  );
}

export default RecipeList;
