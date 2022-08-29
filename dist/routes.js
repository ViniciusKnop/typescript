"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function createCourse(request, response) {
    let date_obj = new Date();
    CreateCourseService_1.default.execute({
        day: (date_obj.getDate()),
        month: (date_obj.getMonth() + 1),
        year: (date_obj.getFullYear()),
        hour: (date_obj.getHours()),
        minute: (date_obj.getMinutes()),
        second: (date_obj.getSeconds()),
        name: "João",
    });
    return response.send();
}
exports.createCourse = createCourse;
