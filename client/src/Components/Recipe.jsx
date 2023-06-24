import React, { useState } from "react";
import EditRecipe from "./EditRecipe";

function Recipe({ recipe, fetchRecipes }) {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);

  return (
    <div>
      {edit ? (
        <EditRecipe
          recipe={recipe}
          edit={edit}
          setEdit={setEdit}
          fetchRecipes={fetchRecipes}
        />
      ) : (
        <div className="recipe" key={recipe._id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          <div>
            <img
              width="100"
              height="50"
              src={require("./../images/" + recipe.image)}
            />
          </div>

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
      )}

      <button
        onClick={() => {
          setEdit(!edit);
        }}
      >
        {edit ? "Cancel" : "Edit"}
      </button>
    </div>
  );
}

export default Recipe;
