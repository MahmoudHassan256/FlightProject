import { Router } from "express";
import { CovidController } from "../controllers/covidController";

const router = Router();

router.get("/getAll",CovidController.getAll);
router.post("/getCovid", CovidController.getCovid);

export default router;


