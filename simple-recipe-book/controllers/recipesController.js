exports.getAllRecipes = (req, res) => {
  res.json([{ id: 1, name: "Pasta" }, { id: 2, name: "Pizza" }]);
};

exports.getRecipeById = (req, res) => {
  res.json({ id: req.params.id, name: "Sample Recipe" });
};

exports.createRecipe = (req, res) => {
  res.json({ message: "Recipe created", data: req.body });
};

exports.updateRecipe = (req, res) => {
  res.json({ message: `Recipe ${req.params.id} updated`, data: req.body });
};

exports.deleteRecipe = (req, res) => {
  res.json({ message: `Recipe ${req.params.id} deleted` });
};
