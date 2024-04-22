import { Request, Response } from 'express';
import { DroneService } from '../services/droneService';
import { Drone } from '../models/Drone';

export class DroneController {
    private droneService: DroneService;

    constructor(droneService: DroneService) {
        this.droneService = droneService;
    }

    registerDrone(req: Request, res: Response): void {
        try {
            const { serialNumber, model, weightLimit, batteryCapacity, state } = req.body;
            const drone: Drone = {serialNumber, model, weightLimit, batteryCapacity, state} as Drone;
            const registeredDrone = this.droneService.registerDrone(drone);
            res.status(201).json(registeredDrone);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }

    getAvailableDrones(req: Request, res: Response): void {
        const availableDrones = this.droneService.getAvailableDrones();
        res.json(availableDrones);
    }

    loadMedication(req: Request, res: Response): void {
        try {
            const droneId = req.params.id;
            const medicationData = req.body;
            const loadedMedication = this.droneService.loadMedication(droneId, medicationData);
            res.status(200).json(loadedMedication);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }

    getLoadedMedication(req: Request, res: Response): void {
        const droneId = req.params.id;
        const loadedMedication = this.droneService.getLoadedMedications(droneId);
        res.json(loadedMedication);
    }

    getBatteryLevel(req: Request, res: Response): void {
        const droneId = req.params.id;
        const batteryLevel = this.droneService.getBatteryLevel(droneId);
        res.json({ batteryLevel });
    }
}
