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
      <h1>Recipies</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
