const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");
const Schema = moongoose.Schema;
const RecipeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: Object, required: true },
  instructions: { type: String, required: true },
  image: { type: String, required: true },
});
const Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = Recipe;
