const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");
const auth = require("../middleware/auth");

// "https://localhost:3000/api/users/"

router.get("/", auth, controller.getUsers);
router.get("/:id", auth, controller.getUser);
router.post("/", auth, controller.createUser);
router.put("/:id", auth, controller.updateUser);
router.delete("/:id", auth, controller.deleteUser);

module.exports = router;
