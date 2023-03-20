"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CovidController = void 0;
const covid_service_1 = require("../services/covid.service");
class CovidController {
    static async getAll(req, res) {
        const service = new covid_service_1.CovidService();
        const Covid = await service.getAll();
        return res.send(Covid);
    }
    static async getCovid(req, res) {
        const params = req.body;
        const service = new covid_service_1.CovidService();
        const Covid = await service.getCovid(params);
        return res.send(Covid);
    }
    ;
}
exports.CovidController = CovidController;
;
