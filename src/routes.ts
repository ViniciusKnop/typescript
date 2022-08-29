import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request:Request, response:Response){
    let date_obj = new Date();
    CreateCourseService.execute({
        day: (date_obj.getDate()),
        month:(date_obj.getMonth()+1),
        year:(date_obj.getFullYear()),
        hour:(date_obj.getHours()),
        minute:(date_obj.getMinutes()),
        second:(date_obj.getSeconds()),
    });
    return response.send();
}