"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ day, month, year, hour, minute, second, name }) {
        console.log("Dia: ", day, "/", month, "/", year, " Horas: ", hour, ":", minute, ":", second);
        for (var i = 0; i < name.length; i++) {
            let letras = [];
            letras[i] = name[i];
            console.log("Nome:", letras[i]);
            // return response.json(letras[i]]);
        }
    }
}
exports.default = new CreateCourseService();
