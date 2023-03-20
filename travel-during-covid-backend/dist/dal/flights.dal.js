"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightsDal = void 0;
const flights_1 = __importDefault(require("../db/models/flights"));
class FlightsDal {
    async createFlight(Flight) {
        Flight = new flights_1.default({
            from: Flight.from,
            to: Flight.to,
            price: Flight.price,
            departing: Flight.departing,
            airplaneName: Flight.airplaneName,
            maxSeat: Flight.maxSeat,
            arrivalTime: Flight.arrivalTime,
            departingTime: Flight.departingTime,
        });
        const response = await flights_1.default.create(Flight);
        return response;
    }
    async updateFlight(Flight) {
        await flights_1.default.findOne({
            name: Flight.name,
        }).updateOne({ $set: { chef: Flight.chef, } });
        const updatedFlights = await flights_1.default.find();
        return updatedFlights;
    }
    findTo(From) {
        const response = flights_1.default.find({ from: From.from });
        return response.distinct("to");
    }
    findAll() {
        return flights_1.default.find();
    }
    findFrom() {
        return flights_1.default.distinct("from");
    }
}
exports.FlightsDal = FlightsDal;
