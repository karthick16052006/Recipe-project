const Ingredient = require("../models/Ingredient");

// GET all ingredients
exports.getAllIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.json(ingredients);
  } catch (error) {
    res.status(500).json({ message: "Error fetching ingredients", error });
  }
};

// GET ingredient by ID
exports.getIngredientById = async (req, res) => {
  try {
    const ingredient = await Ingredient.findById(req.params.id);
    if (!ingredient) {
      return res.status(404).json({ message: "Ingredient not found" });
    }
    res.json(ingredient);
  } catch (error) {
    res.status(500).json({ message: "Error fetching ingredient", error });
  }
};

// CREATE ingredient
exports.createIngredient = async (req, res) => {
  try {
    const newIngredient = new Ingredient(req.body);
    const savedIngredient = await newIngredient.save();
    res.status(201).json(savedIngredient);
  } catch (error) {
    res.status(400).json({ message: "Error creating ingredient", error });
  }
};

// UPDATE ingredient
exports.updateIngredient = async (req, res) => {
  try {
    const updatedIngredient = await Ingredient.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedIngredient) {
      return res.status(404).json({ message: "Ingredient not found" });
    }
    res.json(updatedIngredient);
  } catch (error) {
    res.status(400).json({ message: "Error updating ingredient", error });
  }
};

// DELETE ingredient
exports.deleteIngredient = async (req, res) => {
  try {
    const deletedIngredient = await Ingredient.findByIdAndDelete(req.params.id);
    if (!deletedIngredient) {
      return res.status(404).json({ message: "Ingredient not found" });
    }
    res.json({ message: "Ingredient deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting ingredient", error });
  }
};
