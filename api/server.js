const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://127.0.0.1:27017/mern-recipe", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const Recipe = require("./models/Recipe");

// crud operations for recipes

app.get("/recipes", async (req, res) => {
  const todos = await Recipe.find();
  res.json(todos);
});
app.post("/recipe/create", (req, res) => {
  const recipe = new Recipe({
    title: req.body.title,
    description: req.body.description,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    image: req.body.image,
  });
  recipe.save();
  res.json(recipe);
});

app.delete("/recipe/delete/:id", async (req, res) => {
  const result = await Recipe.findByIdAndDelete(req.params.id);
  res.json(result);
});

app.get("/recipe/:id", async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  res.json(recipe);
});

// get with name
app.get("/recipe/:title", async (req, res) => {
  const recipe = await Recipe.find({ title: req.params.title });
  res.json(recipe);
});

app.put("/recipe/update/:id", async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  recipe.title = req.body.title;
  recipe.description = req.body.description;
  recipe.ingredients = req.body.ingredients;
  recipe.instructions = req.body.instructions;
  recipe.image = req.body.image;
  recipe.save();
  res.json(recipe);
});

app.listen(3005, () => {
  console.log("Server is running on port 3005");
});
