import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();

import authRoutes from './routes/auth';
import postsRoutes from './routes/posts';
import subsRoutes from './routes/subs';

import trim from './middleware/trim';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(morgan('dev'));
app.use(trim);
app.use(cookieParser());

app.get('/', (_, res) => res.send('Hello World'));
app.use('/api/auth', authRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/subs', subsRoutes);

app.listen(PORT, async () => {
	console.log(`Server is running in ${PORT}`);

	try {
		await createConnection();
		console.log('Database connected!!!');
	} catch (error) {
		console.log(error);
	}
});
