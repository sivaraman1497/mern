import express from 'express';
import cors from 'cors';

import connectDb from './config/db.js';

import authRoutes from './routes/authroutes.js'

connectDb();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);



export default app;
