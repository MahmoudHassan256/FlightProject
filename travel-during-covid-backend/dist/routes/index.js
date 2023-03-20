"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const flights_routes_1 = __importDefault(require("./flights.routes"));
const users_routes_1 = __importDefault(require("./users.routes"));
const covid_routes_1 = __importDefault(require("./covid.routes"));
const router = express_1.default.Router();
router.use('/api/flights/', flights_routes_1.default);
router.use('/api/users/', users_routes_1.default);
router.use('/api/covid/', covid_routes_1.default);
exports.default = router;
