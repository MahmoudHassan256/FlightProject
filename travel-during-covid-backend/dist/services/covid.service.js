"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CovidService = void 0;
const covid_dal_1 = require("../dal/covid.dal");
class CovidService {
    async getAll() {
        const dal = new covid_dal_1.CovidDal();
        const res = await dal.findAll();
        return res;
    }
    async getCovid(To) {
        const dal = new covid_dal_1.CovidDal();
        const res = await dal.findCovid(To);
        return res;
    }
    ;
}
exports.CovidService = CovidService;
;
