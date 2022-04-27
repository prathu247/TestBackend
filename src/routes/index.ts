import { Router } from 'express';
import newsRouter from './news.route';

const routes = Router();

routes.use('/news', newsRouter);

export default routes;