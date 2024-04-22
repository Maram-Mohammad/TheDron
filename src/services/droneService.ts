import { Drone } from '../models/Drone';
import { Medication } from '../models/Medication';
import { DroneRepository } from '../repositories/DroneRepository';

export class DroneService {
    private repo: DroneRepository | undefined;

    DroneService(repo: DroneRepository){
        this.repo = repo;
    }



    registerDrone(drone: Drone): Drone {
        //Validate Here input from Drone ? 
        this.repo!.create(drone);
        return drone;
    }

    async loadMedication(droneSerialNumber: string, medications: Medication[])  {
        const drone : Drone | null = await this.repo!.getById(droneSerialNumber);
        if (!drone) {
            throw new Error('Drone not found');
        }
        if (drone!.state !== 'IDLE') {
            throw new Error('Drone must be in IDLE state to load medication');
        }

        const totalWeight = medications.reduce((acc, med) => acc + med.weight, 0);
        if (totalWeight > drone!.weightLimit) {
            throw new Error('Total weight of medications exceeds drone capacity');
        }

        // Assuming loading is successful, update drone state to LOADED
        let newDrone: Drone= { ...drone!, state: 'LOADED' };

        return newDrone;
    }

    async getLoadedMedications(droneSerialNumber: string) {
        const drone : Drone | null = await this.repo!.getById(droneSerialNumber);
        if (!drone) {
            throw new Error('Drone not found');
        }

        if (drone.state !== 'LOADED') {
            throw new Error('Drone is not loaded with medications');
        }

        return [];
    }

    async getAvailableDrones() {
        // Filter drones that are in IDLE state and have sufficient battery level
        const drones: Drone[] = await this.repo!.getAll();
        return drones.filter(drone => drone.state === 'IDLE' && drone.batteryCapacity > 25);

    }

    async getBatteryLevel(droneSerialNumber: string) {
        const drone : Drone | null = await this.repo!.getById(droneSerialNumber);

        if (!drone) {
            throw new Error('Drone not found');
        }

        return drone.batteryCapacity;
    }
    async getAllDrones(){
        return await this.repo!.getAll();
    }

}
