"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
const router = (0, express_1.Router)();
router.get("/getUsers", usersController_1.UsersController.getUsers);
router.post("/getUser", usersController_1.UsersController.getUser);
router.post("/createUser", usersController_1.UsersController.createUser);
exports.default = router;
