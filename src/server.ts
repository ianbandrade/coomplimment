import express from 'express';
import 'reflect-metadata';
import './database';
import 'express-async-errors';
import { router } from '../src/routes/routes';
import { errorsTreatment } from './middlewares/errorsTreatment';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(errorsTreatment);

app.listen(3333, () => console.log(`Running server on: http://localhost:3333`));
