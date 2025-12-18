import healthRoutes from './health.js';
import express from 'express';
import authRoutes from './auth/index.js';
const router = express.Router();

router.use('/health', healthRoutes);
router.use('/auth', authRoutes);

export default router;
