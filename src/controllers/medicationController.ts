import { Request, Response } from 'express';
import { MedicationService } from '../services/medicationService';
import { Medication } from '../models/Medication';

export class MedicationController {
    private medicationService: MedicationService;

    constructor(medicationService: MedicationService) {
        this.medicationService = medicationService;
    }

    async getAllMedications(req: Request, res: Response) {
        const medications: Medication[] = await this.medicationService.getAllMedications();
        res.json(medications);
    }
}
