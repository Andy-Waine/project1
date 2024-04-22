const { Router } = require('express');
const controller = require('./controller');

const router = Router();

// GET
router.get("/", controller.getUsers);
router.get("/:id", controller.getUserById);

// POST
router.post("/", controller.addUser);

// PUT
router.put("/:id", controller.updateUserPassword);

// DELETE
router.delete("/:id", controller.deleteUser);
module.exports = router;