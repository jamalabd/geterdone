import healthRoutes from './health.js';
import express from 'express';
const router = express.Router();

router.use('/health', healthRoutes);

export default router;
