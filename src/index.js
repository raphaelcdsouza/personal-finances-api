import express from 'express';
import 'express-async-errors';

import routes from './routes';

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);

app.use(( _, __, res, ___ ) => {
	return res.status(500).json({ error: 'Internal server error' });
})

app.listen(port, () => {
	console.log(`Server listen on port ${port}`);
});
