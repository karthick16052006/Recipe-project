exports.getAllIngredients = (req, res) => {
  res.json([{ id: 1, name: "Tomato" }, { id: 2, name: "Cheese" }]);
};

exports.getIngredientById = (req, res) => {
  res.json({ id: req.params.id, name: "Sample Ingredient" });
};

exports.createIngredient = (req, res) => {
  res.json({ message: "Ingredient created", data: req.body });
};

exports.updateIngredient = (req, res) => {
  res.json({ message: `Ingredient ${req.params.id} updated`, data: req.body });
};

exports.deleteIngredient = (req, res) => {
  res.json({ message: `Ingredient ${req.params.id} deleted` });
};
