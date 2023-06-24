import React, { useState } from "react";

function Recipe({ recipe }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="recipe" key={recipe._id}>
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>
        <img
          width="100"
          height="50"
          src={require("./../images/" + recipe.image)}
        />

        {show ? (
          <div>
            <h3>Ingredients</h3>
            <p>{recipe.ingredients}</p>
            <h3>Instructions</h3>
            <p>{recipe.instructions}</p>
          </div>
        ) : (
          ""
        )}

        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

export default Recipe;
