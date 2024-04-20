
// src/app.ts
import express, { Application } from 'express';
// import mongoose from 'mongoose';
import { Request, Response } from 'express';

import bodyParser from 'body-parser';
import dotenv from 'dotenv';
// import droneRoutes from './routes/droneRoutes';
// import medicationRoutes from './routes/medicationRoutes';

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app: Application = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/',  (req: Request, res: Response) =>{
    res.status(201).json({"hello": "world"});
});
const PORT: Number = 5052;
app.listen(PORT, (): void => console.log(`running on port ${PORT}`));

