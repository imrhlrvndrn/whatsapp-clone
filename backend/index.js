const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const { connectDb } = require('./config');
const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoutes');

const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());
// Route middlewares
app.use('/messages', messageRoutes);
app.use('/auth', authRoutes);

app.get('/', (req, res) => res.status(200).send('Hello world'));

app.listen(port, () => console.log(`Server is running  port ${port}`));

// Connecting to MongoDB
(async () => {
    await connectDb();
})();
