"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {

    return (mod && mod.__esModule) ? mod : { "default": mod };

};

Object.defineProperty(exports, "__esModule", { value: true });

const express_1 = __importDefault(require("express"));

const dotenv_1 = __importDefault(require("dotenv"));

const body_parser_1 = __importDefault(require("body-parser"));

dotenv_1.default.config();

const PORT = process.env.PORT;

const app = (0, express_1.default)();

app.use(function (req, res, next) {

    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

    next();

});

app.use(body_parser_1.default.urlencoded({ extended: true }));

app.use('/api', require("./routes/router"));

const server = app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}...`);

});

app.set('server', server);
