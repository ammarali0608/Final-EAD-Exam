import React from "react";

function RecipeList({ recipes }) {
  console.log(recipes);
  return (
    <div>
      <h1>Recipies</h1>

      {recipes.map((recipe) => (
        <div className="recipe" key={recipe._id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          <img
            width="100"
            height="50"
            src={require("./../images/" + recipe.image)}
          />
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
