import { FlightsDal } from "../dal/flights.dal";

export class FlightsService {

    public async getFlights() {
        const dal = new FlightsDal();
        const res = await dal.findAll();
        return res;
    };

    public async createFlight(Flight:any) {
        const dal = new FlightsDal();
        const res = dal.createFlight(Flight);
        return res;
    };

    public async getFlightsFroms() {
        const dal = new FlightsDal();
        const res = await dal.findFrom();
        return res;
    };
    public async getFlightsTos(From:any) {
        const dal = new FlightsDal();
        const res = await dal.findTo(From);
        return res;
    };
};



