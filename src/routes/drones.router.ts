import express from 'express';
import { DroneController } from '../controllers/droneController';
import { DroneService } from '../services/droneService';

const router = express.Router();
const droneService = new DroneService();
const droneController = new DroneController(droneService);

router.post('/dorns', droneController.registerDrone);
router.post('/dorns/:droneId/load', droneController.loadMedication);
router.get('/dorns', droneController.getAvailableDrones);
router.get('/dorns/available', droneController.getAvailableDrones);
router.get('/dorns/:droneId/battery', droneController.getBatteryLevel);
router.get('/dorns/:droneId/medications', droneController.getLoadedMedication);

export default router;
