"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const FlightsSchema = new mongoose_1.default.Schema({
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
}, { timestamps: false, versionKey: false });
const Flights = mongoose_1.default.model('Flights', FlightsSchema);
exports.default = Flights;
