import express from 'express';
import 'express-async-errors';
import routes from './routes';

const app = express();
const port = 3000;

app.use(routes);

app.listen(port, () => {
	console.log(`Server listen on port ${port}`);
});
