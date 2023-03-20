"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CovidDal = void 0;
const covid_1 = __importDefault(require("../db/models/covid"));
class CovidDal {
    findAll() {
        return covid_1.default.find();
    }
    findCovid(To) {
        return covid_1.default.find({ name: To.to });
    }
}
exports.CovidDal = CovidDal;
