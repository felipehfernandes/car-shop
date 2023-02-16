import { Router } from 'express';

import CarRouter from './Car.route';
import MotoRouter from './Motorcycle.route';

const routes = Router();

routes.use('/cars', CarRouter);
routes.use('/motorcycles', MotoRouter);

export default routes;