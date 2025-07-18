exports.getAllUsers = (req, res) => {
  res.json([{ id: 1, username: "john" }, { id: 2, username: "jane" }]);
};

exports.getUserById = (req, res) => {
  res.json({ id: req.params.id, username: "Sample User" });
};

exports.createUser = (req, res) => {
  res.json({ message: "User created", data: req.body });
};

exports.updateUser = (req, res) => {
  res.json({ message: `User ${req.params.id} updated`, data: req.body });
};

exports.deleteUser = (req, res) => {
  res.json({ message: `User ${req.params.id} deleted` });
};
