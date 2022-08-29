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
        console.log("Dia: ",day,"/",month,"/",year," Horas: ", hour, ":", minute, ":",second);
    }
}

export default new CreateCourseService();