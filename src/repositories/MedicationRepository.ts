// MedicationRepository.ts
import { Medication } from '../models/Medication';

export interface MedicationRepository {
  getAll(): Promise<Medication[]>;
  getById(id: string): Promise<Medication | null>;
  create(medication: Medication): Promise<void>;
  update(id: string, medication: Medication): Promise<void>;
  delete(id: string): Promise<void>;
}
