"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightsController = void 0;
const flights_service_1 = require("../services/flights.service");
class FlightsController {
    static async getFlights(req, res) {
        const service = new flights_service_1.FlightsService();
        const Flights = await service.getFlights();
        return res.send(Flights);
    }
    ;
    static async getFlightsFroms(req, res) {
        const service = new flights_service_1.FlightsService();
        const Flights = await service.getFlightsFroms();
        return res.send(Flights);
    }
    ;
    static async getFlightsTos(req, res) {
        const params = req.body;
        const service = new flights_service_1.FlightsService();
        const Flights = await service.getFlightsTos(params);
        return res.send(Flights);
    }
    ;
    static async createFlight(req, res) {
        const params = req.body;
        const service = new flights_service_1.FlightsService();
        const Flight = await service.createFlight(params);
        return res.send(Flight);
    }
    ;
}
exports.FlightsController = FlightsController;
;
