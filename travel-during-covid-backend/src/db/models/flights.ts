import mongoose from 'mongoose';

const FlightsSchema = new mongoose.Schema(
    {
      from: {
        type: String,
        required: true
      },
      to: {
        type: String,
        required: true
      },
      price: {
        type: String,
        required: true
      },
      departing: {
        type: String,
        required: true
      },
      airplaneName: {
        type: String,
        required: true
      },
      maxSeat: {
        type: Number,
        required: true
      },
      departingTime: {
        type: String,
        required: true
      },
      arrivalTime: {
        type: String,
        required: true
      },
    },
    { timestamps: false,versionKey:false}
  );
  
const Flights = mongoose.model('Flights', FlightsSchema);
  
export default Flights;

