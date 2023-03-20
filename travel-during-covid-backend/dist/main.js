"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const index_2 = require("./db/index");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded());
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.get("/", function (req, res) {
    res.send("Default");
});
app.use(index_1.default);
(0, index_2.connectDb)().then(async () => {
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
        console.log(`Listening on ${PORT}`);
    });
});
