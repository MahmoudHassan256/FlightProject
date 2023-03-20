"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const covidController_1 = require("../controllers/covidController");
const router = (0, express_1.Router)();
router.get("/getAll", covidController_1.CovidController.getAll);
router.post("/getCovid", covidController_1.CovidController.getCovid);
exports.default = router;
