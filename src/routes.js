import { Router } from 'express';

const routes = Router();

routes.get('/', (_, res) => {
	res.send('Hellow from outside router');
});

export default routes;
