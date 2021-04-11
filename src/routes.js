import { Router } from 'express';

import db from './database';

const routes = Router();

routes.get('/v1/health', async (_, res) => {
	const check = await db.raw('SELECT NOW();');

	if (check.rowCount === 0) {
		return res.status(500).json({ error: 'Cannot connect with database!' });
	}

	return res.json({ message: 'Connect sucessfully with database!' });
});

export default routes;
