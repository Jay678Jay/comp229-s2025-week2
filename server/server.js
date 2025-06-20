import express from 'express';
import mongoose from 'mongoose';
import contactsRouter from './routes/contacts.js';
import usersRouter from './routes/users.js';
  


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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});