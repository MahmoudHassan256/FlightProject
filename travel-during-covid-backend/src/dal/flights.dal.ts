import Flights from "../db/models/flights";

export class FlightsDal {

  public async createFlight(Flight: any) {
    Flight = new Flights({
      from: Flight.from,
      to: Flight.to,
      price: Flight.price,
      departing: Flight.departing,
      airplaneName: Flight.airplaneName,
      maxSeat: Flight.maxSeat,
      arrivalTime: Flight.arrivalTime,
      departingTime: Flight.departingTime,
    });
    const response = await Flights.create(Flight)
    return response;
  }

  public async updateFlight(Flight: any) {
    await Flights.findOne({
      name: Flight.name,
    }).updateOne({ $set: { chef: Flight.chef, } });
    const updatedFlights = await Flights.find();
    return updatedFlights;
  }

  public findTo(From:any) {
    const response= Flights.find({from:From.from});
    return response.distinct("to");
  }
  public findAll() {
    return Flights.find();
  }
  public findFrom() {
    return Flights.distinct("from");
  }
}


