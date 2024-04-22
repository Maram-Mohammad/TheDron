// medications.ts
import express from 'express';
import { MedicationController } from '../controllers/medicationController';
import { MedicationService } from '../services/medicationService';

const router = express.Router();
const medicationService = new MedicationService();
const medicationController = new MedicationController(medicationService);

router.get('/medications', medicationController.getAllMedications);

export default router;
