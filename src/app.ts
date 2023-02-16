import express from 'express';

import ErrorHandler from './middlewares/Error.middleware';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use(ErrorHandler.errorMiddleware);

export default app;
