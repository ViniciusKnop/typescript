import { response } from "express";

interface Course{
    day: number;
    month:number;
    year:number;
    hour:number;
    minute:number;
    second:number;
}

class CreateCourseService {
    execute({day, month, year, hour, minute, second}:Course){
        let result:Array<string|number>;
        result = ["Dia: ", day, "/", month, "/", year, " Horas: ", hour, ":", minute, ":",second];
        return response.json(result);
    }
}

export default new CreateCourseService();