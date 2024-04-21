import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';

import swaggerUi from "swagger-ui-express";
import swaggerJson from "./swagger_static.json";

// import {MedicationRoutes} from './routes';


dotenv.config();
const app: Application = express();

app.use(bodyParser.json());

app.use('/welcome',  (req: Request, res: Response) =>{
    res.status(201).send("Welcome to our Drones Transport Service");
});




app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));

export default app;