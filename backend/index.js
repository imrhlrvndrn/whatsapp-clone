const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Pusher = require('pusher');
require('dotenv').config();
const messageRoutes = require('./routes/messageRoutes');

const app = express();
const port = process.env.PORT || 4000;
const pusher = new Pusher({
    appId: '1079627',
    key: '950a3be25fe26045eb39',
    secret: '476e7e3eede429811971',
    cluster: 'ap2',
    encrypted: true,
});

// Middlewares
app.use(express.json());
app.use(cors());
app.use('/messages', messageRoutes);

// Connecting to MongoDB
mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
    () => console.log('MongoDB database connection established successfully')
);

let db = mongoose.connection;

db.once('open', () => {
    const messageCollection = db.collection('messages');
    console.log(messageCollection);
    const changeStream = messageCollection.watch();

    changeStream.on('change', (change) => {
        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument;

            pusher.trigger('messages', 'inserted', {
                _id: messageDetails._id,
                name: messageDetails.name,
                message: messageDetails.message,
                received: messageDetails.received,
                createdAt: messageDetails.createdAt,
                updatedAt: messageDetails.updatedAt,
            });
        } else {
            console.log('Error triggering Pusher');
        }
    });
});

app.get('/', (req, res) => res.status(200).send('Hello world'));

app.listen(port, () => console.log(`Server is running on ${port}`));