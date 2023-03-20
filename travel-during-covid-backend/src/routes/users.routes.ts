import { Router } from "express";
import { UsersController } from "../controllers/usersController";

const router = Router();

router.get("/getUsers", UsersController.getUsers);
router.post("/getUser",UsersController.getUser);
router.post("/createUser", UsersController.createUser);

export default router;


