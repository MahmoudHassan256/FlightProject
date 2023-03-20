import { Request, Response } from "express";
import { FlightsService } from "../services/flights.service";

export class FlightsController {

    public static async getFlights(req: Request, res: Response) {
        const service = new FlightsService();
        const Flights = await service.getFlights();
        return res.send(Flights);
    };
    public static async getFlightsFroms(req: Request, res: Response) {
        const service = new FlightsService();
        const Flights = await service.getFlightsFroms();
        return res.send(Flights);
    };
    public static async getFlightsTos(req: Request, res: Response) {
        const params = req.body;
        const service = new FlightsService();
        const Flights = await service.getFlightsTos(params);
        return res.send(Flights);
    };
    public static async createFlight(req: Request, res: Response) {
        const params = req.body;
        const service = new FlightsService();
        const Flight = await service.createFlight(params);
        return res.send(Flight);
    };
};

