// AuditService.ts
import { DroneService } from './droneService';

export class AuditService {
  private droneService: DroneService;

  constructor(droneService: DroneService) {
    this.droneService = droneService;
  }

  // Method to periodically check drone battery levels and create audit event logs
  startAuditTask(interval: number) {
    setInterval(async () => {
      try {
        const drones = await this.droneService.getAllDrones();
        for (const drone of drones) {
          console.log(`Audit: Drone ${drone.serialNumber} battery level is ${drone.batteryCapacity}%`);
        }
      } catch (error) {
        console.error('Error occurred during audit task:', error);
      }
    }, interval);
  }
}
