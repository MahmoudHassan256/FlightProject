"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CovidSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        require: true,
    },
    entry: {
        type: String,
        require: true,
    },
    testing: {
        type: String,
        require: true,
    },
    quarantine: {
        type: String,
        require: true,
    },
    restaurants: {
        type: String,
        require: true,
    },
    bars: {
        type: String,
        require: true,
    },
    masks: {
        type: String,
        require: true
    },
    document: {
        type: [String],
        require: false,
    },
}, { timestamps: false, versionKey: false });
const Covid = mongoose_1.default.model('Covid', CovidSchema);
exports.default = Covid;
