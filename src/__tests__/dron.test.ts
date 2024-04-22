import request from "supertest";
import app from '../app';

describe('Drone Dispatch Service API Tests', () => {
  let apiUrl = `/`;
  let db: any;

  function getMedicationData() {
    return {
    };
  };

  function getDornData() {
    return {
    };
  };
  
  beforeAll(async () => {
    console.log("BEFORE ALLLLLLLLLLLLLLLLLLL");
  });

  afterAll(async () => {
    console.log("AFTER ALLLLLLL");
  });

  it('should register a new drone', async () => {
    const res = await request(app)
      .post('/api/drones')
      .send({
        serialNumber: 'DRN001',
        model: 'Lightweight',
        weightLimit: 500,
        batteryCapacity: 100,
        state: 'IDLE'
      });
    expect(res.statusCode).toEqual(200);
  });

  it('should load medication items onto a drone', async () => {
    const res = await request(app)
      .post('/api/drones/DRN001/load')
      .send([
        {
          name: 'Medication 1',
          weight: 100,
          code: 'MED001',
          image: 'medication1.jpg'
        }
      ]);
    expect(res.statusCode).toEqual(200);
  });

  it('should get available drones for loading', async () => {
    const res = await request(app).get('/api/drones/available');
    expect(res.statusCode).toEqual(200);
  });

  it('should get battery level for a drone', async () => {
    const res = await request(app).get('/api/drones/DRN001/battery');
    expect(res.statusCode).toEqual(200);
  });

  it('should fail to load medication if weight exceeds drone capacity', async () => {
  });

  it('should fail to load medication if drone battery level is below 25%', async () => {
    
    
    
  });

  it('should select a drone for a specific medication', async () => {
  });

  it('should fail to register a drone with invalid data', async () => {
    const res = await request(app)
      .post('/api/drones')
      .send({
        
      });
    expect(res.statusCode).toEqual(400);
  });

  it('should fail to select a drone for a medication with no available drones', async () => {
  });

  it('should fail to select a drone for a medication with a non-existent medication ID', async () => {
    
  });

  it('should fail to get info  for a non-existent drone', async () => {
    const res = await request(app).get('/api/drones/INVALID/battery');
    expect(res.statusCode).toEqual(404);
  });

  it('should fail to load medication items onto a non-existent drone', async () => {
    
  });

  it('should fail to get loaded medication items for a non-existent drone', async () => {
    
  });

  it('should fail to select a drone for a medication with no available drones', async () => {
    
  });


  it('should fail to select a drone for a medication with a non-existent medication ID', async () => {
    
  });


  it('should fail to load medication items onto a drone if it is already loaded', async () => {
    
  });

  it('should fail to load medication items onto a drone if it is not in IDLE state', async () => {
    
  });

  it('should fail to select a drone for a medication if all available drones have low battery level', async () => {
    
  });

  it('should fail to register a new drone with a serial number that already exists', async () => {
    
  });

  it('should fail to register a new drone with a model that is not supported', async () => {
    
  });
});
