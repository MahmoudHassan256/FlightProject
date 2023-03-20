"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightsService = void 0;
const flights_dal_1 = require("../dal/flights.dal");
class FlightsService {
    async getFlights() {
        const dal = new flights_dal_1.FlightsDal();
        const res = await dal.findAll();
        return res;
    }
    ;
    async createFlight(Flight) {
        const dal = new flights_dal_1.FlightsDal();
        const res = dal.createFlight(Flight);
        return res;
    }
    ;
    async getFlightsFroms() {
        const dal = new flights_dal_1.FlightsDal();
        const res = await dal.findFrom();
        return res;
    }
    ;
    async getFlightsTos(From) {
        const dal = new flights_dal_1.FlightsDal();
        const res = await dal.findTo(From);
        return res;
    }
    ;
}
exports.FlightsService = FlightsService;
;
