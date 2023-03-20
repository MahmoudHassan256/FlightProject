import { Router } from "express";
import { FlightsController } from "../controllers/flightsController";

const router = Router();

router.get("/getFlights", FlightsController.getFlights);
router.get("/getFlightsFroms", FlightsController.getFlightsFroms);
router.post("/getFlightsTos", FlightsController.getFlightsTos);
router.post("/createFlight", FlightsController.createFlight);

export default router;


