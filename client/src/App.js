import { useEffect, useState } from "react";
import "./App.css";
import RecipeList from "./Components/RecipeList";

function App() {
  const [recipes, setRecipes] = useState([]);
  // fetch all recipes from mongoDB
  const fetchRecipes = async () => {
    const response = await fetch("http://localhost:3005/recipes");
    const data = await response.json();
    setRecipes(data);
  };
  useEffect(() => {
    fetchRecipes();
    setRecipes(recipes);
  }, []);

  return (
    <div className="App">
      <h1>Create Recipe</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const title = e.target.title.value;
          const description = e.target.description.value;
          const ingredients = e.target.ingredients.value;
          const instructions = e.target.instructions.value;
          const image = e.target.image.files[0].name;
          if (!title || !description || !ingredients || !instructions || !image)
            return alert("Please fill all the fields");

          const response = await fetch("http://localhost:3005/recipe/create", {
            method: "POST",
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
          });
          const data = await response.json();
          console.log(data);
          fetchRecipes();
        }}
      >
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="description" placeholder="Description" />
        {/* ingredients can be multiple */}
        <input type="text" name="ingredients" placeholder="Ingredients" />

        <input type="text" name="instructions" placeholder="Instructions" />
        <input type="file" name="image" />
        <button type="submit">Create</button>
      </form>
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
