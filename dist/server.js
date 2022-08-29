"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", routes_1.createCourse);
app.post("/nomes", (request, response) => {
    const { name } = request.body;
    for (var i = 0; i < name.lenght; i++) {
        let letras = name[i];
        return response.json({ letras });
    }
});
app.listen(3333);
