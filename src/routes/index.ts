// index.ts
import express from 'express';
import dronesRouter from './drones.router';
import medicationsRouter from './medications.router';

const router = express.Router();

router.use('/api', dronesRouter);
router.use('/api', medicationsRouter);

export default router;
