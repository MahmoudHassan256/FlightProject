import express from 'express';
import flightsRoutes from './flights.routes';
import usersRoutes from './users.routes';
import covidRoutes from './covid.routes';

const router = express.Router();

router.use('/api/flights/', flightsRoutes);
router.use('/api/users/', usersRoutes);
router.use('/api/covid/', covidRoutes);



export default router;


