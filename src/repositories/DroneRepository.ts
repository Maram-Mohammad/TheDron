// DroneRepository.ts
import { Drone } from '../models/Drone';

export interface DroneRepository {
  getAll(): Promise<Drone[]>;
  getById(id: string): Promise<Drone | null>;
  create(drone: Drone): Promise<void>;
  update(id: string, drone: Drone): Promise<void>;
  delete(id: string): Promise<void>;
}
