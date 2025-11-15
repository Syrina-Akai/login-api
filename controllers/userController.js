const User = require("../models/user");

// CREATE
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) { 
    res.status(400).json({ error: err.message });
  }
};

// READ ALL
exports.getUsers = async (req, res) => {
  // fin users from database where isAdmin is false
  const users = await User.find({ isAdmin: false });
  res.json(users);
};

// READ ONE
exports.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "Not found" });
  res.json(user);
};

// UPDATE
exports.updateUser = async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!updated) return res.status(404).json({ error: "Not found" });
  res.json(updated);
};

// DELETE
exports.deleteUser = async (req, res) => {
  const deleted = await User.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ error: "Not found" });
  res.json({ message: "User deleted" });
};
