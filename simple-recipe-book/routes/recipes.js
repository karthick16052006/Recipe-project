const express = require("express");
const router = express.Router();
const recipesController = require("../controllers/recipesController");

// GET all recipes
router.get("/", recipesController.getAllRecipes);

// GET a single recipe by ID
router.get("/:id", recipesController.getRecipeById);

// POST a new recipe
router.post("/", recipesController.createRecipe);

// PUT update a recipe by ID
router.put("/:id", recipesController.updateRecipe);

// DELETE a recipe by ID
router.delete("/:id", recipesController.deleteRecipe);

module.exports = router;
