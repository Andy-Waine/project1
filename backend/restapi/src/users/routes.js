const { Router } = require('express');
const controller = require('./controller');

const router = Router();

// GET
router.get("/", controller.getUsers);
router.get("/:id", controller.getUserById);

// POST
router.post("/", controller.addUser);

// DELETE
router.delete("/:id", controller.deleteUser);
module.exports = router;