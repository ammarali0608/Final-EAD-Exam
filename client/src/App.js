import { useEffect, useState } from "react";
import "./App.css";
import RecipeList from "./Components/RecipeList";
import CreateRecipe from "./Components/CreateRecipe";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [FilteredRecipes, SetFilteredRecipes] = useState([]);
  // fetch all recipes from mongoDB
  const fetchRecipes = async () => {
    const response = await fetch("http://localhost:3005/recipes");
    const data = await response.json();
    setRecipes(data);
    SetFilteredRecipes(data);
  };
  useEffect(() => {
    fetchRecipes();
    setRecipes(recipes);
  }, []);

  return (
    <div className="App">
      <h1>Search Recipes With Title</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          const filtered = recipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(e.target.value.toLowerCase())
          );
          SetFilteredRecipes(filtered);
        }}
      />
      <h1>Create Recipe</h1>
      <CreateRecipe fetchRecipes={fetchRecipes} />
      <RecipeList recipes={FilteredRecipes} fetchRecipes={fetchRecipes} />
    </div>
  );
}

export default App;
