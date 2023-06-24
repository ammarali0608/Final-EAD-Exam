import React, { useState } from "react";

function Recipe({ recipe }) {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);

  return (
    <div>
      {edit ? (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const title = e.target.title.value;
            const description = e.target.description.value;
            const ingredients = e.target.ingredients.value;
            const instructions = e.target.instructions.value;

            let image = null;
            if (e.target.image.files[0]) image = e.target.image.files[0].name;
            if (
              !title ||
              !description ||
              !ingredients ||
              !instructions ||
              !image
            )
              return alert("Please fill all the fields");

            const response = await fetch(
              "http://localhost:3005/recipe/update/" + recipe._id,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  title,
                  description,
                  ingredients,
                  instructions,
                  image,
                }),
              }
            );
            const data = await response.json();
            console.log(data);
            setEdit(!edit);
          }}
        >
          <input type="text" name="title" placeholder="Title" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="ingredients" placeholder="Ingredients" />
          <input type="text" name="instructions" placeholder="Instructions" />
          <input type="file" name="image" />
          <button type="submit">Update</button>
        </form>
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
