const router = require('express').Router();
const Message = require('../models/Message');

// Retrieve all the messages
router.get('/sync', (req, res) => {
    Message.find({})
        .then(() => {
            res.status(200).json(allMessages);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
});

// Add a new message
router.post('/new', (req, res) => {
    const newMessage = new Message({
        name: req.body.name,
        message: req.body.message,
        received: req.body.received,
    });

    newMessage
        .save()
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send(err);
        });
});

module.exports = router;
