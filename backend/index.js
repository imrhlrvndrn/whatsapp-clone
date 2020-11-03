const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const messageRoutes = require('./routes/messageRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());
// Route middlewares
app.use('/messages', messageRoutes);
app.use('/auth', authRoutes);

//To fix all the deprecation warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// Connecting to MongoDB
mongoose.connect(process.env.MONGODB_URI, () =>
    console.log('MongoDB database connection established successfully')
);

app.get('/', (req, res) => res.status(200).send('Hello world'));

app.listen(port, () => console.log(`Server is running  port ${port}`));
