import express from 'express';
import mongoose from 'mongoose';
import contactsRouter from './routes/contacts.js';
import usersRouter from './routes/users.js';

import dotenv from 'dotenv';
dotenv.config();

import path from 'path';
import { fileURLToPath } from 'url';

// Create _dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import ProjectRouter from './routes/project.js';
import educationRouter from './routes/education.js';



mongoose.connect('mongodb+srv://jlee678:ofUaY67Zv3qruWDC@cluster0.riktwqd.mongodb.net/')
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
connection.once('open', () => {
  console.log('Connected to MongoDB');
});


const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {res.status(200).json({ message: 'Welcome to My Portfolio application.' });});
app.use('/health', (req, res) => {res.status(200).json({ message: 'Server is running' });});
app.use('/api/contacts', contactsRouter);
app.use('/api/users', usersRouter);
app.use('/api/projects', ProjectRouter);
app.use('/api/education', educationRouter);

app.use('/api/data', (req, res) => {
  res.status(200).json({ message: '' });
});

app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});