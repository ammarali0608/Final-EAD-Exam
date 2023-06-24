import React, { useState } from "react";

function EditRecipe({ recipe, edit, setEdit, fetchRecipes }) {
  const [editRecipe, setEditRecipe] = useState(recipe);

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const title = e.target.title.value;
          const description = e.target.description.value;
          const ingredients = e.target.ingredients.value;
          const instructions = e.target.instructions.value;

          let image = null;
          if (e.target.image.files[0]) image = e.target.image.files[0].name;
          else image = recipe.image;
          if (!title || !description || !ingredients || !instructions || !image)
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
          fetchRecipes();

          setEdit(!edit);
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={editRecipe.title}
          onChange={(e) => {
            setEditRecipe({ ...editRecipe, title: e.target.value });
          }}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={editRecipe.description}
          onChange={(e) => {
            setEditRecipe({ ...editRecipe, description: e.target.value });
          }}
        />
        <input
          type="text"
          name="ingredients"
          placeholder="Ingredients"
          value={editRecipe.ingredients}
          onChange={(e) => {
            setEditRecipe({ ...editRecipe, ingredients: e.target.value });
          }}
        />
        <input
          type="text"
          name="instructions"
          placeholder="Instructions"
          value={editRecipe.instructions}
          onChange={(e) => {
            setEditRecipe({ ...editRecipe, instructions: e.target.value });
          }}
        />
        {/* <input
          type="file"
          name="image"
          onChange={(e) => {
            setEditRecipe({ ...editRecipe, image: e.target.files[0].name });
          }}
        /> */}
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditRecipe;
