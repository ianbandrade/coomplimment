import express from 'express';
import 'reflect-metadata';
import './database';
import { router } from '../src/routes/routes';
import { json } from 'body-parser';

const app = express();

app.use(express.json());
app.use(router);

app.listen(3333, () => console.log(`Running server on: http://localhost:3333`));
