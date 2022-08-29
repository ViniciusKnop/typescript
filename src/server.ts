import express, { request, response } from 'express';
import { createCourse } from './routes';

const app = express();

app.use(express.json());

app.get("/", createCourse);

app.post("/nomes",(request, response) => {
    const{ name } = request.body;
    
    for (var i = 0; i < name.lenght; i++){
        let letras:Array<string> = [] ;
        letras[i] = name[i];
       return response.json(letras[i]);
    }
})

app.listen(3333);