const router = require('express').Router();
const Message = require('../models/Message');

router.post('/new', async (req, res) => {
    try {
        const newMessage = new Message({
            name: req.body.name,
            message: req.body.message,
            received: req.body.received,
        });

        const savedMessage = await newMessage.save();
        res.status(201).send(savedMessage);
    } catch (error) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.get('/sync', async (req, res) => {
    const allMessages = await Message.find({});

    try {
        res.status(200).send(allMessages);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
