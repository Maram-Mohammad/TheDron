import { Medication } from '../models/Medication';
import { MedicationRepository } from '../repositories/MedicationRepository';

export class MedicationService {

    private repo: MedicationRepository | undefined;


    DroneService(repo: MedicationRepository){
        this.repo = repo;
    }

    addMedication(medication: Medication): Medication {
        this.repo!.create(medication);
        return medication;
    }

    async getMedicationByCode(code: string) {
        return await this.repo!.getById(code);

    }

    async getAllMedications(){
        return await this.repo!.getAll();
    }

    async updateMedication(code: string, updatedMedication: Partial<Medication>) {
        const medication = await this.repo!.getById(code);
        if (!medication) {
            throw new Error('Medication not found');
        }

        const newMedication = { ...medication, ...updatedMedication };
        return newMedication;
    }

    
}
