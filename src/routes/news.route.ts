import { Router } from 'express';
import { getData } from '../controller/news.controller';

const newsRouter = Router();

newsRouter.get('/', (request, response) => {
   getData(request,response);
});

export default newsRouter;